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
    <section className="relative h-screen overflow-hidden">

      {sliderProducts.map((product, index) => (

        <div
          key={product.id}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentIndex
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none"
          }`}
        >

          {/* Background Image */}

          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={index === currentIndex}
            className="object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}

          <div className="relative z-10 flex h-full items-center">

            <div className="w-full max-w-7xl mx-auto px-8 lg:px-20">

              <div className="max-w-xl">

                {/* Badge */}

                {product.badge && (
                  <Badge className="mb-6 bg-cyan-500 px-5 py-2 text-white">
                    {product.badge}
                  </Badge>
                )}

                {/* Product Name */}

                <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">

                  {product.name}

                </h1>

                {/* Description */}

                <p className="mb-8 text-lg leading-8 text-gray-200">

                  {product.description}

                </p>

                {/* Specs */}

                <div className="mb-8 flex flex-wrap gap-3">

                  {product.specs.map((spec, idx) => (

                    <span
                      key={idx}
                      className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-md"
                    >
                      {spec}
                    </span>

                  ))}

                </div>

                {/* Rating */}

                <div className="mb-8 flex items-center gap-3">

                  <div className="flex">

                    {[...Array(5)].map((_, i) => (

                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />

                    ))}

                  </div>

                  <span className="text-gray-200">

                    {product.rating} ({product.reviews} Reviews)

                  </span>

                </div>

                {/* Price */}

                <div className="flex items-center gap-4">

                  <span className="text-4xl font-bold text-cyan-400 lg:text-5xl">

                    Rs. {product.price.toLocaleString("en-PK")}

                  </span>

                  {product.originalPrice > product.price && (

                    <span className="text-2xl text-gray-300 line-through">

                      Rs. {product.originalPrice.toLocaleString("en-PK")}

                    </span>

                  )}

                </div>
                </div>

            </div>

          </div>

        </div>

      ))}

      {/* Previous Button */}

      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      {/* Next Button */}

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Dots */}

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">

        {sliderProducts.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "h-3 w-10 rounded-full bg-cyan-500"
                : "h-3 w-3 rounded-full bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />

        ))}

      </div>

    </section>
  )
}
