import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SlShareAlt } from "react-icons/sl"
import { FaArrowDown } from "react-icons/fa"
import { motion } from "framer-motion"

const ProjectsSection = () => {
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const cardsRef = useRef([])

  const projects = [
    { id: 1, title: "3D LEMDA.TECH WEBSITE", imageSrc: "images/project-1.jpg", url: "http://lemda-websites.netlify.app" },
    { id: 2, title: "REDIAN DIGITAL MARKETING AGENCY", imageSrc: "images/project-2.png", url: "https://digital-marketting-1.netlify.app" },
    { id: 3, title: "EXPENSE & BUDGET WEBSITE", imageSrc: "images/project-3.png", url: "https://expense-budget-app.netlify.app/" },
    { id: 4, title: "3D RENT A CAR WEBSITE", imageSrc: "images/project-4.png", url: "https://al-usman-group.netlify.app" },
    { id: 5, title: "3D WATCH-STORE", imageSrc: "images/project-5.png", url: "https://watch-usman-store.netlify.app/" },
    { id: 6, title: "IMAGE EDITING APP", imageSrc: "images/project-6.png", url: "https://images-editing-app.netlify.app/" }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    /* Intro animations */
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" }
      }
    )

    gsap.fromTo(
      paraRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: paraRef.current, start: "top 85%" }
      }
    )

    /* Project cards animation */
    cardsRef.current.forEach((card, index) => {
      const isDesktop = window.innerWidth >= 1024

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: isDesktop ? 0 : 60,
          x: isDesktop ? (index % 2 === 0 ? -80 : 80) : 0,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      )
    })
  }, [])

  return (
    <section
        id="project"
    className="bg-[linear-gradient(to_bottom,#150f1f,#150f1f,#31187c)] text-white py-20 px-4 sm:px-8 lg:px-20">
      
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide"
        >
          My Projects
        </h1>

        <p
          ref={paraRef}
          className="mt-4 text-gray-400 text-sm sm:text-base"
        >
          A selection of modern, creative & performance-focused web experiences
        </p>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center mt-8"
        >
          <FaArrowDown className="text-white/70 text-2xl" />
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={() => window.open(project.url, "_blank")}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900"
          >
            <img
              src={project.imageSrc}
              alt={project.title}
              className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <div className="flex items-center justify-between mt-3">
                <span className="text-sm text-gray-400">View Project</span>
                <SlShareAlt className="text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
