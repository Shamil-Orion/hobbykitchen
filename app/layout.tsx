import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Hobby Kitchen - From Hobby to Yum",
  description: "Creating delicious moments, one recipe at a time.",
  generator: "Next.js",
  keywords: [
    "Hobby Kitchen",
    "home cooking",
    "easy recipes",
    "Indian food blog",
    "homemade dishes",
    "South Indian recipes",
    "Anagha R Menon",
    "quick dinner ideas",
    "healthy meals",
    "vegetarian cooking",
    "non-veg recipes",
    "cooking inspiration",
    "kitchen hobby blog",
    "delicious Indian food",
    "hobbykitchen.co.in"
  ],
  authors: [{ name: "Anagha R Menon", url: "https://hobbykitchen.co.in" }],
  openGraph: {
    title: "Hobby Kitchen - From Hobby to Yum",
    description: "Creating delicious moments, one recipe at a time.",
    url: "https://hobbykitchen.co.in",
    siteName: "Hobby Kitchen",
    images: [
      {
        url: "/og-image.jpeg", 
        width: 1200,
        height: 630,
        alt: "Delicious dishes from Hobby Kitchen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://hobbykitchen.co.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap"
    rel="stylesheet"
  />

  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</head>
      <body className={`${dmSans.variable} font-sans`}>{children}</body>
    </html>
  )
}
