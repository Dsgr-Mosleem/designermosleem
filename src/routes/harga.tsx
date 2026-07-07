import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles,
  MessageCircle,
  Check,
  X,
  Palette,
  Globe,
  Zap,
  Plus,
  Package,
  Rocket,
  Crown,
  LayoutTemplate,
  Server,
  Layers,
} from "lucide-react";

const WA_URL = "https://wa.me/6289939662344";
const WA_DISPLAY = "+62 899 3966 234";

export const Route = createFileRoute("/harga")({
  head: () => ({
    meta: [
      { title: "Harga & Paket — Designer Mosleem" },
      {
        name: "description",
        content:
          "Paket harga transparan & terjangkau untuk jasa desain grafis dan pembuatan website. Mulai dari 25K tanpa biaya tersembunyi.",
      },
      { property: "og:title", content: "Paket Harga — Designer Mosleem" },
      {
        property: "og:description",
        content:
          "Pilih paket desain grafis atau pembuatan website sesuai kebutuhan. Harga jelas, mulai 25K.",
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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-violet grid place-items-center glow-violet-soft">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-display text-lg tracking-wide">
            DESIGNER <span className="text-violet-bright">MOSLEEM</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                l.active
                  ? "text-gold"
                  : "text-white/80 hover:text-white"
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
          className="rounded-full bg-violet-electric hover:bg-violet-bright text-white font-semibold px-5 py-2.5 text-sm transition-all hover:glow-violet"
        >
          Hubungi Kami
        </a>
      </div>
    </header>
  );
}

function PageHero() {
  return (
    <section
      className="relative pt-32 pb-16 overflow-hidden noise-bg"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(157,78,221,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(157,78,221,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-electric/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[420px] h-[420px] rounded-full bg-gold/10 blur-[110px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-transparent px-4 py-1.5 text-xs md:text-sm text-gold font-medium">
          ✦ Harga Transparan & Terjangkau ✦
        </span>

        <div className="mt-8 animate-fade-up">
          <h1 className="text-display text-6xl sm:text-7xl md:text-8xl text-white leading-[0.95]">
            PAKET
          </h1>
          <h2 className="text-display text-5xl sm:text-6xl md:text-7xl text-violet-bright leading-[0.95] mt-2">
            HARGA
          </h2>
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-white/75">
          Kami menawarkan paket harga yang fleksibel dan terjangkau untuk semua
          kalangan — mulai dari individu hingga perusahaan besar. Tidak ada
          biaya tersembunyi, semua transparan dan jelas.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-electric px-6 py-2.5 border-2 border-gold glow-violet-soft">
          <span className="text-lg">💰</span>
          <span className="text-display text-lg text-gold">Mulai dari 25K</span>
        </div>
      </div>
    </section>
  );
}

type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: typeof Package;
};

const grafisPlans: Plan[] = [
  {
    name: "Starter",
    price: "25K – 50K",
    desc: "Untuk yang baru memulai atau proyek sederhana.",
    icon: Package,
    features: [
      "1x Desain Poster/Grafis",
      "Size standar (A4, A3)",
      "Max 2 kali revisi",
      "File JPG + PNG",
      "Durasi: 1–2 hari kerja",
    ],
    cta: "Pesan Sekarang",
  },
  {
    name: "Professional",
    price: "75K – 150K",
    desc: "Paket favorit untuk hasil berkualitas tinggi & profesional.",
    icon: Rocket,
    popular: true,
    features: [
      "2–3x Desain dengan tema",
      "Custom size & layout",
      "Max 5 kali revisi",
      "File JPG + PNG + PDF",
      "Source file (Canva/Figma)",
      "Durasi: 3–5 hari kerja",
      "Konsultasi gratis",
    ],
    cta: "Pesan Sekarang",
  },
  {
    name: "Premium",
    price: "200K – 500K",
    desc: "Paket lengkap dengan konsultasi penuh dan hasil maksimal.",
    icon: Crown,
    features: [
      "Unlimited desain & revisi",
      "Custom branding package",
      "Priority support",
      "File lengkap semua format",
      "Konsultasi strategi design",
      "Durasi: 7–14 hari kerja",
      "Bonus: mockup & presentasi",
      "Garansi kepuasan 100%",
    ],
    cta: "Hubungi untuk Penawaran Khusus",
  },
];

const webPlans: Plan[] = [
  {
    name: "Basic",
    price: "500K – 1.5Jt",
    desc: "Landing page sederhana untuk promosi produk atau jasa.",
    icon: LayoutTemplate,
    features: [
      "1 halaman (single page)",
      "Design responsif mobile",
      "Contact form + maps",
      "Max 2 revisi",
      "Hosting 3 bulan",
      "Domain custom (.com)",
      "Durasi: 7–10 hari kerja",
      "Support gratis 1 bulan",
    ],
    cta: "Pesan Sekarang",
  },
  {
    name: "Standard",
    price: "2Jt – 4Jt",
    desc: "Website company profile lengkap dengan portfolio & testimoni.",
    icon: Layers,
    popular: true,
    features: [
      "4–6 halaman",
      "Design custom & modern",
      "Responsif (mobile/desktop)",
      "Portfolio/Katalog produk",
      "Testimoni section",
      "Blog/news ready",
      "Max 5 revisi",
      "Hosting 1 tahun",
      "Domain custom (.com)",
      "Durasi: 14–21 hari kerja",
      "Support gratis 3 bulan",
      "SEO basic setup",
    ],
    cta: "Pesan Sekarang",
  },
  {
    name: "Enterprise",
    price: "5Jt+",
    desc: "Website skala besar dengan fitur custom & integrasi lengkap.",
    icon: Server,
    features: [
      "8+ halaman",
      "Design & UX profesional",
      "E-commerce / pembayaran",
      "Database & backend custom",
      "Integrasi API (email, WA)",
      "Admin dashboard",
      "Unlimited revisi",
      "Hosting & domain 2 tahun",
      "SSL certificate",
      "Durasi: 30+ hari kerja",
      "Maintenance 6 bulan gratis",
      "Training admin",
      "Dedicated support",
    ],
    cta: "Hubungi untuk Konsultasi",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.icon;
  return (
    <div
      className={`relative rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 flex flex-col ${
        plan.popular
          ? "bg-violet-medium/70 border-[3px] border-gold glow-violet -translate-y-2 md:-translate-y-4"
          : "bg-violet-medium/40 border border-violet-bright/30 hover:-translate-y-1.5 hover:glow-violet-soft hover:border-violet-bright"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold text-violet-deep font-bold text-xs px-4 py-1.5 tracking-wide shadow-lg">
          ⭐ PALING DIMINATI
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

      <h3 className="text-display text-2xl text-white mb-1.5">{plan.name}</h3>
      <p className="text-sm text-white/65 mb-5 leading-relaxed min-h-[42px]">
        {plan.desc}
      </p>

      <div className="mb-6 pb-6 border-b border-violet-bright/20">
        <div className="text-display text-3xl md:text-4xl text-gold">
          {plan.price}
        </div>
        <div className="text-xs text-white/50 mt-1">per proyek</div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                plan.popular ? "text-gold" : "text-violet-bright"
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full font-semibold px-6 py-3 text-sm text-center transition-all hover:scale-[1.03] inline-flex items-center justify-center gap-2 ${
          plan.popular
            ? "bg-gold text-violet-deep hover:bg-white"
            : "bg-violet-electric hover:bg-violet-bright text-white hover:glow-violet"
        }`}
      >
        <MessageCircle className="w-4 h-4" />
        {plan.cta}
      </a>
    </div>
  );
}

const grafisRows = [
  { label: "Jumlah desain", values: ["1", "2–3", "∞"] },
  { label: "Revisi", values: ["2x", "5x", "∞"] },
  { label: "Durasi pengerjaan", values: ["1–2 hari", "3–5 hari", "7–14 hari"] },
  { label: "Custom size", values: [false, true, true] },
  { label: "Source file", values: [false, true, true] },
  { label: "Konsultasi gratis", values: [false, true, true] },
];

const webRows = [
  { label: "Jumlah halaman", values: ["1", "4–6", "8+"] },
  { label: "Responsif mobile", values: [true, true, true] },
  { label: "Portfolio/katalog", values: [false, true, true] },
  { label: "E-commerce", values: [false, false, true] },
  { label: "Hosting 1 tahun", values: [true, true, true] },
  { label: "Support gratis", values: ["1 bln", "3 bln", "6 bln"] },
  { label: "Maintenance", values: [false, false, true] },
];

function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: { label: string; values: (string | boolean)[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-violet-bright/30 bg-violet-medium/30 backdrop-blur-sm">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="bg-gold text-violet-deep">
            <th className="text-left px-5 py-4 font-bold text-display tracking-wide">
              Fitur
            </th>
            {headers.map((h) => (
              <th
                key={h}
                className="px-5 py-4 font-bold text-display tracking-wide text-center"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.label}
              className={`border-t border-violet-bright/20 transition-colors hover:bg-violet-deep/40 ${
                i % 2 === 1 ? "bg-violet-deep/20" : ""
              }`}
            >
              <td className="px-5 py-3.5 text-white/85 font-medium">{r.label}</td>
              {r.values.map((v, j) => (
                <td key={j} className="px-5 py-3.5 text-center">
                  {typeof v === "boolean" ? (
                    v ? (
                      <Check className="w-5 h-5 text-gold mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-white/30 mx-auto" />
                    )
                  ) : (
                    <span className="text-white/85">{v}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type Category = "grafis" | "web";

function PricingTabs() {
  const [tab, setTab] = useState<Category>("grafis");
  const plans = tab === "grafis" ? grafisPlans : webPlans;
  const headers =
    tab === "grafis"
      ? ["Starter", "Professional", "Premium"]
      : ["Basic", "Standard", "Enterprise"];
  const rows = tab === "grafis" ? grafisRows : webRows;

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex gap-2 p-1.5 rounded-full border border-violet-bright/30 bg-violet-medium/30 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setTab("grafis")}
              className={`inline-flex items-center gap-2 rounded-full px-5 md:px-7 py-2.5 text-sm font-semibold transition-all ${
                tab === "grafis"
                  ? "bg-violet-electric text-white glow-violet-soft"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Palette className="w-4 h-4" /> Desain Grafis
            </button>
            <button
              type="button"
              onClick={() => setTab("web")}
              className={`inline-flex items-center gap-2 rounded-full px-5 md:px-7 py-2.5 text-sm font-semibold transition-all ${
                tab === "web"
                  ? "bg-violet-electric text-white glow-violet-soft"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" /> Pembuatan Website
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          key={tab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 animate-fade-up"
        >
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <span className="text-gold text-sm font-semibold tracking-widest">
              PERBANDINGAN
            </span>
            <h3 className="text-display text-3xl md:text-5xl mt-3">
              Bandingkan{" "}
              <span className="text-violet-bright">
                {tab === "grafis" ? "Paket Desain" : "Paket Website"}
              </span>
            </h3>
          </div>
          <ComparisonTable headers={headers} rows={rows} />
        </div>
      </div>
    </section>
  );
}

const addons = [
  {
    icon: RefreshIcon,
    title: "Revisi Tambahan",
    price: "10K – 25K",
    desc: "Per item revisi tambahan. Waktu 1–2 hari kerja.",
    cta: "Tambah ke pesanan",
  },
  {
    icon: Zap,
    title: "Rush / Express",
    price: "+30% harga paket",
    desc: "Pengerjaan dipercepat, selesai dalam 24 jam.",
    cta: "Pilih opsi ini",
  },
  {
    icon: Palette,
    title: "Branding Package",
    price: "500K",
    desc: "Logo, color palette, dan typography guide siap pakai.",
    cta: "Tambah ke pesanan",
  },
  {
    icon: Server,
    title: "Hosting & Domain",
    price: "300K / tahun",
    desc: "Renewal otomatis dengan support 24/7.",
    cta: "Pilih paket",
  },
];

function RefreshIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Plus {...props} />;
}

function Addons() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold tracking-widest">
            OPSI TAMBAHAN
          </span>
          <h3 className="text-display text-3xl md:text-5xl mt-3">
            Add-ons <span className="text-violet-bright">Fleksibel</span>
          </h3>
          <p className="text-white/65 mt-4 max-w-xl mx-auto">
            Sesuaikan paket dengan kebutuhan Anda. Bisa ditambahkan kapan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {addons.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="group rounded-2xl bg-violet-medium/30 border border-white/10 p-6 flex flex-col transition-all hover:border-violet-bright/60 hover:-translate-y-1 hover:glow-violet-soft"
              >
                <div className="w-11 h-11 rounded-xl border border-gold/40 bg-[rgba(232,181,35,0.1)] grid place-items-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-display text-lg text-white mb-1">
                  {a.title}
                </h4>
                <div className="text-gold font-bold text-lg mb-2">{a.price}</div>
                <p className="text-sm text-white/65 leading-relaxed mb-5 flex-1">
                  {a.desc}
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-violet-bright hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  {a.cta} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const timeline = [
  {
    title: "Konsultasi Gratis",
    desc: "Cerita kebutuhan Anda via WhatsApp, tanpa biaya.",
  },
  {
    title: "Penawaran & Kesepakatan",
    desc: "Kami buat quote, Anda approve sebelum mulai.",
  },
  {
    title: "DP 50%",
    desc: "Konfirmasi pesanan dan pengerjaan dimulai.",
  },
  {
    title: "Proses Pengerjaan",
    desc: "Kami buat, Anda review & minta revisi.",
  },
  {
    title: "Pelunasan 50%",
    desc: "Setelah final, bayar sisa pelunasan.",
  },
  {
    title: "File Delivered",
    desc: "Terima file final, support gratis dimulai.",
  },
];

function Timeline() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold tracking-widest">
            ALUR KERJA
          </span>
          <h3 className="text-display text-3xl md:text-5xl mt-3">
            Proses <span className="text-violet-bright">Pembayaran</span>
          </h3>
          <p className="text-white/65 mt-4 max-w-xl mx-auto">
            Transparan dari awal hingga file diterima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeline.map((t, i) => (
            <div
              key={t.title}
              className="relative rounded-2xl bg-violet-medium/40 border border-violet-bright/25 p-6 hover:border-violet-bright hover:glow-violet-soft transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-display text-5xl text-gold leading-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="text-display text-lg text-white mb-1.5">
                    {t.title}
                  </h4>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
            Masih Bingung Pilih Paket?
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-2xl mx-auto">
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

function HargaPage() {
  return (
    <div className="min-h-screen text-white">
      <NavBar />
      <main>
        <PageHero />
        <PricingTabs />
        <Addons />
        <Timeline />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
