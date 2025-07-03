"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const parallaxItems = document.querySelectorAll(".parallax-item")
      const x = (e.clientX / window.innerWidth) * 10 - 5
      const y = (e.clientY / window.innerHeight) * 10 - 5

      parallaxItems.forEach((item) => {
        const speed = Number.parseFloat((item as HTMLElement).dataset.parallaxSpeed || "1")
        const xMove = x * speed
        const yMove = y * speed
        ;(item as HTMLElement).style.transform = `translate3d(${xMove}px, ${yMove}px, 0px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 text-center relative bg-primary-purple overflow-hidden">
      {/* Large Static Texture overlays */}
      <div className="absolute top-0 left-0 opacity-10 w-full h-full">
        <Image src="/textures/shape-1.png" alt="" width={300} height={400} className="absolute top-20 left-20" />
        <Image src="/textures/shape-6.png" alt="" width={350} height={450} className="absolute bottom-10 right-20" />
        <Image src="/textures/shape-2.png" alt="" width={250} height={350} className="absolute top-40 right-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <p className="section-subtitle mb-4 animate-on-scroll">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-forum mb-6 text-white animate-on-scroll">
              Creating Culinary Magic Since Day One
            </h2>
            <div className="text-lg mb-8 leading-relaxed text-gray-300 animate-on-scroll space-y-4">
              <p>
                At Hobby Kitchen, I’m a passionate home cook who finds joy in creating delicious moments, one recipe at a time. What began as a simple hobby in my kitchen has grown into a personal culinary journey—one that brings comfort, creativity, and connection to every dish I share.
              </p>
              
              
            </div>

            <div className="mb-6 animate-on-scroll">
              <p className="font-bold mb-2 text-gold">Book Through Call</p>
              <a href="tel:+919846371407" className="text-2xl hover-underline text-white">
                +91 9846371407
              </a>
            </div>

            <button className="btn-primary btn-text-animate animate-on-scroll">
              <span className="text-1">Read More</span>
              <span className="text-2">Read More</span>
            </button>
          </div>

          <div className="order-1 lg:order-2 relative animate-on-scroll">
            <div className="relative">
              <Image
                src="/chef-image.jpeg"
                alt="Hobby Kitchen Chef"
                width={570}
                height={570}
                className="w-full rounded-lg parallax-item shadow-2xl"
                data-parallax-speed="1"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              

              <div className="absolute -top-16 -right-8">
                <div className="w-32 h-32 bg-accent-yellow rounded-full flex items-center justify-center">
                  <svg className="text-primary-dark h-[80] w-[80]" fill="currentColor" viewBox="0 0 20 20">
                    
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
