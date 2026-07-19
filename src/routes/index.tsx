import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/Jet Car Wash.png";
import heroCar from "@/assets/hero-car.jpg";
import detailPaint from "@/assets/detail-paint.jpg";
import detailInterior from "@/assets/detail-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jet Car Wash — Powerful Clean. Premium Experience. Dubai, UAE" },
      {
        name: "description",
        content:
          "Jet Car Wash delivers jet-level exterior wash and complete interior detailing across the UAE. Book Jet Wash from AED 85 or Jet Shine from AED 125.",
      },
      { property: "og:title", content: "Jet Car Wash — Powerful Clean. Premium Experience. Dubai, UAE" },
      {
        property: "og:description",
        content: "Jet Car Wash delivers jet-level exterior wash and complete interior detailing across the UAE. Book Jet Wash from AED 85 or Jet Shine from AED 125.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logo },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logo },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@500;600;700&family=Outfit:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: JetLanding,
});

const PHONE = "+971 52 490 7205";
const PHONE_HREF = "tel:+971524907205";
const EMAIL = "Jetcarwashservice@gmail.com";
const WHATSAPP = "https://wa.me/971524907205?text=Hi%20Jet%20Car%20Wash!%20%F0%9F%91%8B%0A%0AI'd%20like%20to%20book%20a%20premium%20car%20wash.%0A%0A%F0%9F%9A%97%20Vehicle%3A%0A%F0%9F%93%8D%20Location%3A%0A%F0%9F%93%85%20Preferred%20Date%3A%0A%E2%8F%B0%20Preferred%20Time%3A%0A%0APlease%20confirm%20my%20booking.%20Thank%20you!";

function JetLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Promise />
      <BookingCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
  src={logo}
  alt="Jet Car Wash"
  className="h-20 w-auto drop-shadow-[0_0_18px_rgba(59,130,246,0.45)]"
  width={160}
  height={80}
