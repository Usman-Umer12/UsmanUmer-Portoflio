import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo1.png'
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/#home" },
  { name: "About", path: "/AboutPage" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-[#233554]">
      <div className="max-w-14xl mx-auto px-6 lg:px-10">

        <div className="h-20 flex items-center justify-between">

          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="Usman Umer Logo"
              className="w-25 h-25  sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-30 xl:h-30 object-contain"
            />
          </div>



          {/* Desktop */}


          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) =>
              item.path.startsWith("/#") ? (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.path}
                  className="text-gray-300 hover:text-cyan-300 transition"
                >
                  <span className="text-cyan-400 mr-2">
                    0{index + 1}.
                  </span>

                  {item.name}
                </HashLink>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-cyan-300 transition"
                >
                  <span className="text-cyan-400 mr-2">
                    0{index + 1}.
                  </span>

                  {item.name}
                </NavLink>
              )
            )}

            <button className="px-6 py-3 border border-[#64FFDA] rounded-lg text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] transition-all duration-300">
              Download CV
            </button>
          </nav>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-cyan-300"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#112240] border-t border-cyan-400/10">
          <div className="flex flex-col p-8 gap-6">
            {navItems.map((item, index) =>
              item.path.startsWith("/#") ? (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-cyan-300"
                >
                  <span className="text-cyan-400 mr-2">
                    0{index + 1}.
                  </span>

                  {item.name}
                </HashLink>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-cyan-300"
                >
                  <span className="text-cyan-400 mr-2">
                    0{index + 1}.
                  </span>

                  {item.name}
                </NavLink>
              )
            )}

            <button className="border border-cyan-300 rounded py-3 text-cyan-300 hover:bg-cyan-300 hover:text-[#112240] transition">
              Resume
            </button>

          </div>
        </div>
      )}
    </header>
  );
}