import { Helmet } from '@dr.pogodin/react-helmet';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const cakeCategories = [
  {
    id: 'celebration',
    label: 'Celebration Cakes',
    items: [
      { id: 'birthday', name: 'Birthday Cake', desc: 'Customised with name, age & theme. Moist sponge, fresh cream, your choice of flavour.', formats: ['500g — serves 4–6', '1kg — serves 8–12', '2kg — serves 16–20'], prices: ['₹499', '₹899', '₹1,599'], featured: true },
      { id: 'anniversary', name: 'Anniversary Cake', desc: null, formats: ['500g', '1kg', '2kg'], prices: ['₹549', '₹999', '₹1,799'], featured: false },
      { id: 'baby-shower', name: 'Baby Shower Cake', desc: null, formats: ['1kg', '2kg'], prices: ['₹1,099', '₹1,899'], featured: false },
      { id: 'graduation', name: 'Graduation Cake', desc: null, formats: ['1kg', '2kg'], prices: ['₹999', '₹1,799'], featured: false },
    ],
  },
  {
    id: 'signature',
    label: 'Signature Flavours',
    items: [
      { id: 'chocolate-truffle', name: 'Chocolate Truffle Dream', desc: 'Belgian dark chocolate ganache, truffle layers, cocoa sponge. Our most-ordered cake.', formats: ['500g', '1kg', '2kg'], prices: ['₹549', '₹899', '₹1,699'], featured: true },
      { id: 'red-velvet', name: 'Red Velvet Royale', desc: null, formats: ['500g', '1kg', '2kg'], prices: ['₹549', '₹849', '₹1,599'], featured: false },
      { id: 'black-forest', name: 'Black Forest Classic', desc: null, formats: ['500g', '1kg', '2kg'], prices: ['₹499', '₹799', '₹1,499'], featured: false },
      { id: 'strawberry', name: 'Strawberry Bliss', desc: null, formats: ['500g', '1kg'], prices: ['₹499', '₹749'], featured: false },
      { id: 'mango', name: 'Mango Delight', desc: null, formats: ['500g', '1kg'], prices: ['₹449', '₹699'], featured: false },
    ],
  },
  {
    id: 'custom',
    label: 'Custom & Wedding',
    items: [
      { id: 'wedding', name: 'Wedding Cake', desc: 'Multi-tier masterpiece. Fondant or fresh cream finish. Fully custom design consultation included.', formats: ['2-tier', '3-tier', '4-tier'], prices: ['₹2,499+', '₹3,999+', '₹5,999+'], featured: true },
      { id: 'photo-cake', name: 'Photo Print Cake', desc: null, formats: ['500g', '1kg'], prices: ['₹699', '₹1,099'], featured: false },
      { id: 'fondant', name: 'Fondant Sculpted Cake', desc: null, formats: ['1kg', '2kg'], prices: ['₹1,499', '₹2,499'], featured: false },
    ],
  },
];

const flavourOptions = [
  'Chocolate Truffle', 'Red Velvet', 'Black Forest', 'Strawberry', 'Mango',
  'Vanilla', 'Butterscotch', 'Pineapple', 'Blueberry', 'Lemon', 'Not sure yet',
];

