import "@/App.css"
import Hero from "@/components/Hero"
import Booking from "@/components/Booking"
import Services from "@/components/Services"
import About from "@/components/About"
import Testimonial from "@/components/Testimonial"
import ScrollbarIndicator from "@/components/ScrollbarIndicator"
import Footer from "@/components/Footer"

function App() {
  return (
    <>
      <ScrollbarIndicator />
      <Hero />
      <div className="spacer h-50 "></div>
      <Services />
      <div className="spacer h-100 "></div>
      <About />
      <div className="spacer h-50 "></div>
      <Testimonial />
      <div className="spacer h-50 "></div>
      <Booking />
      <div className="spacer h-50 "></div>
      <Footer />
    </>
  )
}

export default App