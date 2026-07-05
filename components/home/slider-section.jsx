"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products-data"

export function SliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderProducts = products.slice(0, 3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderProducts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [sliderProducts.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderProducts.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderProducts.length)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="w-full h-full">
        {/* Slider Container */}
        <div className="relative w-full h-full overflow-hidden bg-card">
          {/* Slides */}
          {sliderProducts.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center px-8 md:px-16 lg:px-24 xl:px-32 gap-12">
                {/* Product Image */}
                <div className="flex items-center justify-center order-2 lg:order-1">
                  <div className="relative w-full h-[45vh] md:h-[60vh] lg:h-[75vh]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      priority={index === currentIndex}
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center order-1 lg:order-2 gap-6">
                  {product.badge && (
                    <Badge className="w-fit bg-primary text-primary-foreground px-4 py-2 text-sm">
                      {product.badge}
                    </Badge>
                  )}

                  <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground mb-4">
                      {product.name}
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                      {product.description}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-3">
                    {product.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    <span className="text-base text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {product.price}
                    </span>

                    <span className="text-2xl text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all"
            aria-label="Next product"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {sliderProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 bg-primary"
                    : "w-3 bg-primary/40 hover:bg-primary/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}