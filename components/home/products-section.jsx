"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Check } from "lucide-react"
import { products, categories } from "@/lib/products-data"
import { useCart } from "@/context/cart-context"
import { toast } from "sonner"

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { addItem, items } = useCart()

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory)

  const handleAddToCart = (product) => {
    addItem(product)
    toast.success(`${product.name} added to cart`, {
      description: `Rs. ${product.price.toLocaleString()}`
    })
  }

  const isInCart = (productId) => items.some(item => item.id === productId)

  return (
    <section id="products" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">Our Products</Badge>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Premium Tech for Every Need
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Explore our curated collection of high-performance computers, laptops, and accessories. Quality guaranteed.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid — Elexoft-style hover reveal */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
            >
              {/* Image */}
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Category badge — always visible, top-left */}
              {product.badge && (
                <Badge className="absolute left-3 top-3 z-10 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              )}

              {/* Floating add-to-cart icon button — appears on hover, top-right */}
              <button
                onClick={() => handleAddToCart(product)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
                aria-label="Add to cart"
              >
                {isInCart(product.id) ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <ShoppingCart className="h-4 w-4" />
                )}
              </button>

              {/* Dark gradient overlay, strengthens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Always-visible minimal price strip */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 transition-transform duration-300 group-hover:translate-y-0">
                <div className="flex items-center gap-1 text-xs text-white/80">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-white">{product.rating}</span>
                  <span>({product.reviews})</span>
                </div>

                <h3 className="mt-1 line-clamp-1 font-semibold text-white">
                  {product.name}
                </h3>

                {/* Description + full price row — reveals on hover like Elexoft's tag row */}
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                  <p className="mt-1 line-clamp-2 text-sm text-white/80">
                    {product.description}
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-white">
                    Rs. {product.price.toLocaleString("en-PK")}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-white/60 line-through">
                      Rs. {product.originalPrice.toLocaleString("en-PK")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
