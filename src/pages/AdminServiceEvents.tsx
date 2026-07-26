import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabaseClient";
import { isSafeImageUrl } from "../lib/urlSafety";
import { motion } from "framer-motion";
import { LogOut, Trash2 } from "lucide-react";

type ServiceEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  attendee_count: number | null;
  description: string | null;
  tags: string[] | null;
  primary_image_url: string | null;
};

/**
 * An error whose message we authored, so it is safe to show the user verbatim.
 * Anything else is assumed to carry raw database text and gets replaced.
 */
class ValidationError extends Error {}

/**
 * Turn any thrown value into a message safe to render.
 *
 * Supabase/PostgREST errors carry raw Postgres text (constraint names, column
 * names, policy names). Surfacing that to the browser hands an attacker a map
 * of the schema, so the real error goes to the console and the user gets a
 * fixed string.
 */
const safeErrorMessage = (err: unknown, fallback: string): string => {
  console.error(fallback, err);
  return fallback;
};

const AdminServiceEvents = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [events, setEvents] = useState<ServiceEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [attendeeCount, setAttendeeCount] = useState<string>("");
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [externalImageUrls, setExternalImageUrls] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        const redirectTo = `${window.location.origin}/admin/service-events`;
        await supabase.auth.signInWithOAuth({
          provider: "google",
          options: { redirectTo },
        });
        return;
      }

      setUserEmail(session.user.email ?? null);

      // A session only proves "signed in with Google" -- anyone on earth can
      // get one. Authorization is a separate question, so ask the database.
      // is_admin() is SECURITY DEFINER over allowed_admin_emails, which is
      // locked down by RLS; this RPC is the only way to read that verdict.
      // RLS still enforces this server-side on every write -- the check here
      // exists so a non-admin sees an honest denial instead of a form whose
      // every submission fails with a Postgres error.
      const { data: adminVerdict, error: adminError } = await supabase.rpc(
        "is_admin"
      );

      if (adminError || adminVerdict !== true) {
        if (adminError) {
          console.error("Admin check failed", adminError);
        }
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      setIsAdmin(true);

      const { data, error: eventsError } = await supabase
        .from("service_events")
        .select("*")
        .order("date", { ascending: false });

      if (eventsError) {
        setError(safeErrorMessage(eventsError, "Failed to load events."));
      } else {
        setEvents((data || []) as ServiceEvent[]);
      }

      setLoading(false);
    };

    void load();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/service");
  };

  const resetForm = () => {
    setActiveEventId(null);
    setTitle("");
    setDate("");
    setLocation("");
    setAttendeeCount("");
    setDescription("");
    setTagsInput("");
    setExternalImageUrls("");
    setFiles(null);
  };

  const selectEvent = (event: ServiceEvent) => {
    setActiveEventId(event.id);
    setTitle(event.title);
    setDate(event.date);
    setLocation(event.location);
    setAttendeeCount(event.attendee_count?.toString() ?? "");
    setDescription(event.description ?? "");
    setTagsInput((event.tags ?? []).join(", "));
    setExternalImageUrls("");
    setFiles(null);
  };

  const refreshEvents = async () => {
    const { data, error: eventsError } = await supabase
      .from("service_events")
      .select("*")
      .order("date", { ascending: false });

    if (eventsError) {
      setError(safeErrorMessage(eventsError, "Failed to refresh events."));
    } else {
      setEvents((data || []) as ServiceEvent[]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const tags =
        tagsInput
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean) || [];

      const basePayload = {
        title,
        date,
        location,
        attendee_count: attendeeCount ? Number(attendeeCount) : null,
        description: description || null,
        tags: tags.length ? tags : null,
      };

      let eventId = activeEventId;
      let primaryImageUrl: string | null = null;

      if (!eventId) {
        const { data, error: insertError } = await supabase
          .from("service_events")
          .insert(basePayload)
          .select("*")
          .single();

        if (insertError) {
          throw insertError;
        }

        eventId = (data as ServiceEvent).id;
      } else {
        const { error: updateError } = await supabase
          .from("service_events")
          .update(basePayload)
          .eq("id", eventId);

        if (updateError) {
          throw updateError;
        }
      }

      const imageUrls: string[] = [];

      if (files && files.length > 0 && eventId) {
        const bucket = supabase.storage.from("service-gallery");

        for (const file of Array.from(files)) {
          const path = `events/${eventId}/${Date.now()}-${file.name}`;
          const { error: uploadError } = await bucket.upload(path, file, {
            upsert: false,
          });

          if (uploadError) {
            throw uploadError;
          }

          const {
            data: { publicUrl },
          } = bucket.getPublicUrl(path);

          imageUrls.push(publicUrl);

          await supabase.from("service_event_images").insert({
            event_id: eventId,
            image_url: publicUrl,
          });
        }
      }

      if (externalImageUrls && eventId) {
        const urls = externalImageUrls
          .split("\n")
          .map((u) => u.trim())
          .filter(Boolean);

        const rejected = urls.filter((url) => !isSafeImageUrl(url));
        if (rejected.length > 0) {
          throw new ValidationError(
            `These image URLs were rejected (only http/https links are allowed): ${rejected.join(
              ", "
            )}`
          );
        }

        for (const url of urls) {
          imageUrls.push(url);
          await supabase.from("service_event_images").insert({
            event_id: eventId,
            image_url: url,
          });
        }
      }

      if (eventId && imageUrls.length > 0) {
        primaryImageUrl = imageUrls[0];
        await supabase
          .from("service_events")
          .update({ primary_image_url: primaryImageUrl })
          .eq("id", eventId);
      }

      await refreshEvents();
      resetForm();
    } catch (err: unknown) {
      setError(
        err instanceof ValidationError
          ? err.message
          : safeErrorMessage(err, "Failed to save event.")
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"? This cannot be undone.`
    );
    if (!confirmed) return;

    setSaving(true);
    setError(null);

    try {
      const { error: deleteError } = await supabase
        .from("service_events")
        .delete()
        .eq("id", id);

      if (deleteError) {
        throw deleteError;
      }

      await refreshEvents();
      if (activeEventId === id) {
        resetForm();
      }
    } catch (err: unknown) {
      setError(safeErrorMessage(err, "Failed to delete event."));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-lora flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20 pb-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
              Service Events Admin
            </h1>
            <p className="text-gray-300 mt-2">
              Manage service events that appear on the Service page and gallery.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {userEmail && (
              <div className="text-sm text-gray-300">
                Signed in as{" "}
                <span className="font-semibold text-yellow-300">
                  {userEmail}
                </span>
              </div>
            )}
            <button
              onClick={handleSignOut}
              className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400 hover:text-black transition-colors text-sm"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </button>
          </div>
        </div>

        {loading && (
          <div className="py-20 text-center text-gray-300">Loading events…</div>
        )}

        {!loading && !isAdmin && (
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold text-yellow-300">
              You do not have access to this page
            </h2>
            <p className="mt-3 text-sm text-gray-300">
              {userEmail ? (
                <>
                  <span className="font-semibold text-yellow-200">
                    {userEmail}
                  </span>{" "}
                  is not an authorized administrator.
                </>
              ) : (
                <>This account is not an authorized administrator.</>
              )}
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Contact a chapter officer if you believe this is a mistake.
            </p>
          </div>
        )}

        {error && !loading && isAdmin && (
          <div className="mb-6 rounded-xl border border-red-500/60 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {/* The form stays mounted when an error is showing -- a failed save
            should surface the banner above it, not blank the whole page. */}
        {!loading && isAdmin && (
          <div className="flex flex-col items-center">
            <section className="w-full max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  + New blank form
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-yellow-400/40 bg-black/60 p-4 space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-yellow-300">
                    {activeEventId ? "Edit Event" : "New Event"}
                  </h2>
                  {activeEventId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs text-gray-400 hover:text-yellow-300 underline underline-offset-4"
                    >
                      Clear form
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-200">
                    Title
                    <input
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-gray-600 bg-black/60 px-3 py-2 text-sm text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </label>

                  <label className="block text-sm text-gray-200">
                    Date
                    <input
                      required
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-gray-600 bg-black/60 px-3 py-2 text-sm text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </label>

                  <label className="block text-sm text-gray-200">
                    Location
                    <input
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-gray-600 bg-black/60 px-3 py-2 text-sm text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </label>

                  <label className="block text-sm text-gray-200">
                    Attendee count
                    <input
                      type="number"
                      min={0}
                      value={attendeeCount}
                      onChange={(e) => setAttendeeCount(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-gray-600 bg-black/60 px-3 py-2 text-sm text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </label>

                  <label className="block text-sm text-gray-200">
                    Description
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="mt-1 w-full rounded-lg border border-gray-600 bg-black/60 px-3 py-2 text-sm text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </label>

                  <label className="block text-sm text-gray-200">
                    Tags (comma separated)
                    <input
                      value={tagsInput}
                      onChange={(e) => setTagsInput(e.target.value)}
                      placeholder="Service, MLK, Food Drive"
                      className="mt-1 w-full rounded-lg border border-gray-600 bg-black/60 px-3 py-2 text-sm text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </label>

                  <label className="block text-sm text-gray-200">
                    Upload images (stored in Supabase)
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => setFiles(e.target.files)}
                      className="mt-1 w-full text-xs text-gray-300"
                    />
                  </label>

                  <label className="block text-sm text-gray-200">
                    External image URLs (optional, one per line)
                    <textarea
                      value={externalImageUrls}
                      onChange={(e) => setExternalImageUrls(e.target.value)}
                      rows={3}
                      className="mt-1 w-full rounded-lg border border-gray-600 bg-black/60 px-3 py-2 text-xs text-white focus:border-yellow-400 focus:outline-none"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {saving
                    ? "Saving…"
                    : activeEventId
                    ? "Save changes"
                    : "Create event"}
                </button>
              </form>
            </section>

            <section className="w-full mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`rounded-2xl border ${
                    activeEventId === event.id
                      ? "border-yellow-400"
                      : "border-yellow-400/30"
                  } bg-black/60 overflow-hidden cursor-pointer`}
                  onClick={() => selectEvent(event)}
                >
                  {event.primary_image_url && (
                    <div className="h-32 w-full overflow-hidden">
                      <img
                        src={event.primary_image_url}
                        alt={event.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-semibold text-sm text-yellow-300">
                        {event.title}
                      </h2>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          void handleDelete(event.id, event.title);
                        }}
                        className="rounded-full bg-red-500/20 p-1 text-red-300 hover:bg-red-500/40"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-300">
                      {event.date} • {event.location}
                    </p>
                    {event.tags && event.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-2 py-0.5 text-[10px] text-yellow-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminServiceEvents;

