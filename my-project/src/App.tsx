import Navbar from "./components/Navbar"
import Hero from "./components/Hero"



import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function App() {


  return (
    <>
      <main className="flex flex-col items-center bg-amber-300/20">
        <Navbar />
        <Hero />
      </main >
    </>
  )
}

export default App
