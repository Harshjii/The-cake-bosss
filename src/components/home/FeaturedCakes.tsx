import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ThreeDCard from '@/components/ThreeDCard';

const cakes = [
  {
    name: 'Chocolate Truffle Dream',
    price: '₹899',
    slot: 'https://img1.wsimg.com/isteam/getty/1398976985',
    tag: 'Bestseller',
    size: 'feature',
  },
  {
    name: 'Strawberry Bliss',
    price: '₹749',
    slot: 'https://img1.wsimg.com/isteam/getty/2238458204',
    tag: 'Fresh',
    size: 'medium',
  },
  {
    name: 'Red Velvet Royale',
    price: '₹849',
    slot: 'https://img1.wsimg.com/isteam/getty/2256694288',
    tag: 'Popular',
    size: 'medium',
  },
  {
    name: 'Mango Delight',
    price: '₹699',
    slot: 'https://img1.wsimg.com/isteam/getty/471591498',
    tag: 'Seasonal',
    size: 'small',
  },
  {
    name: 'Black Forest Classic',
    price: '₹799',
    slot: 'https://img1.wsimg.com/isteam/getty/2240918896',
    tag: 'Classic',
    size: 'small',
  },
  {
    name: 'Custom Wedding Cake',
    price: '₹2499+',
    slot: 'https://img1.wsimg.com/isteam/getty/2258024816',
    tag: 'Custom',
    size: 'small',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
} as const;

export default function FeaturedCakes() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
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
            Handcrafted with Love
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Signature Creations
          </h2>
          {/* Gold underline accent */}
          <div className="flex justify-center">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </motion.div>

        {/* Mosaic Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cakes.map((cake, i) => {
            // Feature card spans 2 cols and 2 rows on desktop
            const isFeature = i === 0;
            const isMedium = i === 1 || i === 2;

            return (
              <motion.article
                key={cake.name}
                className={isFeature ? 'col-span-2 row-span-2' : ''}
                variants={cardVariants}
                style={{
                  aspectRatio: isFeature ? '1/1' : isMedium ? '3/3.5' : '1/1',
                }}
              >
                <ThreeDCard className="group relative overflow-hidden rounded-xl bg-card cursor-pointer w-full h-full">
                  {/* Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={cake.slot}
                      alt={cake.name}
                      className="w-full h-full object-cover"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Tag */}
                  <div className="absolute top-3 left-3" style={{ transform: 'translateZ(30px)' }}>
                    <span
                      className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: '#D4AF37',
                        color: '#4E342E',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {cake.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4" style={{ transform: 'translateZ(40px)' }}>
                    <h3
                      className={`font-bold text-white leading-tight mb-1 ${
                        isFeature ? 'text-xl md:text-2xl' : isMedium ? 'text-base md:text-lg' : 'text-sm md:text-base'
                      }`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {cake.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: '#D4AF37', fontFamily: 'var(--font-sans)' }}
                      >
                        {cake.price}
                      </span>
                      <Link
                        to="/order"
                        className="text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: 'rgba(212,175,55,0.9)',
                          color: '#4E342E',
                          fontFamily: 'var(--font-sans)',
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Order
                      </Link>
                    </div>
                  </div>
                </ThreeDCard>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/menu"
            className="inline-block px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: '#4E342E',
              color: '#4E342E',
              fontFamily: 'var(--font-sans)',
            }}
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
