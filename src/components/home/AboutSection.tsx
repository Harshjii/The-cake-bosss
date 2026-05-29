import { motion } from 'motion/react';
import ThreeDCard from '@/components/ThreeDCard';

const stats = [
  { value: '500+', label: 'Cakes Delivered' },
  { value: '100%', label: 'Fresh Daily' },
  { value: '5★', label: 'Rated' },
  { value: '∞', label: 'Custom Orders' },
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <ThreeDCard className="w-full h-full relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="https://img1.wsimg.com/isteam/getty/2203779627"
                  alt="Artisan cake decoration at The Cake Bosss"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gold accent border */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{ boxShadow: 'inset 0 0 0 3px rgba(212,175,55,0.3)' }}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-4 md:-right-8 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ transform: 'translateZ(50px)' }}
              >
                <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: '#D4AF37' }}>
                  #1
                </p>
                <p className="text-xs tracking-widest uppercase mt-1 text-primary-foreground/80">
                  Bakery in Bhilai
                </p>
              </motion.div>
            </ThreeDCard>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-4"
              style={{ color: '#D4AF37', fontFamily: 'var(--font-sans)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Born from a Passion
              <br />
              <span style={{ color: '#D4AF37' }}>for Perfection</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Born from a passion for perfection, The Cake Bosss has been crafting extraordinary cakes in Bhilai since day one. Every creation is made with the finest ingredients, pure love, and artistic precision.
            </motion.p>

            <motion.p
              className="text-sm md:text-base leading-relaxed text-muted-foreground mb-10"
              style={{ fontFamily: 'var(--font-sans)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From birthday celebrations to grand weddings, we pour our heart into every cake we bake. Located at Power House, Kailash Nagar, Bhilai — we offer dine-in, takeaway, and delivery.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <p
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ fontFamily: 'var(--font-heading)', color: '#D4AF37' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase text-muted-foreground"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
