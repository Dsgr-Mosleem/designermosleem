import { createFileRoute } from "@tanstack/react-router";
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
    { href: "#harga", label: "Harga" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(26,5,51,0.75)] border-b border-[rgba(212,160,23,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-violet grid place-items-center glow-violet-soft">
            <Sparkles className="w-5 h-5 text-white" />
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
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-violet-electric hover:bg-violet-bright text-white font-semibold px-5 py-2.5 text-sm transition-all hover:glow-violet"
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
      {/* decorative slashes */}
      <div className="absolute top-24 right-0 w-40 h-24 slash-deco opacity-60 hidden md:block" />
      <div className="absolute bottom-10 left-0 w-32 h-20 slash-deco opacity-40 hidden md:block" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-electric/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-[rgba(212,160,23,0.08)] px-4 py-1.5 text-xs md:text-sm text-gold font-medium">
          ✦ Jasa Desain Grafis & Pembuatan Website ✦
        </span>

        <div className="mt-8 animate-fade-up">
          <p className="text-script text-3xl md:text-5xl text-violet-bright -mb-2 md:-mb-4">
            Junior
          </p>
          <h1 className="text-display text-6xl sm:text-7xl md:text-9xl text-white">
            GRAPHICS
          </h1>
          <h2 className="text-display text-4xl sm:text-5xl md:text-7xl text-violet-bright mt-2">
            DESIGN SERVICE
          </h2>
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
            className="rounded-full bg-violet-electric hover:bg-violet-bright text-white font-semibold px-7 py-3.5 text-sm md:text-base transition-all hover:glow-violet inline-flex items-center gap-2"
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
              className="group rounded-2xl bg-violet-medium/40 backdrop-blur-sm border border-violet-bright/30 p-6 transition-all hover:border-violet-bright hover:-translate-y-1 hover:glow-violet-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(212,160,23,0.12)] border border-gold/40 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
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
    <div className="group rounded-2xl bg-violet-medium/40 border border-violet-bright/25 p-6 transition-all hover:border-violet-bright hover:glow-violet-soft hover:-translate-y-1">
      <div className="w-11 h-11 rounded-lg bg-gradient-violet grid place-items-center mb-4 group-hover:glow-violet transition-all">
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
          <span className="text-gold text-sm font-semibold tracking-widest">/// LAYANAN KAMI</span>
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

const galleryCategories = [
  "Poster Kajian",
  "Undangan",
  "Infografis",
  "Banner",
  "Sampul Buku",
  "Kartu Ucapan",
];

function Gallery() {
  return (
    <section id="katalog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest">/// PORTOFOLIO</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">Hasil Karya Kami</h2>
          <p className="text-white/65 mt-4 max-w-xl mx-auto">
            Beberapa contoh proyek desain & website yang telah kami kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {galleryCategories.map((cat, i) => (
            <div
              key={cat}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-violet-medium/50 border border-violet-bright/25 cursor-pointer"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, rgba(124,58,237,${0.25 + (i % 3) * 0.1}), rgba(45,10,107,0.6))`,
                }}
              />
              <div className="absolute inset-0 slash-deco opacity-10" />
              <div className="absolute inset-0 grid place-items-center">
                <ImageIcon className="w-14 h-14 text-white/30 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-violet-electric/0 group-hover:bg-violet-electric/70 transition-all duration-300 grid place-items-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-violet-deep to-transparent">
                <span className="text-sm font-semibold text-white">{cat}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex rounded-full border-2 border-violet-bright hover:bg-violet-bright text-white font-semibold px-7 py-3 text-sm transition-all hover:glow-violet"
          >
            Lihat Semua Karya
          </a>
        </div>
      </div>
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
          <span className="text-gold text-sm font-semibold tracking-widest">/// TESTIMONI</span>
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
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-electric/30 blur-3xl rounded-full pointer-events-none" />
        <div className="relative">
          <span className="text-gold text-sm font-semibold tracking-widest">/// PRICING</span>
          <h2 className="text-display text-4xl md:text-6xl mt-3">
            Harga Terjangkau untuk <span className="text-violet-bright">Semua Kalangan</span>
          </h2>

          <div className="my-10 inline-flex items-center gap-3 rounded-full border-2 border-gold bg-[rgba(212,160,23,0.1)] px-8 py-3">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-display text-2xl md:text-3xl text-gold">Start from 25K</span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>

          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Dapatkan desain profesional dengan harga yang bersahabat. Cocok untuk
            pelaku usaha, komunitas, dan kebutuhan personal.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-violet-electric hover:bg-violet-bright text-white font-semibold px-7 py-3.5 transition-all hover:glow-violet"
          >
            Lihat Detail Harga
          </a>
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
        <div className="absolute top-0 right-0 w-48 h-32 slash-deco opacity-25" />
        <div className="absolute bottom-0 left-0 w-48 h-32 slash-deco opacity-25" />
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
              <div className="w-9 h-9 rounded-lg bg-gradient-violet grid place-items-center">
                <Sparkles className="w-5 h-5 text-white" />
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
              {["Beranda", "Layanan", "Katalog", "Harga", "Kontak"].map((m) => (
                <li key={m}>
                  <a href={`#${m.toLowerCase()}`} className="hover:text-violet-bright transition-colors">{m}</a>
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
                className="w-10 h-10 rounded-full bg-violet-medium hover:bg-violet-electric grid place-items-center transition-all hover:glow-violet-soft"
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
