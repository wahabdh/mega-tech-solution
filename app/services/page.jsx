import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  Wrench,
  Monitor,
  Cpu,
  Network,
  Headphones,
  Code2,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock3,
  Users,
  LockKeyhole,
  Wallet,
} from "lucide-react"

export const metadata = {
  title: "Our Services | MegaTech Solution",
  description:
    "Professional IT solutions for home and business, including computer repair, custom PC building, hardware upgrades, networking, IT support, and software development.",
}

const services = [
  {
    icon: Wrench,
    title: "Computer Repair",
    description:
      "Hardware & software issues, virus removal and more.",
    color: "blue",
    features: [
      "Hardware diagnostics",
      "Software troubleshooting",
      "Virus removal",
    ],
  },
  {
    icon: Monitor,
    title: "Custom PC Building",
    description:
      "Gaming, workstation or daily-use PCs built for your needs.",
    color: "sky",
    features: [
      "Custom configurations",
      "Quality components",
      "System testing",
    ],
  },
  {
    icon: Cpu,
    title: "Hardware Upgrades",
    description:
      "RAM, SSD, GPU and more for better performance.",
    color: "navy",
    features: [
      "RAM and SSD upgrades",
      "Graphics card installation",
      "Performance improvement",
    ],
  },
  {
    icon: Network,
    title: "Network Setup",
    description:
      "Wi-Fi, routers, security and network solutions.",
    color: "cyan",
    features: [
      "Router configuration",
      "Wi-Fi optimization",
      "Network security",
    ],
  },
  {
    icon: Headphones,
    title: "IT Support",
    description:
      "Remote & on-site support for homes and businesses.",
    color: "indigo",
    features: [
      "Remote assistance",
      "On-site support",
      "System maintenance",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Web & custom software solutions for your business.",
    color: "blue",
    features: [
      "Website development",
      "Business web solutions",
      "Software improvements",
    ],
    externalLink: "https://primeseosolutions.vercel.app/",
    externalLinkLabel: "Visit PrimeSEO Solutions",
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: "Free Diagnostic",
    subtitle: "Assessment",
  },
  {
    icon: LockKeyhole,
    title: "90-Day",
    subtitle: "Warranty",
  },
  {
    icon: Users,
    title: "Certified",
    subtitle: "Technicians",
  },
  {
    icon: Clock3,
    title: "Same-Day",
    subtitle: "Service",
  },
  {
    icon: Wallet,
    title: "Transparent",
    subtitle: "Pricing",
  },
  {
    icon: CheckCircle2,
    title: "No Fix, No Fee",
    subtitle: "Policy",
  },
]

const iconColors = {
  blue: "bg-blue-100 text-blue-700",
  sky: "bg-sky-100 text-sky-600",
  navy: "bg-blue-900 text-white",
  cyan: "bg-cyan-100 text-cyan-700",
  indigo: "bg-indigo-100 text-indigo-700",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid min-h-[360px] items-center gap-8 lg:grid-cols-2">
              {/* Hero Content */}
              <div className="relative z-10 py-12 sm:py-16 lg:py-14">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Our Services
                </p>

                <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
                  Reliable IT Solutions
                  <br />
                  for <span className="text-blue-600">Home &amp; Business</span>
                </h1>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                  We offer professional tech services to keep your systems
                  running smoothly and efficiently.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="tel:+923069293923"
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-blue-50"
                  >
                    <Phone className="h-4 w-4 text-blue-600" />
                    Call Us
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Reliable Service
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Professional Support
                  </span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern professional office with workstations"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-blue-900/10" />

                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                      <Headphones className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Your Trusted IT Partner
                      </p>
                      <p className="mt-1 text-xs text-slate-600">
                        Technology solutions for every need
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Our Services
              </p>

              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Quality Services. Lasting Results.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Explore our technology services, designed to help individuals
                and businesses work smarter.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <article
                    key={service.title}
                    className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 sm:p-6"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        iconColors[service.color]
                      } transition duration-300 group-hover:scale-105`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-4">
                      <Link
                        href="/contact#contact-form"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      {service.externalLink && (
                        <Link
                          href={service.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 flex items-center gap-1.5 text-xs font-medium text-slate-500 transition hover:text-blue-600"
                        >
                          {service.externalLinkLabel}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Banner */}
        <section className="pb-12 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-xl border border-blue-800 bg-gradient-to-r from-[#082c60] via-[#103d79] to-[#082750] px-5 py-7 text-white shadow-lg sm:px-8 sm:py-8">
              {/* Decorative background */}
              <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full bg-blue-400/10 blur-2xl" />

              <div className="relative">
                <div className="mb-7 text-center sm:text-left">
                  <h2 className="text-lg font-bold sm:text-xl">
                    Why Choose MegaTech Solution?
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-blue-100/80">
                    Our commitment to quality, reliability, and customer
                    satisfaction.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon

                    return (
                      <div
                        key={benefit.title}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-blue-100 transition hover:bg-white/20">
                          <Icon className="h-5 w-5" />
                        </div>

                        <p className="mt-3 text-xs font-bold text-white sm:text-sm">
                          {benefit.title}
                        </p>

                        <p className="mt-1 text-xs text-blue-100/80">
                          {benefit.subtitle}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pb-14 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Need Professional IT Assistance?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Contact our team to discuss your requirements and find the
                  right technology solution for you.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="tel:+923069293923"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
