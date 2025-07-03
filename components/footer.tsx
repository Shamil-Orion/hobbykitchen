"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-dark relative overflow-hidden border-t border-gold/20 py-0 pt-4">
      {/* Subtle texture overlay */}
      <div className="absolute top-5 right-10 opacity-5">
        <Image src="/textures/shape-1.png" alt="" width={120} height={150} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo-white.png" alt="Hobby Kitchen" width={720} height={200} className="h-20 w-auto" />
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
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
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Hobby Kitchen. Made with love and lots of delicious ingredients.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
