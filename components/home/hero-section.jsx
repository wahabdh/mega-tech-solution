import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Truck,
  Headphones,
  Check,
  Cpu,
} from "lucide-react"

/*
  IMPORTANT:
  Use a PC image with a TRANSPARENT background (PNG or WebP) so the case
  sits on the 3D platform. Save it at public/images/hero-gaming-pc.png
*/
const HERO_IMAGE = "/images/hero-gaming-pc.jpg"

const trustPoints = [
  "100% Genuine Products",
  "Authorized Warranty Support",
  "Trusted by Thousands of Customers",
]

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over Rs. 2,000",
  },
  {
    icon: Shield,
    title: "Official Warranty",
    description: "Up to 2 Years Coverage",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert Technical Assistance",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-violet-100/70">
      {/* Floating animation (respects reduced motion) */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .hero-float { animation: hero-float 6s ease-in-out infinite; }
        .hero-float-slow { animation: hero-float 8s ease-in-out infinite reverse; }
        @media (prefers-reduced-motion: reduce) {
          .hero-float, .hero-float-slow { animation: none; }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute right-0 top-10 h-[520px] w-[520px] rounded-full bg-violet-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-sky-200/50 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            MAIN HERO
        ====================================================== */}
        <div className="grid items-center gap-4 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pt-14">
          {/* ---------------- LEFT CONTENT ---------------- */}
          <div className="relative z-20 py-6 lg:py-10">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-200 bg-cyan-50/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
              </span>
              Latest Gaming PCs & Premium Accessories
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[64px]">
              Powering Your{" "}
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-500 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover enterprise-grade computers, gaming PCs, laptops,
              workstations and premium accessories engineered for
              professionals, businesses, creators and gamers who demand
              uncompromising performance.
            </p>

            {/* Trust points */}
            <ul className="mt-6 space-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
                    <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-sm font-medium sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="h-12 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-7 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Link href="#products">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 rounded-xl border-blue-400 bg-white/70 px-7 text-blue-600 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* ---------------- RIGHT 3D VISUAL ---------------- */}
          <div className="relative h-[460px] sm:h-[540px] lg:h-[600px]">
            {/* Big gradient blob */}
            <div className="absolute left-1/2 top-[6%] h-[80%] w-[92%] -translate-x-1/2 rounded-[58%_42%_52%_48%/48%_55%_45%_52%] bg-gradient-to-br from-cyan-300/70 via-blue-300/70 to-violet-400/70" />

            {/* Lighter inner blob for depth */}
            <div className="absolute left-[16%] top-[14%] h-[52%] w-[58%] rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-gradient-to-br from-white/60 to-transparent" />

            {/* Violet accent blob */}
            <div className="absolute bottom-[10%] right-[2%] h-[38%] w-[40%] rounded-[55%_45%_50%_50%/45%_55%_45%_55%] bg-gradient-to-tl from-violet-400/50 to-transparent blur-sm" />

            {/* Brand watermark (decorative) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[12%] top-[20%] select-none text-[150px] font-black leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.75)] lg:text-[210px]"
            >
              MT
            </span>

            {/* ---------- 3D PLATFORM + PC ---------- */}
            <div className="absolute bottom-[3%] left-1/2 w-[88%] max-w-[480px] -translate-x-1/2">
              {/* Lower tier */}
              <div className="relative h-24">
                <div className="absolute inset-x-0 bottom-0 h-16 rounded-[50%] bg-gradient-to-b from-blue-500 to-blue-700 shadow-2xl shadow-blue-600/40" />
                <div className="absolute inset-x-0 bottom-8 top-8 bg-gradient-to-b from-blue-300 to-blue-500" />
                <div className="absolute inset-x-0 top-0 h-16 rounded-[50%] bg-gradient-to-br from-sky-100 via-blue-200 to-blue-300 ring-1 ring-white/80" />
              </div>

              {/* Upper tier (glowing) */}
              <div className="absolute -top-8 left-1/2 h-20 w-[62%] -translate-x-1/2">
                <div className="absolute inset-x-0 bottom-0 h-12 rounded-[50%] bg-gradient-to-b from-sky-400 to-blue-600" />
                <div className="absolute inset-x-0 bottom-6 top-6 bg-gradient-to-b from-sky-200 to-sky-400" />
                <div className="absolute inset-x-0 top-0 h-12 rounded-[50%] bg-gradient-to-br from-white via-sky-100 to-cyan-200 ring-2 ring-white shadow-[0_0_40px_10px_rgba(56,189,248,0.55)]" />
              </div>

              {/* PC image */}
              <div className="hero-float absolute bottom-[98px] left-1/2 aspect-[3/4] w-[64%] -translate-x-1/2">
                <Image
                  src="/images/hero-gaming-pc.jpg"
                  alt="/gaming-pc"
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 320px"
                  className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(37,99,235,0.35)]"
                />
              </div>
            </div>

            {/* Decorative crystal */}
            <div
              aria-hidden="true"
              className="hero-float-slow absolute bottom-[26%] left-[10%] hidden sm:block"
            >
              <div className="h-9 w-9 rotate-45 rounded-md bg-gradient-to-br from-blue-300 to-blue-700 shadow-lg shadow-blue-500/40" />
              <div className="-mt-3 ml-5 h-6 w-6 rotate-45 rounded bg-gradient-to-br from-sky-300 to-blue-600 shadow-md" />
            </div>

            {/* AI READY CARD */}
            <div className="hero-float-slow absolute right-0 top-[4%] z-20 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl shadow-blue-200/60 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-md">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">AI Ready</p>
                  <p className="text-xs text-slate-500">Latest Hardware</p>
                </div>
              </div>
            </div>

            {/* HAPPY CUSTOMERS CARD */}
            <div className="hero-float absolute bottom-[14%] right-0 z-20 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl shadow-blue-200/60 backdrop-blur-md sm:-right-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-md">
                  <span className="text-base font-black text-white">5K+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Happy Customers
                  </p>
                  <p className="text-xs text-slate-500">
                    Trusted Across Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FEATURE CARDS
        ====================================================== */}
        <div className="relative z-20 mt-2 pb-12 lg:-mt-12 lg:pb-16">
          <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex items-center gap-4 rounded-2xl border border-white/80 bg-white/80 p-5 shadow-lg shadow-blue-100/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-gradient-to-br from-sky-50 to-white text-blue-600 transition-all duration-300 group-hover:border-transparent group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
