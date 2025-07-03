"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Starters",
    link: "#menu",
  },
  {
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Main Course",
    link: "#menu",
  },
  {
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Desserts",
    link: "#menu",
  },
]

export default function Service() {
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

  return (
    <section ref={sectionRef} className="section service bg-[#1b1b1b] text-center relative overflow-hidden">
      {/* Background shapes */}
      <Image
        src="/textures/shape-1.png"
        alt="shape"
        width={246}
        height={412}
        className="hidden md:block absolute left-0 top-10 z-0 move-anim"
      />
      <Image
        src="/textures/shape-2.png"
        alt="shape"
        width={343}
        height={345}
        className="hidden md:block absolute right-0 bottom-0 z-0 move-anim"
      />

      <div className="container mx-auto px-4 relative z-10">
        <p className="section-subtitle label-2 text-gold-crayola uppercase tracking-widest animate-on-scroll mb-2">
          Flavors For Hobby kitchen
        </p>
        <h2 className="headline-1 section-title font-forum text-white text-4xl md:text-5xl mb-4 animate-on-scroll">
          We Offer Top Notch
        </h2>
        <p className="section-text text-gray-400 max-w-2xl mx-auto mb-12 animate-on-scroll">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry’s standard dummy text ever.
        </p>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
              <figure
                className="card-banner img-holder rounded overflow-hidden hover-shine relative"
                style={{ aspectRatio: "285 / 336" }}
              >
                {/* Rotating pattern behind image */}
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
                  <div className="rotate-anim opacity-30 scale-150">
                    <Image
                      src="/img-pattern.svg"
                      alt="pattern"
                      width={300}
                      height={300}
                      className="w-full h-full object-contain text-gold"
                    />
                  </div>
                </div>

                {/* Service image */}
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={285}
                  height={336}
                  className="img-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                />
              </figure>

              <div className="card-content mt-4">
                <h3 className="title-4 card-title text-white text-2xl font-forum mb-1">
                  <a href={service.link} className="hover:text-gold-crayola transition-colors">
                    {service.title}
                  </a>
                </h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
