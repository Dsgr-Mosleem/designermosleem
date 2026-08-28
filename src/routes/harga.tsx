import { assetUrl } from "@/lib/asset-url";
import { WA_URL, WA_DISPLAY } from "@/lib/whatsapp";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles,
  MessageCircle,
  Check,
  X,
  ArrowLeft,
  Star,
  Crown,
  Rocket,
  Package,
  Plus,
  Minus,
} from "lucide-react";
import mosleemLogo from "@/assets/mosleem-logo.jpeg.asset.json";


export const Route = createFileRoute("/harga")({
  head: () => ({
    meta: [
      { title: "Katalog Harga Lengkap — Designer Mosleem" },
      {
        name: "description",
        content:
          "Pilih paket desain grafis sesuai kebutuhanmu. Mulai dari Rp 25.000. Tersedia juga paket custom dan konsultasi gratis.",
      },
      { property: "og:title", content: "Katalog Harga Lengkap — Designer Mosleem" },
      {
        property: "og:description",
        content:
          "Paket desain grafis transparan & terjangkau. Mulai dari Rp 25.000 dengan opsi custom dan konsultasi gratis.",
      },
    ],
  }),
  component: HargaPage,
});

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/#layanan", label: "Layanan" },
    { href: "/#katalog", label: "Katalog" },
    { href: "/harga", label: "Harga", active: true },
    { href: "/#kontak", label: "Kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(26,5,51,0.75)] border-b border-[rgba(232,181,35,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <div className="w-9 h-9 shrink-0 rounded-lg overflow-hidden grid place-items-center glow-violet-soft">
            <img
              src={assetUrl(mosleemLogo)}
              alt="Designer Mosleem logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-display text-base sm:text-lg tracking-wide leading-[1.05]">
            DESIGNER <span className="text-violet-bright">MOSLEEM</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                l.active ? "text-gold" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-gradient-violet text-white font-semibold px-4 sm:px-5 h-10 text-xs sm:text-sm leading-none transition-all hover:glow-violet-soft inline-flex items-center justify-center whitespace-nowrap gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Hubungi Kami
        </a>

      </div>
    </header>
  );
}

function PageHero() {
  return (
    <section
      className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden noise-bg"
      style={{ background: "var(--gradient-hero)" }}
    >
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
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-electric/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-start mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>

        <h1 className="text-display text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95]">
          Katalog Harga Lengkap
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/75">
          Pilih paket sesuai kebutuhanmu, atau konsultasikan kebutuhan custom-mu
          langsung ke kami
        </p>
      </div>
    </section>
  );
}

type Plan = {
  name: string;
  price: string;
  label: string;
  suit: string;
  features: string[];
  limitations: string[];
  cta: string;
  icon: typeof Package;
  popular?: boolean;
};

