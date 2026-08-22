"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { itemCount, openCart } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/90 backdrop-blur-xl shadow-sm">

      <div className="container mx-auto flex h-[74px] items-center justify-between px-4 lg:px-8">

        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <Image
            src="/images/logo.png"
            alt="MegaTech Solution Logo"
            width={46}
            height={46}
            className="h-11 w-11 object-contain transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
          />

         <div className="leading-tight">
  <h1 className="text-[24px] font-black tracking-tight text-slate-900">
    MegaTech{" "}
    <span className="text-emerald-600">
      Solution
    </span>
  </h1>

  <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
    PREMIUM IT SOLUTIONS
  </p>
</div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              className="
              relative
              font-semibold
              text-gray-700
              transition-all
              duration-300
              hover:text-emerald-600

              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-emerald-500
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              {item.name}
            </Link>

          ))}

        </nav>

        {/* Desktop Right Side */}

        <div className="hidden items-center gap-3 lg:flex">

          <Button
            variant="ghost"
            size="icon"
            onClick={openCart}
            className="
            relative
            h-11
            w-11
            rounded-full
            border
            border-emerald-200
            bg-emerald-50
            text-emerald-700

            transition-all
            duration-300

            hover:bg-emerald-600
            hover:text-white
            hover:shadow-lg
            hover:shadow-emerald-300
            "
          >

            <ShoppingCart className="h-5 w-5" />

            {itemCount > 0 && (
              <Badge
                className="
                absolute
                -right-1
                -top-1

                flex
                h-5
                w-5
                items-center
                justify-center

                rounded-full
                bg-red-600
                p-0

                text-[10px]
                text-white
                "
              >
                {itemCount > 99 ? "99+" : itemCount}
              </Badge>
            )}

            <span className="sr-only">
              Shopping Cart
            </span>

          </Button>

          <Button
            asChild
            className="
            rounded-full
            bg-gradient-to-r
            from-emerald-600
            to-teal-500

            px-7
            py-6

            text-white
            font-semibold

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-xl
            hover:shadow-emerald-300
            "
          >
            <Link href="/products">
              Shop Now
            </Link>
          </Button>

        </div>
                {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            onClick={openCart}
            className="
            relative
            h-10
            w-10
            rounded-full
            border
            border-emerald-200
            bg-emerald-50
            text-emerald-700
            hover:bg-emerald-600
            hover:text-white
            transition-all
            duration-300
            "
          >
            <ShoppingCart className="h-5 w-5" />

            {itemCount > 0 && (
              <Badge
                className="
                absolute
                -right-1
                -top-1
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-red-600
                p-0
                text-[10px]
                text-white
                "
              >
                {itemCount > 99 ? "99+" : itemCount}
              </Badge>
            )}

            <span className="sr-only">
              Shopping Cart
            </span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>

            <SheetTrigger asChild>

              <Button
                variant="ghost"
                size="icon"
                className="
                h-10
                w-10
                rounded-full
                border
                border-gray-200
                bg-white
                text-gray-700
                hover:bg-emerald-600
                hover:text-white
                transition-all
                duration-300
                "
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">
                  Open Menu
                </span>
              </Button>

            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] border-l border-gray-200 bg-white"
            >

              <div className="flex flex-col h-full">

                {/* Mobile Logo */}
                <div className="border-b border-gray-100 pb-6 pt-2">

                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <Image
                      src="/images/logo.png"
                      alt="MegaTech Solution Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                    />

                    <div>

                      <h2 className="text-xl font-black text-slate-900">
                        MegaTech
                        <span className="text-emerald-600">
                          Solution
                        </span>
                      </h2>

                      <p className="text-[11px] uppercase tracking-[2px] text-gray-500">
                        Smart Technology Store
                      </p>

                    </div>

                  </Link>

                </div>

                {/* Navigation */}
                <nav className="mt-8 flex flex-col gap-2">

                  {navigation.map((item) => (

                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="
                      rounded-xl
                      px-4
                      py-3
                      font-semibold
                      text-gray-700
                      transition-all
                      duration-300
                      hover:bg-emerald-50
                      hover:text-emerald-600
                      hover:translate-x-1
                      "
                    >
                      {item.name}
                    </Link>

                  ))}

                </nav>

                {/* Bottom CTA */}
                <div className="mt-auto pb-6">

                  <Button
                    asChild
                    className="
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-emerald-600
                    to-teal-500
                    py-6
                    text-white
                    font-semibold
                    shadow-lg
                    hover:scale-[1.02]
                    hover:shadow-xl
                    transition-all
                    duration-300
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/products">
                      Shop Now
                    </Link>
                  </Button>

                </div>

              </div>

            </SheetContent>

          </Sheet>

        </div>

      </div>

    </header>
  )
}
