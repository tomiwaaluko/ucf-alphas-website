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

-- Helper function to determine if current auth user is an admin by email
create or replace function public.is_admin()
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_email text;
begin
  current_email := (auth.jwt() ->> 'email');
  if current_email is null then
    return false;
  end if;

  return exists (
    select 1
    from public.allowed_admin_emails a
    where a.email = current_email
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
insert into storage.buckets (id, name, public)
values ('service-gallery', 'service-gallery', true)
on conflict (id) do nothing;

-- Anyone may read objects in this bucket (public gallery).
drop policy if exists "Service gallery objects are viewable by everyone" on storage.objects;
create policy "Service gallery objects are viewable by everyone"
on storage.objects
for select
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