const grafisPlans: Plan[] = [
  {
    name: "Basic",
    price: "Rp 25.000",
    label: "Desain Simple",
    suit: "Poster acara sederhana, flyer, feed Instagram",
    icon: Package,
    features: [
      "1 desain custom",
      "Ukuran sesuai kebutuhan (A4/Instagram/Story)",
      "Revisi 1x",
      "File JPG/PNG",
      "Estimasi 1 hari kerja",
    ],
    limitations: [
      "Tanpa file source (PSD/AI)",
      "Tanpa konsultasi konsep",
      "Tidak termasuk foto berbayar/premium",
    ],
    cta: "Tanya Lebih Lanjut",
  },
  {
    name: "Standard",
    price: "Rp 50.000",
    label: "Desain Profesional",
    suit: "Undangan pernikahan, poster event Islami, infografis",
    icon: Rocket,
    popular: true,
    features: [
      "1 desain custom premium",
      "Revisi hingga 3x",
      "File JPG/PNG + PDF",
      "Konsultasi konsep singkat",
      "Estimasi 1-2 hari kerja",
      "Free 1 variasi warna",
    ],
    limitations: [
      "File source (AI/PSD) tambahan +Rp 20.000",
      "Tidak termasuk cetak fisik",
    ],
    cta: "Tanya Lebih Lanjut",
  },
  {
    name: "Premium",
    price: "Rp 100.000",
    label: "Desain Eksklusif",
    suit: "Cover buku, branding kit, desain multi-halaman",
    icon: Crown,
    features: [
      "Desain custom + konsep mendalam",
      "Revisi hingga 5x",
      "File lengkap (JPG, PNG, PDF, source AI/PSD)",
      "Konsultasi via WhatsApp",
      "Estimasi 2-4 hari kerja",
      "Free 2 variasi desain awal",
    ],
    limitations: [
      "Untuk kebutuhan lebih dari 5 halaman, dikenakan biaya tambahan",
    ],
    cta: "Tanya Lebih Lanjut",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.icon;
  return (
    <div
      className={`relative rounded-3xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 flex flex-col h-full ${
        plan.popular
          ? "bg-violet-medium/70 border-[3px] border-gold/80 glow-violet-soft -translate-y-2 md:-translate-y-3"
          : "bg-violet-medium/40 border border-white/10 hover:-translate-y-1.5 hover:glow-violet-soft hover:border-violet-bright/50"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold text-violet-deep font-bold text-xs px-4 py-1.5 tracking-wide shadow-lg">
          ⭐ PALING LARIS
        </div>
      )}

      <div
        className={`w-14 h-14 rounded-2xl grid place-items-center mb-5 ${
          plan.popular
            ? "bg-gradient-violet glow-violet-soft"
            : "bg-[rgba(232,181,35,0.12)] border border-gold/40"
        }`}
      >
        <Icon className={`w-7 h-7 ${plan.popular ? "text-white" : "text-gold"}`} />
      </div>

      <h3 className="text-display text-2xl md:text-3xl text-white mb-1">
        {plan.name}
      </h3>
      <div className="text-display text-3xl md:text-4xl text-gold mb-3">
        {plan.price}
      </div>
      <p className="text-sm font-semibold text-violet-bright mb-2">
        {plan.label}
      </p>
      <p className="text-sm text-white/65 mb-5 leading-relaxed">
        Cocok untuk: {plan.suit}
      </p>

      <ul className="space-y-2.5 mb-5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                plan.popular ? "text-gold" : "text-violet-bright"
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <ul className="space-y-2.5 mb-6">
        {plan.limitations.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
            <X className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto rounded-full font-semibold px-6 py-3 text-sm text-center transition-all hover:scale-[1.03] inline-flex items-center justify-center gap-2 bg-gradient-violet text-white hover:glow-violet-soft"
      >
        <MessageCircle className="w-4 h-4" />
        {plan.cta}
      </a>
    </div>
  );
}

function GraphicDesignSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold tracking-widest">
            KATEGORI JASA DESAIN GRAFIS
          </span>
          <h3 className="text-display text-3xl md:text-5xl mt-3">
            Paket Desain <span className="text-violet-bright">Grafis</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {grafisPlans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomPackageSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl border border-gold/60 glow-violet-soft p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(107,95,168,0.35) 0%, rgba(26,5,51,0.85) 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gold/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-[260px] h-[260px] rounded-full bg-violet-electric/15 blur-[90px] pointer-events-none" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-gradient-violet grid place-items-center mx-auto mb-5 glow-violet-soft">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-display text-3xl md:text-5xl text-white mb-4">
              Punya Kebutuhan Khusus?
            </h3>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
              Setiap project itu unik. Kalau paket di atas belum sesuai dengan
              kebutuhanmu — baik dari sisi jumlah revisi, kompleksitas desain,
              jumlah halaman, atau permintaan khusus lainnya — kami siap
              diskusikan solusi custom sesuai budget dan kebutuhanmu.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-10 max-w-4xl mx-auto">
              {[
                "Konsultasi gratis sebelum penentuan harga",
                "Harga disesuaikan dengan kompleksitas & scope project",
                "Fleksibel untuk kebutuhan jangka panjang/berkelanjutan",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-white/90"
                >
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10 max-w-3xl mx-auto">
              {[
                "Harga final ditentukan setelah diskusi kebutuhan",
                "Estimasi waktu pengerjaan menyesuaikan scope",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-white/55"
                >
                  <X className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-violet-deep hover:bg-white font-bold px-8 py-4 text-base transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Custom Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const terms = [
  "Pembayaran dilakukan minimal 50% di awal (DP) sebagai tanda jadi",
  "Revisi di luar ketentuan paket dikenakan biaya tambahan Rp 10.000 - Rp 50.000 tergantung kompleksitas",
  "Pembatalan setelah proses desain dimulai, DP tidak dapat dikembalikan",
  "Estimasi waktu pengerjaan dihitung setelah brief & materi lengkap diterima",
  "Harga dapat berubah sewaktu-waktu sesuai kompleksitas project",
  "Request mendesak (same-day) dikenakan biaya tambahan (rush fee) 50% dari harga normal",
  "Hak cipta desain sepenuhnya milik klien setelah pelunasan",
];

function TermsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-violet-deep/60 border border-white/10 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[rgba(232,181,35,0.12)] border border-gold/40 grid place-items-center">
              <Star className="w-5 h-5 text-gold" />
            </div>
            <h3 className="text-display text-2xl md:text-3xl text-white">
              Ketentuan Umum
            </h3>
          </div>

          <ol className="space-y-4">
            {terms.map((t, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-sm md:text-base text-white/85"
              >
                <span className="shrink-0 w-7 h-7 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-bold grid place-items-center">
                  {i + 1}
                </span>
                <span className="leading-relaxed pt-0.5">{t}</span>
              </li>
            ))}
          </ol>
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
          <h2 className="text-display text-3xl md:text-5xl text-white">
            Masih Bingung Pilih Paket?
          </h2>
          <p className="mt-5 text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            Konsultasikan kebutuhan Anda —{" "}
            <span className="font-bold text-gold">GRATIS</span> dan tanpa
            komitmen.
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
    <footer
      style={{ backgroundColor: "var(--footer)" }}
      className="pt-16 pb-8 px-6 mt-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-violet-bright/20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg overflow-hidden grid place-items-center">
                <img
                  src={assetUrl(mosleemLogo)}
                  alt="Designer Mosleem logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-display text-lg">
                DESIGNER <span className="text-violet-bright">MOSLEEM</span>
              </span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Jasa desain grafis profesional untuk bisnis,
              komunitas, dan acara Anda.
            </p>
          </div>

          <div>
            <h4 className="text-display text-sm tracking-wider text-gold mb-4">
              MENU CEPAT
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-violet-bright transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <a href="/#layanan" className="hover:text-violet-bright transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="/#katalog" className="hover:text-violet-bright transition-colors">
                  Katalog
                </a>
              </li>
              <li>
                <Link to="/harga" className="hover:text-violet-bright transition-colors">
                  Harga
                </Link>
              </li>
              <li>
                <a href="/#kontak" className="hover:text-violet-bright transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-display text-sm tracking-wider text-gold mb-4">
              KONTAK
            </h4>
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

const faqs = [
  {
    q: "Berapa kali revisi yang didapatkan?",
    a: "Jumlah revisi tergantung paket yang dipilih: Basic mendapat 1x revisi, Standard hingga 3x revisi, dan Premium hingga 5x revisi. Revisi di luar ketentuan paket akan dikenakan biaya tambahan.",
  },
  {
    q: "Apakah saya mendapatkan file source seperti PSD atau AI?",
    a: "File source (PSD/AI) tersedia untuk paket Premium secara gratis. Untuk paket Standard, file source bisa didapatkan dengan tambahan biaya Rp 20.000. Paket Basic tidak menyertakan file source.",
  },
  {
    q: "Berapa lama estimasi waktu pengerjaan?",
    a: "Estimasi waktu pengerjaan dihitung setelah brief dan materi lengkap diterima. Umumnya paket Basic 1 hari kerja, Standard 1-2 hari kerja, dan Premium 2-4 hari kerja. Durasi bisa lebih cepat atau lebih lama tergantung kompleksitas desain.",
  },
  {
    q: "Apakah bisa request pengerjaan cepat atau same-day?",
    a: "Bisa. Request mendesak atau same-day dikenakan biaya tambahan rush fee sebesar 50% dari harga paket normal. Ketersediaan tergantung jadwal pengerjaan saat itu.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Pembayaran dilakukan minimal 50% di awal sebagai down payment (DP) untuk memulai pengerjaan. Sisa pelunasan dibayarkan sebelum file final dikirim. Pembayaran bisa melalui transfer bank atau e-wallet yang akan diinformasikan setelah deal.",
  },
  {
    q: "Apakah bisa konsultasi dulu sebelum order?",
    a: "Tentu, konsultasi gratis tersedia untuk membahas kebutuhan, konsep, budget, dan estimasi waktu. Silakan klik tombol WhatsApp untuk berdiskusi tanpa komitmen.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold tracking-widest">
            FAQ
          </span>
          <h3 className="text-display text-3xl md:text-5xl mt-3">
            Pertanyaan yang Sering <span className="text-violet-bright">Diajukan</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-violet-medium/50 border-gold/50 glow-violet-soft"
                    : "bg-violet-medium/30 border-white/10 hover:border-violet-bright/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-white">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full grid place-items-center border transition-colors ${
                      isOpen
                        ? "bg-gold border-gold text-violet-deep"
                        : "border-violet-bright/40 text-violet-bright"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`px-5 md:px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? "pb-5 md:pb-6 max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm md:text-base text-white/75 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HargaPage() {
  return (
    <div className="min-h-screen text-white">
      <NavBar />
      <main>
        <PageHero />
        <GraphicDesignSection />
        <CustomPackageSection />
        <TermsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
