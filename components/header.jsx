"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/40 bg-[#08111F]/85 backdrop-blur-xl shadow-lg shadow-blue-950/20">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="MegaTech Solution Logo"
            width={46}
            height={46}
            className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <span className="text-2xl font-extrabold tracking-wide">
            <span className="text-white">
              MegaTech
            </span>
            <span className="text-blue-500">
              Solution
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
              relative
              text-[15px]
              font-semibold
              tracking-wide
              text-gray-300
              transition-all
              duration-300
              hover:text-white
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-blue-500
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">

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
            border-blue-800/50
            bg-slate-900/80
            text-white
            transition-all
            duration-300
            hover:bg-blue-600
            hover:border-blue-500
            hover:shadow-lg
            hover:shadow-blue-500/30
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
                shadow-md
                "
              >
                {itemCount > 99 ? "99+" : itemCount}
              </Badge>
            )}

            <span className="sr-only">
              Shopping cart ({itemCount} items)
            </span>
          </Button>

          <Button
            asChild
            className="
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-6
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
            hover:shadow-cyan-500/30
            "
          >
            <Link href="/products">
              Shop Now
            </Link>
          </Button>

        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">

          <Button
            variant="ghost"
            size="icon"
            onClick={openCart}
            className="
            relative
            rounded-full
            border
            border-blue-800/50
            bg-slate-900
            text-white
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
                "
              >
                {itemCount > 99 ? "99+" : itemCount}
              </Badge>
            )}

            <span className="sr-only">
              Shopping cart ({itemCount} items)
            </span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>

              <Button
                variant="ghost"
                size="icon"
                className="
                rounded-full
                border
                border-blue-800/50
                bg-slate-900
                text-white
                "
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">
                  Open menu
                </span>
              </Button>

            </SheetTrigger>

            <SheetContent
              side="right"
              className="
              w-[300px]
              border-l
              border-blue-900/40
              bg-[#08111F]
              text-white
              "
            >
              <div className="flex flex-col gap-8 pt-8">

                {/* Mobile Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/images/logo.png"
                    alt="MegaTech Solution Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />

                  <span className="text-xl font-bold">
                    <span className="text-white">
                      MegaTech
                    </span>
                    <span className="text-blue-500">
                      Solution
                    </span>
                  </span>
                </Link>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-5">

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="
                      text-lg
                      font-medium
                      text-gray-300
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:text-blue-400
                      "
                    >
                      {item.name}
                    </Link>
                  ))}

                </nav>

                <Button
                  asChild
                  onClick={() => setIsOpen(false)}
                  className="
                  mt-4
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  "
                >
                  <Link href="/products">
                    Shop Now
                  </Link>
                </Button>

              </div>
            </SheetContent>
          </Sheet>

        </div>

      </div>
    </header>
  )
}
