"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products-data"

export function SliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const sliderProducts = products.slice(0, 3)

  // Optional per-slide eyebrow labels — edit these to whatever fits your products/categories
  const eyebrows = ["our company", "our approach", "view more"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderProducts.length)
      setProgressKey((k) => k + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [sliderProducts.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setProgressKey((k) => k + 1)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .progress-bar-active {
          animation: progress 5s linear forwards;
        }
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-slide-item {
          opacity: 0;
          animation: fadeSlide 0.6s ease-out forwards;
        }
      `}</style>

      {sliderProducts.map((product, index) => {
        const isActive = index === currentIndex
        return (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority={isActive}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />

            {/* Content — left aligned, minimal */}
            <div className="relative z-10 flex h-full items-center">
              <div className="w-full max-w-7xl mx-auto px-8 lg:px-20">
                <div className="max-w-2xl">

                  {/* Eyebrow label */}
                  <span
                    className="fade-slide-item mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400"
                    style={{ animationDelay: isActive ? "0.1s" : "0s" }}
                  >
                    {eyebrows[index % eyebrows.length]}
                  </span>

                  {/* Headline */}
                  <h1
                    className="fade-slide-item mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                    style={{ animationDelay: isActive ? "0.2s" : "0s" }}
                  >
                    {product.name}
                  </h1>

                  {/* Description */}
                  <p
                    className="fade-slide-item mb-8 max-w-lg text-base leading-7 text-gray-200 md:text-lg"
                    style={{ animationDelay: isActive ? "0.3s" : "0s" }}
                  >
                    {product.description}
                  </p>

                  {/* CTA — text link with animated arrow, not a filled button */}
                  
                    href={`/products/${product.id}`}
                    className="fade-slide-item group inline-flex items-center gap-2 text-base font-semibold uppercase tracking-wide text-white"
                    style={{ animationDelay: isActive ? "0.4s" : "0s" }}
                  >
                    <span className="border-b-2 border-cyan-400 pb-1 transition-colors group-hover:border-white">
                      View Details
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Slim progress-bar navigation, bottom-left, replacing dots */}
      <div className="absolute bottom-10 left-8 z-20 flex gap-3 lg:left-20">
        {sliderProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative h-[3px] w-16 overflow-hidden rounded-full bg-white/30"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <span
                key={progressKey}
                className="progress-bar-active absolute inset-y-0 left-0 block bg-cyan-400"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
