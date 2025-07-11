"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BiCartAdd } from 'react-icons/bi';
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const menuData = [
  {
    category: "Starters",
    items: [
      "French Fries",
      "Chicken Nuggets",
      "Garlic Bread",
      "Crunchy Masala Pasta",
      "Potato Wedges",
      "Potato Balls",
      "Hot Cheetos Mozzarella Sticks",
      "Homemade Kurkure",
      "Chicken Wings",
    ],
  },
  {
    category: "Breakfast",
    items: ["Stir Fry Hotdogs", "Toast", "French Toast", "Pancakes"],
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
      "Kerala Style Naadan Sambar",
    ],
  },
  {
    category: "Pasta",
    items: [
      "Red Sauce Pasta",
      "White Sauce Pasta",
      "Cheesy Pasta",
      "Pink Sauce Pasta",
      "Normal Pasta",
      "Indian Pasta",
    ],
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
];

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    Starters: true,
  });

  const { addToCart } = useCart();
  const [clickedItems, setClickedItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleSection = (category: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleClick = (item: string) => {
    addToCart(item);
    setClickedItems((prev) => ({ ...prev, [item]: true }));
    setTimeout(() => setClickedItems((prev) => ({ ...prev, [item]: false })), 1000);
  };

  return (
    <section ref={sectionRef} id="menu" className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Texture overlays */}
      <div className="absolute top-10 left-10 opacity-8">
        <Image src="/textures/shape-5.png" alt="" width={400} height={670} className="move-anim" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-8">
        <Image src="/textures/shape-6.png" alt="" width={400} height={670} className="move-anim" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4 animate-on-scroll">Curated Selection</p>
          <h2 className="text-4xl md:text-5xl font-forum text-white animate-on-scroll">Our Delicious Menu</h2>
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="separator"></div>
            <div className="separator"></div>
            <div className="separator"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {menuData.map((section, index) => (
            <div
              key={section.category}
              className="bg-primary-purple rounded-lg border border-gold/20 overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleSection(section.category)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary-purple to-accent-purple/30 hover:from-accent-purple/30 hover:to-primary-purple transition-all duration-300 group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-accent-yellow rounded-full group-hover:scale-110 transition-transform"></div>
                    <h3 className="text-2xl font-forum text-white group-hover:text-gold transition-colors">
                      {section.category}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400 bg-primary-dark px-2 py-1 rounded shrink-0">
                      {section.items.length} items
                    </span>
                    <div className="text-gold group-hover:text-white transition-colors">
                      {expandedSections[section.category] ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedSections[section.category] ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-gradient-to-b from-primary-purple to-primary-dark">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center justify-between p-3 bg-primary-dark rounded-lg hover:bg-accent-purple/20 transition-all duration-300 border border-transparent hover:border-gold/20"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-125 transition-transform"></div>
                          <span className="text-white font-medium group-hover:text-gold transition-colors text-sm">
                            {item}
                          </span>
                        </div>
                        <button
                          onClick={() => handleClick(item)}
                          className={`transition-all duration-300 ${
                          clickedItems[item]
                            ? 'text-yellow-300'
                            : 'text-white hover:text-yellow-300'
                        }`}
                        >
                          <BiCartAdd className="w-5 h-5" />
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
  );
}