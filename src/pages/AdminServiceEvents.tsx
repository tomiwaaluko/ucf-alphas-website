import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabaseClient";
import { motion } from "framer-motion";
import { Plus, LogOut } from "lucide-react";

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

const AdminServiceEvents = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [events, setEvents] = useState<ServiceEvent[]>([]);
  const [error, setError] = useState<string | null>(null);

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

      const { data, error: eventsError } = await supabase
        .from("service_events")
        .select("*")
        .order("date", { ascending: false });

      if (eventsError) {
        setError(eventsError.message);
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

        {error && !loading && (
          <div className="mb-6 rounded-xl border border-red-500/60 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center rounded-2xl border-2 border-dashed border-yellow-400/60 bg-black/40 px-4 py-6 text-yellow-300 hover:bg-black/70 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span className="font-semibold text-sm">New event (form WIP)</span>
            </motion.button>

            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.02, y: -4 }}
                className="rounded-2xl border border-yellow-400/30 bg-black/60 overflow-hidden"
              >
                {event.primary_image_url && (
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={event.primary_image_url}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4 space-y-2">
                  <h2 className="font-semibold text-lg text-yellow-300">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {event.date} • {event.location}
                  </p>
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-2 py-0.5 text-xs text-yellow-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminServiceEvents;

