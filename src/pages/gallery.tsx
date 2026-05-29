import { Helmet } from '@dr.pogodin/react-helmet';

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Gallery | The Cake Bosss — Premium Bakery in Bhilai</title>
        <meta name="description" content="Browse our gallery of handcrafted cakes and bakery creations at The Cake Bosss, Bhilai." />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg">Coming soon — full gallery page is being curated.</p>
        </div>
      </main>
    </>
  );
}
