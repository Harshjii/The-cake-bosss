import { motion } from 'motion/react';
import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    location: 'Bhilai',
    rating: 5,
    text: 'The Chocolate Truffle Dream was absolutely divine! Ordered for my daughter\'s birthday and everyone was blown away. The cake was fresh, moist, and beautifully decorated. Will definitely order again!',
    cake: 'Chocolate Truffle Dream',
  },
  {
    name: 'Rahul Verma',
    location: 'Durg',
    rating: 5,
    text: 'Got a custom wedding cake from The Cake Bosss and it was beyond our expectations. The design was exactly what we wanted and the taste was phenomenal. Highly recommend for any special occasion!',
    cake: 'Custom Wedding Cake',
  },
  {
    name: 'Anjali Patel',
    location: 'Bhilai',
    rating: 5,
    text: 'Best bakery in Bhilai, hands down! The Red Velvet Royale is my absolute favorite. The cream cheese frosting is perfect — not too sweet, just right. The delivery was also on time.',
    cake: 'Red Velvet Royale',
  },
  {
    name: 'Suresh Kumar',
    location: 'Raipur',
    rating: 4,
    text: 'Ordered the Black Forest Classic for my anniversary. The cake was fresh and delicious. The cherries on top were a lovely touch. Great value for money and excellent service!',
    cake: 'Black Forest Classic',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          fill={star <= rating ? '#D4AF37' : 'none'}
          stroke="#D4AF37"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoScroll, 4000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#FFF5E4' }}>
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
            Customer Love
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What Our Customers Say
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid #E8D5C0',
                    boxShadow: '0 4px 20px rgba(78,52,46,0.06)',
                  }}
                >
                  {/* Stars */}
                  <StarRating rating={review.rating} />

                  {/* Quote */}
                  <blockquote
                    className="mt-4 mb-6 text-sm md:text-base leading-relaxed italic"
                    style={{ color: '#4E342E', fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  >
                    "{review.text}"
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: '#4E342E', fontFamily: 'var(--font-sans)' }}
                      >
                        {review.name}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: '#7B4F3A', fontFamily: 'var(--font-sans)' }}
                      >
                        {review.location}
                      </p>
                    </div>
                    <span
                      className="text-xs font-medium tracking-wider uppercase px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(212,175,55,0.15)',
                        color: '#7B4F3A',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {review.cake}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
