-- Supabase schema for service events and images
-- Run this in the Supabase SQL editor for your project.

-- Table: service_events
create table if not exists public.service_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date date not null,
  location text not null,
  attendee_count integer,
  description text,
  tags text[] default '{}',
  primary_image_url text,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

-- Automatically update updated_at on change
-- `set search_path` is pinned so the function body cannot be hijacked by a
-- caller-controlled search_path (matches public.is_admin() below).
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

drop trigger if exists set_service_events_updated_at on public.service_events;
create trigger set_service_events_updated_at
before update on public.service_events
for each row
execute procedure public.set_updated_at();

-- Table: service_event_images
create table if not exists public.service_event_images (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.service_events(id) on delete cascade,
  image_url text not null,
  caption text,
  sort_order integer default 0,
  created_at timestamptz not null default timezone('utc'::text, now())
);

-- Image URLs are rendered into <img src> on the public site. The admin page
-- validates these client-side, but a client-side check is not an invariant: an
-- admin session can PostgREST-insert directly and bypass the page entirely.
-- Enforce it where it actually holds.
alter table public.service_events
  drop constraint if exists service_events_primary_image_url_is_http;
alter table public.service_events
  add constraint service_events_primary_image_url_is_http
  check (primary_image_url is null or primary_image_url ~* '^https?://');

alter table public.service_event_images
  drop constraint if exists service_event_images_image_url_is_http;
alter table public.service_event_images
  add constraint service_event_images_image_url_is_http
  check (image_url ~* '^https?://');

-- Helper table of allowed admin emails.
--
-- SECURITY: this table IS the privilege grant for the whole admin surface.
-- Supabase applies `grant all on tables to anon, authenticated` by default, so
-- a table left without RLS in the `public` schema is readable AND writable
-- through PostgREST using the anon key -- which ships inside the public JS
-- bundle. Without the lockdown below, anyone could POST their own address to
-- /rest/v1/allowed_admin_emails, sign in with that Google account, and gain
-- full insert/update/delete on every table guarded by public.is_admin().
--
-- The lockdown is two independent layers:
--   1. RLS enabled with ZERO policies -> PostgREST sees no rows for any role.
--   2. Grants revoked from anon/authenticated -> the API roles cannot touch it
--      even if a policy is added later by mistake.
-- public.is_admin() is SECURITY DEFINER, so it still reads the table normally.
-- Manage rows via the Supabase SQL editor or dashboard (service_role only).
create table if not exists public.allowed_admin_emails (
  email text primary key
);

alter table public.allowed_admin_emails enable row level security;
-- Deny-by-default: no policies are defined for this table on purpose.
-- Belt and braces -- also drop the default PostgREST role grants.
revoke all on public.allowed_admin_emails from anon, authenticated;

-- Determine whether the calling user is an admin.
--
-- SECURITY: locking down allowed_admin_emails (above) makes the admin *table*
-- unwritable. It does not by itself make the admin *identity* unforgeable --
-- that is this function's job, and getting it wrong reopens the same hole
-- through a different door.
--
-- The naive version of this function trusted `auth.jwt() ->> 'email'` on its
-- own. That claim is only as trustworthy as the weakest auth provider enabled
-- on the project, and the anon key needed to reach /auth/v1/signup is published
-- in the JS bundle. If the email/password provider is enabled with "Confirm
-- email" turned off, anyone could sign up using an officer's address, receive a
-- session whose `email` claim is that address, and be treated as an admin.
--
-- So the address alone is not enough. We additionally require a Google identity
-- that asserts the same address: Google verifies the mailbox before asserting
-- it, and auth.identities is written by GoTrue, not by the client. Email is
-- compared case-insensitively because Supabase normalizes stored addresses to
-- lowercase while allowlist rows are entered by hand.
create or replace function public.is_admin()
returns boolean
language plpgsql
security definer
-- auth is needed here as well as public: this function reads auth.identities.
set search_path = public, auth
as $$
declare
  current_email text;
begin
  current_email := lower(auth.jwt() ->> 'email');
  if current_email is null or auth.uid() is null then
    return false;
  end if;

  -- The address must be one we granted, ...
  if not exists (
    select 1
    from public.allowed_admin_emails a
    where lower(a.email) = current_email
  ) then
    return false;
  end if;

  -- ... and the caller must actually hold the Google identity for it.
  return exists (
    select 1
    from auth.identities i
    where i.user_id = auth.uid()
      and i.provider = 'google'
      and lower(i.identity_data ->> 'email') = current_email
  );
end;
$$;

-- Enable Row Level Security
alter table public.service_events enable row level security;
alter table public.service_event_images enable row level security;

-- Policies for service_events

-- Allow anyone to read events (public site consumption)
drop policy if exists "Service events are viewable by everyone" on public.service_events;
create policy "Service events are viewable by everyone"
on public.service_events
for select
using (true);

-- Only admins can insert events
drop policy if exists "Only admins can insert service events" on public.service_events;
create policy "Only admins can insert service events"
on public.service_events
for insert
to authenticated
with check (public.is_admin());

-- Only admins can update events
drop policy if exists "Only admins can update service events" on public.service_events;
create policy "Only admins can update service events"
on public.service_events
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- Only admins can delete events
drop policy if exists "Only admins can delete service events" on public.service_events;
create policy "Only admins can delete service events"
on public.service_events
for delete
to authenticated
using (public.is_admin());

-- Policies for service_event_images

-- Allow anyone to read images
drop policy if exists "Service event images are viewable by everyone" on public.service_event_images;
create policy "Service event images are viewable by everyone"
on public.service_event_images
for select
using (true);

-- Only admins can insert images
drop policy if exists "Only admins can insert service event images" on public.service_event_images;
create policy "Only admins can insert service event images"
on public.service_event_images
for insert
to authenticated
with check (public.is_admin());

