import { WA_URL } from "@/lib/whatsapp";
import { useState } from "react";
import {
  MessageCircle,
  Star,
  Plus,
  Minus,
  Palette,
  Sparkles,
  Crown,
  Check,
} from "lucide-react";

type PricingPlan = {
  key: string;
  name: string;
  icon: React.ReactNode;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: PricingPlan[] = [
  {
    key: "basic",
    name: "Basic",
    icon: <Palette className="w-7 h-7 text-gold" />,
    price: "Rp25.000 – Rp50.000",
    features: [
      "Cocok untuk konten harian & kebutuhan personal",
      "1 desain (feed IG, poster sederhana, quotes)",
      "1x revisi",
      "1-2 hari kerja",
      "Format file: JPG, PNG (siap pakai)",
    ],
    cta: "Pilih Basic",
  },
  {
    key: "standard",
    name: "Standard",
    icon: <Star className="w-7 h-7 text-gold" />,
    price: "Rp75.000 – Rp150.000",
    features: [
      "Cocok untuk pelaku usaha kecil & komunitas",
      "Logo sederhana / banner / X-banner",
      "2x revisi",
      "File HD + source, 2-3 hari kerja",
      "Format file: JPG, PNG, PDF",
    ],
    cta: "Pilih Standard",
    highlighted: true,
  },
  {
    key: "premium",
    name: "Premium",
    icon: <Crown className="w-7 h-7 text-gold" />,
    price: "Rp200.000 – Rp500.000",
    features: [
      "Cocok untuk bisnis & organisasi",
      "Paket branding (logo + kartu nama + template sosmed)",
      "Revisi unlimited (batas wajar)",
      "4-5 hari kerja",
      "Format file: JPG, PNG, PDF + source file (AI/PSD/CDR)",
    ],
    cta: "Pilih Premium",
  },
];

function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`group relative flex w-[280px] shrink-0 snap-center flex-col rounded-2xl p-6 md:w-auto md:p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
        plan.highlighted
          ? "bg-violet-deep/80 border-2 border-gold/60 glow-violet-soft hover:shadow-[0_0_45px_-10px_rgba(232,181,35,0.45)]"
          : "bg-violet-deep/60 border border-white/10 hover:border-violet-bright/50 hover:shadow-[0_0_40px_-14px_rgba(139,123,199,0.6)]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(232,181,35,0.8) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse at top right, black 0%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top right, black 0%, transparent 65%)",
        }}
      />
      <div className="pointer-events-none absolute -top-20 -right-16 w-44 h-44 rounded-full bg-violet-electric/20 blur-[70px]" />

      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-[#F5D76E] text-violet-deep text-xs font-bold px-4 py-1 shadow-lg z-10">
          PALING POPULER
        </span>
      )}

      <div className="relative mb-5">
        <div
          className={`w-14 h-14 rounded-2xl grid place-items-center mb-5 border transition-shadow ${
            plan.highlighted
              ? "border-gold/60 shadow-[0_0_25px_-6px_rgba(232,181,35,0.6)]"
              : "border-violet-bright/40 shadow-[0_0_22px_-8px_rgba(139,123,199,0.8)]"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(107,95,168,0.55), rgba(232,181,35,0.28))",
          }}
        >
          {plan.icon}
        </div>
        <h4 className="text-display text-2xl text-white mb-2">{plan.name}</h4>
        <p className="text-gold text-2xl md:text-3xl font-bold">{plan.price}</p>
      </div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent my-5" />

      <ul className="relative flex-1 space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/85">
            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gold/15 border border-gold/50 grid place-items-center">
              <Check className="w-3 h-3 text-gold" />
            </span>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative mt-auto w-full flex items-center justify-center rounded-full font-semibold px-6 py-3 text-sm leading-none whitespace-nowrap transition-all ${
          plan.highlighted
            ? "bg-gradient-violet text-white hover:glow-violet-soft"
            : "bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-violet-bright/40"
        }`}
      >
        <span className="inline-flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>{plan.cta}</span>
        </span>
      </a>
    </div>
  );
}

export function PricingSection() {
  return (
    <section className="py-10 px-0 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 px-6">
          <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-widest">
            <Palette className="w-5 h-5" />
            Desain Grafis
          </span>
          <h3 className="text-display text-3xl md:text-5xl mt-3">
            Detail Harga <span className="text-violet-bright">Desain Grafis</span>
          </h3>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 pt-4 md:grid md:grid-cols-3 md:overflow-visible lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.key} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CustomSection() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-violet-deep/60 border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-violet-electric/10 blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-widest mb-4">
                <Sparkles className="w-5 h-5" />
                Custom
              </span>
              <h3 className="text-display text-3xl md:text-4xl text-white mb-4">
                Butuh Paket <span className="text-violet-bright">Khusus?</span>
              </h3>
              <p className="text-white/75 leading-relaxed max-w-2xl">
                Untuk proyek besar, permintaan khusus lembaga/institusi, atau
                kombinasi banyak layanan sekaligus. Scope dan harga disesuaikan
                sepenuhnya berdasarkan brief — bisa termasuk file AI/PSD/Figma,
                source code, PDF, dan lainnya. Detail dikonfirmasi saat konsultasi.
              </p>
            </div>

            <div className="md:w-80 shrink-0 rounded-2xl bg-violet-medium/30 border border-white/10 p-6">
              <p className="text-gold text-2xl font-bold mb-2">Nego</p>
              <p className="text-white/70 text-sm mb-6">
                Berdasarkan brief & scope project
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full flex items-center justify-center rounded-full bg-gradient-violet text-white font-semibold px-6 py-3 text-sm leading-none whitespace-nowrap transition-all hover:glow-violet-soft"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Konsultasi Custom</span>
                </span>
              </a>
            </div>
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

export function TermsSection() {
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

export function FAQSection() {
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
