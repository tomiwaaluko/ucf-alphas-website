
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our chapter, interested in joining, or want to partner with us? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-yellow-400">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">contact@xiiotaapa.org</p>
                  <p className="text-gray-400">president@xiiotaapa.org</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">(555) 123-4567</p>
                  <p className="text-gray-400">Monday - Friday, 9AM - 5PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-400">Alpha Phi Alpha House</p>
                  <p className="text-gray-400">123 University Avenue</p>
                  <p className="text-gray-400">Campus City, State 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-black border border-yellow-400/20 rounded-xl p-6">
              <h4 className="text-yellow-400 font-semibold mb-3">Chapter Meetings</h4>
              <p className="text-gray-300 mb-2">Every Wednesday at 7:00 PM</p>
              <p className="text-gray-400 text-sm">Student Union Building, Room 201</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send us a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="event">Event Information</option>
                  <option value="service">Service Projects</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-yellow-400/30 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
