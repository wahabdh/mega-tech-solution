import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Truck,
  Headphones,
  Cpu,
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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Background Effects */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>

      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 lg:px-8 lg:py-28">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            {/* Badge */}

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur">

              <span className="relative flex h-3 w-3">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>

                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400"></span>

              </span>

              Latest Gaming PCs & Premium Accessories

            </div>

            {/* Heading */}

            <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">

              Powering

              <br />

              Your Digital

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                Future

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              Discover enterprise-grade computers, gaming PCs, laptops,
              workstations and premium accessories engineered for
              professionals, businesses, creators and gamers who demand
              uncompromising performance.

            </p>

            {/* Bullet Points */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-slate-300">

                <CheckCircle className="h-5 w-5 text-cyan-400" />

                <span>100% Genuine Products</span>

              </div>

              <div className="flex items-center gap-3 text-slate-300">

                <CheckCircle className="h-5 w-5 text-cyan-400" />

                <span>Authorized Warranty Support</span>

              </div>

              <div className="flex items-center gap-3 text-slate-300">

                <CheckCircle className="h-5 w-5 text-cyan-400" />

                <span>Trusted by Thousands of Customers</span>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Button
                size="lg"
                asChild
                className="h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-white shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/50"
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
                className="h-14 rounded-xl border-slate-700 bg-slate-900/40 px-8 text-white backdrop-blur hover:border-cyan-400 hover:bg-slate-800"
              >
                <Link href="/services">

                  Our Services

                </Link>

              </Button>

            </div>

            {/* Feature Cards */}

            <div className="mt-14 grid gap-5 sm:grid-cols-3">

              {features.map((feature) => (

                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20"
                >

                  <feature.icon className="mb-4 h-8 w-8 text-cyan-400" />

                  <h3 className="font-semibold text-white">

                    {feature.title}

                  </h3>

                  <p className="mt-2 text-sm text-slate-400">

                    {feature.description}

                  </p>

                </div>

              ))}

            </div>

          </div>
          {/* RIGHT SIDE */}

          <div className="relative">

            {/* Glow Behind Image */}
            <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

              <Image
                src="/images/hero-gaming-pc.jpg"
                alt="Gaming PC Setup"
                width={900}
                height={700}
                priority
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

            </div>

            {/* Floating Customer Card */}
            <div className="absolute -bottom-8 -left-6 rounded-2xl border border-slate-700 bg-slate-900/80 p-5 backdrop-blur-xl shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">

                  <span className="text-xl font-bold text-white">
                    5K+
                  </span>

                </div>

                <div>

                  <p className="font-semibold text-white">
                    Happy Customers
                  </p>

                  <p className="text-sm text-slate-400">
                    Trusted Across Pakistan
                  </p>

                </div>

              </div>

            </div>

            {/* Floating CPU Card */}
            <div className="absolute top-8 -right-6 rounded-2xl border border-slate-700 bg-slate-900/80 p-4 backdrop-blur-xl shadow-xl">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-cyan-500/20 p-3">

                  <Cpu className="h-8 w-8 text-cyan-400" />

                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    AI Ready
                  </p>

                  <p className="text-xs text-slate-400">
                    Latest Hardware
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
