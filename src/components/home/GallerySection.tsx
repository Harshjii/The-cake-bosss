import { useState } from 'react';
import { motion } from 'motion/react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import ThreeDCard from '@/components/ThreeDCard';

const galleryImages = [
  { slot: 'https://img1.wsimg.com/isteam/getty/1338691348', alt: 'Luxury wedding cake with flowers', span: 'col-span-1 row-span-2' },
  { slot: 'https://img1.wsimg.com/isteam/getty/1412162456', alt: 'Bakery interior with fresh pastries', span: 'col-span-2 row-span-1' },
  { slot: 'https://img1.wsimg.com/isteam/getty/927427216', alt: 'Cake decoration process', span: 'col-span-1 row-span-1' },
  { slot: 'https://img1.wsimg.com/isteam/getty/2151814064', alt: 'Birthday cake celebration', span: 'col-span-1 row-span-1' },
  { slot: 'https://img1.wsimg.com/isteam/getty/615269956', alt: 'Chocolate drip cake', span: 'col-span-1 row-span-2' },
  { slot: 'https://img1.wsimg.com/isteam/getty/602328694', alt: 'Macaron tower dessert table', span: 'col-span-1 row-span-1' },
  { slot: 'https://img1.wsimg.com/isteam/getty/2241586345', alt: 'Wedding cake cutting ceremony', span: 'col-span-1 row-span-1' },
  { slot: 'https://img1.wsimg.com/isteam/getty/2262037350', alt: 'Artistic fondant cake design', span: 'col-span-1 row-span-1' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
} as const;

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
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
            Our Creations
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            A Glimpse of Our Work
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`relative ${img.span}`}
              variants={itemVariants}
            >
              <ThreeDCard
                className="relative overflow-hidden rounded-xl cursor-pointer group w-full h-full"
                onClick={() => setSelectedImage(img.slot)}
              >
                <img
                  src={img.slot}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(78,52,46,0.6)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ border: '2px solid #D4AF37', transform: 'translateZ(30px)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
                {/* Gold border on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: 'inset 0 0 0 2px #D4AF37', transform: 'translateZ(10px)' }}
                />
              </ThreeDCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
