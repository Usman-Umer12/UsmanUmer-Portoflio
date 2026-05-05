import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import User from "/images/User.png"

const testimonials = [
  {
    name: "Munir Ahmed",
    feedback: "Amazing service! The team delivered exactly what we needed on time.",
    img: User,
  },
  {
    name: "Aqib Abbas",
    feedback: "Highly professional and innovative solutions. Great experience overall.",
    img: User,
  },
  {
    name: "Arslan Majid",
    feedback: "Their web development expertise helped us scale faster than expected.",
    img: User,
  },
  {
    name: "Emily Smith",
    feedback: "Outstanding support and modern design practices. Totally recommend!",
    img: User,
  },
]

const Experience = () => {
  const sectionRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    )

    // Marquee infinite horizontal scroll
    const marquee = marqueeRef.current
    const totalWidth = marquee.scrollWidth / 2 // duplicate items

    gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -totalWidth,
        ease: "linear",
        duration: 25,
        repeat: -1,
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[linear-gradient(to_top,#31187c,#150f1f,#150f1f)] text-white overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-wide">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Trusted by clients for quality, performance & professionalism
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-28 w-20"
        >
          {/* Duplicate items for infinite scroll */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="
                min-w-[280px]
                sm:min-w-[320px]
                lg:min-w-[360px]
                bg-white/10
                backdrop-blur-md
                border border-white/20
                rounded-3xl
                p-8
                text-center
                hover:bg-white/20
                transition
              "
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-5 object-cover border-2 border-purple-400"
              />

              <p className="text-base sm:text-lg text-gray-200 italic leading-relaxed">
                “{t.feedback}”
              </p>

              <h4 className="mt-6 text-lg sm:text-xl font-semibold">
                {t.name}
              </h4>

              <span className="text-sm text-purple-300">Client</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
