import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone } from "lucide-react";

export function BookingInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock - in production would send to backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll be in touch shortly.");
  };

  return (
    <section className="relative bg-[#1B3A4B] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8">
              Begin Your Journey
            </h2>
            <div className="h-px w-32 bg-[#C45D3E] mb-8" />
            
            <p className="text-xl text-white/80 mb-12">
              Ready to experience the extraordinary? Reach out to start planning your
              bespoke Wildcourt adventure.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#C45D3E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a 
                    href="mailto:gavin@extremescene.co.za" 
                    className="text-lg hover:text-[#C45D3E] transition-colors"
                  >
                    gavin@extremescene.co.za
                  </a>
                  <br />
                  <a 
                    href="mailto:info@myafricantravel.com" 
                    className="text-lg hover:text-[#C45D3E] transition-colors"
                  >
                    info@myafricantravel.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#C45D3E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/60 mb-1">Phone / WhatsApp</p>
                  <a 
                    href="tel:+27725381574" 
                    className="text-lg hover:text-[#C45D3E] transition-colors"
                  >
                    +27 72 538 1574
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 border border-white/20 bg-white/5">
              <p className="text-sm text-white/60 mb-4">EXTENSIONS AVAILABLE</p>
              <p className="text-lg">
                Extend your journey to Okavango Delta, Victoria Falls, Serengeti, or Rwanda's gorilla trekking.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
                  required
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Preferred Dates"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
                />
                <Input
                  type="number"
                  placeholder="Guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
                  min="4"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your dream journey..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-32 text-lg resize-none"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-[#C45D3E] hover:bg-[#C45D3E]/90 text-white text-lg transition-all duration-300"
              >
                Request Bespoke Itinerary
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
