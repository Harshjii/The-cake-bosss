import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative shrink-0">
              <img
                src="/assets/logo.png"
                alt="The Cake Bosss chef logo"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-primary shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-lg md:text-xl font-bold tracking-wide text-primary leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                THE CAKE BOSSS
              </span>
              <span className="text-xs text-muted-foreground tracking-wider mt-0.5" style={{ fontFamily: 'var(--font-sans)' }}>
                थे केक बॉस
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors relative group ${
                  location.pathname === item.href
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/order"
              className="px-5 py-2.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Order Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={item.href}
                    className={`block py-3 text-sm font-medium tracking-widest uppercase border-b border-border/50 transition-colors ${
                      location.pathname === item.href ? 'text-accent' : 'text-foreground hover:text-accent'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.06 }}
                className="pt-3"
              >
                <Link
                  to="/order"
                  className="block text-center py-3 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Order Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
