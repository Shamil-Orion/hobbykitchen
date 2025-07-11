"use client"

import { Phone, Clock, Mail } from "lucide-react"

export default function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "971507940372"
    const message = encodeURIComponent(
      "Hi! I’d like to place an order from your menu. Could you let me know what details you need?"
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailClick = () => {
    window.open("mailto:hobbykitchenco@gmail.com", "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+919846371407", "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-black/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-gold rotate-45"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-gold rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-forum text-white">Contact Me</h2>
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="separator"></div>
            <div className="separator"></div>
            <div className="separator"></div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="group">
              <div
                onClick={handlePhoneClick}
                className="flex items-start gap-6 p-6 bg-gradient-to-r from-accent-purple/20 to-primary-dark rounded-lg hover:from-primary-dark hover:to-accent-purple/30 transition-all duration-300 border border-transparent hover:border-gold/20 cursor-pointer"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-yellow to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-forum text-white mb-2 group-hover:text-gold transition-colors">
                    For reservations and inquiries
                  </h3>
                  <span className="text-gold hover:text-white transition-colors text-lg font-bold">
                    +91 9846371407
                  </span>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group">
              <div
                onClick={handleEmailClick}
                className="flex items-start gap-6 p-6 bg-gradient-to-r from-accent-purple/20 to-primary-dark rounded-lg hover:from-primary-dark hover:to-accent-purple/30 transition-all duration-300 border border-transparent hover:border-gold/20 cursor-pointer"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-yellow to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-8 h-8 text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-forum text-white mb-2 group-hover:text-gold transition-colors">
                    Send us your queries
                  </h3>
                  <span className="text-gold hover:text-white transition-colors text-lg font-bold">
                    hobbykitchenco@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Time Card */}
            <div className="group">
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-accent-purple/30 to-primary-dark rounded-lg hover:from-primary-dark hover:to-accent-purple/30  transition-all duration-300 border border-transparent hover:border-gold/20">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-yellow to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8 text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-forum text-white mb-2 group-hover:text-gold transition-colors">
                    Available for orders and delivery
                  </h3>
                  <p className="text-gray-300">
                    <span className="text-gold font-bold">Daily:</span> 9:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: WhatsApp Order Box */}
          <div className="bg-gradient-to-br from-primary-dark via-accent-purple/30 to-primary-dark p-8 rounded-lg text-center border border-gold/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-transparent"></div>

            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-3xl font-forum text-white mb-4">Quick Order on WhatsApp</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Get instant confirmation for your orders. Chat with us directly on WhatsApp for quick and easy
                  ordering with real-time updates and personalized service.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white rounded font-bold tracking-wider transition-colors flex items-center gap-3 justify-center px-8 py-3.5 mb-8"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
                  </svg>
                  Order via WhatsApp
                </button>
              </div>

              <div className="border-t border-gold/20 pt-6">
                <p className="text-gray-400 text-sm mb-2">
                  Quick Response • Easy Ordering • Real-time Updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
