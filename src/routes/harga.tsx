import { assetUrl } from "@/lib/asset-url";
import { WA_URL, WA_DISPLAY } from "@/lib/whatsapp";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  ArrowLeft,
  Star,
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

type TableRow = {
  package: string;
  price: string;
  suit: string;
  includes: string;
  formats: string;
};

const grafisRows: TableRow[] = [
  {
    package: "Basic",
    price: "Rp25.000 – Rp50.000",
    suit: "Konten harian, kebutuhan personal",
    includes:
      "1 desain (feed IG, poster sederhana, quotes), 1x revisi, 1-2 hari kerja",
    formats: "JPG, PNG (siap pakai)",
  },
  {
    package: "Standard",
    price: "Rp75.000 – Rp150.000",
    suit: "Pelaku usaha kecil, komunitas",
    includes:
      "Logo sederhana / banner / X-banner, 2x revisi, file HD + source, 2-3 hari kerja",
    formats: "JPG, PNG, PDF",
  },
  {
    package: "Premium",
    price: "Rp200.000 – Rp500.000",
    suit: "Bisnis & organisasi yang butuh identitas lengkap",
    includes:
      "Paket branding (logo + kartu nama + template sosmed), revisi unlimited (batas wajar), 4-5 hari kerja",
    formats: "JPG, PNG, PDF + source file (AI/PSD/CDR)",
  },
];

const customRows: TableRow[] = [
  {
    package: "Custom",
    price: "Nego, berdasarkan brief & scope",
    suit:
      "Proyek besar, permintaan khusus lembaga/institusi (misal sistem sekolah, tool internal), atau kombinasi banyak layanan sekaligus",
    includes:
      "Disesuaikan sepenuhnya dengan scope project — bisa gabungan desain, website, dan/atau sistem/tool",
    formats:
      "Sesuai kebutuhan project (bisa termasuk AI/PSD/Figma, source code, PDF, dll) — dikonfirmasi saat konsultasi",
  },
];

const columns: { key: keyof TableRow; label: string; width: string }[] = [
  { key: "package", label: "Paket", width: "14%" },
  { key: "price", label: "Harga", width: "18%" },
  { key: "suit", label: "Cocok Untuk", width: "20%" },
  { key: "includes", label: "Termasuk", width: "30%" },
  { key: "formats", label: "Format File", width: "18%" },
];

function PricingTable({
  title,
  icon,
  rows,
}: {
  title: string;
  icon: string;
  rows: TableRow[];
}) {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-widest">
            <span className="text-lg">{icon}</span>
            {title}
          </span>
          <h3 className="text-display text-3xl md:text-5xl mt-3">
            Detail Harga <span className="text-violet-bright">{title}</span>
          </h3>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gold/15 text-gold text-left">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-6 py-4 text-sm font-bold tracking-wide"
                    style={{ width: col.width }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-white/10 ${
                    i % 2 === 0
                      ? "bg-violet-medium/25"
                      : "bg-violet-medium/10"
                  } hover:bg-violet-medium/40 transition-colors`}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-6 py-5 align-top ${
                        col.key === "package"
                          ? "font-bold text-white"
                          : col.key === "price"
                          ? "text-gold font-semibold"
                          : "text-white/80"
                      } ${col.key === "includes" ? "leading-relaxed text-white/85" : ""}`}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-violet-medium/25 p-5 hover:border-violet-bright/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-display text-xl text-white">
                  {row.package}
                </span>
                <span className="text-gold font-bold text-sm text-right max-w-[55%]">
                  {row.price}
                </span>
              </div>
              <dl className="space-y-3">
                {columns
                  .filter((c) => c.key !== "package" && c.key !== "price")
                  .map((col) => (
                    <div key={col.key}>
                      <dt className="text-xs uppercase tracking-wider text-violet-bright font-semibold mb-1">
                        {col.label}
                      </dt>
                      <dd
                        className={`text-sm text-white/80 ${
                          col.key === "includes" ? "leading-relaxed" : ""
                        }`}
                      >
                        {row[col.key]}
                      </dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <>
      <PricingTable title="Desain Grafis" icon="🎨" rows={grafisRows} />
      <PricingTable title="Custom" icon="✨" rows={customRows} />
    </>
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
