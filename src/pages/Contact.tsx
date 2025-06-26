import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
