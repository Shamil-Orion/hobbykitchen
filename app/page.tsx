"use client";

import { CartProvider } from "@/context/CartContext";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Service from "@/components/service";
import About from "@/components/about";
import Menu from "@/components/menu";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import FloatingCartButton from "@/components/ui/FloatingCartButton";

export default function Home() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Service />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <FloatingCartButton />
    </CartProvider>
  );
}