const deliveryOptions = [
  { id: 'pickup', label: 'Self Pickup', meta: 'Free — collect from our store' },
  { id: 'delivery', label: 'Home Delivery', meta: 'Bhilai & nearby areas' },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildWhatsAppMessage(form: OrderForm): string {
  const lines = [
    '🎂 *New Cake Order Request*',
    '',
    `*Name:* ${form.name}`,
    `*Phone:* ${form.phone}`,
    form.address ? `*Address:* ${form.address}` : null,
    '',
    `*Cake Type:* ${form.cakeType || 'Not specified'}`,
    `*Flavour:* ${form.flavour || 'Not specified'}`,
    `*Size / Weight:* ${form.size || 'Not specified'}`,
    `*Delivery Date:* ${form.date || 'Not specified'}`,
    `*Delivery:* ${form.delivery === 'delivery' ? 'Home Delivery' : 'Self Pickup'}`,
    form.message ? `\n*Special Instructions:*\n${form.message}` : null,
  ].filter(Boolean);
  return encodeURIComponent(lines.join('\n'));
}

interface OrderForm {
  name: string;
  phone: string;
  address: string;
  cakeType: string;
  flavour: string;
  size: string;
  date: string;
  delivery: string;
  message: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PanelCaret({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="8" height="12" viewBox="0 0 8 12"
      fill="none" stroke="currentColor" strokeWidth="1"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
      animate={{ rotate: open ? 90 : 0 }}
      transition={{ duration: 0.32, ease: [0.32, 0.72, 0.24, 1] }}
      style={{ color: 'var(--caramel-primary)' }}
    >
      <polyline points="1 1 7 6 1 11" />
    </motion.svg>
  );
}

function MenuRow({
  name, desc, formats, prices, featured, eyebrow,
  onSelect, selected,
}: {
  name: string; desc: string | null; formats: string[]; prices: string[];
  featured: boolean; eyebrow: string;
  onSelect: (name: string) => void; selected: boolean;
}) {
  return (
    <li>
      <div
        className={`menu-row ${featured ? 'menu-row--featured' : ''} ${selected ? 'menu-row--selected' : ''}`}
        role="button"
        tabIndex={0}
        onClick={() => onSelect(name)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(name)}
        aria-pressed={selected}
        style={{ cursor: 'pointer' }}
      >
        <div className="menu-row__name-block">
          <span className="menu-row__eyebrow">{eyebrow}</span>
          <span className="menu-row__name">{name}</span>
          <span className="menu-row__format">{formats.join(' · ')}</span>
          {desc && featured && <p className="menu-row__desc">{desc}</p>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <span className="menu-row__price">{prices[0]}</span>
          {selected && (
            <span style={{
              display: 'flex', alignItems: 'center', gap: 4,
              fontFamily: 'var(--font-body)', fontSize: 11,
              fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#5a3a1f',
            }}>
              <Check size={11} strokeWidth={2} /> Selected
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OrderPage() {
  const [openPanels, setOpenPanels] = useState<Record<string, boolean>>({
    menu: true,
    details: true,
    delivery: false,
  });

  const [form, setForm] = useState<OrderForm>({
    name: '', phone: '', address: '',
    cakeType: '', flavour: '', size: '',
    date: '', delivery: 'pickup', message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof OrderForm, string>>>({});

  const togglePanel = (id: string) =>
    setOpenPanels((p) => ({ ...p, [id]: !p[id] }));

  const set = (key: keyof OrderForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof OrderForm, string>> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.cakeType) e.cakeType = 'Required';
    if (!form.date) e.date = 'Required';
    if (form.delivery === 'delivery' && !form.address.trim()) e.address = 'Required for delivery';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setOpenPanels({ menu: true, details: true, delivery: true });
      return;
    }
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/919XXXXXXXXX?text=${buildWhatsAppMessage(form)}`;

  // Tomorrow as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <>
      <Helmet>
        <title>Order Online | The Cake Bosss — Premium Bakery in Bhilai</title>
        <meta name="description" content="Order a custom cake online from The Cake Bosss, Bhilai. Choose your cake, size, flavour and delivery date. WhatsApp confirmation." />
      </Helmet>

      <style>{`
        /* ── CSS tokens (scoped to order page) ── */
        .order-page {
          --cream-700: #fefaf0;
          --butter-800: #f5ecd0;
          --caramel-primary: #4E342E;
          --caramel-secondary: #7B4F3A;
          --caramel-tertiary: #a07060;
          --border-subtle: #e8dcb4;
          --border-strong: #4E342E;
          --gold-warn: #D4AF37;
          --radius-base: 2px;
          --radius-pill: 9999px;
          --ease-editorial: cubic-bezier(0.32, 0.72, 0.24, 1);
          --duration-quick: 180ms;
          --duration-medium: 320ms;
          --duration-slow: 560ms;
          --font-display: var(--font-heading, 'Playfair Display', Georgia, serif);
          --font-body: var(--font-sans, 'Inter', system-ui, sans-serif);
          --tracking-label: 0.15em;
          --tracking-display: -0.01em;
        }

        /* ── Letter frame ── */
        .letter-frame {
          border-top: 1px solid var(--border-strong);
          border-bottom: 1px solid var(--border-strong);
          min-height: 100svh;
          background: var(--cream-700);
        }

        .letter {
          display: flex;
          flex-direction: column;
          max-width: 680px;
          margin: 0 auto;
          padding: 96px 32px 128px;
          gap: 0;
        }

        /* ── Salutation ── */
        .letter__salutation {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 72px;
        }

        .letter__eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: var(--tracking-label);
          text-transform: uppercase;
          color: var(--caramel-tertiary);
          line-height: 1;
        }

        .letter__greeting {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: var(--tracking-display);
          line-height: 1.1;
          color: var(--caramel-primary);
        }

        .letter__intro {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: var(--caramel-secondary);
          max-width: 54ch;
        }

        /* ── Panels ── */
        .panel {
          border-top: 1px solid var(--border-subtle);
        }

        .panel:last-of-type {
          border-bottom: 1px solid var(--border-subtle);
        }

        .panel__summary {
          list-style: none;
          cursor: pointer;
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: baseline;
          gap: 20px;
          padding: 28px 0;
          transition: color var(--duration-quick) var(--ease-editorial);
          user-select: none;
        }

        .panel__summary:hover { color: var(--caramel-secondary); }

        .panel__numeral {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 14px;
          color: var(--caramel-tertiary);
        }

        .panel__name {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.4vw, 28px);
          font-weight: 400;
          letter-spacing: var(--tracking-display);
          line-height: 1.1;
          color: var(--caramel-primary);
        }

        .panel__status {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: var(--tracking-label);
          text-transform: uppercase;
          color: var(--caramel-tertiary);
        }

        .panel__body {
          padding: 8px 0 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Menu rows ── */
        .menu-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: baseline;
          gap: 0 40px;
          padding: 22px 0;
          background: transparent;
          transition: background var(--duration-quick) var(--ease-editorial);
          border-radius: var(--radius-base);
        }

        .menu-row:hover { background: var(--butter-800); padding-left: 12px; padding-right: 12px; margin: 0 -12px; }
        .menu-row--selected { background: rgba(212,175,55,0.12); padding-left: 12px; padding-right: 12px; margin: 0 -12px; }
        .menu-row--selected:hover { background: rgba(212,175,55,0.18); }

        .menu-row__name-block {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .menu-row__eyebrow {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: var(--tracking-label);
          text-transform: uppercase;
          color: var(--caramel-tertiary);
          line-height: 1;
        }

        .menu-row__name {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 400;
          line-height: 1.3;
          color: var(--caramel-primary);
        }

        .menu-row--featured .menu-row__name {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(20px, 2.2vw, 26px);
          letter-spacing: var(--tracking-display);
          line-height: 1.1;
        }

        .menu-row__format {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--caramel-tertiary);
          letter-spacing: 0.02em;
        }

        .menu-row__desc {
          display: none;
          font-family: var(--font-body);
          font-size: 13px;
          line-height: 1.55;
          color: var(--caramel-secondary);
          max-width: 50ch;
          margin-top: 5px;
        }

        .menu-row--featured .menu-row__desc { display: block; }

        .menu-row__price {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 400;
          letter-spacing: var(--tracking-display);
          color: var(--caramel-primary);
          white-space: nowrap;
          align-self: center;
        }

        /* ── Category group ── */
        .menu-group {
          padding-top: 32px;
        }

        .menu-group__marker {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 4px;
        }

        .menu-group__eyebrow {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: var(--tracking-label);
          text-transform: uppercase;
          color: var(--caramel-tertiary);
          flex-shrink: 0;
        }

        .menu-group__rule {
          flex: 1;
          height: 1px;
          background: var(--border-strong);
        }

        /* ── Form fields ── */
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: var(--tracking-label);
          text-transform: uppercase;
          color: var(--caramel-secondary);
          line-height: 1;
        }

        .form-input, .form-select, .form-textarea {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 400;
          color: var(--caramel-primary);
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-subtle);
          border-radius: 0;
          padding: 8px 0 10px;
          outline: none;
          line-height: 1.5;
          width: 100%;
          -webkit-appearance: none;
          transition: border-color var(--duration-quick) var(--ease-editorial);
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: var(--caramel-tertiary);
          opacity: 1;
        }

        .form-input:hover, .form-select:hover, .form-textarea:hover {
          border-bottom-color: var(--caramel-tertiary);
        }

        .form-input:focus-visible, .form-select:focus-visible, .form-textarea:focus-visible {
          border-bottom-color: var(--border-strong);
          outline: 2px solid var(--border-strong);
          outline-offset: 4px;
          border-radius: var(--radius-base);
        }

        .form-input--error, .form-select--error {
          border-bottom-color: #b8503f;
        }

        .form-error {
          font-family: var(--font-body);
          font-size: 12px;
          color: #b8503f;
        }

        .form-select {
          appearance: none;
          cursor: pointer;
          padding-right: 24px;
        }

        .form-select-wrap {
          position: relative;
        }

        .form-select-caret {
          position: absolute;
          right: 2px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .form-textarea {
          resize: vertical;
          min-height: 88px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding: 8px 0 32px;
        }

        /* ── Delivery radio ── */
        .pay-options {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid var(--border-subtle);
        }

        .pay-option {
          display: grid;
          grid-template-columns: 20px 1fr auto;
          gap: 16px;
          align-items: center;
          padding: 18px 4px;
          border-bottom: 1px solid var(--border-subtle);
          cursor: pointer;
        }

        .pay-option:hover .pay-option__name { color: var(--caramel-secondary); }

        .pay-option__radio {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }

        .pay-option__mark {
          width: 16px;
          height: 16px;
          border: 1px solid var(--border-strong);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color var(--duration-quick) var(--ease-editorial);
        }

        .pay-option__radio:checked + .pay-option__mark::after {
          content: '';
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--caramel-primary);
        }

        .pay-option__radio:focus-visible + .pay-option__mark {
          outline: 2px solid var(--border-strong);
          outline-offset: 3px;
        }

        .pay-option__name {
          font-family: var(--font-display);
          font-size: 17px;
          color: var(--caramel-primary);
          letter-spacing: var(--tracking-display);
          transition: color var(--duration-quick) var(--ease-editorial);
        }

        .pay-option__meta {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--caramel-tertiary);
          letter-spacing: 0.02em;
        }

        /* ── Sign off ── */
        .sign-off {
          margin-top: 72px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .sign-off__reassurance {
          font-family: var(--font-body);
          font-size: 13px;
          line-height: 1.6;
          color: var(--caramel-tertiary);
          max-width: 50ch;
        }

        .sign-off__action {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          padding: 12px 0;
          cursor: pointer;
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(28px, 3.5vw, 40px);
          letter-spacing: var(--tracking-display);
          line-height: 1.1;
          color: var(--caramel-primary);
          border-bottom: 1px solid var(--caramel-primary);
          transition: color var(--duration-quick) var(--ease-editorial);
          text-decoration: none;
        }

        .sign-off__action:hover {
          color: var(--caramel-secondary);
          border-bottom-color: var(--caramel-secondary);
        }

        .sign-off__action:focus-visible {
          outline: 2px solid var(--border-strong);
          outline-offset: 6px;
          border-radius: var(--radius-base);
        }

        .sign-off__fineprint {
          font-family: var(--font-body);
          font-size: 11px;
          line-height: 1.55;
          color: var(--caramel-tertiary);
          max-width: 54ch;
        }

        /* ── Success state ── */
        .success-block {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 48px 0;
        }

        .success-block__icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--border-strong);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-block__heading {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(28px, 3.5vw, 40px);
          letter-spacing: var(--tracking-display);
          line-height: 1.1;
          color: var(--caramel-primary);
        }

        .success-block__body {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: var(--caramel-secondary);
          max-width: 50ch;
        }

        /* ── Responsive ── */
        @media (max-width: 560px) {
          .letter { padding: 56px 20px 88px; }
          .letter__salutation { margin-bottom: 48px; }
          .form-row { grid-template-columns: 1fr; gap: 20px; }
          .panel__summary { padding: 22px 0; grid-template-columns: auto 1fr auto; gap: 14px; }
          .panel__status { display: none; }
          .menu-row { gap: 0 20px; }
          .sign-off { margin-top: 48px; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>

      <main className="order-page">
        <div className="letter-frame">
          <form className="letter" noValidate onSubmit={handleSubmit}>

            {/* ── Salutation ── */}
            <motion.header
              className="letter__salutation"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.56, ease: [0.32, 0.72, 0.24, 1] }}
            >
              <span className="letter__eyebrow">The Cake Bosss · Bhilai</span>
              <h1 className="letter__greeting">Place your order.</h1>
              <p className="letter__intro">
                Choose your cake, fill in your details, and we'll confirm via WhatsApp within a few hours.
                Custom designs welcome — just describe your vision in the notes.
              </p>
            </motion.header>

            {/* ── Panel I — Choose your cake ── */}
            <div className="panel">
              <div
                className="panel__summary"
                role="button"
                tabIndex={0}
                onClick={() => togglePanel('menu')}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePanel('menu')}
                aria-expanded={openPanels.menu}
              >
                <span className="panel__numeral">i.</span>
                <span className="panel__name">Choose your cake</span>
                <span className="panel__status">{form.cakeType ? form.cakeType : 'Not selected'}</span>
                <PanelCaret open={openPanels.menu} />
              </div>

              {openPanels.menu && (
                <motion.div
                  className="panel__body"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.32, ease: [0.32, 0.72, 0.24, 1] }}
                >
                  {cakeCategories.map((cat) => (
                    <div key={cat.id} className="menu-group">
                      <div className="menu-group__marker">
                        <span className="menu-group__eyebrow">{cat.label}</span>
                        <span className="menu-group__rule" aria-hidden="true" />
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {cat.items.map((item) => (
                          <MenuRow
                            key={item.id}
                            name={item.name}
                            desc={item.desc}
                            formats={item.formats}
                            prices={item.prices}
                            featured={item.featured}
                            eyebrow={cat.label}
                            selected={form.cakeType === item.name}
                            onSelect={(name) => {
                              setForm((f) => ({ ...f, cakeType: name }));
                              setErrors((er) => ({ ...er, cakeType: undefined }));
                            }}
                          />
                        ))}
                      </ul>
                    </div>
                  ))}

                  {errors.cakeType && (
                    <p className="form-error" style={{ marginTop: 12 }} role="alert">
                      {errors.cakeType}
                    </p>
                  )}
                </motion.div>
              )}
            </div>

            {/* ── Panel II — Your details ── */}
            <div className="panel">
              <div
                className="panel__summary"
                role="button"
                tabIndex={0}
                onClick={() => togglePanel('details')}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePanel('details')}
                aria-expanded={openPanels.details}
              >
                <span className="panel__numeral">ii.</span>
                <span className="panel__name">Your details</span>
                <span className="panel__status">{form.name ? form.name : 'Not filled'}</span>
                <PanelCaret open={openPanels.details} />
              </div>

              {openPanels.details && (
                <motion.div
                  className="panel__body"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.32, ease: [0.32, 0.72, 0.24, 1] }}
                >
                  <div className="form-section">
                    <div className="form-row">
                      <div className="form-field">
                        <label className="form-label" htmlFor="order-name">Your Name</label>
                        <input
                          className={`form-input${errors.name ? ' form-input--error' : ''}`}
                          type="text"
                          id="order-name"
                          name="name"
                          value={form.name}
                          onChange={set('name')}
                          placeholder="Full name"
                          autoComplete="name"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                      </div>
                      <div className="form-field">
                        <label className="form-label" htmlFor="order-phone">Phone / WhatsApp</label>
                        <input
                          className={`form-input${errors.phone ? ' form-input--error' : ''}`}
                          type="tel"
                          id="order-phone"
                          name="phone"
                          value={form.phone}
                          onChange={set('phone')}
                          placeholder="+91 XXXXX XXXXX"
                          autoComplete="tel"
                          aria-required="true"
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && <span className="form-error" role="alert">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label className="form-label" htmlFor="order-flavour">Flavour Preference</label>
                        <div className="form-select-wrap">
                          <select
                            className="form-select"
                            id="order-flavour"
                            name="flavour"
                            value={form.flavour}
                            onChange={set('flavour')}
                          >
                            <option value="">Select flavour…</option>
                            {flavourOptions.map((f) => (
                              <option key={f} value={f}>{f}</option>
                            ))}
                          </select>
                          <svg className="form-select-caret" width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true" style={{ color: 'var(--caramel-tertiary)' }}>
                            <polyline points="1 1 6 7 11 1" />
                          </svg>
                        </div>
                      </div>
                      <div className="form-field">
                        <label className="form-label" htmlFor="order-size">Size / Weight</label>
                        <input
                          className="form-input"
                          type="text"
                          id="order-size"
                          name="size"
                          value={form.size}
                          onChange={set('size')}
                          placeholder="e.g. 1kg, 2-tier"
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label className="form-label" htmlFor="order-date">Delivery / Pickup Date</label>
                      <input
                        className={`form-input${errors.date ? ' form-input--error' : ''}`}
                        type="date"
                        id="order-date"
                        name="date"
                        value={form.date}
                        onChange={set('date')}
                        min={minDate}
                        aria-required="true"
                        aria-invalid={!!errors.date}
                      />
                      {errors.date && <span className="form-error" role="alert">{errors.date}</span>}
                    </div>

                    <div className="form-field">
                      <label className="form-label" htmlFor="order-message">Special Instructions</label>
                      <textarea
                        className="form-textarea"
                        id="order-message"
                        name="message"
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Cake message, design ideas, allergies, occasion details…"
                        rows={4}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Panel III — Delivery ── */}
            <div className="panel">
              <div
                className="panel__summary"
                role="button"
                tabIndex={0}
                onClick={() => togglePanel('delivery')}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePanel('delivery')}
                aria-expanded={openPanels.delivery}
              >
                <span className="panel__numeral">iii.</span>
                <span className="panel__name">Delivery</span>
                <span className="panel__status">
                  {form.delivery === 'delivery' ? 'Home delivery' : 'Self pickup'}
                </span>
                <PanelCaret open={openPanels.delivery} />
              </div>

              {openPanels.delivery && (
                <motion.div
                  className="panel__body"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.32, ease: [0.32, 0.72, 0.24, 1] }}
                >
                  <div className="pay-options" role="radiogroup" aria-label="Delivery method">
                    {deliveryOptions.map((opt) => (
                      <label key={opt.id} className="pay-option">
                        <input
                          className="pay-option__radio"
                          type="radio"
                          name="delivery"
                          value={opt.id}
                          checked={form.delivery === opt.id}
                          onChange={set('delivery')}
                        />
                        <span className="pay-option__mark" aria-hidden="true" />
                        <span className="pay-option__name">{opt.label}</span>
                        <span className="pay-option__meta">{opt.meta}</span>
                      </label>
                    ))}
                  </div>

                  {form.delivery === 'delivery' && (
                    <div className="form-section" style={{ paddingTop: 24 }}>
                      <div className="form-field">
                        <label className="form-label" htmlFor="order-address">Delivery Address</label>
                        <input
                          className={`form-input${errors.address ? ' form-input--error' : ''}`}
                          type="text"
                          id="order-address"
                          name="address"
                          value={form.address}
                          onChange={set('address')}
                          placeholder="Full address with landmark"
                          autoComplete="street-address"
                          aria-required="true"
                          aria-invalid={!!errors.address}
                        />
                        {errors.address && <span className="form-error" role="alert">{errors.address}</span>}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* ── Sign off ── */}
            {!submitted ? (
              <footer className="sign-off">
                <p className="sign-off__reassurance">
                  We'll review your request and confirm via WhatsApp within a few hours.
                  Payment is collected at pickup or delivery — no advance required for most orders.
                </p>
                <button type="submit" className="sign-off__action">
                  Send order request
                </button>
                <p className="sign-off__fineprint">
                  By submitting you agree to be contacted on WhatsApp for order confirmation.
                  Custom cakes require 48–72 hours advance notice.
                </p>
              </footer>
            ) : (
              <motion.div
                className="success-block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.56, ease: [0.32, 0.72, 0.24, 1] }}
              >
                <div className="success-block__icon">
                  <Check size={20} strokeWidth={1.5} style={{ color: 'var(--caramel-primary)' }} />
                </div>
                <p className="success-block__heading">Order received.</p>
                <p className="success-block__body">
                  Thank you, {form.name}. We'll confirm your order on WhatsApp shortly.
                  For faster confirmation, tap the button below to send us a message directly.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sign-off__action"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
                >
                  <MessageCircle size={20} strokeWidth={1.5} />
                  Continue on WhatsApp
                </a>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 12,
                  color: 'var(--caramel-tertiary)', lineHeight: 1.55,
                }}>
                  Or call us at{' '}
                  <a href="tel:+919XXXXXXXXX" style={{ color: 'var(--caramel-secondary)', textDecoration: 'underline' }}>
                    +91 9XXXXXXXXX
                  </a>
                </p>
              </motion.div>
            )}

          </form>
        </div>
      </main>
    </>
  );
}
