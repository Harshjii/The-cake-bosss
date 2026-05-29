import { Helmet } from '@dr.pogodin/react-helmet';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | The Cake Bosss — Premium Bakery in Bhilai</title>
        <meta name="description" content="Get in touch with The Cake Bosss in Bhilai. Visit us, call us, or send a WhatsApp message." />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg">Coming soon — full contact page is being built.</p>
        </div>
      </main>
    </>
  );
}
