"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

const menuData = [
  {
    category: "Starters",
    items: [
      "French Fries",
      "Chicken Nuggets",
      "Garlic Bread",
      "Stir Fry Hotdogs",
      "Crunchy Masala Pasta",
      "Potato Wedges",
      "Potato Balls",
      "Toast",
      "Hot Cheetos Mozzarella Sticks",
      "Homemade Kurkure",
      "French Toast",
      "Pancakes",
      "Chicken Wings",
    ],
  },
  {
    category: "Main Course",
    items: [
      "Chicken Fry",
      "Butter Chicken",
      "Chicken Tikka Masala",
      "Nadan Chicken Curry",
      "Mutton Roast",
      "Broasted Chicken",
      "Chicken Biryani",
      "Rogan Josh",
      "Beef Roast",
      "Sambar",
      "Biryani",
    ],
  },
  {
    category: "Pasta",
    items: ["Red Sauce Pasta", "White Sauce Pasta", "Cheesy Pasta", "Pink Sauce Pasta", "Normal Pasta", "Indian Pasta"],
  },
  {
    category: "Dessert",
    items: [
      "Chocolate Cake",
      "White Forest Cake",
      "Caramel Pudding",
      "Chocolate Brownies",
      "Dates Banana Cake",
      "Chocolate Pudding",
      "Chocolate Date Banana Cake",
      "Dream Cake",
      "Chocolate Donuts",
      "Chocolate Cupcake",
      "Gulab Jamun",
      "Tiramisu",
      "Marble Cake",
      "Mousse Cake",
      "One Min Mug Cake",
      "Milk Cake",
      "Ghee Cake",
      "Butter Cookies",
      "Dubai Viral Kunafa Pistachio Chocolate Cake",
      "Dubai Viral Kunafa Pistachio Chocolate",
      "Milk Cake",
    ],
  },
  {
    category: "Sauce",
    items: ["Mayonnaise", "Tikka Mayonnaise"],
  },
]

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    Starters: true, // Start with first section expanded
  })

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

  const toggleSection = (category: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const handleWhatsAppOrder = (itemName: string) => {
    const phoneNumber = "1234567890" // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      `Hello! I would like to order ${itemName} from Hobby Kitchen. Please let me know the availability and price.`,
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section ref={sectionRef} id="menu" className="container mx-auto px-4 relative z-10 shadow-2xl pt-[px]">
      {/* Texture overlays */}
      <div className="absolute top-10 left-10 opacity-8">
        <Image src="/textures/shape-5.png" alt="" width={150} height={200} className="move-anim" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-8">
        <Image src="/textures/shape-6.png" alt="" width={120} height={160} className="move-anim" />
      </div>

      <div className="container mx-auto px-4 relative z-10 shadow-2xl mr-0.5">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4 animate-on-scroll">Special Selection</p>
          <h2 className="text-4xl md:text-5xl font-forum text-white animate-on-scroll">Our Delicious Menu</h2>
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="separator"></div>
            <div className="separator"></div>
            <div className="separator"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {menuData.map((section, sectionIndex) => (
            <div
              key={section.category}
              className="bg-primary-purple rounded-lg border border-gold/20 overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${sectionIndex * 100}ms` }}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.category)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary-purple to-accent-purple/30 hover:from-accent-purple/30 hover:to-primary-purple transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-accent-yellow rounded-full group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-2xl font-forum text-white group-hover:text-gold transition-colors">
                    {section.category}
                  </h3>
                  <span className="text-sm text-gray-400 bg-primary-dark px-2 py-1 rounded">
                    {section.items.length} items
                  </span>
                </div>
                <div className="text-gold group-hover:text-white transition-colors">
                  {expandedSections[section.category] ? (
                    <ChevronUp className="container mx-auto px-4 relative z-10 shadow-2xl" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Section Content */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedSections[section.category] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-gradient-to-b from-primary-purple to-primary-dark">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="group flex items-center justify-between p-3 bg-primary-dark rounded-lg hover:bg-accent-purple/20 transition-all duration-300 border border-transparent hover:border-gold/20"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-125 transition-transform"></div>
                          <span className="text-white font-medium group-hover:text-gold transition-colors text-sm">
                            {item}
                          </span>
                        </div>
                        <button
                          onClick={() => handleWhatsAppOrder(item)}
                          className="opacity-0 group-hover:opacity-100 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs font-bold transition-all duration-300 flex items-center gap-1"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                          </svg>
                          Order
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
