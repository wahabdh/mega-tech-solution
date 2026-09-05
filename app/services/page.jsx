import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { services } from "@/lib/services-data"
import { ArrowRight, CheckCircle2, Headphones } from "lucide-react"

export const metadata = {
  title: "Our Services - MegaTech Solution",
  description: "Professional computer repair, custom PC building, data recovery, and IT support services.",
}

const benefits = [
  "Free diagnostic assessment",
  "90-day service warranty",
  "Certified technicians",
  "Same-day service available",
  "Transparent pricing",
  "No fix, no fee policy",
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <Badge variant="secondary" className="mb-4">Professional Services</Badge>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
                Expert Tech Services for{" "}
                <span className="text-primary">Every Need</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                From computer repairs to custom PC builds, our certified technicians deliver quality service with fast turnaround times and competitive pricing.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:92-3069293923">Call for Support</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
                  <Card className="group h-full border-border transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground">{service.shortDescription}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        View Service Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Service You Can Trust
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our commitment to quality and customer satisfaction sets us apart.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-card p-8 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
                      <Headphones className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Need Help?</h3>
                      <p className="text-muted-foreground">Our experts are ready to assist</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Call Us</p>
                        <p className="font-semibold text-foreground">92-3069293923</p>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="tel:92-3069293923">Call</Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Email Us</p>
                        <p className="font-semibold text-foreground">megatechsolution1348@hotmail.com</p>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/contact">Contact</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="rounded-2xl bg-primary px-6 py-12 text-center sm:px-12">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl text-balance">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
                Contact us today for a free consultation. We'll diagnose your issue and provide a transparent quote.
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
