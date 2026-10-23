"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Check, ArrowUpRight } from "lucide-react"
import { products, categories } from "@/lib/products-data"
import { useCart } from "@/context/cart-context"
import { toast } from "sonner"

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { addItem, items } = useCart()

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory)

  const formatPrice = (price) =>
    Number(price || 0).toLocaleString("en-PK")

  const handleAddToCart = (product) => {
    addItem(product)

    toast.success(`${product.name} added to cart`, {
      description: `Rs. ${formatPrice(product.price)}`,
    })
  }

  const isInCart = (productId) =>
    items.some((item) => item.id === productId)

  return (
    <section id="products" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            Our Products
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Premium Tech for Every Need
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Explore our collection of high-performance computers, laptops,
            components, and accessories. Find the right technology for you.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              type="button"
              variant={
                activeCategory === category.id ? "default" : "outline"
              }
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group flex h-full flex-col overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Product Image */}
                <Link
                  href={`/products/${product.id}`}
                  aria-label={`View ${product.name} details`}
                  className="relative block aspect-square overflow-hidden bg-muted"
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {product.badge && (
                    <Badge className="absolute left-3 top-3 z-10 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}

                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>

                {/* Product Information */}
                <CardContent className="flex flex-1 flex-col p-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="font-semibold text-foreground">
                      {product.rating ?? "New"}
                    </span>

                    {product.reviews != null && (
                      <span>({product.reviews} reviews)</span>
                    )}
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="mt-2 block"
                  >
                    <h3 className="line-clamp-2 min-h-12 font-semibold leading-6 text-foreground transition-colors hover:text-primary">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      Rs. {formatPrice(product.price)}
                    </span>

                    {Number(product.originalPrice) >
                      Number(product.price) && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {Number(product.originalPrice) > Number(product.price) && (
                    <p className="mt-1 text-xs font-medium text-green-600">
                      Save Rs.{" "}
                      {formatPrice(
                        Number(product.originalPrice) -
                          Number(product.price)
                      )}
                    </p>
                  )}
                </CardContent>

                {/* Product Actions */}
                <CardFooter className="grid grid-cols-1 gap-2 p-4 pt-0">
                  <Button
                    type="button"
                    className="w-full gap-2"
                    size="sm"
                    variant={isInCart(product.id) ? "secondary" : "default"}
                    onClick={() => handleAddToCart(product)}
                  >
                    {isInCart(product.id) ? (
                      <>
                        <Check className="h-4 w-4" />
                        Add More
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                  >
                    <Link href={`/products/${product.id}`}>
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed p-10 text-center">
            <p className="font-medium text-foreground">
              No products found in this category.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setActiveCategory("all")}
            >
              View All Products
            </Button>
          </div>
        )}

        {/* View All Products */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">
              View All Products
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
