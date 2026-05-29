import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#4E342E' }} className="text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3
                className="text-2xl font-bold tracking-wide text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                THE CAKE BOSSS
              </h3>
              <p className="text-sm mt-1" style={{ color: '#D4AF37' }}>
                थे केक बॉस
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,245,228,0.7)' }}>
              Crafting extraordinary cakes with love and precision in the heart of Bhilai, Chhattisgarh.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
                style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
                style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
                style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#D4AF37', fontFamily: 'var(--font-sans)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Our Menu' },
                { href: '/about', label: 'About Us' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/order', label: 'Order Online' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,245,228,0.7)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#D4AF37', fontFamily: 'var(--font-sans)' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm" style={{ color: 'rgba(255,245,228,0.7)' }}>
                <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: '#D4AF37' }} />
                <span>Power House, Kailash Nagar, Housing Board, Bhilai, CG 490026</span>
              </li>
              <li className="flex gap-3 text-sm" style={{ color: 'rgba(255,245,228,0.7)' }}>
                <Phone size={16} className="shrink-0 mt-0.5" style={{ color: '#D4AF37' }} />
                <a href="tel:+919XXXXXXXXX" className="hover:text-white transition-colors">
                  +91 9XXXXXXXXX
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: '#D4AF37', fontFamily: 'var(--font-sans)' }}
            >
              Business Hours
            </h4>
            <ul className="space-y-2">
              {[
                { day: 'Mon – Fri', time: '9:00 AM – 9:00 PM' },
                { day: 'Saturday', time: '9:00 AM – 10:00 PM' },
                { day: 'Sunday', time: '10:00 AM – 8:00 PM' },
              ].map((row) => (
                <li key={row.day} className="flex justify-between text-sm gap-4">
                  <span style={{ color: 'rgba(255,245,228,0.6)' }}>{row.day}</span>
                  <span style={{ color: 'rgba(255,245,228,0.9)' }}>{row.time}</span>
                </li>
              ))}
            </ul>
            <div
              className="mt-4 flex items-center gap-2 text-xs"
              style={{ color: 'rgba(255,245,228,0.5)' }}
            >
              <Clock size={12} />
              <span>Dine-in · Takeaway · Delivery</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(212,175,55,0.2)', color: 'rgba(255,245,228,0.4)' }}
        >
          <span>© {currentYear} The Cake Bosss. All rights reserved.</span>
          <span>Made with ❤️ in Bhilai, Chhattisgarh</span>
        </div>
      </div>
    </footer>
  );
}
