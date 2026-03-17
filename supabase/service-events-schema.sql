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
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

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

-- Optional: helper table of allowed admin emails
create table if not exists public.allowed_admin_emails (
  email text primary key
);

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

-- STORAGE SETUP (run separately in Supabase Storage UI):
-- 1. Create a bucket named `service-gallery`.
-- 2. Configure bucket to allow public read for objects, or use signed URLs if you prefer.
-- 3. Optionally add storage policies that only allow admins to upload/delete objects.

