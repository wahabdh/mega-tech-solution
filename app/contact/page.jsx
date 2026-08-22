"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  Linkedin,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react"
import { toast } from "sonner"

/* =========================================================
   CONTACT INFORMATION
   Existing information kept unchanged
========================================================= */

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 0310-4601236"],
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
      "office No 3 Ameer Mall New City Phase 2 , Wah, Pakistan, 47010",
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

/* =========================================================
   TEAM MEMBERS
   EDIT ONLY THIS SECTION WHEN YOU ADD YOUR REAL STAFF
========================================================= */

const teamMembers = [
  {
    name: "CEO Name",
    designation: "Chief Executive Officer",
    image: "/images/team/ceo.jpg",
    experience:
      "Leading MegaTech Solution with a strong vision for technology, innovation, and customer-focused solutions. With years of professional experience, the CEO focuses on building long-term relationships and delivering reliable technology services.",
    featured: true,
  },
  {
    name: "Staff Member 1",
    designation: "Technical Director",
    image: "/images/team/staff-1.jpg",
    experience:
      "Experienced technology professional specializing in IT solutions, hardware systems, technical support, and modern technology infrastructure.",
    featured: false,
  },
  {
    name: "Staff Member 2",
    designation: "IT & Systems Specialist",
    image: "/images/team/staff-2.jpg",
    experience:
      "Focused on providing efficient technical solutions and helping clients select, configure, and maintain reliable technology systems.",
    featured: false,
  },
  {
    name: "Staff Member 3",
    designation: "Sales & Customer Relations",
    image: "/images/team/staff-3.jpg",
    experience:
      "Dedicated to understanding customer requirements and delivering professional guidance, product recommendations, and excellent customer service.",
    featured: false,
  },
]

