import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Modern Website Development",
    desc: "Modern, responsive and high-performance websites.",
    img: "/images/image.png",
  },
  {
    title: "AI Integration",
    desc: "Smart AI solutions like chatbots & automation.",
    img: "/images/image2.png",
  },
  {
    title: "Software Development",
    desc: "Custom software for business growth.",
    img: "/images/image3.png",
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS apps with modern UI.",
    img: "/images/image5.png",
  },
  {
    title: "Web App Development",
    desc: "Full stack scalable web applications.",
    img: "/images/project-5.png",
  },
  {
    title: "AI Tools Development",
    desc: "Build powerful AI tools for automation.",
    img: "/images/project-6.png",
  },
  {
    title: "AI Powered Developer Cources",
    desc: "Become a professional AI Powered developer.",
    img: "/images/image6.png",
  },
  {
    title: "Python Course",
    desc: "Learn Python with real-world projects.",
    img: "/images/image7.png",
  },
  {
    title: "Freelancing Training",
    desc: "Start earning online with skills.",
    img: "/images/image9.png",
  },
];

const ServicesSection = () => {
  return (
    <section 
    id="Services"
    className="bg-[linear-gradient(to_bottom,#150f1f,#150f1f,#31187c)] text-white py-20 px-4 sm:px-8 lg:px-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-purple-400">Services</span>
        </h1>
        <p className="text-gray-300 mt-4">
          We provide high quality development and AI powered solutions
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
          >
            
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {service.title}
              </h2>
              <p className="text-gray-300 text-sm">
                {service.desc}
              </p>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;