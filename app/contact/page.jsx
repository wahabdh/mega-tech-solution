"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Instagram,
  ArrowUpRight,
  BriefcaseBusiness,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Monitor,
  Sparkles,
} from "lucide-react"

import { toast } from "sonner"

// ======================================================
// CONTACT INFORMATION — EXISTING DATA PRESERVED
// ======================================================

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["0310 4601236"],
    description: "Mon-Fri from 8am to 8pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["megatechsolution1348@hotmail.com"],
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "office No 3 Ameer Mall New City Phase 2, Wah, Pakistan, 47010",
    ],
    description: "Visit our showroom",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon - Fri: 9:00 AM - 7:00 PM",
      "Sat: 10:00 AM - 5:00 PM",
    ],
    description: "Sunday: Closed",
  },
]

// ======================================================
// TEAM MEMBERS — EXISTING DATA PRESERVED
// ======================================================

const teamMembers = [
  {
    id: 1,
    name: "Mr. Imran Javed",
    designation: "Chief Executive Officer",
    image: "/images/ceo.jpg",
    experience:
      "Experienced business leader focused on technology, innovation, customer relationships and the continued growth of MegaTech Solution.",
  },
]

// ======================================================
// FAQ — EXISTING DATA PRESERVED
// ======================================================

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day hassle-free return policy for all products in original condition with receipt.",
  },
  {
    question: "Do you offer warranty on products?",
    answer:
      "Yes, all products come with manufacturer warranty. We also offer extended warranty plans for additional coverage.",
  },
  {
    question: "Can I get a custom PC built?",
    answer:
      "Absolutely! Visit our Services page or contact us to discuss your requirements. We'll build a PC tailored to your needs.",
  },
]

