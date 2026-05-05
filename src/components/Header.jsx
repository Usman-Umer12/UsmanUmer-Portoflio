import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX} from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);
  const MotionLink = motion(Link)

   // ✅ Section mapping (clean & scalable)
  const sectionMap = {
    Home: "home",
    About: "about",
    Projects: "project",
    Services: "Services",
  };

  // ✅ Smooth scroll function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3, duration: 1.2 }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            U
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            UsmanUmer
          </span>
        </motion.div>

        {/* Desktop Navigation */}
    <nav className="hidden lg:flex space-x-8 text-white">
      {Object.keys(sectionMap).map((item, index) => (
        <button
          key={index}
          onClick={() => handleScroll(sectionMap[item])}
          className="hover:text-purple-400 transition"
        >
          {item}
        </button>
      ))}
    </nav>
        {/* Social Icons & Hire Me Button */}
        <div className="hidden md:flex items-center space-x-4">
          {[{
            icon: <FiGithub className="w-5 h-5" />,
            href: "https://github.com/UsmanUmer-Developer1",
            delay: 1.3
          },{
            icon: <FiLinkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/usman-umer786",
            delay: 1.4
          },{
            icon: <FiInstagram className="w-5 h-5" />,
            href: "https://www.instagram.com/usman_developer1?igsh=MWd5aHcza2V4MnNlMw==",
            delay: 1.5
          }].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: item.delay, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            >
              {item.icon}
            </motion.a>
          ))}

          {/* Hire Me Button */}
          
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ delay: 1.6, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
            className="hidden md:block ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu} className="text-gray-300">
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.8 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <a
              onClick={toggleMenu}
              className="text-gray-300 font-medium py-2"
              key={item}
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-around">
            <FiGithub className="h-6 w-6 text-gray-300" />
            <FiLinkedin className="h-6 w-6 text-gray-300" />
            <FiInstagram className="h-6 w-6 text-gray-300" />
          </div>

          <button
            onClick={() => { openContactForm(); toggleMenu(); }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 200, duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
                <button onClick={closeContactForm}><FiX className="w-5 h-5 text-gray-300 font-extrabold" /></button>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const message = e.target.message.value;
                  const whatsappMessage = `Hello Usman, I received a new Hire Me request:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
                  window.open(`https://wa.me/923014122192?text=${whatsappMessage}`, "_blank");
                  setContactFormOpen(false);
                  e.target.reset();
                }}
              >
                <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200" />
                <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200" />
                <textarea name="message" placeholder="Message" required className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200"></textarea>
                <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 rounded-lg font-bold">Send Message</motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
