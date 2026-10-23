"use client"

import { useMemo, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  Monitor,
  Keyboard,
  HardDrive,
  Cpu,
  Laptop,
  ShoppingCart,
  Star,
  Filter,
  CheckCircle2,
  Truck,
  Shield,
  RefreshCw,
  Headphones,
  Search,
  Heart,
  SlidersHorizontal,
  ArrowUpDown,
  X,
  Package,
  ChevronRight,
  RotateCcw,
} from "lucide-react"
import { products, categories as baseCategories } from "@/lib/products-data"
import { useCart } from "@/context/cart-context"
import { toast } from "sonner"

const categoryIcons = {
  all: Filter,
  "gaming-pc": Monitor,
  laptop: Laptop,
  peripheral: Keyboard,
  storage: HardDrive,
  components: Cpu,
  Electronics: Package,
}

const categories = baseCategories.map((category) => ({
  ...category,
  icon: categoryIcons[category.id] || Package,
}))

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over Rs. 2,000",
  },
  {
    icon: Shield,
    title: "Official Warranty",
    description: "Up to 2 years coverage",
  },
  {
    icon: RefreshCw,
    title: "Easy Support",
    description: "Help when you need it",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "We're here to help",
  },
]

const formatPrice = (price) =>
  `Rs. ${Number(price || 0).toLocaleString("en-PK")}`