// ======================================================
// CONTACT PAGE
// ======================================================

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // ----------------------------------------------------
  // SUBMIT CONTACT FORM — EXISTING API PRESERVED
  // ----------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)

        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        toast.success("Message sent successfully!")
      } else {
        toast.error(result.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // ----------------------------------------------------
  // HANDLE INPUT CHANGES
  // ----------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // ====================================================
  // PAGE UI
  // ====================================================

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white text-slate-900">
      <Header />

      <main className="flex-1">

        {/* ==================================================
            HERO BANNER
        ================================================== */}

        <section className="relative isolate overflow-hidden border-b border-sky-100 bg-gradient-to-br from-white via-sky-50 to-cyan-50">

          {/* Background decorations */}

          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="mx-auto grid max-w-[1440px] items-center lg:min-h-[360px] lg:grid-cols-2">

            {/* Left content */}

            <div className="relative z-10 px-5 py-14 sm:px-8 lg:px-12 lg:py-16 xl:pl-16">

              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-white/90 px-3.5 py-2 text-xs font-bold text-blue-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Contact MegaTech Solution
              </div>

              <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[48px] xl:text-[54px]">
                Let&apos;s Build Something{" "}
                <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Great Together
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Have questions about our products or services? We&apos;re
                here to help. Reach out to us and our team will get back
                to you within 24 hours.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <Button
                  asChild
                  className="h-11 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <a href="#contact-form">
                    Contact Our Team
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-lg border-sky-200 bg-white/80 px-5 font-semibold text-slate-800 hover:border-cyan-400 hover:bg-white"
                >
                  <a href="#our-team">Meet Our Team</a>
                </Button>

              </div>
            </div>

            {/* Right banner image */}

            <div className="relative min-h-[260px] overflow-hidden sm:min-h-[330px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[54%]">

              <Image
                src="/images/hero-gaming-pc.jpg"
                alt="MegaTech Solution gaming PCs and professional computer hardware"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover object-center"
              />

              {/* Fade image into white content */}

              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-slate-950/10 lg:bg-gradient-to-r lg:from-sky-50/50 lg:via-transparent lg:to-slate-950/15" />

              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/30 to-transparent" />

              {/* Decorative corner */}

              <div className="absolute right-0 top-0 h-24 w-24 border-b-[24px] border-l-[24px] border-b-cyan-400/60 border-l-transparent" />

              <div className="absolute bottom-5 right-5 hidden rounded-xl border border-white/30 bg-slate-950/55 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/20">
                    <Monitor className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Your Tech, Our Priority
                    </p>
                    <p className="mt-0.5 text-xs text-slate-200">
                      Reliable Technology Solutions
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            CONTACT INFORMATION CARDS
        ================================================== */}

        <section className="relative z-10 bg-white px-4 py-6 sm:px-6 lg:py-7">

          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {contactInfo.map((item) => (
              <Card
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-white shadow-[0_5px_25px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
              >
                <CardContent className="flex h-full items-start gap-3.5 p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-blue-500/15 transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <h2 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h2>

                    <div className="mt-2 space-y-1">

                      {item.details.map((detail) => (
                        <p
                          key={detail}
                          className="break-words text-xs font-medium leading-5 text-slate-700"
                        >
                          {item.title === "Email" ? (
                            <a
                              href="mailto:megatechsolution1348@hotmail.com"
                              className="transition-colors hover:text-blue-600"
                            >
                              {detail}
                            </a>
                          ) : item.title === "Phone" ? (
                            <a
                              href="tel:+923069293923"
                              className="transition-colors hover:text-blue-600"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}

                    </div>

                    <p className="mt-1.5 text-[11px] leading-4 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                </CardContent>
              </Card>
            ))}

          </div>
        </section>

        {/* ==================================================
            CEO / OUR TEAM SECTION
        ================================================== */}

        <section
          id="our-team"
          className="relative overflow-hidden border-y border-sky-100 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/70 py-12 sm:py-16"
        >

          <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">

            {/* Team introduction */}

            <div>

              <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold text-blue-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Our People
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Meet the People Behind{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  MegaTech Solution
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                Our team combines technical expertise, professional
                experience, and a commitment to providing dependable
                technology solutions for every customer.
              </p>

            ```jsx
<a
  href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`${member.name} on Instagram`}
  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur transition-all duration-300 hover:bg-pink-600 hover:text-white"
>
  <Instagram className="h-4 w-4" />
</a>

            </div>

            {/* CEO card */}

            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.07)] transition-all duration-300 hover:border-sky-200 hover:shadow-xl"
              >
                <CardContent className="grid gap-5 p-4 sm:grid-cols-[minmax(150px,0.8fr)_1.2fr] sm:items-center sm:p-5">

                  {/* CEO image */}

                  <div className="relative min-h-[230px] overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 to-slate-200 sm:min-h-[260px]">

                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 to-transparent p-3 pt-10">
                      <p className="text-xs font-semibold text-white">
                        {member.designation}
                      </p>
                    </div>

                  </div>

                  {/* CEO details */}

                  <div className="py-1">

                    <Badge className="mb-3 border-0 bg-cyan-50 text-[10px] font-bold text-blue-700 hover:bg-cyan-50">
                      <Sparkles className="mr-1 h-3 w-3" />
                      Leadership
                    </Badge>

                    <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-blue-600">
                      {member.designation}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {member.experience}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">

                      <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <BriefcaseBusiness className="h-4 w-4 text-blue-500" />
                        Chief Executive Officer
                      </div>

                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`LinkedIn profile for ${member.name}`}
                        className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                        LinkedIn
                      </a>

                    </div>

                  </div>

                </CardContent>
              </Card>
            ))}

          </div>
        </section>

        {/* ==================================================
            CONTACT FORM + FAQ
        ================================================== */}

        <section
          id="contact-form"
          className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 lg:py-20"
        >

          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">

              {/* ============================================
                  DARK CONTACT FORM
              ============================================ */}

              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-[#08213e] to-blue-950 p-5 text-white shadow-xl sm:p-7 lg:p-8">

                {/* Background glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative">

                  <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                    Get in Touch
                  </div>

                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                    Send us a Message
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Fill out the form below and we&apos;ll get back to you
                    as soon as possible.
                  </p>

                  {/* Success state */}

                  {isSubmitted ? (
                    <div className="flex min-h-[400px] flex-col items-center justify-center py-10 text-center">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/30">
                        <CheckCircle className="h-8 w-8 text-emerald-400" />
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-white">
                        Message Sent!
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                        Thank you for contacting MegaTech Solution.
                        Our team will get back to you within 24 hours.
                      </p>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                      >
                        Send Another Message
                      </Button>

                    </div>
                  ) : (

                    <form
                      onSubmit={handleSubmit}
                      className="mt-6 space-y-4"
                    >

                      {/* Name + Email */}

                      <div className="grid gap-4 sm:grid-cols-2">

                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-xs font-semibold text-slate-200"
                          >
                            Full Name *
                          </Label>

                          <Input
                            id="name"
                            name="name"
                            autoComplete="name"
                            placeholder="Your name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="h-11 rounded-lg border-white/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-cyan-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-xs font-semibold text-slate-200"
                          >
                            Email Address *
                          </Label>

                          <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="h-11 rounded-lg border-white/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-cyan-400"
                          />
                        </div>

                      </div>

                      {/* Phone + Subject */}

                      <div className="grid gap-4 sm:grid-cols-2">

                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-xs font-semibold text-slate-200"
                          >
                            Phone Number
                          </Label>

                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+92 300 1234567"
                            value={formState.phone}
                            onChange={handleChange}
                            className="h-11 rounded-lg border-white/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-cyan-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="subject"
                            className="text-xs font-semibold text-slate-200"
                          >
                            Subject *
                          </Label>

                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            className="h-11 rounded-lg border-white/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-cyan-400"
                          />
                        </div>

                      </div>

                      {/* Message */}

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-xs font-semibold text-slate-200"
                        >
                          Message *
                        </Label>

                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your requirement..."
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          className="min-h-[120px] resize-y rounded-lg border-white/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-cyan-400"
                        />
                      </div>

                      {/* Submit */}

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-12 w-full rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:from-cyan-300 hover:to-blue-400 disabled:opacity-60"
                      >
                        {isLoading ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>

                      {/* Privacy note */}

                      <div className="flex items-start justify-center gap-2 pt-1 text-center text-[11px] leading-5 text-slate-400">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                        <p>
                          Your information is safe with us.
                          We respect your privacy.
                        </p>
                      </div>

                    </form>

                  )}

                </div>
              </div>

              {/* ============================================
                  FAQ SECTION
              ============================================ */}

              <div className="space-y-5">

                <div className="mb-6">

                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    FAQ
                  </div>

                  <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    Common Questions
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                    Find quick answers to some of the questions our
                    customers ask most often.
                  </p>

                </div>

                {/* Expandable FAQ items */}

                <div className="space-y-3">

                  {faqs.map((faq, index) => (
                    <details
                      key={faq.question}
                      open={index === 0}
                      className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 open:border-sky-200 open:shadow-md"
                    >

                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">

                        <span className="text-sm font-bold leading-6 text-slate-800 transition-colors group-open:text-blue-700">
                          {faq.question}
                        </span>

                        <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-600" />

                      </summary>

                      <div className="px-4 pb-5 sm:px-5">

                        <div className="mb-3 h-px bg-slate-100" />

                        <p className="text-sm leading-6 text-slate-500">
                          {faq.answer}
                        </p>

                      </div>

                    </details>
                  ))}

                </div>

                {/* Still have questions card */}

                <Card className="overflow-hidden rounded-xl border border-sky-100 bg-gradient-to-r from-sky-50 to-blue-50 shadow-sm">

                  <CardContent className="flex items-center gap-3 p-4 sm:p-5">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-md">
                      <MessageSquare className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">

                      <h3 className="text-sm font-bold text-slate-900">
                        Still have questions?
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Send us a message and our team will be happy
                        to assist you.
                      </p>

                    </div>

                    <a
                      href="#contact-form"
                      aria-label="Go to contact form"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md transition-transform hover:scale-105"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>

                  </CardContent>

                </Card>

                {/* Direct email */}

                <a
                  href="mailto:megatechsolution1348@hotmail.com"
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 transition-colors hover:border-sky-200 hover:bg-sky-50/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-slate-500">
                      Prefer email?
                    </p>
                    <p className="break-all text-sm font-bold text-slate-800">
                      megatechsolution1348@hotmail.com
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400" />
                </a>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
