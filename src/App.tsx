import "@/App.css"
import Hero from "@/components/Hero"
import Booking from "@/components/Booking"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import About from "@/components/About"
import ScrollbarIndicator from "@/components/ScrollbarIndicator"

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
      <Booking />
    </>
  )
}

export default App