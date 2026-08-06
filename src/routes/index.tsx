import { createFileRoute, Link } from "@tanstack/react-router";
import mosleemLogo from "@/assets/mosleem-logo.jpeg.asset.json";
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
const bannerImages = [p20, p21];
const portfolioImages = [...bannerImages, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19];
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
  LayoutTemplate,
  Users,
  ShoppingBag,
  Star,
  ZoomIn,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const WA_URL = "https://wa.me/6289939662344";
const WA_DISPLAY = "+62 899 3966 234";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Designer Mosleem — Jasa Desain Grafis & Website Profesional" },
      {
        name: "description",
        content:
          "Solusi Kreatif Digital untuk Bisnis dan Komunitas Anda. Jasa desain poster, undangan, infografis, dan pembuatan website mulai dari 25K.",
      },
      { property: "og:title", content: "Designer Mosleem — Jasa Kreatif Digital" },
      {
        property: "og:description",
        content:
          "Desain grafis & pembuatan website profesional untuk pelaku usaha, komunitas Islam, dan organisasi.",
      },
    ],
  }),
  component: Home,
});

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#layanan", label: "Layanan" },
    { href: "#katalog", label: "Katalog" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(26,5,51,0.75)] border-b border-[rgba(232,181,35,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg overflow-hidden grid place-items-center glow-violet-soft">
            <img src={mosleemLogo.url} alt="Designer Mosleem logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-display text-lg tracking-wide">
            DESIGNER <span className="text-violet-bright">MOSLEEM</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/harga"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Harga
          </Link>
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-violet hover:bg-violet-bright/90 text-white font-semibold px-5 py-2.5 text-sm transition-all hover:glow-violet-soft"
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
      className="relative pt-32 pb-24 overflow-hidden noise-bg"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,123,199,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(139,123,199,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-electric/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 -left-24 w-[380px] h-[380px] rounded-full bg-violet-bright/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[420px] h-[420px] rounded-full bg-gold/10 blur-[110px] pointer-events-none" />

      {/* Floating creative tool chips */}
      <div className="absolute top-28 left-[6%] hidden lg:block opacity-60">
        <div className="w-16 h-16 rounded-2xl border border-violet-bright/30 bg-violet-medium/40 backdrop-blur-sm grid place-items-center -rotate-12 glow-violet-soft">
          <Palette className="w-7 h-7 text-violet-bright" />
        </div>
      </div>
      <div className="absolute top-44 right-[8%] hidden lg:block opacity-60">
        <div className="w-14 h-14 rounded-2xl border border-gold/40 bg-[rgba(232,181,35,0.1)] backdrop-blur-sm grid place-items-center rotate-12">
          <ImageIcon className="w-6 h-6 text-gold" />
        </div>
      </div>
      <div className="absolute bottom-24 left-[12%] hidden lg:block opacity-55">
        <div className="w-12 h-12 rounded-xl border border-violet-bright/30 bg-violet-medium/40 backdrop-blur-sm grid place-items-center rotate-6 glow-violet-soft">
          <Globe className="w-5 h-5 text-violet-bright" />
        </div>
      </div>
      <div className="absolute bottom-32 right-[12%] hidden lg:block opacity-55">
        <div className="w-12 h-12 rounded-xl border border-gold/40 bg-[rgba(232,181,35,0.1)] backdrop-blur-sm grid place-items-center -rotate-12">
          <Sparkles className="w-5 h-5 text-gold" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-transparent px-4 py-1.5 text-xs md:text-sm text-gold font-medium">
          ✦ Jasa Desain Grafis & Pembuatan Website ✦
        </span>

        <p className="mt-3 mb-5 text-sm md:text-base text-gold/80 font-medium tracking-wide">
          by Junior Designer
        </p>

        <div className="animate-fade-up">
          <div className="relative inline-block text-left">
            <h1 className="text-display text-6xl sm:text-7xl md:text-9xl text-white leading-[0.9]">
              GRAPHICS
            </h1>
            <h2 className="text-display text-4xl sm:text-5xl md:text-7xl text-violet-bright leading-[0.95]">
              DESIGN SERVICE
            </h2>
          </div>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-white/75">
          Wujudkan identitas visual bisnis dan komunitas Anda dengan desain
          profesional yang kreatif dan berkarakter.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-violet hover:bg-violet-bright/90 text-white font-semibold px-7 py-3.5 text-sm md:text-base transition-all hover:glow-violet-soft inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Konsultasi via WhatsApp
          </a>
          <a
            href="#katalog"
            className="rounded-full border-2 border-white/70 hover:border-white bg-transparent hover:bg-white/10 text-white font-semibold px-7 py-3.5 text-sm md:text-base transition-all"
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
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-violet-medium/40 backdrop-blur-sm border border-white/10 p-6 transition-all hover:border-violet-bright/50 hover:-translate-y-1 hover:glow-violet-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(232,181,35,0.12)] border border-gold/40 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-display text-lg text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/65">{f.desc}</p>
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

const webServices = [
  { icon: Globe, title: "Company Profile", desc: "Website resmi yang merepresentasikan brand Anda." },
  { icon: LayoutTemplate, title: "Landing Page / Portofolio", desc: "Halaman konversi & portofolio profesional." },
  { icon: Users, title: "Website Komunitas", desc: "Platform organisasi & komunitas yang rapi." },
  { icon: ShoppingBag, title: "Toko Online", desc: "Solusi jualan online yang mudah dikelola." },
];

function ServiceCard({ icon: Icon, title, desc }: { icon: typeof Globe; title: string; desc: string }) {
  return (
    <div className="group rounded-2xl bg-violet-medium/40 border border-white/10 p-6 transition-all hover:border-violet-bright/50 hover:glow-violet-soft hover:-translate-y-1">
      <div className="w-11 h-11 rounded-lg bg-gradient-violet grid place-items-center mb-4 group-hover:glow-violet-soft transition-all">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h4 className="text-display text-base text-white mb-1.5">{title}</h4>
      <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="layanan" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest">LAYANAN KAMI</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">
            Solusi Kreatif <span className="text-violet-bright">Lengkap</span>
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

        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📌</span>
            <h3 className="text-display text-2xl md:text-3xl">PEMBUATAN WEBSITE</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/60 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {webServices.map((s) => <ServiceCard key={s.title} {...s} />)}
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
    <section id="katalog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest">PORTOFOLIO</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">Hasil Karya Kami</h2>
          <p className="text-white/65 mt-4 max-w-xl mx-auto">
            Beberapa contoh proyek desain & website yang telah kami kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {bannerImages.map((img, i) => (
            <button
              type="button"
              key={`banner-${i}`}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[5/2] rounded-2xl overflow-hidden bg-violet-medium/50 border border-white/10 cursor-pointer text-left"
            >
              <img
                src={img.url}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-violet-electric/0 group-hover:bg-violet-electric/40 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-10 h-10 text-white" />
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
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-violet-medium/50 border border-white/10 cursor-pointer text-left"
            >
              <img
                src={img.url}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-violet-electric/0 group-hover:bg-violet-electric/40 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex rounded-full border-2 border-violet-bright/60 hover:bg-violet-bright/20 text-white font-semibold px-7 py-3 text-sm transition-all hover:glow-violet-soft"
          >
            Lihat Semua Karya
          </a>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Tutup"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white grid place-items-center transition"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i - 1 + portfolioImages.length) % portfolioImages.length)); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white grid place-items-center transition"
          >
            <span className="text-2xl leading-none">‹</span>
          </button>
          <button
            type="button"
            aria-label="Berikutnya"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? i : (i + 1) % portfolioImages.length)); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white grid place-items-center transition"
          >
            <span className="text-2xl leading-none">›</span>
          </button>
          <img
            src={portfolioImages[lightbox].url}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Ketua Komunitas Kajian",
    quote: "Desain poster kajian kami jadi sangat menarik. Proses cepat dan harga sangat bersahabat. Sangat direkomendasikan!",
  },
  {
    name: "Siti Rahmawati",
    role: "Owner Online Shop",
    quote: "Website toko online saya selesai tepat waktu dengan tampilan yang profesional. Penjualan meningkat signifikan.",
  },
  {
    name: "Muhammad Ridho",
    role: "Panitia Acara",
    quote: "Undangan digital dan banner acara dibuat dengan sangat detail. Tim Designer Mosleem sangat responsif dan ramah.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest">TESTIMONI</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">
            Apa Kata <span className="text-violet-bright">Klien Kami</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-violet-medium/40 border border-gold/40 p-7 hover:border-gold transition-all hover:glow-violet-soft"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/85 italic leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-violet-bright/20">
                <div className="w-11 h-11 rounded-full bg-gradient-violet grid place-items-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="harga" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-electric/18 blur-3xl rounded-full pointer-events-none" />
        <div className="relative">
          <span className="text-gold text-sm font-semibold tracking-widest">PRICING</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">
            Harga Terjangkau untuk <span className="text-violet-bright">Semua Kalangan</span>
          </h2>

          <div className="my-10 inline-flex items-center gap-3 rounded-full border-2 border-gold bg-[rgba(232,181,35,0.1)] px-8 py-3">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-display text-2xl md:text-3xl text-gold">Start from 25K</span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>

          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Dapatkan desain profesional dengan harga yang bersahabat. Cocok untuk
            pelaku usaha, komunitas, dan kebutuhan personal.
          </p>

          <Link
            to="/harga"
            className="inline-flex rounded-full bg-gradient-violet hover:bg-violet-bright/90 text-white font-semibold px-7 py-3.5 transition-all hover:glow-violet-soft"
          >
            Lihat Detail Harga
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="kontak" className="py-12 px-6">
      <div
        className="max-w-7xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        style={{ background: "var(--gradient-violet)" }}
      >
        <div className="relative">
          <h2 className="text-display text-4xl md:text-6xl text-white">
            Siap Tampil Lebih Profesional?
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-2xl mx-auto">
            Konsultasikan kebutuhan desain Anda sekarang — <span className="font-bold text-gold">GRATIS!</span>
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-violet-deep hover:bg-gold hover:text-violet-deep font-bold px-8 py-4 text-base transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--footer)" }} className="pt-16 pb-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-violet-bright/20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg overflow-hidden grid place-items-center">
                <img src={mosleemLogo.url} alt="Designer Mosleem logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-display text-lg">
                DESIGNER <span className="text-violet-bright">MOSLEEM</span>
              </span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Jasa desain grafis & pembuatan website profesional untuk bisnis,
              komunitas, dan acara Anda.
            </p>
          </div>

          <div>
            <h4 className="text-display text-sm tracking-wider text-gold mb-4">MENU CEPAT</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Beranda", "Layanan", "Katalog", "Kontak"].map((m) => (
                <li key={m}>
                  <a href={`#${m.toLowerCase()}`} className="hover:text-violet-bright transition-colors">{m}</a>
                </li>
              ))}
              <li>
                <Link to="/harga" className="hover:text-violet-bright transition-colors">Harga</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-display text-sm tracking-wider text-gold mb-4">KONTAK</h4>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-violet-bright transition-colors mb-4"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: {WA_DISPLAY}
            </a>
            <div className="flex gap-3 mt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-violet-medium/70 hover:bg-violet-electric/80 grid place-items-center transition-all hover:glow-violet-soft"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-white/50 mt-8">
          © 2025 Designer Mosleem. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen text-white">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Gallery />
        <Testimonials />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
