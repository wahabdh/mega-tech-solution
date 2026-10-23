"use client"

import { useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { products } from "@/lib/products-data"
import { useCart } from "@/context/cart-context"
import { toast } from "sonner"
import {
  ShoppingCart,
  Star,
  CheckCircle2,
  Truck,
  ShieldCheck,
  RefreshCw,
  Headphones,
  ArrowLeft,
  ChevronRight,
  Package,
  Minus,
  Plus,
  Heart,
} from "lucide-react"
import { useState } from "react"

const formatPrice = (price) =>
  `Rs. ${Number(price || 0).toLocaleString("en-PK")}`

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem, openCart, items } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const product = useMemo(
    () => products.find((item) => String(item.id) === String(params.id)),
    [params.id]
  )

  const relatedProducts = useMemo(() => {
    if (!product) return []

    return products
      .filter(
        (item) =>
          item.id !== product.id &&
          item.category === product.category
      )
      .slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <Card className="w-full max-w-lg rounded-2xl border-slate-200 bg-white">
            <CardContent className="py-12 text-center">
              <Package className="mx-auto h-14 w-14 text-slate-300" />
              <h1 className="mt-5 text-2xl font-bold text-slate-900">
                Product Not Found
              </h1>
              <p className="mt-3 text-sm text-slate-500">
                This product may have been removed or the product link may be incorrect.
              </p>
              <Button
                asChild
                className="mt-6 rounded-xl bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  const inCart = items.some((item) => item.id === product.id)

  const discount =
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast.success(`${product.name} added to cart`, {
      description: `${quantity} × ${formatPrice(product.price)}`,
      action: {
        label: "View Cart",
        onClick: openCart,
      },
    })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="max-w-[200px] truncate font-medium text-slate-900">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Product detail */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              onClick={() => router.push("/products")}
              className="mb-6 -ml-3 rounded-xl text-slate-600 hover:text-blue-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all products
            </Button>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Image */}
              <div className="min-w-0">
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-10">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-5 sm:p-8"
                  />

                  {product.badge && (
                    <Badge className="absolute left-4 top-4 z-10 bg-blue-600 px-3 py-1 text-white hover:bg-blue-600">
                      {product.badge}
                    </Badge>
                  )}

                  {discount > 0 && (
                    <Badge className="absolute right-4 top-4 z-10 bg-emerald-600 text-white hover:bg-emerald-600">
                      Save {discount}%
                    </Badge>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsFavorite((value) => !value)}
                    aria-label={
                      isFavorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                    aria-pressed={isFavorite}
                    className={`absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition ${
                      isFavorite
                        ? "border-rose-200 bg-rose-50 text-rose-600"
                        : "border-slate-200 bg-white text-slate-500 hover:text-rose-500"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { icon: Truck, text: "Delivery Available" },
                    { icon: ShieldCheck, text: "Warranty Support" },
                    { icon: CheckCircle2, text: "Quality Products" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-4 text-center"
                    >
                      <item.icon className="h-5 w-5 text-blue-600" />
                      <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information and purchase options */}
              <div className="flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  MegaTech Solution
                </p>

                <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  {product.name}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {product.rating != null && (
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold">
                        {product.rating}
                      </span>
                    </div>
                  )}

                  {product.reviews != null && (
                    <span className="text-sm text-slate-500">
                      ({product.reviews} reviews)
                    </span>
                  )}

                  {product.badge && (
                    <Badge
                      variant="outline"
                      className="border-blue-200 text-blue-700"
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>

                <Separator className="my-6" />

                <div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
                      {formatPrice(product.price)}
                    </span>

                    {product.originalPrice > product.price && (
                      <span className="text-base text-slate-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {discount > 0 && (
                    <p className="mt-2 text-sm font-semibold text-emerald-700">
                      You save{" "}
                      {formatPrice(product.originalPrice - product.price)}{" "}
                      ({discount}% off)
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {product.description ||
                      "Discover quality technology from MegaTech Solution."}
                  </p>
                </div>

                {/* Specifications */}
                {product.specs?.length > 0 && (
                  <div className="mt-7">
                    <h2 className="text-lg font-bold text-slate-900">
                      Key Specifications
                    </h2>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {product.specs.map((spec, index) => (
                        <div
                          key={`${spec}-${index}`}
                          className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          <span className="text-sm text-slate-700">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity and cart */}
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                  <p className="text-sm font-bold text-slate-800">
                    Quantity
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <div className="flex h-11 items-center rounded-xl border border-slate-200">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        disabled={quantity <= 1}
                        onClick={() =>
                          setQuantity((current) => Math.max(1, current - 1))
                        }
                        className="flex h-10 w-10 items-center justify-center text-slate-600 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span className="min-w-10 text-center text-sm font-bold">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        aria-label="Increase quantity"
                        disabled={quantity >= 99}
                        onClick={() =>
                          setQuantity((current) => Math.min(99, current + 1))
                        }
                        className="flex h-10 w-10 items-center justify-center text-slate-600 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-500">
                      Total:{" "}
                      <span className="font-bold text-slate-900">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </p>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    className="mt-5 h-12 w-full rounded-xl bg-blue-600 font-bold text-white hover:bg-blue-700"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {inCart ? "Add More to Cart" : "Add to Cart"}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => {
                      addItem(product, quantity)
                      router.push("/checkout")
                    }}
                    className="mt-3 h-12 w-full rounded-xl border-blue-200 font-bold text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    Buy Now
                  </Button>

                  <p className="mt-3 text-center text-xs text-slate-500">
                    Your cart is saved in this browser.
                  </p>
                </div>

                {/* Service notes */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Truck className="h-5 w-5 shrink-0 text-blue-600" />
                    <span>Delivery arrangements confirmed with your order.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600" />
                    <span>Contact us to confirm warranty details for this product.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Headphones className="h-5 w-5 shrink-0 text-blue-600" />
                    <span>Need assistance? Our team is ready to help.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-slate-200 bg-white py-10 sm:py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    You Might Also Like
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                    Related Products
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="shrink-0 rounded-xl"
                >
                  <Link href="/products">View All</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="relative aspect-square bg-slate-100">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain p-4 transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <p className="line-clamp-2 min-h-10 text-xs font-bold text-slate-800 group-hover:text-blue-700 sm:text-sm">
                        {item.name}
                      </p>
                      <p className="mt-2 text-sm font-extrabold text-blue-700">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Help section */}
        <section className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                <Headphones className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="mt-4 text-xl font-bold text-slate-900">
                Have Questions About This Product?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Contact MegaTech Solution for product information, compatibility
                questions, warranty details, or assistance with your order.
              </p>
              <Button
                asChild
                className="mt-5 rounded-xl bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
