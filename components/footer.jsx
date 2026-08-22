import Image from "next/image"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

const footerLinks = {
  products: [
    { name: "Gaming PCs", href: "/#products" },
    { name: "Laptops", href: "/#products" },
    { name: "Keyboards", href: "/#products" },
    { name: "Mice", href: "/#products" },
    { name: "Storage", href: "/#products" },
  ],
  company: [
    { name: "About Us", href: "/contact" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Home", href: "/home" },
  ],
  support: [
    { name: "Help Center", href: "/contact" },
    { name: "Warranty", href: "/services" },
    { name: "Returns", href: "/services" },
    { name: "Shipping", href: "/services" },
  ],
}

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/megatechsolution1348",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/megatechsolution1348/?hl=en",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d2b26] text-slate-300">

      {/* Subtle triangle line pattern (decorative) */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 800 400"
        >
          <polyline
            points="500,400 650,100 800,400"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <polyline
            points="600,400 700,200 800,400"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

          <Link href="/" className="flex items-center gap-4">

 <Image
  src="/images/logof.png"
  width={55}
  height={55}
  className="h-auto w-auto max-h-20 object-contain"
  priority
/>

  <div>

    <h2 className="text-2xl font-extrabold tracking-wide text-white">
  MegaTech{" "}
  <span className="text-amber-400">Solution</span>
</h2>

    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
      Premium IT Solutions
    </p>

  </div>

</Link>

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-slate-300">
              Your trusted partner for premium computer accessories,
              gaming PCs, laptops, and enterprise IT solutions.
              Delivering quality technology products and exceptional
              customer service since 2018.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-1 h-5 w-5 text-amber-400" />
                <span>
                  Office No. 3, Ameer Mall,
                  New City Phase-II,
                  Wah Cantt, Pakistan 47010
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+92 0306-9293923</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>megatechsolution1348@hotmail.com</span>
              </div>

            </div>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-600 text-slate-300 transition-all duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-[#0d2b26]"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>

          </div>

          {/* Products */}
          <div>

            <h3 className="mb-5 text-lg font-bold tracking-wide text-white">
              Products
            </h3>

            <ul className="space-y-4">
              {footerLinks.products.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`group inline-flex items-center text-sm transition-all duration-300 hover:translate-x-1 hover:text-amber-400 ${
                      index === 0
                        ? "text-white underline underline-offset-4"
                        : "text-slate-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="mb-5 text-lg font-bold tracking-wide text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Support */}
          <div>

            <h3 className="mb-5 text-lg font-bold tracking-wide text-white">
              Support
            </h3>

            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-amber-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Back to top */}
        <div className="mt-10">
          
            href="#top"
            className="inline-flex items-center gap-2 rounded-md border border-slate-500 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200 transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
          >
            ↑ BACK TO TOP
          </a>
        </div>

      </div>

      {/* Bottom copyright bar */}
      <div className="relative z-10 bg-amber-500 py-3 text-center">
        <p className="text-xs font-medium tracking-wide text-[#0d2b26]">
          © 2026 MegaTech Solution. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}
