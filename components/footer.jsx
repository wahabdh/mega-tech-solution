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
    { name: "Careers", href: "/#" },
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
    <footer className="relative overflow-hidden border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-300">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

          <Link href="/" className="flex items-center gap-4">

 <Image
  src="/images/logo.jpg"
  width={90}
  height={90}
  className="h-auto w-auto max-h-20 object-contain"
  priority
/>

  <div>

    <h2 className="text-2xl font-extrabold tracking-wide text-white">
      MegaTech
      <span className="text-cyan-400">Solution</span>
    </h2>

    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
      Premium IT Solutions
    </p>

  </div>

</Link>

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-slate-400">
              Your trusted partner for premium computer accessories,
              gaming PCs, laptops, and enterprise IT solutions.
              Delivering quality technology products and exceptional
              customer service since 2018.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                <span>
                  Office No. 3, Ameer Mall,
                  New City Phase-II,
                  Wah Cantt, Pakistan 47010
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+92 0306-9293923</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>megatechsolution1348@hotmail.com</span>
              </div>

            </div>
          </div>

          {/* Products */}
          <div>

            <h3 className="mb-5 text-lg font-bold tracking-wide text-white">
              Products
            </h3>

            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
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
                    className="group inline-flex items-center text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
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
                    className="group inline-flex items-center text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm tracking-wide text-slate-500">
            © 2026 MegaTech Solution. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">

            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-800/60 text-slate-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/40"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}

          </div>

        </div>

      </div>

    </footer>
  )
}
