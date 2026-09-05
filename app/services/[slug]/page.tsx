import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { services, getServiceBySlug } from "@/lib/services-data"
import { ArrowLeft, ArrowRight, CheckCircle2, Images, BriefcaseBusiness } from "lucide-react"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: `${service.title} - MegaTech Solution`,
    description: service.shortDescription,
  }
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="border-b border-border bg-secondary/30 py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">

            <Link
              href="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Link>

            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-3">Our Services</Badge>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
                  {service.title}
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact#contact-form">Request This Service</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:92-3069293923">Call for Support</Link>
              </Button>
            </div>

          </div>
        </section>

        {/* Overview + Included */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">

              {/* Overview */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground">Service Overview</h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  {service.overview}
                </p>

                <h3 className="mt-10 text-xl font-semibold text-foreground">Key Features</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.externalLink && (
                  <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <p className="text-sm text-muted-foreground">
                      This service is delivered in partnership with our development team.
                    </p>
                    <Button variant="link" className="mt-1 h-auto p-0 text-primary" asChild>
                      <Link href={service.externalLink} target="_blank" rel="noopener noreferrer">
                        {service.externalLinkLabel}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* What's Included card */}
              <div>
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">What's Included</h3>
                    <ul className="mt-4 space-y-3">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full" asChild>
                      <Link href="/contact#contact-form">Get a Free Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* Technician Profile */}
        <section className="border-y border-border bg-secondary/20 py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="overflow-hidden border-border shadow-lg">
              <div className="grid items-center gap-6 p-6 sm:grid-cols-[140px_1fr] sm:p-8">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl bg-muted sm:h-full sm:w-full">
                  <img
                    src={service.technician.image}
                    alt={service.technician.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Handled By
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.technician.name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{service.technician.role}</p>
                  <p className="mt-3 leading-7 text-muted-foreground">{service.technician.bio}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Work Gallery */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">

            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Images className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Our Work</h2>
                <p className="text-sm text-muted-foreground">
                  A look at {service.title.toLowerCase()} projects we've completed for our customers.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.gallery.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-muted"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="rounded-2xl bg-primary px-6 py-12 text-center sm:px-12">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl text-balance">
                Ready to Get Started with {service.title}?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Contact us today for a free consultation and transparent quote.
              </p>
              <Button size="lg" variant="secondary" className="mt-8" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
