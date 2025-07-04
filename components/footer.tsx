"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-5 relative overflow-hidden border-t border-gold/20">
      {/* Subtle texture overlay */}
      <div className="absolute top-5 right-10 opacity-5">
        <Image src="/textures/shape-1.png" alt="" width={120} height={150} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo-white.png" alt="Hobby Kitchen" width={300} height={90} className="h-24 w-auto" />
            </Link>
            <p className="text-lg text-gray-300 max-w-md mx-auto font-medium">
              From Hobby to Yum! - Creating delicious moments, one recipe at a time.
            </p>
          </div>

          {/* Decorative separator */}
          <div className="flex justify-center items-center gap-2">
            <div className="separator"></div>
            <div className="separator"></div>
            <div className="separator"></div>
          </div>

          {/* Contact Info */}
         <div>
  <h3 className="text-xl font-forum text-white mb-4">Contact Info</h3>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
    <a
      href="mailto:hobbykitchenco@gmail.com"
      className="flex items-center gap-2 hover:text-gold transition-colors hover-underline"
    >
      <Mail className="w-4 h-4" />
      <span>hobbykitchenco@gmail.com</span>
    </a>

    <a
      href="tel:+919846371407"
      className="flex items-center gap-2 hover:text-gold transition-colors hover-underline"
    >
      <Phone className="w-4 h-4" />
      <span>+91 9846371407</span>
    </a>

    <a
      href="https://instagram.com/hobbykitchen.co"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-gold transition-colors hover-underline"
    >
      {/* You can replace this with a Lucide or FontAwesome icon if preferred */}
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1 1 0 110 2 1 1 0 010-2z"/>
      </svg>
      <span>hobbykitchen.co</span>
    </a>
  </div>
</div>


          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2025 Hobby Kitchen. Made with love and lots of delicious ingredients.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
