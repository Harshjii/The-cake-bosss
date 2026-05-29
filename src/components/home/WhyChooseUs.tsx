import { motion } from 'motion/react';
import { Cake, Star, Truck, Leaf } from 'lucide-react';
import ThreeDCard from '@/components/ThreeDCard';

const features = [
  {
    icon: Cake,
    title: 'Fresh Daily Baking',
    description: 'Every cake is baked fresh each morning using premium ingredients. No preservatives, no shortcuts — just pure, fresh goodness.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'We deliver your cakes right to your doorstep across Bhilai and surrounding areas. On time, every time.',
  },
  {
    icon: Star,
    title: 'Custom Cake Design',
    description: 'Dream it, and we will bake it. Our expert decorators bring your vision to life with stunning custom designs.',
  },
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    description: 'We source only the finest ingredients — Belgian chocolate, fresh cream, real fruits — for an unmatched taste experience.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
} as const;

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#4E342E' }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.8) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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
            Why We're Different
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why Choose Us
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
              >
                <ThreeDCard
                  className="rounded-2xl p-6 md:p-8 text-center group w-full h-full hover:bg-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.5)] transition-colors duration-300"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(212,175,55,0.2)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: 'rgba(212,175,55,0.15)', 
                      border: '1px solid rgba(212,175,55,0.3)',
                      transform: 'translateZ(30px)' 
                    }}
                  >
                    <Icon size={24} style={{ color: '#D4AF37' }} />
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-heading)', transform: 'translateZ(25px)' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ 
                      color: 'rgba(255,245,228,0.65)', 
                      fontFamily: 'var(--font-sans)',
                      transform: 'translateZ(15px)'
                    }}
                  >
                    {feature.description}
                  </p>
                </ThreeDCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
