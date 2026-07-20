import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import AboutImg from "../assets/bg.png"
import { Download } from "lucide-react";
import Skills from "../Componenets/Skills";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiSass,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiMongodb,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { TbBrandAdobe } from "react-icons/tb";

import { FaCss3Alt } from "react-icons/fa";

import { Play, Eye } from "lucide-react";

// Demo Videos
// Inko baad me apni videos se replace kar dena

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video1.mp4";
import video3 from "../assets/video1.mp4";
import video4 from "../assets/video1.mp4";
import video5 from "../assets/video1.mp4";

const videos = [
  {
    id: 1,
    video: video1,
    title: "Modern React Development",
    views: "25K Views",
  },
  {
    id: 2,
    video: video2,
    title: "AI Automation Workflow",
    views: "42K Views",
  },
  {
    id: 3,
    video: video3,
    title: "Real Client Project",
    views: "18K Views",
  }
];

const AboutPage = () => {
      const [activeIndex] = useState(0);
    
    
    const skills = [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-3xl" />,
      },
      {
        name: "React.js",
        icon: <SiReact className="text-cyan-400 text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white text-3xl" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500 text-3xl" />,
      },
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-orange-500 text-3xl" />,
      },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    },
      {
        name: "Sass",
        icon: <SiSass className="text-pink-400 text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400 text-3xl" />,
      },
      {
        name: "Git",
        icon: <SiGit className="text-orange-500 text-3xl" />,
      },
      {
      name: "Adobe",
      icon: <TbBrandAdobe className="text-red-500 text-3xl" />,
    },
      {
        name: "GitHub",
        icon: <SiGithub className="text-white text-3xl" />,
      },
      
    ];

    
        const [mouse, setMouse] = useState({    
            x: 0,
            y: 0,
        });
        useEffect(() => {
            const move = (e) => {
                setMouse({
                    x: e.clientX,
                    y: e.clientY,
                });
            };
    
            window.addEventListener("mousemove", move);
    
            return () => window.removeEventListener("mousemove", move);
        }, []);
    
        const achievements = [
  {
    number: "10+",
    title: "Projects Delivered",
    desc: "Successfully completed modern web applications, dashboards, and business websites.",
  },
  {
    number: "95%",
    title: "Client Satisfaction",
    desc: "Focused on quality, communication, and delivering projects beyond expectations.",
  },
  {
    number: "1+",
    title: "Years Experience",
    desc: "Professional experience building scalable MERN Stack and AI-powered solutions.",
  },
  {
    number: "24/7",
    title: "Support & Collaboration",
    desc: "Reliable communication, continuous support, and long-term partnerships.",
  },
];

  return (
   
        <section className="relative min-h-screen bg-[#0A192F] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 blur-[150px]" />

            {/* Left Social Icons */}
            <div className="hidden lg:flex fixed  left-10 bottom-25 z-50 flex-col items-center">
                <div className="flex flex-col gap-6 text-[#8892B0] text-xl">
                    <a
                        href="#"
                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="#"
                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="#"
                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="#"
                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="mailto:youremail@gmail.com"
                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FiMail />
                    </a>
                </div>

                <div className="mt-8 w-px h-36 bg-[#495670]" />
            </div>

            {/* Right Email */}
            <div className="hidden lg:flex fixed right-10 bottom-25 z-50 flex-col items-center">
                <a
                    href="mailto:usmanumer12@gmail.com"
                    className="tracking-[0.35em] text-[#8892B0] text-sm [writing-mode:vertical-rl] hover:text-[#64FFDA] duration-300"
                >
                    usmanumer12@gmail.com
                </a>

                <div className="mt-8 w-px h-36 bg-[#495670]" />
            </div>

            {/* Hero */}
            {/* Animated Blur Background */}
            <div
                className="pointer-events-none fixed z-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px] duration-300"
                style={{
                    left: mouse.x - 180,
                    top: mouse.y - 180,
                }}
            ></div>
            <div className="absolute inset-0 opacity-[0.03]">

                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
linear-gradient(#64FFDA 1px,transparent 1px),
linear-gradient(90deg,#64FFDA 1px,transparent 1px)
`,
                        backgroundSize: "60px 60px"
                    }}
                ></div>

            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"></div>

                <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cyan-400/10 blur-[150px] animate-pulse"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[200px]"></div>

            </div>
<section
      id="about"
      className="bg-[#0A192F] py-24 lg:py-32 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}


        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>
<h1 className="text-3xl mt-10 sm:text-5xl lg:text-16xl font-bold leading-tight lg:leading-[1.1] text-[#CCD6F6] max-w-7xl">
  Building Digital Products
  <span className="block text-[#64FFDA]">
    That Drive Business Growth
  </span>
</h1>

  <p className="mt-8 text-[#8892B0] leading-8 text-lg">
    Hi, I'm <span className="text-[#64FFDA] font-semibold">Usman Umer</span>,
    a passionate MERN Stack Developer with professional experience in
    designing and developing modern, scalable, and user-focused web
    applications. I enjoy transforming ideas into clean, efficient,
    and high-performance digital products that solve real business
    challenges.
  </p>

  <p className="mt-6 text-[#8892B0] leading-8 text-lg">
    Currently working as an <span className="text-white font-medium">
      Associate Software Developer
    </span>, I have collaborated with teams on enterprise-level
    projects, custom business solutions, AI-powered applications,
    dashboards, and responsive websites. My focus is always on writing
    maintainable code, delivering excellent user experiences, and
    building applications that are fast, secure, and future-ready.
  </p>

  <p className="mt-6 text-[#8892B0] leading-8 text-lg">
    My technical expertise includes React.js, Next.js, Node.js,
    Express.js, MongoDB, Tailwind CSS, REST APIs, WordPress,
    AI Integrations, and modern JavaScript technologies. I believe in
    continuous learning, staying updated with emerging technologies,
    and creating digital solutions that help businesses grow with
    confidence.
  </p>

<div className="mt-12">
  <a
    href="/Usman-Umer-Resume.pdf" // Resume ko public folder me rakho
    download
    className="group inline-flex items-center gap-3 rounded-full border border-[#64FFDA] bg-transparent px-7 py-4 text-[#64FFDA] font-semibold transition-all duration-300 hover:bg-[#64FFDA] hover:text-[#0A192F] hover:shadow-[0_0_30px_rgba(100,255,218,0.35)]"
  >
    <Download
      size={20}
      className="transition-transform duration-300 group-hover:-translate-y-1"
    />
    Download Resume
  </a>
</div>
           
          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative group">

              {/* Border */}

              <div className="absolute -right-5 -bottom-5 w-full h-full " />

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={AboutImg}
                  alt="Usman Umer"
                  className="w-[330px] md:w-[380px] lg:w-[420px] rounded-xl object-cover "
                />

              </div>

            </div>

          </div>

        </div>

      </div>
        <section
      id="skills"
      className="bg-[#0A192F] py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-[#64FFDA] text-2xl md:text-3xl font-bold">
            Skills
          </h2>

          <div className="flex-1 h-px bg-slate-700"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              group
              bg-[#112240]
              border
              border-[#233554]
              rounded-xl
              h-24
              px-6
              flex
              items-center
              gap-4
              transition-all
              duration-300
              hover:-translate-y-2
              
              "
            >
              {skill.icon}

              <span className="text-[#CCD6F6] font-medium duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="py-24 px-6 lg:px-20 ">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
<div className="text-center mb-16">
  <span className="inline-flex items-center  px-4 py-2 text-sm text-[#64FFDA]">
    Achievements
  </span>

  <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#CCD6F6]">
    Results That Build
    <span className="text-[#64FFDA]"> Trust.</span>
  </h2>

  <p className="mt-5 max-w-2xl mx-auto text-[#8892B0] leading-8 text-lg">
    Every project is built with performance, scalability, and business
    growth in mind. My focus isn't just writing code—it's delivering
    digital solutions that create real value for clients.
  </p>
</div>
    {/* Heading Code Here */}

    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

      {achievements.map((item, index) => (
        <div
        key={index}
        className="group relative overflow-hidden rounded-3xl border border-[#233554] bg-[#112240] p-8 transition-all duration-500 hover:-translate-y-3"
        >
          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-[#64FFDA]/5 via-transparent to-transparent" />

          <h3 className="relative text-5xl font-extrabold text-[#64FFDA]">
            {item.number}
          </h3>

          <h4 className="relative mt-5 text-2xl font-semibold text-[#CCD6F6]">
            {item.title}
          </h4>

          <p className="relative mt-4 leading-7 text-[#8892B0]">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
   <section className="relative min-h-[90vh] overflow-hidden  py-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full " />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full " />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-[#64FFDA]/20 bg-[#112240] px-5 py-2 text-sm font-medium text-[#64FFDA]">
            Content Creator
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-[#CCD6F6] md:text-6xl">
            Content That
            <span className="block text-[#64FFDA]">
              Builds Trust
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#8892B0]">
            I regularly share practical insights about modern web
            development, AI automation, and real-world client projects.
            These videos reflect my expertise, problem-solving approach,
            and passion for building high-quality digital experiences.
          </p>

        </div>

        {/* Videos */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {videos.map((item, index) => (

            <div
              key={item.id}
              className={`group relative overflow-hidden 
              ${
                index === activeIndex
                  ? "scale-100"
                  : "scale-95 opacity-70"
              }`}
            >

              {/* Video */}

              <video
                src={item.video}
                muted
                loop
                playsInline
                autoPlay
                className="h-[580px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 via-transparent to-transparent" />

              {/* Play */}

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110">

                <Play
                  size={34}
                  className="ml-1 text-white"
                  fill="white"
                />

              </div>

              {/* Bottom */}

              <div className="absolute bottom-0 w-full p-6">

                <div className="mb-4 inline-flex rounded-full bg-[#64FFDA]/15 px-4 py-2 text-sm font-medium text-[#64FFDA]">
                  Content Creator
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-[#CCD6F6]">

                  <Eye size={18} />

                  <span>{item.views}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
    </section>

            {/* Mobile Social Icons */}
            <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 text-[#8892B0] text-xl">
                <FaGithub className="hover:text-[#64FFDA] duration-300 cursor-pointer" />
                <FaLinkedinIn className="hover:text-[#64FFDA] duration-300 cursor-pointer" />
                <FaInstagram className="hover:text-[#64FFDA] duration-300 cursor-pointer" />
                <FaFacebookF className="hover:text-[#64FFDA] duration-300 cursor-pointer" />
            </div>

        </section>
  )
}

export default AboutPage