-- Only admins can update images
drop policy if exists "Only admins can update service event images" on public.service_event_images;
create policy "Only admins can update service event images"
on public.service_event_images
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- Only admins can delete images
drop policy if exists "Only admins can delete service event images" on public.service_event_images;
create policy "Only admins can delete service event images"
on public.service_event_images
for delete
to authenticated
using (public.is_admin());

-- ---------------------------------------------------------------------------
-- STORAGE: service-gallery bucket
-- ---------------------------------------------------------------------------
-- The bucket itself still has to be created once in the Supabase Storage UI (or
-- via the line below). The policies, however, are NOT optional: storage.objects
-- has RLS on by default but ships with no policies for custom buckets, and the
-- admin page uploads straight from the browser. Without these, any signed-in
-- Google user -- not just an admin -- could write into the bucket.

-- Create the bucket if it does not exist yet. `public = true` keeps object reads
-- anonymous so the gallery renders for site visitors without signed URLs.
--
-- `do update` rather than `do nothing`: this statement has to converge. With
-- `do nothing`, a bucket that already exists as private (or without upload
-- limits) would silently keep those settings and the file would appear to have
-- succeeded.
--
-- The size and MIME limits are enforced by Storage itself. The `accept="image/*"`
-- attribute on the admin form is a file-picker hint only -- it stops nothing.
-- Without these, an admin session could upload an arbitrarily large file, or an
-- HTML file that Storage would then serve as text/html from the public URL.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'service-gallery',
  'service-gallery',
  true,
  10485760, -- 10 MB
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

-- Object *reads* for a public bucket bypass RLS entirely via
-- /storage/v1/object/public/..., so the gallery renders without any SELECT
-- policy at all. This policy therefore only governs the authenticated LIST/search
-- API, and is deliberately scoped `to authenticated`: granting it to `anon` would
-- let anyone enumerate every object name in the bucket, including images that
-- are uploaded but not yet linked from any page.
drop policy if exists "Service gallery objects are viewable by everyone" on storage.objects;
drop policy if exists "Signed-in users can list service gallery objects" on storage.objects;
create policy "Signed-in users can list service gallery objects"
on storage.objects
for select
to authenticated
using (bucket_id = 'service-gallery');

-- Only admins may upload.
drop policy if exists "Only admins can upload service gallery objects" on storage.objects;
create policy "Only admins can upload service gallery objects"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'service-gallery' and public.is_admin());

-- Only admins may overwrite / move.
drop policy if exists "Only admins can update service gallery objects" on storage.objects;
create policy "Only admins can update service gallery objects"
on storage.objects
for update
to authenticated
using (bucket_id = 'service-gallery' and public.is_admin())
with check (bucket_id = 'service-gallery' and public.is_admin());

-- Only admins may delete.
drop policy if exists "Only admins can delete service gallery objects" on storage.objects;
create policy "Only admins can delete service gallery objects"
on storage.objects
for delete
to authenticated
using (bucket_id = 'service-gallery' and public.is_admin());


-- ---------------------------------------------------------------------------
-- POST-APPLY: AUDIT AND VERIFICATION
-- ---------------------------------------------------------------------------
-- Read this section. The statements above close the hole going forward; they do
-- NOT undo abuse that already happened.
--
-- `public.allowed_admin_emails` shipped without RLS, which means that for the
-- whole window between that deploy and this migration it was writable by anyone
-- holding the anon key -- and the anon key is published in the JS bundle. If
-- someone inserted their own address during that window, the row survives this
-- migration untouched and still grants admin. Worse, after the lockdown the row
-- is no longer readable through the API, so the compromise gets quieter rather
-- than louder.
--
-- Run each query below in the SQL editor after applying this file and actually
-- look at the output.

-- 1. Who currently holds admin? Delete anything that is not a known officer.
--    select * from public.allowed_admin_emails order by email;

-- 2. Any unexpected accounts, especially non-google ones?
--    select id, email, created_at, email_confirmed_at,
--           raw_app_meta_data ->> 'provider' as provider
--    from auth.users
--    order by created_at desc;

-- 3. Any content that nobody remembers creating?
--    select id, title, created_at, updated_at
--    from public.service_events order by created_at desc limit 50;
--
--    select name, created_at, owner
--    from storage.objects where bucket_id = 'service-gallery'
--    order by created_at desc limit 50;

-- 4. Confirm the lockdown actually took effect. Expected: rls_enabled = true,
--    and all three privilege checks false.
--    select
--      (select relrowsecurity
--         from pg_class
--        where oid = 'public.allowed_admin_emails'::regclass) as rls_enabled,
--      has_table_privilege('anon', 'public.allowed_admin_emails', 'SELECT') as anon_select,
--      has_table_privilege('anon', 'public.allowed_admin_emails', 'INSERT') as anon_insert,
--      has_table_privilege('authenticated', 'public.allowed_admin_emails', 'INSERT') as auth_insert;

-- 5. Confirm no policies exist on the table (deny-by-default is intentional).
--    Expected: zero rows.
--    select policyname from pg_policies
--     where schemaname = 'public' and tablename = 'allowed_admin_emails';

-- 6. Declare the intended admin set here so it lives in version control rather
--    than only as ambient database state, then uncomment and run to reconcile.
--    Re-running is safe and idempotent.
--
--    with intended(email) as (
--      values
--        ('officer-one@example.com'),
--        ('officer-two@example.com')
--    )
--    , inserted as (
--      insert into public.allowed_admin_emails (email)
--      select lower(email) from intended
--      on conflict (email) do nothing
--      returning email
--    )
--    delete from public.allowed_admin_emails
--     where lower(email) not in (select lower(email) from intended);