/* =========================================================
   FAQS
   Existing information kept unchanged
========================================================= */

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

      if (result.success) {
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* =====================================================
            PREMIUM HERO SECTION
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-secondary/60 via-background to-primary/5 py-20 lg:py-28">

          {/* Decorative background elements */}
          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="container relative mx-auto px-4 lg:px-8">

            <div className="mx-auto max-w-4xl text-center">

              <Badge
                variant="secondary"
                className="mb-5 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
              >
                Contact MegaTech Solution
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Let's Build Something{" "}
                <span className="text-primary">Great Together</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Have questions about our products or services? We're here to
                help. Reach out to us and our team will get back to you within
                24 hours.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Contact Our Team
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="#our-team"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium text-foreground transition-all hover:bg-muted"
                >
                  Meet Our Team
                </a>
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            CONTACT INFORMATION
            Existing data kept unchanged
        ====================================================== */}

        <section className="relative -mt-8 z-10 pb-8">
          <div className="container mx-auto px-4 lg:px-8">

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  className="group border-border/70 bg-background/95 text-center shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <CardContent className="pt-7">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                      <item.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>

                    <h3 className="mt-5 font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <div className="mt-3 space-y-1">
                      {item.details.map((detail) => (
                        <p
                          key={detail}
                          className="text-sm font-medium text-foreground"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>

                    <p className="mt-2 text-xs text-muted-foreground">
                      {item.description}
                    </p>

                  </CardContent>
                </Card>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            MEET OUR TEAM
        ====================================================== */}

        <section
          id="our-team"
          className="py-16 lg:py-24"
        >
          <div className="container mx-auto px-4 lg:px-8">

            {/* Section heading */}
            <div className="mx-auto mb-12 max-w-3xl text-center">

              <Badge
                variant="secondary"
                className="mb-4 rounded-full"
              >
                Our People
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Meet the People Behind{" "}
                <span className="text-primary">MegaTech Solution</span>
              </h2>

              <p className="mt-4 text-muted-foreground">
                Our team combines technical expertise, professional experience,
                and a commitment to providing dependable technology solutions
                for every customer.
              </p>

            </div>


            {/* CEO Featured Card */}
            {teamMembers
              .filter((member) => member.featured)
              .map((member) => (
                <Card
                  key={member.name}
                  className="group mb-10 overflow-hidden border-border/70 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl"
                >
                  <div className="grid items-center lg:grid-cols-[360px_1fr]">

                    {/* CEO Image */}
                    <div className="relative h-[360px] overflow-hidden bg-muted sm:h-[420px] lg:h-[380px]">

                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 lg:hidden">
                        <p className="text-sm font-medium text-white/80">
                          {member.designation}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-white">
                          {member.name}
                        </h3>
                      </div>

                    </div>


                    {/* CEO Information */}
                    <div className="p-7 sm:p-10 lg:p-12">

                      <div className="mb-5 hidden lg:block">

                        <Badge className="mb-4">
                          Leadership
                        </Badge>

                        <h3 className="text-3xl font-bold text-foreground">
                          {member.name}
                        </h3>

                        <p className="mt-2 text-lg font-medium text-primary">
                          {member.designation}
                        </p>

                      </div>

                      <div className="mb-5 flex items-center gap-3 lg:hidden">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                          <BriefcaseBusiness className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                          <p className="font-semibold text-foreground">
                            {member.name}
                          </p>

                          <p className="text-sm text-primary">
                            {member.designation}
                          </p>
                        </div>

                      </div>

                      <div className="h-px w-16 bg-primary mb-6" />

                      <p className="text-base leading-8 text-muted-foreground">
                        {member.experience}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">

                        <div className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                          Leadership
                        </div>

                        <div className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                          Technology
                        </div>

                        <div className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                          Business Strategy
                        </div>

                      </div>

                    </div>

                  </div>
                </Card>
              ))}


            {/* Other Staff */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {teamMembers
                .filter((member) => !member.featured)
                .map((member) => (
                  <Card
                    key={member.name}
                    className="group overflow-hidden border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                  >

                    {/* Staff image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">

                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Image gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                    </div>


                    <CardContent className="p-6">

                      <div className="mb-4">

                        <h3 className="text-xl font-bold text-foreground">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-sm font-semibold text-primary">
                          {member.designation}
                        </p>

                      </div>

                      <div className="mb-4 h-px w-10 bg-primary transition-all duration-300 group-hover:w-16" />

                      <p className="text-sm leading-7 text-muted-foreground">
                        {member.experience}
                      </p>

                    </CardContent>

                  </Card>
                ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            CONTACT FORM & MAP
            Existing functionality/data kept unchanged
        ====================================================== */}

        <section
          id="contact-form"
          className="border-y border-border bg-secondary/20 py-16 lg:py-20"
        >
          <div className="container mx-auto px-4 lg:px-8">

            <div className="mb-12 text-center">

              <Badge
                variant="secondary"
                className="mb-4 rounded-full"
              >
                Get In Touch
              </Badge>

              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                We're Here to Help
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Send us your question, requirement, or inquiry and our team
                will get back to you as soon as possible.
              </p>

            </div>


            <div className="grid gap-8 lg:grid-cols-2">

              {/* Contact Form */}
              <Card className="border-border bg-background shadow-lg">

                <CardHeader className="border-b border-border">

                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Send us a Message
                  </CardTitle>

                </CardHeader>

                <CardContent className="pt-6">

                  {isSubmitted ? (

                    <div className="flex flex-col items-center py-12 text-center">

                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>

                      <h3 className="mt-4 text-xl font-semibold text-foreground">
                        Message Sent!
                      </h3>

                      <p className="mt-2 text-muted-foreground">
                        Thank you for contacting us. We'll get back to you
                        within 24 hours.
                      </p>

                      <Button
                        className="mt-6 bg-transparent"
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
                          <Label htmlFor="name">
                            Full Name *
                          </Label>

                          <Input
                            id="name"
                            name="name"
                            placeholder="Ali"
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email *
                          </Label>

                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="ali@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                      </div>


                      <div className="grid gap-4 sm:grid-cols-2">

                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            Phone Number
                          </Label>

                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+92 (306) 00000000"
                            value={formState.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">
                            Subject *
                          </Label>

                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Product inquiry"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>

                      </div>


                      <div className="space-y-2">

                        <Label htmlFor="message">
                          Message *
                        </Label>

                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />

                      </div>


                      <Button
                        type="submit"
                        className="w-full gap-2"
                        disabled={isLoading}
                      >

                        {isLoading ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}

                      </Button>

                    </form>

                  )}

                </CardContent>

              </Card>


              {/* Map / FAQ */}
              <div className="space-y-6">

                {/* Map */}
                <Card className="overflow-hidden border-border shadow-lg">

                  <div className="relative h-[280px] bg-muted">

                    <iframe
                      src="https://www.google.com/maps/place/Ameer+Mall/@33.7519976,72.7404517,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfa70033d64fa3:0xa478892c183bf65e!8m2!3d33.7519976!4d72.7404517!16s%2Fg%2F11xh9qtvsv?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="MegaTech Solution Location"
                    />

                  </div>

                  <CardContent className="p-5">

                    <div className="flex items-start gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <p className="font-semibold text-foreground">
                          Visit MegaTech Solution
                        </p>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          office No 3 Ameer Mall New City Phase 2 , Wah,
                          Pakistan, 47010
                        </p>
                      </div>

                    </div>

                  </CardContent>

                </Card>


                {/* FAQ */}
                <Card className="border-border shadow-lg">

                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">

                    {faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="border-b border-border pb-4 last:border-0 last:pb-0"
                      >

                        <h4 className="font-medium text-foreground">
                          {faq.question}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {faq.answer}
                        </p>

                      </div>
                    ))}

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
