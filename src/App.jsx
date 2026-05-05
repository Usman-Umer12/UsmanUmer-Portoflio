import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CustomCursor from "./components/CustomCursor"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import ProgressBar from "./components/ProgressBar"
import ContentSection from "./components/ContentSection"
import Loading from "./components/Loading"
import Experience from "./components/Experience"
import ServicesSection from "./components/ServicesSection"
import Skills from "./components/Skills"
import Footer from "./components/Footer"



export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      {loading && <Loading onFinish={() => setLoading(false)} />}

      {!loading && (
        <Router>
          <ProgressBar />
          <Header />
          <CustomCursor />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <ProjectsSection />
                  <Experience />
                  <ContentSection />
                  <ServicesSection/>
                  <Skills />
                </>
              }
            />
          </Routes>

          <Footer />
        </Router>
      )}
    </>
  )
}
