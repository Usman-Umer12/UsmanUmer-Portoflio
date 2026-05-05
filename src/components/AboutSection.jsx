import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const imageRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation (fade + slide from bottom)
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    // Paragraph Animation (slide from left)
    gsap.fromTo(
      introRef.current,
      { x: -100, opacity: 0, filter: "blur(10px)" },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    // Image Animation (slide from right)
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0, scale: 0.9 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    // Floating loop for image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Stars floating
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;
      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) starsRef.current.push(el);
  };

  return (
    <section
      ref={sectionRef}
        id="about"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] flex items-center justify-center py-10"
    >
      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent tracking-wide"
          >
            About Me
          </h1>

          <h3
            ref={introRef}
            className="text-base md:text-2xl font-medium text-purple-200 lg:max-w-[45rem] max-w-[27rem] tracking-wider leading-relaxed"
          >
            I’m <span className="text-white font-bold">Usman Umer</span>, a
            passionate{" "}
            <span className="text-purple-300">MERN Stack Developer</span> with
            over{" "}
            <span className="text-white font-semibold">
              1 year of hands-on experience
            </span>{" "}
            building fast, responsive, and engaging web applications. I
            specialize in React.js, Node.js, Express, MongoDB, and Tailwind CSS
            — creating solutions that combine smooth performance with modern,
            clean design.
            I’ve successfully delivered{" "}
            <span className="text-white font-semibold">10+ projects</span>,
            focusing on real-world business needs and user experience. My
            approach is centered around writing clean, scalable code and
            building SEO-friendly websites that not only look great but also
            perform well on search engines.
            <br />
            I’m always focused on delivering high-quality work — ensuring speed,
            responsiveness, and a seamless user experience that helps businesses
            grow and stand out online.
          </h3>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            ref={imageRef}
            className="lg:h-[40rem] md:h-[30rem] h-[20rem] mix-blend-lighten drop-shadow-2xl"
            src="images/bg.png"
            alt="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
