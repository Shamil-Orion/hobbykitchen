"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
      document.body.classList.add("loaded")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loaded) return null

  return (
    <div className="fixed inset-0 bg-yellow-600 z-50 flex flex-col items-center justify-center">
      <div className="w-28 h-28 border-4 border-white border-t-gray-800 rounded-full animate-spin mb-12"></div>
      <p className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest font-serif">Grilli</p>
    </div>
  )
}
