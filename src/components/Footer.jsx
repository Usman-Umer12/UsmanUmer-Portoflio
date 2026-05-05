import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-violet-900 text-white px-6 md:px-20 py-12">
      
      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Usman Umer</h2>
          <p className="text-gray-300 leading-relaxed">
            MERN Stack Developer focused on building modern, fast, and 
            SEO-optimized web applications that help businesses grow online.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Contact Me
          </h3>
          <p className="text-gray-300 mb-3">usmanumer012345@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/UsmanUmer-Developer1" className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/usman-umer786" className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/usman_developer1?igsh=MWd5aHcza2V4MnNlMw==" className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition">
              <FaInstagram />
            </a>
            <a href="usmanumer012345@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition">
              <MdEmail />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Usman Umer. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;