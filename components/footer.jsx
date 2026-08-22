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
    <footer className="relative overflow-hidden bg-[#16232c] text-slate-300">

      <div className="container relative z-10 mx-auto px-6 py-14 lg:px-8">

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
  <span className="text-[#00b8d9]">Solution</span>
</h2>

    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
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
                <MapPin className="mt-1 h-5 w-5 text-[#00b8d9]" />
                <span>
                  Office No. 3, Ameer Mall,
                  New City Phase-II,
                  Wah Cantt, Pakistan 47010
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-5 w-5 text-[#00b8d9]" />
                <span>+92 0306-9293923</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-5 w-5 text-[#00b8d9]" />
                <span>megatechsolution1348@hotmail.com</span>
              </div>

            </div>

          </div>

          {/* Products */}
          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h3>

            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-[#00b8d9]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-[#00b8d9]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Support / Follow */}
          <div>

            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Follow
            </h3>

            <ul className="mb-6 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-[#00b8d9]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-all duration-300 hover:text-[#00b8d9]"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#111d24] py-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 text-xs text-slate-500 md:flex-row lg:px-8">
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-[#00b8d9]">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-[#00b8d9]">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-[#00b8d9]">
              Sitemap
            </Link>
          </div>
          <p>© 2026 MegaTech Solution. All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  )
}
