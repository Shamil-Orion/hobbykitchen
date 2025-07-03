"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "Hobby Kitchen",
    title: "From Hobby to Yum!",
    text: "Creating delicious moments, one recipe at a time.",
  },
  {
    image: "https://images.unsplash.com/photo-1601740982034-56bc80e986ee?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle: "Hobby Kitchen",
    title: "Made with Heart, Served with Soul",
    text: "Handcrafted meals made with warmth, passion, and a pinch of joy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608393189287-0bc2191c7e86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle: "Hobby Kitchen",
    title: "Bringing Homemade to Life",
    text: "Wholesome, comforting, and always made with a personal touch.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoSlide()
    } else {
      stopAutoSlide()
    }

    return () => stopAutoSlide()
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10 px-0 py-0"></div>
          <div className={`absolute inset-0 ${index === currentSlide ? "slider-bg active" : ""}`}>
            <Image
              src={slide.image || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      <div className="relative z-20 max-w-4xl mx-auto px-4 pt-32">
        <p
          className={`section-subtitle text-sm md:text-base mb-4 slider-reveal ${currentSlide >= 0 ? "active" : ""}`}
          style={{ animationDelay: "500ms" }}
        >
          {slides[currentSlide].subtitle}
        </p>
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-forum mb-6 leading-tight slider-reveal ${currentSlide >= 0 ? "active" : ""}`}
          style={{ animationDelay: "1000ms" }}
        >
          {slides[currentSlide].title.split(" ").map((word, i, arr) => (
            <span className="leading-[5rem] text-7xl" key={i}>
              {word}
              {i === Math.floor(arr.length / 2) - 1 && <br />}
              {i < arr.length - 1 && " "}
            </span>
          ))}
        </h1>
        <p
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300 slider-reveal ${currentSlide >= 0 ? "active" : ""}`}
          style={{ animationDelay: "1500ms" }}
        >
          {slides[currentSlide].text}
        </p>
        <button
          onClick={scrollToMenu}
          className={`btn-primary btn-text-animate slider-reveal py-0 my-10 ${currentSlide >= 0 ? "active" : ""}`}
          style={{ animationDelay: "2000ms" }}
        >
          <span className="text-1">View Menu</span>
          <span className="text-2">View Menu</span>
        </button>
      </div>

      <button
        onClick={prevSlide}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-colors transform rotate-45"
      >
        <ChevronLeft className="w-6 h-6 -rotate-45" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 border border-gold text-gold hover:bg-gold hover:text-primary-dark transition-colors transform rotate-45"
      >
        <ChevronRight className="w-6 h-6 -rotate-45" />
      </button>
    </section>
  )
}
