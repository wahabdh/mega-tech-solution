"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products-data"

export function SliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const sliderProducts = products.slice(0, 3)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setDirection("next")
      setCurrentIndex((prev) => (prev + 1) % sliderProducts.length)
    }, 5000)

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current)
    }
  }, [sliderProducts.length])

  const goToPrevious = () => {
    setDirection("prev")
    setCurrentIndex((prev) => (prev === 0 ? sliderProducts.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setDirection("next")
    setCurrentIndex((prev) => (prev + 1) % sliderProducts.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "next" : "prev")
    setCurrentIndex(index)
  }

  // Alternate transition "style" per slide index so they don't all look the same
  const transitionStyles = ["zoom", "slide-right", "slide-left"]

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <style jsx>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .kenburns-active {
          animation: kenburns 6s ease-out forwards;
        }
        .fade-up-item {
          opacity: 0;
          animation: fadeUp 0.7s ease-out forwards;
        }
      `}</style>

      {sliderProducts.map((product, index) => {
        const isActive = index === currentIndex
        const style = transitionStyles[index % transitionStyles.length]

        // Determine transform/opacity per slide based on its own style + active state
        let slideClasses = "absolute inset-0 transition-all ease-out"
        if (style === "zoom") {
          slideClasses += isActive
            ? " opacity-100 scale-100 duration-1000 z-10"
            : " opacity-0 scale-110 duration-1000 pointer-events-none"
        } else if (style === "slide-right") {
          slideClasses += isActive
            ? " opacity-100 translate-x-0 duration-700 z-10"
            : direction === "next"
              ? " opacity-0 translate-x-full duration-700 pointer-events-none"
              : " opacity-0 -translate-x-full duration-700 pointer-events-none"
        } else {
          // slide-left
          slideClasses += isActive
            ? " opacity-100 translate-x-0 duration-700 z-10"
            : direction === "next"
              ? " opacity-0 -translate-x-full duration-700 pointer-events-none"
              : " opacity-0 translate-x-full duration-700 pointer-events-none"
        }

        return (
          <div key={product.id} className={slideClasses}>
            {/* Background Image with Ken Burns zoom while active */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority={isActive}
                className={`object-cover ${isActive ? "kenburns-active" : ""}`}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="w-full max-w-7xl mx-auto px-8 lg:px-20">
                <div className="max-w-xl">
                  {/* Badge */}
                  {product.badge && (
                    <Badge
                      className="mb-6 bg-cyan-500 px-5 py-2 text-white fade-up-item"
                      style={{ animationDelay: isActive ? "0.1s" : "0s" }}
                    >
                      {product.badge}
                    </Badge>
                  )}

                  {/* Product Name */}
                  <h1
                    className="mb-6 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl fade-up-item"
                    style={{ animationDelay: isActive ? "0.2s" : "0s" }}
                  >
                    {product.name}
                  </h1>

                  {/* Description */}
                  <p
                    className="mb-8 text-lg leading-8 text-gray-200 fade-up-item"
                    style={{ animationDelay: isActive ? "0.3s" : "0s" }}
                  >
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div
                    className="mb-8 flex flex-wrap gap-3 fade-up-item"
                    style={{ animationDelay: isActive ? "0.4s" : "0s" }}
                  >
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
                  <div
                    className="mb-8 flex items-center gap-3 fade-up-item"
                    style={{ animationDelay: isActive ? "0.5s" : "0s" }}
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-200">
                      {product.rating} ({product.reviews} Reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div
                    className="flex items-center gap-4 fade-up-item"
                    style={{ animationDelay: isActive ? "0.6s" : "0s" }}
                  >
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
        )
      })}

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
            onClick={() => goToSlide(index)}
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
