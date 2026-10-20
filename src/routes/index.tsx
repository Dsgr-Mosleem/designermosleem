import { assetUrl } from "@/lib/asset-url";
import { WA_URL, WA_DISPLAY } from "@/lib/whatsapp";
import { createFileRoute } from "@tanstack/react-router";
import { PricingSection, CustomSection, TermsSection, FAQSection } from "@/components/pricing-sections";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import mosleemLogo from "@/assets/mosleem-logo-blue.jpeg.asset.json";
import p1 from "@/assets/portfolio/09-31.21.jpeg.asset.json";
import p2 from "@/assets/portfolio/09-31.21_1.jpeg.asset.json";
import p3 from "@/assets/portfolio/09-31.22.jpeg.asset.json";
import p4 from "@/assets/portfolio/09-31.22_1.jpeg.asset.json";
import p5 from "@/assets/portfolio/09-31.24.jpeg.asset.json";
import p6 from "@/assets/portfolio/09-31.25.jpeg.asset.json";
import p7 from "@/assets/portfolio/09-31.25_1.jpeg.asset.json";
import p8 from "@/assets/portfolio/09-31.27.jpeg.asset.json";
import p9 from "@/assets/portfolio/09-31.27_1.jpeg.asset.json";
import p10 from "@/assets/portfolio/09-31.27_2.jpeg.asset.json";
import p11 from "@/assets/portfolio/09.31.23_1.jpeg.asset.json";
import p12 from "@/assets/portfolio/09.31.26_1.jpeg.asset.json";
import p13 from "@/assets/portfolio/09.31.26.jpeg.asset.json";
import p14 from "@/assets/portfolio/09.31.25_2.jpeg.asset.json";
import p15 from "@/assets/portfolio/09.31.24_1.jpeg.asset.json";
import p16 from "@/assets/portfolio/09.31.23.jpeg.asset.json";
import p17 from "@/assets/portfolio/09.31.28.jpeg.asset.json";
import p18 from "@/assets/portfolio/IDUL_ADHA4.png.asset.json";
import p19 from "@/assets/portfolio/IDUL_ADHA2.png.asset.json";
import p20 from "@/assets/portfolio/p20.png.asset.json";
import p21 from "@/assets/portfolio/p21.png.asset.json";
import p22 from "@/assets/portfolio/p22.jpg.asset.json";
import p23 from "@/assets/portfolio/p23.jpg.asset.json";
import p24 from "@/assets/portfolio/p24.webp.asset.json";
import p25 from "@/assets/portfolio/p25.png.asset.json";
import p26 from "@/assets/portfolio/p26.png.asset.json";
import p27 from "@/assets/portfolio/p27.jpeg.asset.json";
import p28 from "@/assets/portfolio/p28.png.asset.json";
import p29 from "@/assets/portfolio/p29.png.asset.json";
import badalUmrah from "@/assets/portfolio/badal-umrah.jpg.asset.json";
const bannerImages = [p20, p21];
const portfolioImages = [...bannerImages, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p22, p23, p24, p25, p26, p27, p28, p29, badalUmrah];
import { useEffect, useState } from "react";
import {
  Palette,
  Zap,
  RefreshCw,
  Wallet,
  Image as ImageIcon,
  Mail,
  BarChart3,
  Heart,
  BookOpen,
  Globe,
  
  ZoomIn,
  MessageCircle,
  Sparkles,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Designer Mosleem — Jasa Desain Grafis Profesional" },
      {
        name: "description",
        content:
          "Solusi Kreatif Digital untuk Bisnis dan Komunitas Anda. Jasa desain poster, undangan, dan infografis mulai dari 25K.",
      },
      { property: "og:title", content: "Designer Mosleem — Jasa Kreatif Digital" },
      {
        property: "og:description",
        content:
          "Desain grafis profesional untuk pelaku usaha, komunitas Islam, dan organisasi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV_LINKS = [
  { id: "beranda", label: "Beranda" },
  { id: "layanan", label: "Layanan" },
  { id: "katalog", label: "Katalog" },
  { id: "harga", label: "Harga" },
  { id: "kontak", label: "Kontak" },
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: id === "beranda" ? 0 : top, behavior: "smooth" });
  if (typeof history !== "undefined") {
    history.replaceState(null, "", `#${id}`);
  }
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = NAV_LINKS;

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-[20px] bg-[rgba(5,11,36,0.55)] border-b border-[var(--glass-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a
          href="#beranda"
          onClick={(e) => handleClick(e, "beranda")}
          className="flex min-w-0 items-center gap-2"
        >
          <div className="w-9 h-9 shrink-0 rounded-lg overflow-hidden grid place-items-center glow-brand-soft">
            <img src={assetUrl(mosleemLogo)} alt="Designer Mosleem logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-display text-base sm:text-lg tracking-wide leading-[1.05]">
            DESIGNER <span className="text-brand-bright">MOSLEEM</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleClick(e, l.id)}
              className="text-sm font-medium text-foreground/80 hover:text-cyan transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center justify-center rounded-full btn-glass btn-glass-primary font-semibold px-4 sm:px-5 h-10 text-xs sm:text-sm leading-tight text-center"
        >
          Hubungi Kami
        </a>

      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate flex items-center pt-24 pb-14 sm:pt-32 sm:pb-24 md:min-h-[90vh] overflow-hidden bg-band-5"
      style={{ boxShadow: "0 18px 40px -12px rgba(0,0,0,0.75)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${assetUrl(heroBg)})` }}
      />
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "linear-gradient(to bottom, rgba(2,4,15,0.55) 0%, rgba(2,4,15,0.35) 45%, rgba(2,4,15,0.55) 80%, rgba(2,4,15,0.8) 100%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none -z-10" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))" }} />
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(ellipse at top left, rgba(2,4,15,0.7) 0%, rgba(2,4,15,0.35) 35%, transparent 65%)" }}
      />
      {/* Floating creative tool chips */}
      <div className="absolute top-28 left-[6%] hidden lg:block opacity-60">
        <div className="w-16 h-16 rounded-2xl border border-brand-bright/30 bg-brand-medium/40 backdrop-blur-sm grid place-items-center -rotate-12 glow-brand-soft">
          <Palette className="w-7 h-7 text-brand-bright" />
        </div>
      </div>
      <div className="absolute top-44 right-[8%] hidden lg:block opacity-60">
        <div className="w-14 h-14 rounded-2xl border border-gold/40 bg-gold/10 backdrop-blur-sm grid place-items-center rotate-12">
          <ImageIcon className="w-6 h-6 text-gold" />
        </div>
      </div>
      <div className="absolute bottom-24 left-[12%] hidden lg:block opacity-55">
        <div className="w-12 h-12 rounded-xl border border-brand-bright/30 bg-brand-medium/40 backdrop-blur-sm grid place-items-center rotate-6 glow-brand-soft">
          <Globe className="w-5 h-5 text-brand-bright" />
        </div>
      </div>
      <div className="absolute bottom-32 right-[12%] hidden lg:block opacity-55">
        <div className="w-12 h-12 rounded-xl border border-gold/40 bg-gold/10 backdrop-blur-sm grid place-items-center -rotate-12">
          <Sparkles className="w-5 h-5 text-gold" />
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 text-center">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[420px] h-[160px] rounded-full bg-brand-bright/25 blur-[80px] pointer-events-none" />
        <span className="relative inline-flex items-center justify-center gap-2 rounded-full glass px-4 py-1.5 text-xs md:text-sm text-cyan font-medium">
          ✦ Jasa Desain Grafis ✦
        </span>

        <p className="mt-3 mb-5 text-sm md:text-base text-muted-foreground font-medium tracking-wide">
          by Junior Designer
        </p>

        <div className="animate-fade-up">
          <div className="mx-auto w-full text-center">
            <h1 className="text-display text-5xl sm:text-7xl md:text-9xl text-foreground leading-[0.9]" style={{ textShadow: "0 4px 30px rgba(56,189,248,0.35)" }}>
              GRAPHICS
            </h1>
            <h2 className="text-display text-[1.75rem] sm:text-5xl md:text-7xl text-gradient-cyan leading-[1.05]">
              DESIGN SERVICE
            </h2>
          </div>
        </div>


        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-body">
          Wujudkan identitas visual bisnis dan komunitas Anda dengan desain
          profesional yang kreatif dan berkarakter.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center justify-center gap-2 rounded-full btn-glass btn-glass-primary font-semibold px-5 sm:px-7 py-3.5 text-sm md:text-base leading-tight text-center"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Konsultasi via WhatsApp</span>
          </a>
          <a
            href="#katalog"
            className="relative rounded-full btn-glass font-semibold px-7 py-3.5 text-sm md:text-base"
          >
            Lihat Portofolio
          </a>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Palette, title: "Desain Custom & Orisinal", desc: "Setiap karya dibuat khusus sesuai kebutuhan Anda." },
  { icon: Zap, title: "Proses Cepat & Tepat Waktu", desc: "Pengerjaan efisien tanpa mengorbankan kualitas." },
  { icon: RefreshCw, title: "Revisi Hingga Puas", desc: "Kami fleksibel sampai hasil sesuai harapan Anda." },
  { icon: Wallet, title: "Mulai dari 25K", desc: "Harga terjangkau untuk semua kalangan." },
];

