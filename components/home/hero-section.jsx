import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Truck,
  Headphones,
  CheckCircle,
} from "lucide-react"

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
    <section className="relative overflow-hidden bg-white">

      {/* =====================================================
          BACKGROUND DESIGN
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft blue glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="absolute right-[-150px] top-[-100px] h-[550px] w-[550px] rounded-full bg-blue-100/60 blur-3xl" />

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-sky-100/50 blur-3xl" />

        {/* Decorative diagonal shape */}
        <div className="absolute left-0 top-0 h-32 w-32 -translate-x-16 -translate-y-16 rotate-45 bg-cyan-400/20" />

        <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-16 translate-y-16 rotate-45 bg-cyan-400/20" />
      </div>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid min-h-[680px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20 py-16 lg:py-20">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-white/90 px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
              </span>

              Latest Gaming PCs & Premium Accessories
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-[64px]">

              Powering Your{" "}

              <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                Digital Future
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover enterprise-grade computers, gaming PCs, laptops,
              workstations and premium accessories engineered for
              professionals, businesses, creators and gamers who demand
              uncompromising performance.
            </p>

            {/* =================================================
                TRUST POINTS
            ================================================== */}

            <div className="mt-7 space-y-3">

              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="h-5 w-5 shrink-0 text-cyan-500" />
                <span className="text-sm font-medium sm:text-base">
                  100% Genuine Products
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="h-5 w-5 shrink-0 text-cyan-500" />
                <span className="text-sm font-medium sm:text-base">
                  Authorized Warranty Support
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle className="h-5 w-5 shrink-0 text-cyan-500" />
                <span className="text-sm font-medium sm:text-base">
                  Trusted by Thousands of Customers
                </span>
              </div>

            </div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Button
                size="lg"
                asChild
                className="h-13 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30"
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
                className="h-13 rounded-xl border-slate-300 bg-white px-7 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50"
              >
                <Link href="/services">
                  Our Services
                </Link>
              </Button>

            </div>

          </div>

          {/* =================================================
              RIGHT PRODUCT / OFFICE IMAGE
          ================================================== */}

          <div className="relative min-h-[480px] lg:min-h-[680px]">

            {/* Large background glow */}
            <div className="absolute right-[-100px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-100/70 blur-3xl" />

            {/* Image container */}
            <div
              className="
                absolute
                inset-y-0
                right-[-40px]
                left-[-40px]
                overflow-hidden
                lg:right-[-100px]
                lg:left-[-20px]
              "
            >

              <Image
                src="/images/Gaming PC Setup.jpg"
                alt="Gaming PC Setup"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

              {/* White fade on left */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/80 to-transparent" />

              {/* White fade at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/30 to-transparent" />

              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/10" />

            </div>

            {/* =================================================
                AI READY CARD
            ================================================== */}

            <div className="absolute right-2 top-16 z-20 hidden rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:block lg:right-0 lg:top-24">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border-2 border-cyan-500">
                    <span className="h-2.5 w-2.5 rounded-sm bg-cyan-500" />
                  </div>

                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    AI Ready
                  </p>

                  <p className="text-xs text-slate-500">
                    Latest Hardware
                  </p>
                </div>

              </div>

            </div>

            {/* =================================================
                HAPPY CUSTOMERS CARD
            ================================================== */}

            <div className="absolute bottom-28 left-2 z-20 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:left-6 lg:bottom-32 lg:left-0">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md">

                  <span className="text-base font-black text-white">
                    5K+
                  </span>

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

        <div className="relative z-30 -mt-4 pb-12 lg:-mt-10 lg:pb-16">

          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/95
                  p-5
                  shadow-lg
                  shadow-slate-200/60
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-200
                  hover:shadow-xl
                "
              >

                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-50
                      transition-all
                      duration-300
                      group-hover:bg-cyan-500
                    "
                  >
                    <feature.icon
                      className="
                        h-6
                        w-6
                        text-cyan-500
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Text */}
                  <div>

                    <h3 className="font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {feature.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* =====================================================
          DECORATIVE SIDE ACCENTS
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-20 bg-gradient-to-tl from-cyan-400/30 to-transparent [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="pointer-events-none absolute left-0 top-20 h-24 w-16 bg-gradient-to-br from-cyan-400/30 to-transparent [clip-path:polygon(0_0,100%_0,0_100%)]" />

    </section>
  )
}
