import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const cakeTypes = [
  'Birthday Cake',
  'Wedding Cake',
  'Anniversary Cake',
  'Custom Design Cake',
  'Chocolate Truffle',
  'Red Velvet',
  'Black Forest',
  'Other',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cakeType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-3"
            style={{ color: '#D4AF37', fontFamily: 'var(--font-sans)' }}
          >
            Get In Touch
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Order or Contact Us
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="text-xl font-bold text-primary mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Find Us
            </h3>

            {/* Contact entries */}
            <div className="space-y-5 mb-8">
              <div className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  <MapPin size={18} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-medium text-muted-foreground mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    Address
                  </p>
                  <p className="text-sm text-primary leading-relaxed" style={{ fontFamily: 'var(--font-heading)' }}>
                    Power House, Kailash Nagar,<br />
                    Housing Board, Bhilai,<br />
                    Chhattisgarh 490026
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  <Phone size={18} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-medium text-muted-foreground mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    Phone
                  </p>
                  <a
                    href="tel:+919XXXXXXXXX"
                    className="text-sm text-primary hover:text-accent transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    +91 9XXXXXXXXX
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}
                >
                  <MessageCircle size={18} style={{ color: '#25D366' }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-medium text-muted-foreground mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/919XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline transition-colors"
                    style={{ color: '#25D366', fontFamily: 'var(--font-heading)' }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  <Clock size={18} style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-medium text-muted-foreground mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    Hours
                  </p>
                  <div className="text-sm text-primary space-y-0.5" style={{ fontFamily: 'var(--font-sans)' }}>
                    <p>Mon – Fri: 9:00 AM – 9:00 PM</p>
                    <p>Saturday: 9:00 AM – 10:00 PM</p>
                    <p>Sunday: 10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#25D366', color: 'white', fontFamily: 'var(--font-sans)' }}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <a
                href="tel:+919XXXXXXXXX"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105"
                style={{ borderColor: '#4E342E', color: '#4E342E', fontFamily: 'var(--font-sans)' }}
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #E8D5C0' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8!2d81.3!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda5a5a5a5a5%3A0x0!2sBhilai%2C+Chhattisgarh!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Cake Bosss location in Bhilai"
              />
            </div>
          </motion.div>

          {/* Right: Order Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: 'white', border: '1px solid #E8D5C0', boxShadow: '0 8px 32px rgba(78,52,46,0.08)' }}
            >
              <h3
                className="text-xl font-bold text-primary mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Send an Order Request
              </h3>
              <p className="text-sm text-muted-foreground mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                Fill in the details below and we'll get back to you within a few hours.
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: 'rgba(212,175,55,0.15)' }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Request Sent!
                  </h4>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    We'll contact you shortly to confirm your order.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs tracking-widest uppercase font-medium text-muted-foreground mb-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        border: '1px solid #E8D5C0',
                        backgroundColor: '#FFF5E4',
                        color: '#4E342E',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs tracking-widest uppercase font-medium text-muted-foreground mb-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        border: '1px solid #E8D5C0',
                        backgroundColor: '#FFF5E4',
                        color: '#4E342E',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-cake"
                      className="block text-xs tracking-widest uppercase font-medium text-muted-foreground mb-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Cake Type
                    </label>
                    <select
                      id="contact-cake"
                      value={formData.cakeType}
                      onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        border: '1px solid #E8D5C0',
                        backgroundColor: '#FFF5E4',
                        color: formData.cakeType ? '#4E342E' : '#7B4F3A',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      <option value="">Select a cake type...</option>
                      {cakeTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs tracking-widest uppercase font-medium text-muted-foreground mb-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Message / Special Instructions
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your order — occasion, size, design preferences..."
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                      style={{
                        border: '1px solid #E8D5C0',
                        backgroundColor: '#FFF5E4',
                        color: '#4E342E',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    style={{
                      backgroundColor: '#4E342E',
                      color: 'white',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    Send Order Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