/>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-sans uppercase text-sm tracking-widest text-muted-foreground">
          <a href="#services" className="hover:text-jet-cyan transition">Services</a>
          <a href="#process" className="hover:text-jet-cyan transition">Process</a>
          <a href="#promise" className="hover:text-jet-cyan transition">Promise</a>
          <a href="#book" className="hover:text-jet-cyan transition">Contact</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-jet text-primary-foreground font-sans uppercase tracking-widest text-xs font-bold shadow-jet hover:scale-105 transition"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-hero grid-bg pt-32 pb-20">
      {/* jet streak */}
      <div className="pointer-events-none absolute top-1/3 left-0 right-0 h-px overflow-hidden opacity-70">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-jet-cyan to-transparent animate-streak" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-jet-cyan/30 bg-jet-cyan/5 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-jet-cyan animate-pulse" />
            <span className="font-sans uppercase tracking-[0.3em] text-xs text-jet-cyan">
              Now Serving Across UAE
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] font-display">
            POWERFUL
            <br />
            <span className="text-gradient-jet">CLEAN.</span>
            <br />
            PREMIUM
            <br />
            <span className="text-gradient-gold">EXPERIENCE.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground font-body">
            Jet Car Wash treats every vehicle like a flagship. High-pressure jet detailing, eco-friendly
            foam, and a finish that turns heads on Sheikh Zayed Road.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-none clip-arrow bg-gradient-jet px-8 py-4 font-sans uppercase tracking-widest text-sm font-bold text-primary-foreground shadow-jet hover:translate-x-1 transition-transform"
              style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)" }}
            >
              See the packages →
            </a>
            <a
            
  href={WHATSAPP}
  target="_blank"
  rel="noreferrer"
              className="rounded-none border border-jet-silver/30 px-8 py-4 font-sans uppercase tracking-widest text-sm font-bold text-jet-silver hover:bg-jet-silver/5 transition"
            >
              Call {PHONE}
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "12K+", v: "Cars washed" },
              { k: "4.9★", v: "Customer rating" },
              { k: "30min", v: "Avg. turnaround" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-jet-cyan/50 pl-4">
                <div className="font-display text-4xl text-gradient-jet">{s.k}</div>
                <div className="font-sans uppercase tracking-widest text-[10px] text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative z-0">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-jet animate-float">
            <img
              src={heroCar}
              alt="Luxury sedan being washed by Jet Car Wash"
              width={1600}
              height={1200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="font-sans uppercase tracking-widest text-[10px] text-jet-cyan">
                  Live Bay 02
                </div>
                <div className="font-display text-2xl">Foam · Rinse · Shine</div>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl text-gradient-gold">98%</div>
                <div className="font-sans uppercase text-[9px] tracking-widest text-muted-foreground">
                  Gloss level
                </div>
              </div>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-jet-gold/40 bg-card/90 backdrop-blur px-5 py-4 shadow-gold hidden md:block">
            <div className="font-sans uppercase text-[10px] tracking-widest text-jet-gold">
              Eco-Certified
            </div>
            <div className="font-display text-xl">Water-Smart Wash</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Jet Foam", "Deep Rinse", "Interior Detailing", "Tyre Dressing", "Fragrance Finish", "Ceramic Shine"];
  return (
    <div className="border-y border-border bg-card/40 overflow-hidden py-6">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_28s_linear_infinite]" style={{
        // fallback inline keyframes
      }}>
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-16 font-display text-3xl md:text-5xl text-muted-foreground/60">
            <span>{it}</span>
            <span className="text-jet-cyan">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-sans uppercase tracking-[0.4em] text-xs text-jet-cyan mb-4">
              02 — Choose your wash
            </div>
            <h2 className="font-display text-6xl md:text-7xl">
              Two Packages.
              <br />
              One <span className="text-gradient-jet">Obsession</span> With Shine.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Whether you need a quick jet-powered refresh or a full concours-level detail, we've engineered
            the process for speed without compromise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ServiceCard
            tag="Essential Care"
            title="Jet Wash"
            price="85"
            accent="blue"
            image={detailPaint}
            features={[
              "Exterior wash & premium foam",
              "Wheel & tyre deep cleaning",
              "Window cleaning (inside & out)",
              "Interior vacuuming",
              "Dashboard & panel wipe",
              "Floor mat cleaning",
            ]}
          />
          <ServiceCard
            tag="Complete Detailing"
            title="Jet Shine"
            price="125"
            accent="gold"
            popular
            image={detailInterior}
            features={[
              "Everything in Jet Wash",
              "Interior deep cleaning",
              "Dashboard, panels & console polishing",
              "Seat & fabric refreshing",
              "Air vents cleaning",
              "Door & trunk edges cleaning",
              "Tyre dressing",
              "Long lasting fragrance",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  tag, title, price, features, accent, popular, image,
}: {
  tag: string; title: string; price: string; features: string[];
  accent: "blue" | "gold"; popular?: boolean; image: string;
}) {
  const isGold = accent === "gold";
  return (
    <div className={`group relative rounded-3xl overflow-hidden border ${isGold ? "border-jet-gold/40" : "border-jet-cyan/30"} bg-card`}>
      {popular && (
        <div className="absolute top-6 right-0 z-20">
          <div className="bg-gradient-gold text-accent-foreground font-sans font-bold uppercase tracking-widest text-[10px] px-4 py-1.5"
               style={{ clipPath: "polygon(12px 0, 100% 0, 100% 100%, 0 100%)" }}>
            ★ Most Popular
          </div>
        </div>
      )}

      <div className="relative h-56 overflow-hidden">
        <img src={image} alt={title} loading="lazy" width={1200} height={1400}
             className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <div className={`font-sans uppercase tracking-[0.3em] text-xs ${isGold ? "text-jet-gold" : "text-jet-cyan"}`}>
            {tag}
          </div>
          <h3 className="font-display text-5xl mt-1">{title}</h3>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-border">
          <span className="font-sans font-bold text-lg text-muted-foreground">AED</span>
          <span className={`font-display text-8xl ${isGold ? "text-gradient-gold" : "text-gradient-jet"}`}>
            {price}
          </span>
          <span className="font-body text-sm text-muted-foreground">/ per wash</span>
        </div>

        <ul className="space-y-3.5 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${isGold ? "bg-jet-gold" : "bg-jet-cyan"}`} />
              <span className="text-foreground/90 font-body">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className={`block text-center py-4 font-sans uppercase tracking-widest text-sm font-bold ${
            isGold ? "bg-gradient-gold text-accent-foreground shadow-gold" : "bg-gradient-jet text-primary-foreground shadow-jet"
          } hover:translate-x-1 transition-transform`}
          style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)" }}
        >
          Book {title} →
        </a>
      </div>
    </div>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Book", d: "Tap WhatsApp or call. Pick a slot in under 30 seconds." },
    { n: "02", t: "We Arrive", d: "Our jet-equipped team rolls up on time, every time." },
    { n: "03", t: "Jet Clean", d: "High-pressure foam, precision hand detail, eco-safe water." },
    { n: "04", t: "Drive Proud", d: "Inspect, approve, drive off with a mirror finish." },
  ];
  return (
    <section id="process" className="py-32 px-6 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="font-sans uppercase tracking-[0.4em] text-xs text-jet-cyan mb-4">
            03 — How it works
          </div>
          <h2 className="font-display text-6xl md:text-7xl">
            Four Steps. <span className="text-gradient-jet">Zero Fuss.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative p-8 border border-border rounded-2xl bg-background hover:border-jet-cyan/50 transition group">
              <div className="font-display text-8xl text-transparent bg-clip-text bg-gradient-to-b from-jet-cyan/60 to-transparent group-hover:from-jet-cyan transition">
                {s.n}
              </div>
              <h3 className="font-display text-3xl mt-2">{s.t}</h3>
              <p className="text-muted-foreground mt-3 font-body text-sm">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-jet-cyan to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROMISE ---------------- */
function Promise() {
  const items = [
    { t: "Powerful Clean", d: "Jet-level deep clean that reaches every seam." },
    { t: "Water Smart", d: "Eco-friendly wash using up to 80% less water." },
    { t: "Safe For All", d: "pH-balanced products safe on every paint & finish." },
    { t: "100% Satisfaction", d: "We don't just clean. We care about the result." },
  ];
  return (
    <section id="promise" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="font-sans uppercase tracking-[0.4em] text-xs text-jet-gold mb-4">
            04 — The Jet promise
          </div>
          <h2 className="font-display text-6xl md:text-7xl leading-none">
            Every wash,
            <br />
            <span className="text-gradient-gold">flagship</span>
            <br />
            treatment.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            We built Jet Car Wash for owners who care. From a daily runabout to a weekend supercar — same
            obsession, same finish.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <div key={it.t} className={`p-8 rounded-2xl border border-border bg-card/50 ${i % 2 ? "sm:mt-12" : ""}`}>
              <div className="font-display text-6xl text-jet-cyan/30">0{i + 1}</div>
              <h3 className="font-display text-2xl mt-2">{it.t}</h3>
              <p className="text-muted-foreground text-sm mt-2 font-body">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOOKING CTA ---------------- */
function BookingCTA() {
  return (
    <section id="book" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-jet opacity-10" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="font-sans uppercase tracking-[0.4em] text-xs text-jet-cyan mb-6">
          Ready when you are
        </div>
        <h2 className="font-display text-7xl md:text-9xl leading-none">
          BOOK YOUR
          <br />
          <span className="text-gradient-jet">JET</span>{" "}
          <span className="text-gradient-gold">WASH</span>
        </h2>
        <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
          Message us on WhatsApp or drop a call. We reply in minutes and slots go fast on weekends.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a 
  href={WHATSAPP}
  target="_blank"
  rel="noreferrer" className="group p-8 rounded-3xl border border-jet-cyan/40 bg-card hover:bg-jet-cyan/5 transition text-left">
            <div className="font-sans uppercase tracking-widest text-xs text-jet-cyan">WhatsApp Us</div>
            <div className="font-display text-4xl mt-2 group-hover:text-gradient-jet">{PHONE}</div>
            <div className="text-muted-foreground text-sm mt-3">Sat – Thu · 8am – 11pm</div>
          </a>
          <a href={`mailto:${EMAIL}`} className="group p-8 rounded-3xl border border-jet-gold/40 bg-card hover:bg-jet-gold/5 transition text-left">
            <div className="font-sans uppercase tracking-widest text-xs text-jet-gold">Email us</div>
            <div className="font-display text-2xl mt-2 break-all group-hover:text-gradient-gold">
              {EMAIL}
            </div>
            <div className="text-muted-foreground text-sm mt-3">Reply within 1 hour</div>
          </a>
        </div>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-jet text-primary-foreground px-10 py-5 font-sans uppercase tracking-widest text-sm font-bold shadow-jet hover:scale-105 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Jet Car Wash" className="h-10 w-auto" width={80} height={40} />
          <div className="font-sans uppercase text-xs tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Jet Car Wash · UAE
          </div>
        </div>
        <div className="flex items-center gap-6 font-sans uppercase text-xs tracking-widest text-muted-foreground">
          <a
  href={WHATSAPP}
  target="_blank"
  rel="noreferrer" className="hover:text-jet-cyan">{PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-jet-gold">Email</a>
        </div>
      </div>
    </footer>
  );
}
