import React, { useState } from "react";
import {
    FiExternalLink,
    FiGithub,
} from "react-icons/fi";

// Project Images
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
  id: 1,
  title: "Woodgig – Premium Furniture Website",
  category: "Business Website",
  image: project1,
  description:
    "A modern furniture and interior solutions website developed for Woodgig using the MERN Stack. The platform features a responsive design, product showcase, WhatsApp inquiry integration, and an optimized user experience to help customers easily explore products and connect with the business.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "WhatsApp Integration",
  ],
  live: "https://www.woodgig.com",
  github: "#", // Private Repository
},

    {
  id: 2,
  title: "Chiron – Luxury Watch Store",
  category: "Business Website",
  image: project2,
  description:
    "A premium luxury watch website developed using the MERN Stack with a modern, responsive design. The platform features an elegant product showcase, WhatsApp inquiry and booking integration, fast performance, and an intuitive user experience to help customers explore collections and connect with the brand effortlessly.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "WhatsApp Integration",
    "Booking Integration",
  ],
  live: "https://watch-usman-store.netlify.app",
  github: "#", // Private Repository
},

   {
  id: 3,
  title: "Image Editing App",
  category: "SaaS Product",
  image: project3,
  description:
    "A responsive SaaS-style image editing application built for learning and practice. The project provides a clean user interface for basic image editing features while demonstrating responsive design principles and modern frontend development.",
  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
  ],
  live: "https://images-editing-app.netlify.app",
  github: "#", // Private Repository
},

    {
  id: 4,
  title: "Expense Budget App",
  category: "SaaS Product",
  image: project4,
  description:
    "A modern AI-powered expense and budget management application built with the MERN Stack. The platform enables users to track income and expenses, manage budgets, gain AI-driven financial insights, and monitor spending through a clean, responsive, and user-friendly interface.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "AI Integration",
  ],
  live: "https://expense-budget-app.netlify.app",
  github: "#", // Private Repository
},
];


export default function Project() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <section
            id="projects"
            className="bg-[#0A192F] py-24 px-6 lg:px-20"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <h2 className="text-[#64FFDA] mb-5 text-2xl md:text-3xl font-bold">
            
                    02. My Work
          </h2>

                <h2 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-12">
Featured Work That
Delivers Results
                </h2>
                <p className="max-w-2xl text-[#8892B0] leading-8 mt-6 mb-12">
  A selection of business websites and SaaS products designed with
  performance, scalability, and exceptional user experience in mind.
  Every project is built to solve real business problems and create
  measurable results.
</p>

                {/* Tabs */}

                
                {/* Grid */}

                <div className="grid md:grid-cols-2 gap-8">

                    {filtered.map((item) => (

                        <div
                            key={item.id}
                            className="
group
rounded-xl
overflow-hidden
bg-[#112240]
transition-all
duration-300
hover:-translate-y-2
hover:border-[#64FFDA]
hover:shadow-[0_12px_40px_rgba(2,12,27,.45)]
"            >

                            {/* Image */}

                            <div className="overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                    className="
w-full
h-64
sm:h-72
md:h-80
lg:h-96
object-cover
transition-all
duration-500
group-hover:scale-105
"/>

                            </div>

                            {/* Content */}

                            <div className="p-6">

                                <h3
                                    className="
text-2xl
font-semibold
text-[#CCD6F6]
transition-colors
duration-300

"
                                >                  {item.title}
                                </h3>

                                <p className="text-[#8892B0] mt-4 leading-7">
                                    {item.description}
                                </p>

                                {/* Tech */}

                                <div className="flex flex-wrap gap-3 mt-6">

                                    {item.tech.map((tech) => (

                                        <span
                                            key={tech}
                                            className="
px-3
py-1
rounded-full
bg-[#0A192F]
border
border-[#233554]
text-[#8892B0]
text-xs
transition
duration-300

"                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                {/* Links */}

                                <div className="flex items-center gap-5 mt-7">

                                    <a
                                        href={item.github}
                                        className="text-[#8892B0] hover:text-[#64FFDA] duration-300 text-xl"
                                    >
                                        <FiGithub />
                                    </a>

                                    <a
                                        href={item.live}
                                        className="text-[#8892B0] hover:text-[#64FFDA] duration-300 text-xl"
                                    >
                                        <FiExternalLink />
                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}