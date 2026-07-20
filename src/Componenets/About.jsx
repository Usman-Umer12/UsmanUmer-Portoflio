import React from "react";
import aboutImg from "../assets/bg.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A192F] py-24 lg:py-32 px-6 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-5 mb-16">
          <h2 className="text-[#64FFDA] text-lg font-semibold whitespace-nowrap">
            01. About Me
          </h2>

          <div className="w-full h-px bg-[#233554]" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#CCD6F6]">
              Helping Businesses Grow
              With Modern Web &
              AI Solutions.
            </h1>

            <p className="mt-8 text-[#8892B0] leading-8 text-lg">
              I'm a Full Stack Developer who helps startups, entrepreneurs,
              and growing businesses build modern, high-performance websites
              and AI-powered web applications. My focus is creating digital
              experiences that are fast, user-friendly, and designed to
              generate real business results.
            </p>

            <p className="mt-6 text-[#8892B0] leading-8 text-lg">
              From responsive business websites and custom web applications
              to API integrations and AI automation, I build scalable
              solutions that improve customer engagement, streamline business
              processes, and support long-term growth.
            </p>

            <p className="mt-6 text-[#8892B0] leading-8 text-lg">
              Every project is built with performance, security, clean code,
              and scalability in mind—ensuring your business is ready for
              today's digital world and tomorrow's opportunities.
            </p>


            {/* Trust Points */}
            <div className="mt-10 grid grid-cols-2 gap-4 text-[#8892B0] text-sm">
              <p>✔ Responsive Websites</p>
              <p>✔ AI-Powered Solutions</p>
              <p>✔ Clean & Scalable Code</p>
              <p>✔ Fast Project Delivery</p>
            </div>

            {/* Button */}
            <div className="mt-12">
              <Link
                to="/AboutPage"
                className="inline-flex items-center gap-2 border border-[#64FFDA] px-8 py-4 rounded text-[#64FFDA] hover:bg-[#64FFDA]/10 duration-300"
              >
                Learn More
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative Border */}

              {/* Image */}
             <div className="mt-0 lg:-mt-[230px]">
  <img
    src={aboutImg}
    alt="Usman Umer"
    className="w-[330px] md:w-[380px] lg:w-[430px] object-cover"
  />
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;