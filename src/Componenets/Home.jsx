import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import React, { useEffect, useState } from "react";


const Home = () => {

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

    return (

        <section className="relative  min-h-screen bg-[#0A192F] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 blur-[150px]" />

            {/* Left Social Icons */}
            <div className="hidden lg:flex fixed  left-10 bottom-25 z-50 flex-col items-center">
                <div className="flex flex-col gap-6 text-[#8892B0] text-xl">
                    <a
                        href="https://github.com/Usman-Umer12"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="www.linkedin.com/in/usmanumer12"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="https://www.instagram.com/itx_mana46"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61558140790889"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="hover:text-[#64FFDA] hover:-translate-y-1 duration-300"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="usmanumer423@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"

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
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"

                    className="tracking-[0.35em] text-[#8892B0] text-sm [writing-mode:vertical-rl] hover:text-[#64FFDA] duration-300"
                >
                    usmanumer423@gmail.com
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
            <div className="max-w-7xl mt-13 mx-auto px-6 lg:px-4 flex items-center min-h-screen">
                <div className="max-w-3xl z-10">

                    <p className="text-[#64FFDA] tracking-[0.2em] text-sm mb-6 animate-[fade_0.6s_ease]">
                        Hi, my name is
                    </p>

                    <h1 className="animate-fade text-[#CCD6F6] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black">

                        Usman Umer.

                    </h1>

                    <h2 className="animate-fade text-[#8892B0] text-4xl md:text-6xl lg:text-7xl font-bold mt-4">

                        Modern Websites.
                        Smarter Business Growth.

                    </h2>

                    <p className="animate-fade mt-8 max-w-2xl text-[#8892B0] leading-8 text-lg">

                        I help startups, businesses, and brands build fast, modern, AI-powered web experiences that increase conversions, strengthen customer trust, and support long-term digital growth.

                    </p>

                 <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
  
  <a
  href="#contact"
  className="
    inline-flex
    justify-center
    items-center
    group
    border border-[#64FFDA]
    px-8 py-4
    text-[#64FFDA]
    hover:bg-[#64FFDA]/10
    transition-all
    duration-300
    w-full sm:w-auto
    rounded
  "
>
  <span className="group-hover:tracking-widest duration-300">
    Start Your Project
  </span>
</a>

  <a
    href="#projects"
    className="
      group
      border border-[#64FFDA]
      bg-[#64FFDA]/10
      px-8 py-4
      rounded
      text-[#64FFDA]
      hover:bg-[#64FFDA]/20
      duration-300
      w-full sm:w-auto
      text-center
    "
  >
    <span className="group-hover:tracking-widest duration-300">
      View My Work
    </span>
  </a>

</div>

                </div>
            </div>


            {/* Mobile Social Icons */}
            <div className="lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-6 text-[#8892B0] text-xl">
                <FaGithub className="hover:text-[#64FFDA] duration-300 cursor-pointer" />
                <FaLinkedinIn className="hover:text-[#64FFDA] duration-300 cursor-pointer" />
                <FaInstagram className="hover:text-[#64FFDA] duration-300 cursor-pointer" />
                <FaFacebookF className="hover:text-[#64FFDA] duration-300 cursor-pointer" />
            </div>


        </section>

    );
};

export default Home;