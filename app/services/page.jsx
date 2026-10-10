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
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Wallet,
  Phone,
  Mail,
  Laptop,
  Zap,
} from "lucide-react"

export const metadata = {
  title: "Our Services | MegaTech Solution",
  description:
    "Explore professional computer repair, custom PC building, hardware upgrades, network setup, IT support, and software development services from MegaTech Solution.",
}

const services = [
  {
    icon: Wrench,
    title: "Computer Repair",
    description:
      "Fast, reliable solutions for computer hardware and software problems.",
    features: [
      "Hardware diagnostics",
      "Software troubleshooting",
      "Virus and malware removal",
      "Performance optimization",
    ],
    color: "blue",
  },
  {
    icon: Monitor,
    title: "Custom PC Building",
    description:
      "Custom-built PCs designed for gaming, professional work, and everyday use.",
    features: [
      "Personalized configurations",
      "Premium components",
      "Professional cable management",
      "System testing",
    ],
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "Hardware Upgrades",
    description:
      "Improve speed, performance, and productivity with the right upgrades.",
    features: [
      "RAM upgrades",
      "SSD installation",
      "Graphics card upgrades",
      "CPU upgrades",
    ],
    color: "blue",
  },
  {
    icon: Network,
    title: "Network Setup",
    description:
      "Reliable connectivity and secure network solutions for homes and offices.",
    features: [
      "Wi-Fi optimization",
      "Router configuration",
      "Network security",
      "Network installation",
    ],
    color: "green",
  },
  {
    icon: Headphones,
    title: "IT Support",
    description:
      "Practical technical support to keep your systems running smoothly.",
    features: [
      "Remote assistance",
      "On-site support",
      "System maintenance",
      "Technical troubleshooting",
    ],
    color: "orange",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Modern web solutions and custom software services for your business.",
    features: [
      "Website development",
      "Business web solutions",
      "Software updates",
      "User-friendly interfaces",
    ],
    color: "pink",
    externalLink: "https://primeseosolutions.vercel.app/",
    externalLinkLabel: "Visit PrimeSEO Solutions",
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Service",
    description: "Solutions you can trust",
  },
  {
    icon: Clock3,
    title: "Fast Support",
    description: "Efficient turnaround",
  },
  {
    icon: BadgeCheck,
    title: "Expert Assistance",
    description: "Professional technical help",
  },
  {
    icon: Wallet,
    title: "Fair Pricing",
    description: "Clear and competitive rates",
  },
]

const colorStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    glow: "hover:border-blue-200",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white",
    glow: "hover:border-cyan-200",
  },
  green: {
    icon: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
    glow: "hover:border-green-200",
  },
  orange: {
    icon: "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
    glow: "hover:border-orange-200",
  },
  pink: {
    icon: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
    glow: "hover:border-pink-200",
  },
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/50 to-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                  <Zap className="h-4 w-4" />
                  Professional Technology Services
                </div>

                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Tech Services Made{" "}
                  <span className="text-blue-600">Simple.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  From computer repairs and custom PC builds to networking and
                  IT support, we provide practical technology solutions for
                  individuals and businesses.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="tel:+923069293923"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <Phone className="h-4 w-4 text-blue-600" />
                    Call for Support
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Reliable solutions
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Customer-focused support
                  </span>
                </div>
              </div>

              {/* Technology Illustration */}
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-blue-200 to-cyan-100 blur-2xl opacity-70" />

                <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-5 shadow-2xl shadow-blue-900/10 sm:p-7">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                        <Laptop className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="font-bold text-slate-900">
                          MegaTech Solution
                        </p>
                        <p className="text-xs text-slate-500">
                          Your technology partner
                        </p>
                      </div>
                    </div>

                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 ring-4 ring-green-100" />
                  </div>

                  <div className="py-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                      Smart Technology
                    </p>

                    <h2 className="mt-2 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                      Everything your tech needs, in one place.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Expert assistance for your devices, systems, and
                      business technology.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-blue-50 p-4">
                      <Wrench className="h-6 w-6 text-blue-600" />
                      <p className="mt-3 font-semibold text-slate-800">
                        Repair
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Fix it right
                      </p>
                    </div>

                    <div className="rounded-2xl bg-cyan-50 p-4">
                      <Monitor className="h-6 w-6 text-cyan-600" />
                      <p className="mt-3 font-semibold text-slate-800">
                        Build
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Built for you
                      </p>
                    </div>

                    <div className="rounded-2xl bg-violet-50 p-4">
                      <Network className="h-6 w-6 text-violet-600" />
                      <p className="mt-3 font-semibold text-slate-800">
                        Connect
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Stay connected
                      </p>
                    </div>

                    <div className="rounded-2xl bg-emerald-50 p-4">
                      <Code2 className="h-6 w-6 text-emerald-600" />
                      <p className="mt-3 font-semibold text-slate-800">
                        Develop
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Create solutions
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-900 p-4 text-white">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500">
                      <Headphones className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Need technical help?
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        We&apos;re ready to assist.
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-5 w-5 text-blue-300" />
                  </div>
                </div>

                <div className="absolute -left-4 top-1/3 hidden items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:flex">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-xs font-bold text-slate-700">
                    Solutions that work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
                What We Do
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Our Technology Services
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Choose the service you need and get professional help from a
                team focused on quality, reliability, and practical results.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                const styles = colorStyles[service.color]

                return (
                  <article
                    key={service.title}
                    className={`group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7 ${styles.glow}`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 ${styles.icon}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>

                    <div className="my-5 h-px bg-slate-100" />

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      {service.externalLink && (
                        <Link
                          href={service.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                        >
                          {service.externalLinkLabel}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}

                      <Link
                        href="/contact#contact-form"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition group-hover:text-blue-600"
                      >
                        Enquire About Service
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-7 shadow-sm sm:p-10 lg:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
                    Why MegaTech?
                  </span>

                  <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                    Technology support you can count on.
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    We aim to make technology simpler with dependable service,
                    clear communication, and solutions tailored to your needs.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    Talk to Our Team
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon

                    return (
                      <div
                        key={benefit.title}
                        className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="mt-4 font-bold text-slate-900">
                          {benefit.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {benefit.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
              <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

              <div className="relative mx-auto max-w-2xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/30">
                  <Headphones className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
                  Let&apos;s Solve Your Tech Challenges
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Need a repair, a new PC, networking, or IT assistance?
                  Contact MegaTech Solution to discuss your requirements.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="mailto:megatechsolution1348@hotmail.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </Link>
                </div>

                <p className="mt-6 text-sm text-slate-400">
                  Call us:{" "}
                  <Link
                    href="tel:+923069293923"
                    className="font-semibold text-blue-300 hover:text-white"
                  >
                    +92 306 9293923
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