function Features() {
  return (
    <section className="section-band bg-band-1 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl glass glass-hover p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/12 border border-gold/40 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-display text-lg text-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const grafisServices = [
  { icon: ImageIcon, title: "Desain Poster", desc: "Kajian Islam, kegiatan, iklan, pendidikan." },
  { icon: Mail, title: "Desain Undangan", desc: "Undangan pernikahan eksklusif dan modern." },
  { icon: BarChart3, title: "Desain Infografis", desc: "Informasi kompleks dikemas visual menarik." },
  { icon: Heart, title: "Kartu Ucapan", desc: "Ucapan spesial untuk momen berharga." },
  { icon: BookOpen, title: "Sampul Buku", desc: "Cover buku yang berkarakter dan menarik." },
];


function ServiceCard({ icon: Icon, title, desc }: { icon: typeof Globe; title: string; desc: string }) {
  return (
    <div className="group rounded-2xl glass glass-hover p-6">
      <div className="w-11 h-11 rounded-lg bg-gradient-brand grid place-items-center mb-4 group-hover:glow-brand-soft transition-all">
        <Icon className="w-5 h-5 text-foreground" />
      </div>
      <h4 className="text-display text-base text-foreground mb-1.5">{title}</h4>
      <p className="text-sm text-body leading-relaxed">{desc}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 py-20 px-6 section-band blob-right bg-band-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest">LAYANAN KAMI</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">
            Solusi Kreatif <span className="text-brand-bright">Lengkap</span>
          </h2>
        </div>

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📌</span>
            <h3 className="text-display text-2xl md:text-3xl">DESAIN GRAFIS</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/60 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {grafisServices.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>

      </div>
    </section>
  );
}


function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % portfolioImages.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + portfolioImages.length) % portfolioImages.length));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <section id="katalog" className="scroll-mt-20 py-20 px-6 section-band bg-band-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest">PORTOFOLIO</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">Hasil Karya Kami</h2>
          <p className="text-body mt-4 max-w-xl mx-auto">
            Beberapa contoh proyek desain yang telah kami kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {bannerImages.map((img, i) => (
            <button
              type="button"
              key={`banner-${i}`}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[5/2] rounded-2xl overflow-hidden glass glass-hover cursor-pointer text-left"
            >
              <img
                src={assetUrl(img)}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-electric/0 group-hover:bg-brand-electric/40 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-10 h-10 text-foreground" />
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {portfolioImages.slice(bannerImages.length).map((img, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setLightbox(i + bannerImages.length)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass glass-hover cursor-pointer text-left"
            >
              <img
                src={assetUrl(img)}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-electric/0 group-hover:bg-brand-electric/40 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-10 h-10 text-foreground" />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex max-w-full items-center justify-center rounded-full btn-glass font-semibold px-5 sm:px-7 py-3 text-sm leading-tight text-center"
          >
            Lihat Semua Karya
          </a>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-overlay/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Tutup"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-foreground/10 hover:bg-foreground/20 border border-foreground/20 text-foreground grid place-items-center transition"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i - 1 + portfolioImages.length) % portfolioImages.length)); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-foreground/10 hover:bg-foreground/20 border border-foreground/20 text-foreground grid place-items-center transition"
          >
            <span className="text-2xl leading-none">‹</span>
          </button>
          <button
            type="button"
            aria-label="Berikutnya"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i + 1) % portfolioImages.length)); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-foreground/10 hover:bg-foreground/20 border border-foreground/20 text-foreground grid place-items-center transition"
          >
            <span className="text-2xl leading-none">›</span>
          </button>
          <img
            src={assetUrl(portfolioImages[lightbox])}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}


