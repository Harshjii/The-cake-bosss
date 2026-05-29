import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-20 md:-mt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img1.wsimg.com/isteam/getty/1143738706"
          alt=""
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/75 to-gray-900/85" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-8 md:left-16 text-yellow-400 opacity-60"
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Star size={24} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-8 md:right-20 text-yellow-300 opacity-50"
        animate={{ y: [0, 14, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-12 md:left-24 text-yellow-400 opacity-40"
        animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Star size={16} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-16 md:right-32 text-yellow-300 opacity-30"
        animate={{ y: [0, -8, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Sparkles size={20} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span
            className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-medium"
            style={{ color: '#D4AF37', fontFamily: 'var(--font-sans)' }}
          >
            Premium Bakery · Bhilai, Chhattisgarh
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          Delicious Cakes
          <br />
          <span style={{ color: '#D4AF37' }}>Made With Love</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/70 mb-3 tracking-wide"
          style={{ fontFamily: 'var(--font-sans)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          प्यार से बनाए गए स्वादिष्ट केक
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-white/50 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Handcrafted with the finest ingredients, every cake is a masterpiece of flavor and artistry.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Link
            to="/order"
            className="px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: '#D4AF37',
              color: '#4E342E',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Order Now
          </Link>
          <Link
            to="/menu"
            className="px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full border-2 text-white transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            View Menu
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