export default function ProductsPage() {
  const { addItem, items, itemCount, openCart } = useCart()

  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [maxPrice, setMaxPrice] = useState(300000)
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState([])

  const maxAvailablePrice = useMemo(
    () => Math.max(300000, ...products.map((product) => Number(product.price) || 0)),
    []
  )

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory

      const query = searchQuery.trim().toLowerCase()

      const matchesSearch =
        !query ||
        product.name?.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query) ||
        product.specs?.some((spec) => spec.toLowerCase().includes(query))

      const matchesPrice = Number(product.price) <= maxPrice

      return matchesCategory && matchesSearch && matchesPrice
    })

    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name))
        break
      case "discount":
        result = [...result].sort((a, b) => {
          const discountA = a.originalPrice
            ? (a.originalPrice - a.price) / a.originalPrice
            : 0
          const discountB = b.originalPrice
            ? (b.originalPrice - b.price) / b.originalPrice
            : 0
          return discountB - discountA
        })
        break
      default:
        break
    }

    return result
  }, [activeCategory, searchQuery, sortBy, maxPrice])

  const handleAddToCart = (product) => {
    addItem(product, 1)
    toast.success(`${product.name} added to cart`, {
      description: formatPrice(product.price),
      action: {
        label: "View Cart",
        onClick: openCart,
      },
    })
  }

  const isInCart = (productId) =>
    items.some((item) => item.id === productId)

  const toggleFavorite = (productId) => {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    )
  }

  const resetFilters = () => {
    setActiveCategory("all")
    setSearchQuery("")
    setSortBy("featured")
    setMaxPrice(maxAvailablePrice)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

          <div className="container relative mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <Badge className="mb-5 border border-blue-100 bg-blue-50 px-3 py-1 text-blue-700 hover:bg-blue-50">
                  <Package className="mr-2 h-3.5 w-3.5" />
                  MEGATECH SOLUTION STORE
                </Badge>

                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Find Your Next
                  <span className="block text-blue-600">
                    Favorite Tech.
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  Explore gaming PCs, laptops, computer accessories, storage
                  devices, and essential components at competitive prices.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="rounded-xl bg-blue-600 px-6 hover:bg-blue-700"
                  >
                    <a href="#product-list">
                      Shop Products
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-slate-300 bg-white"
                  >
                    <Link href="/contact">Get Expert Advice</Link>
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Quality Tech
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-blue-600" />
                    Warranty Options
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Headphones className="h-4 w-4 text-blue-600" />
                    Customer Support
                  </span>
                </div>
              </div>

              <div className="hidden w-56 items-center justify-center sm:flex lg:w-72">
                <div className="relative flex aspect-square w-full items-center justify-center rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-100 shadow-xl shadow-blue-100/40">
                  <div className="absolute inset-4 rounded-[1.5rem] border border-blue-100/80" />
                  <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-blue-600 shadow-xl shadow-blue-600/20 sm:h-40 sm:w-40">
                    <Monitor className="h-20 w-20 text-white sm:h-24 sm:w-24" />
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                    <p className="text-xs font-bold text-slate-800">
                      Gaming & Computing
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Gear up for more
                    </p>
                  </div>
                  <div className="absolute right-4 top-4 rounded-xl bg-white p-3 shadow-md">
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-b border-slate-200 bg-white">
          <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-5 sm:px-6 md:grid-cols-4 lg:px-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <benefit.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-800 sm:text-sm">
                    {benefit.title}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Catalog */}
        <section id="product-list" className="py-8 sm:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Explore Our Collection
              </p>
              <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    Shop All Products
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Find the right tech for work, gaming, and everyday use.
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="w-fit rounded-xl border-slate-300 bg-white"
                  onClick={openCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart
                  <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
                    {itemCount}
                  </span>
                </Button>
              </div>
            </div>

            {/* Search */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search products, brands, or specifications..."
                  aria-label="Search products"
                  className="h-11 rounded-xl border-slate-200 bg-white pl-10 pr-10 shadow-sm focus-visible:ring-blue-500"
                />
                {searchQuery && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <Button
                variant="outline"
                className="h-11 rounded-xl border-slate-200 bg-white"
                onClick={() => setShowFilters((value) => !value)}
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                {showFilters ? "Hide Filters" : "Filters"}
              </Button>

              <div className="relative sm:w-56">
                <ArrowUpDown className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <select
                  aria-label="Sort products"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-9 pr-8 text-sm text-slate-700 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="featured">Featured Products</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => {
                const CategoryIcon = category.icon
                const active = activeCategory === category.id

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                      active
                        ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-200"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    <CategoryIcon className="h-4 w-4" />
                    {category.name}
                  </button>
                )
              })}
            </div>

            {/* Expandable filters */}
            {showFilters && (
              <Card className="mb-6 rounded-2xl border-slate-200 bg-white p-5 shadow-sm">
                <div className="grid gap-5 sm:grid-cols-2 sm:items-center">
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <label
                        htmlFor="max-price"
                        className="text-sm font-bold text-slate-800"
                      >
                        Maximum Price
                      </label>
                      <span className="text-sm font-bold text-blue-700">
                        {formatPrice(maxPrice)}
                      </span>
                    </div>
                    <input
                      id="max-price"
                      type="range"
                      min="0"
                      max={maxAvailablePrice}
                      step="1000"
                      value={Math.min(maxPrice, maxAvailablePrice)}
                      onChange={(event) =>
                        setMaxPrice(Number(event.target.value))
                      }
                      className="w-full cursor-pointer accent-blue-600"
                    />
                    <div className="mt-1 flex justify-between text-xs text-slate-400">
                      <span>Rs. 0</span>
                      <span>{formatPrice(maxAvailablePrice)}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="outline"
                      className="rounded-xl"
                      onClick={() => setFavorites((current) => [...current])}
                      disabled
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Favorites: {favorites.length}
                    </Button>
                    <Button
                      variant="ghost"
                      className="rounded-xl text-slate-600"
                      onClick={resetFilters}
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Results summary */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-bold text-slate-900">
                  {filteredProducts.length}
                </span>{" "}
                of {products.length} products
              </p>
              {favorites.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setFavorites([])
                    toast.info("Favorites cleared")
                  }}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  Clear favorites ({favorites.length})
                </button>
              )}
            </div>

            {/* Compact product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => {
                  const inCart = isInCart(product.id)
                  const favorite = favorites.includes(product.id)
                  const discount =
                    product.originalPrice > product.price
                      ? Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )
                      : 0

                  return (
                    <Card
                      key={product.id}
                      className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                    >
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden bg-slate-100">
                        <Link
                          href={`/products/${product.id}`}
                          aria-label={`View ${product.name}`}
                          className="absolute inset-0 z-0"
                        >
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105 sm:p-5"
                          />
                        </Link>

                        {product.badge && (
                          <Badge className="pointer-events-none absolute left-2 top-2 z-10 max-w-[70%] truncate border-0 bg-blue-600 px-2 py-1 text-[9px] font-bold text-white shadow-sm sm:left-3 sm:top-3 sm:text-[10px]">
                            {product.badge}
                          </Badge>
                        )}

                        {discount > 0 && (
                          <span className="pointer-events-none absolute bottom-2 left-2 z-10 rounded-md bg-emerald-600 px-2 py-1 text-[9px] font-bold text-white sm:bottom-3 sm:left-3 sm:text-[10px]">
                            -{discount}%
                          </span>
                        )}

                        <button
                          type="button"
                          aria-label={
                            favorite
                              ? `Remove ${product.name} from favorites`
                              : `Add ${product.name} to favorites`
                          }
                          aria-pressed={favorite}
                          onClick={() => toggleFavorite(product.id)}
                          className={`absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm transition-colors sm:right-3 sm:top-3 ${
                            favorite
                              ? "border-rose-200 bg-rose-50 text-rose-600"
                              : "border-slate-200 bg-white/95 text-slate-500 hover:text-rose-500"
                          }`}
                        >
                          <Heart
                            className={`h-4 w-4 ${favorite ? "fill-current" : ""}`}
                          />
                        </button>
                      </div>

                      {/* Product details */}
                      <div className="flex flex-1 flex-col p-3 sm:p-4">
                        <div className="mb-2 flex min-h-4 items-center gap-1">
                          <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-bold text-slate-800">
                            {product.rating ?? "New"}
                          </span>
                          {product.reviews != null && (
                            <span className="truncate text-[10px] text-slate-400 sm:text-xs">
                              ({product.reviews})
                            </span>
                          )}
                        </div>

                        <Link
                          href={`/products/${product.id}`}
                          className="mb-1 line-clamp-2 min-h-10 text-xs font-bold leading-5 text-slate-900 hover:text-blue-700 sm:text-sm"
                        >
                          {product.name}
                        </Link>

                        <p className="mb-3 line-clamp-2 min-h-8 text-[10px] leading-4 text-slate-500 sm:text-xs">
                          {product.description || "Quality tech for everyday use."}
                        </p>

                        <div className="mb-3 mt-auto">
                          <p className="text-sm font-extrabold tracking-tight text-blue-700 sm:text-lg">
                            {formatPrice(product.price)}
                          </p>

                          {product.originalPrice > product.price && (
                            <p className="mt-0.5 text-[10px] text-slate-400 line-through sm:text-xs">
                              {formatPrice(product.originalPrice)}
                            </p>
                          )}
                        </div>

                        <Button
                          type="button"
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                          className={`h-9 w-full rounded-lg px-2 text-[10px] font-bold sm:text-xs ${
                            inCart
                              ? "border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
                          variant={inCart ? "outline" : "default"}
                        >
                          {inCart ? (
                            <>
                              <CheckCircle2 className="mr-1 h-3.5 w-3.5 shrink-0" />
                              Add More
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="mr-1 h-3.5 w-3.5 shrink-0" />
                              Add to Cart
                            </>
                          )}
                        </Button>
                      </div>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Search className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  No products found
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                  Try another search term, select a different category, or
                  adjust your maximum price.
                </p>
                <Button
                  onClick={resetFilters}
                  className="mt-5 rounded-xl bg-blue-600 hover:bg-blue-700"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Support CTA */}
        <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 px-6 py-10 text-center shadow-xl shadow-blue-100 sm:px-12 sm:py-12">
              <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-10 h-56 w-56 rounded-full border border-white/10" />

              <div className="relative mx-auto max-w-2xl">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Headphones className="h-6 w-6 text-white" />
                </div>

                <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
                  Need Help Choosing the Right Tech?
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-50 sm:text-base">
                  Contact MegaTech Solution for custom PC builds, bulk orders,
                  product recommendations, or help finding the right component.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <Button
                    asChild
                    className="rounded-xl bg-white text-blue-700 hover:bg-blue-50"
                  >
                    <Link href="/contact">Contact Our Team</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
