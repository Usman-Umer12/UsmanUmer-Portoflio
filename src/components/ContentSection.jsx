import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiUser, FiMail } from "react-icons/fi";

const ContactWidget = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappText =
      `Hello Usman,%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}`;

    window.open(
      `https://wa.me/923014122192?text=${whatsappText}`,
      "_blank"
    );

    setOpen(false);
    e.target.reset();
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-40 bg-gradient-to-r from-violet-600 to-purple-600 p-4 rounded-full shadow-xl text-white"
      >
        <FiMessageCircle size={26} />
      </motion.button>

      {/* Contact Form */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="w-80 sm:w-[420px] bg-gradient-to-b from-violet-900 to-black h-full p-8 "
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white-600 hover:text-gray"
              >
                <FiX size={22} />
              </button>

              {/* Header */}
              <div 
              id="Contact"
              className="mb-4" >
                <h2 className="text-3xl font-bold text-white-900">
                  Contact Us
                </h2>
                <p className="text-white-300 text-sm mt-1">
                  Let’s talk about your project
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <FiUser className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <FiMail className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-100 focus:ring-2 focus:ring-violet-500 outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your project"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="w-37 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-violet-500/40 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactWidget;
