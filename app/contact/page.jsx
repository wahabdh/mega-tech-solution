```jsx
"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
} from "lucide-react"
import { toast } from "sonner"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 0306-9293923"],
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
      "Office No 3, Ameer Mall, New City Phase 2, Wah, Pakistan, 47010",
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

const teamMembers = [
  {
    id: 1,
    name: "Mr. Imran Javed",
    designation: "Chief Executive Officer",
    image: "/images/ceo.jpg",
    experience:
      "Experienced business leader focused on technology, innovation, customer relationships and the continued growth of MegaTech Solution.",
    instagram:
      "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/",
  },
]

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

      if (!response.ok || !result.success) {
        toast.error(result.message || "Failed to send message")
        return
      }

      setIsSubmitted(true)

      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      toast.success("Message sent successfully!")
    } catch (error) {
      console.error("Contact form error:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-sky-50 via-background to-cyan-50 py-16 sm:py-20 lg:py-24">
          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Badge
                variant="secondary"
                className="mb-5 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-500" />
                Contact MegaTech Solution
              </Badge>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Great Together
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Have questions about our products or services? We're here to
                help. Reach out to us and our team will get back to you within
                24 hours.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Contact Our Team
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#our-team"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:border-cyan-300 hover:bg-slate-50"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT INFORMATION */}
        <section className="relative z-10 py-8 lg:-mt-2">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  className="group border-slate-200/80 bg-background/95 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <CardContent className="px-4 pb-6 pt-7">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 transition-all duration-300 group-hover:bg-cyan-500">
                      <item.icon className="h-5 w-5 text-cyan-600 transition-colors group-hover:text-white" />
                    </div>

                    <h3 className="mt-4 font-bold text-foreground">
                      {item.title}
                    </h3>

                    <div className="mt-3 space-y-2">
                      {item.details.map((detail) => (
                        <p
                          key={detail}
                          className="break-words text-sm font-medium leading-6 text-foreground"
                        >
                          {item.title === "Phone" ? (
                            <a
                              href="tel:+923069293923"
                              className="transition-colors hover:text-primary"
                            >
                              {detail}
                            </a>
                          ) : item.title === "Email" ? (
                            <a
                              href="mailto:megatechsolution1348@hotmail.com"
                              className="transition-colors hover:text-primary"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* OUR TEAM */}
        <section
          id="our-team"
          className="scroll-mt-20 bg-gradient-to-b from-background to-sky-50/60 py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-primary"
                >
                  Our People
                </Badge>

                <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  Meet the People Behind{" "}
                  <span className="text-primary">
                    MegaTech Solution
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Our team combines technical expertise, professional
                  experience, and a commitment to providing dependable
                  technology solutions for every customer.
                </p>

                <a
                  href={teamMembers[0].instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
                >
                  <Instagram className="h-4 w-4" />
                  Follow Us on Instagram
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-1">
                {teamMembers.map((member) => (
                  <Card
                    key={member.id}
                    className="group overflow-hidden border-slate-200 bg-background shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="grid sm:grid-cols-[0.85fr_1.15fr]">
                      <div className="relative min-h-[280px] overflow-hidden bg-slate-100 sm:min-h-[320px]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/90 text-sm font-black text-primary shadow-md backdrop-blur">
                          MT
                        </div>
                      </div>

                      <CardContent className="flex flex-col justify-center p-6 sm:p-7">
                        <Badge className="mb-3 w-fit bg-cyan-50 text-cyan-700 hover:bg-cyan-50">
                          Leadership
                        </Badge>

                        <h3 className="text-xl font-black text-foreground sm:text-2xl">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-primary">
                          {member.designation}
                        </p>

                        <p className="mt-4 text-sm leading-7 text-muted-foreground">
                          {member.experience}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on Instagram`}
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                          >
                            <Instagram className="h-4 w-4" />
                            Instagram
                          </a>

                          <div className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-xs font-medium text-muted-foreground">
                            <BriefcaseBusiness className="h-4 w-4 text-primary" />
                            Executive Leadership
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM AND FAQ */}
        <section
          id="contact-form"
          className="scroll-mt-20 border-y border-border bg-slate-50 py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10 text-center">
              <Badge
                variant="secondary"
                className="mb-4 rounded-full border border-primary/15 bg-primary/10 text-primary"
              >
                Get In Touch
              </Badge>

              <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                We're Here to Help
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Send us your question, requirement, or inquiry and our team
                will get back to you as soon as possible.
              </p>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
              {/* CONTACT FORM */}
              <Card className="overflow-hidden border-slate-200 bg-background shadow-xl">
                <CardHeader className="border-b border-white/10 bg-slate-950 px-6 py-6 text-white sm:px-8">
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15">
                      <MessageSquare className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                      <span className="block">Send us a Message</span>
                      <span className="mt-1 block text-xs font-normal text-slate-300">
                        Fill out the form and we'll get back to you.
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-5 sm:p-8">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-foreground">
                        Message Sent!
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                        Thank you for contacting us. We'll get back to you
                        within 24 hours.
                      </p>

                      <Button
                        className="mt-6"
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formState.name}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+92 300 1234567"
                            value={formState.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your requirement..."
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="h-12 w-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        disabled={isLoading}
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

                      <p className="text-center text-xs leading-5 text-muted-foreground">
                        Your information is used only to respond to your
                        inquiry.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* FAQ SECTION */}
              <div className="space-y-5">
                <div>
                  <Badge
                    variant="secondary"
                    className="mb-4 rounded-full border border-primary/15 bg-primary/10 text-primary"
                  >
                    Frequently Asked Questions
                  </Badge>

                  <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    Common Questions
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    Find quick answers to some of the questions our customers
                    ask most often.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-background p-4 shadow-sm transition-all open:border-cyan-300 open:shadow-md sm:p-5"
                      open={index === 0}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                        <span>{faq.question}</span>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-muted-foreground transition-all group-open:rotate-180 group-open:bg-cyan-100 group-open:text-cyan-700">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </summary>

                      <p className="mt-3 border-t border-border pt-3 text-sm leading-6 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>

                <Card className="overflow-hidden border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 shadow-sm">
                  <CardContent className="flex items-start gap-4 p-5 sm:p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Mail className="h-5 w-5 text-cyan-600" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-slate-900">
                        Still have questions?
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Send us a message and our team will be happy to assist
                        you with your requirements.
                      </p>

                      <a
                        href="mailto:megatechsolution1348@hotmail.com"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-blue-700"
                      >
                        Email our team
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
