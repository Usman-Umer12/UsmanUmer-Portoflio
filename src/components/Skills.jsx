import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaVuejs,
  FaGithub, FaWordpress, FaFigma
} from "react-icons/fa";


import {
  SiTailwindcss, SiBootstrap, SiSass, SiJquery, SiNpm
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// 🔥 TOP (Dark / Dev Tools)
const topSkills = [FaGithub, VscVscode, SiNpm];

// 🔥 MIDDLE (Core Dev Skills)
const mainSkills = [
  FaHtml5, FaCss3Alt, SiSass, FaJs, SiJquery,
  FaReact, FaVuejs, FaAngular,
  SiTailwindcss, SiBootstrap, SiJquery, FaReact
];

// 🔥 BOTTOM (Design / CMS)
const bottomSkills = [FaWordpress, FaFigma];

const Skills = () => {
  const renderIcons = (icons) =>
    icons.map((Icon, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 
        p-4 rounded-2xl cursor-pointer 
        hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] transition"
      >
        <Icon className="text-4xl md:text-5xl text-white" />
      </motion.div>
    ));

  return (
    <section
    className="bg-gradient-to-b from-violet-900 to-black py-20 px-5 md:px-20">
      
      {/* Heading */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white-400">
          Skills & Tools
        </h2>
      </div>

      {/* 🔥 TOP ROW */}
      <div className="flex justify-center gap-8 mb-12 flex-wrap">
        {renderIcons(topSkills)}
      </div>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 place-items-center mb-12">
        {renderIcons(mainSkills)}
      </div>

      {/* 🔥 BOTTOM ROW */}
      <div className="flex justify-center gap-8 flex-wrap">
        {renderIcons(bottomSkills)}
      </div>

    </section>
  );
};

export default Skills;