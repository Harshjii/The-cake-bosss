import { Helmet } from '@dr.pogodin/react-helmet';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | The Cake Bosss — Premium Bakery in Bhilai</title>
        <meta name="description" content="Learn the story behind The Cake Bosss — Bhilai's premium bakery crafting extraordinary cakes with love." />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            About Us
          </h1>
          <p className="text-muted-foreground text-lg">Coming soon — our full story is being written.</p>
        </div>
      </main>
    </>
  );
}
