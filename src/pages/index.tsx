import { Helmet } from '@dr.pogodin/react-helmet';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedCakes from '@/components/home/FeaturedCakes';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GallerySection from '@/components/home/GallerySection';
import ReviewsSection from '@/components/home/ReviewsSection';
import ContactSection from '@/components/home/ContactSection';
import FloatingWhatsApp from '@/components/home/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>The Cake Bosss | Premium Bakery in Bhilai, Chhattisgarh</title>
        <meta
          name="description"
          content="The Cake Bosss — Bhilai's premium bakery crafting extraordinary cakes with love. Custom cakes, birthday cakes, wedding cakes. Dine-in, takeaway & delivery at Power House, Kailash Nagar."
        />
      </Helmet>

      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedCakes />
        <WhyChooseUs />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <FloatingWhatsApp />
    </>
  );
}
