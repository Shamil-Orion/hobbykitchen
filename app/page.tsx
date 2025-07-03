import Header from "@/components/header"
import Hero from "@/components/hero"
import Service from "@/components/service"
import About from "@/components/about"
import Menu from "@/components/menu"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto relative z-10 px-4">
        <Hero />
        <Service />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
