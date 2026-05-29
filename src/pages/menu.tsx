import { Helmet } from '@dr.pogodin/react-helmet';

export default function MenuPage() {
  return (
    <>
      <Helmet>
        <title>Our Menu | The Cake Bosss — Premium Bakery in Bhilai</title>
        <meta name="description" content="Explore our full menu of handcrafted cakes, pastries, and custom creations at The Cake Bosss, Bhilai." />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Menu
          </h1>
          <p className="text-muted-foreground text-lg">Coming soon — full menu page is being crafted with love.</p>
        </div>
      </main>
    </>
  );
}