function Pricing() {
  return (
    <section id="harga" className="scroll-mt-20 py-20 px-6 section-band blob-right bg-band-4">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-electric/18 blur-3xl rounded-full pointer-events-none" />
        <div className="relative">
          <span className="text-gold text-sm font-semibold tracking-widest">PRICING</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">
            Harga Terjangkau untuk <span className="text-brand-bright">Semua Kalangan</span>
          </h2>

          <div className="my-10 inline-flex items-center justify-center gap-3 rounded-full glass border-gold/60 px-8 py-3">
            <Sparkles className="w-5 h-5 shrink-0 text-gold" />
            <span className="text-display text-2xl md:text-3xl text-gold">Start from 25K</span>
            <Sparkles className="w-5 h-5 shrink-0 text-gold" />
          </div>

          <p className="text-body max-w-xl mx-auto">
            Dapatkan desain profesional dengan harga yang bersahabat. Cocok untuk
            pelaku usaha, komunitas, dan kebutuhan personal.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <PricingSection />
        <CustomSection />
        <TermsSection />
        <FAQSection />
      </div>
    </section>
  );
}


function CTABanner() {
  return (
    <section id="kontak" className="scroll-mt-20 py-12 px-6 section-band bg-band-5">
      <div
        className="max-w-7xl mx-auto rounded-3xl glass p-10 md:p-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(29,107,255,0.22), rgba(56,189,248,0.08))" }}
      >
        <div className="relative">
          <h2 className="text-display text-4xl md:text-6xl text-foreground">
            Siap Tampil Lebih Profesional?
          </h2>
          <p className="mt-5 text-body text-lg max-w-2xl mx-auto">
            Konsultasikan kebutuhan desain Anda sekarang — <span className="font-bold text-gold">GRATIS!</span>
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full btn-glass btn-glass-primary font-bold px-6 sm:px-8 py-4 text-sm sm:text-base leading-tight text-center"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Chat WhatsApp Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--footer)" }} className="pt-16 pb-8 px-6 section-band blob-right">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-brand-bright/20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg overflow-hidden grid place-items-center">
                <img src={assetUrl(mosleemLogo)} alt="Designer Mosleem logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-display text-lg">
                DESIGNER <span className="text-brand-bright">MOSLEEM</span>
              </span>
            </div>
            <p className="text-sm text-body leading-relaxed">
              Jasa desain grafis profesional untuk bisnis,
              komunitas, dan acara Anda.
            </p>
          </div>

          <div>
            <h4 className="text-display text-sm tracking-wider text-gold mb-4">MENU CEPAT</h4>
            <ul className="space-y-2 text-sm text-body">
              {["Beranda", "Layanan", "Katalog", "Harga", "Kontak"].map((m) => (
                <li key={m}>
                  <a
                    href={`#${m.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(m.toLowerCase());
                    }}
                    className="hover:text-brand-bright transition-colors"
                  >
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-display text-sm tracking-wider text-gold mb-4">KONTAK</h4>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-brand-bright transition-colors mb-4"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp: {WA_DISPLAY}</span>
            </a>
            <div className="flex gap-3 mt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-brand-medium/70 hover:bg-brand-electric/80 grid place-items-center transition-all hover:glow-brand-soft"
              >
                <MessageCircle className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-foreground/50 mt-8">
          © 2025 Designer Mosleem. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const t = window.setTimeout(() => scrollToSection(hash), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Gallery />
        
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
