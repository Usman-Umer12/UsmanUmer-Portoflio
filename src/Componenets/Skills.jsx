import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiHtml5,
  SiSass,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { TbBrandAdobe } from "react-icons/tb";

import { FaCss3Alt } from "react-icons/fa";

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
    name: "Python", 
    icon: <SiPython className="text-blue-500 text-3xl" />
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
    name: "PostgreSQl", 
    icon: <SiPostgresql className="text-blue-500 text-3xl" />
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0A192F] py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-[#64FFDA] text-2xl md:text-3xl font-bold">
            04. Skills
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
  );
}