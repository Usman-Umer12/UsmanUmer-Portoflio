import React, { useState } from "react";
import {
    Mail,
    MapPin,
    Clock,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !form.name ||
            !form.email ||
            !form.subject ||
            !form.message
        ) {
            alert("Please fill all fields.");
            return;
        }

        const message = `*📩 New Portfolio Inquiry*

👤 Name: ${form.name}

📧 Email: ${form.email}

📝 Subject: ${form.subject}

💬 Message:
${form.message}
`;

        const whatsappURL = `https://wa.me/923014122192?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappURL, "_blank");

        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (

        <section
            id="contact"
            className="relative bg-[#0A192F] py-24 lg:py-32 px-6 lg:px-20 overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute left-0 top-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="absolute right-0 bottom-20 w-72 h-72 bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}

                <div className="flex items-center gap-5 mb-16">

                    <h2 className="text-[#64FFDA] text-2xl md:text-3xl font-bold">

                        06. Contact
                    </h2>

                    <div className="w-220 h-px bg-[#233554]"></div>

                </div>

                {/* Grid */}

                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT */}

                    <div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#CCD6F6] leading-tight">

                            Let's Work Together.

                        </h1>

                        <p className="mt-8 max-w-md text-[#8892B0] text-lg leading-8">

                            I'm always excited to collaborate on innovative
                            projects, AI-powered solutions, and modern web
                            applications that help businesses grow, improve
                            customer experience, and achieve long-term success.

                        </p>

                        {/* Contact Info */}

                        <div className="mt-12 space-y-8">

                            {/* Email */}

                            <div className="flex items-start gap-5">

                                <div className="text-[#64FFDA] mt-1">
                                    <Mail size={22} />
                                </div>

                                <div>

                                    <h4 className="text-[#CCD6F6] font-semibold">
                                        Email
                                    </h4>

                                    <p className="text-[#8892B0] mt-1">
                                        usmanumer12@gmail.com
                                    </p>

                                </div>

                            </div>

                            {/* Location */}

                            <div className="flex items-start gap-5">

                                <div className="text-[#64FFDA] mt-1">
                                    <MapPin size={22} />
                                </div>

                                <div>

                                    <h4 className="text-[#CCD6F6] font-semibold">
                                        Location
                                    </h4>

                                    <p className="text-[#8892B0] mt-1">
                                        Lahore, Pakistan
                                    </p>

                                </div>

                            </div>

                            {/* Availability */}

                            <div className="flex items-start gap-5">

                                <div className="text-[#64FFDA] mt-1">
                                    <Clock size={22} />
                                </div>

                                <div>

                                    <h4 className="text-[#CCD6F6] font-semibold">
                                        Availability
                                    </h4>

                                    <p className="text-[#8892B0] mt-1">
                                        Available for Freelance & Full-Time
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Social */}

                        <div className="mt-12">

                            <h3 className="text-[#CCD6F6] font-semibold mb-5">
                                Let's Connect
                            </h3>

                            <div className="flex gap-5 text-xl">

                                <a
                                    href="#"
                                    className="text-[#8892B0] hover:text-[#64FFDA] duration-300"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="#"
                                    className="text-[#8892B0] hover:text-[#64FFDA] duration-300"
                                >
                                    <FaLinkedinIn />
                                </a>

                                <a
                                    href="#"
                                    className="text-[#8892B0] hover:text-[#64FFDA] duration-300"
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href="#"
                                    className="text-[#8892B0] hover:text-[#64FFDA] duration-300"
                                >
                                    <FaInstagram />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 "
                        >

                            <input
                                type="text"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                className="
w-full
bg-[#112240]
border
border-[#233554]
rounded-lg
px-5
py-4
text-[#CCD6F6]
placeholder:text-[#6B7280]
outline-none
transition-all
duration-300
focus:border-[#64FFDA]
focus:ring-2
focus:ring-[#64FFDA]/20
"                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                className="
w-full
bg-[#112240]
border
border-[#233554]
rounded-lg
px-5
py-4
text-[#CCD6F6]
placeholder:text-[#6B7280]
outline-none
transition-all
duration-300
focus:border-[#64FFDA]
focus:ring-2
focus:ring-[#64FFDA]/20
"                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={(e) =>
                                    setForm({ ...form, subject: e.target.value })
                                }
                                className="
w-full
bg-[#112240]
border
border-[#233554]
rounded-lg
px-5
py-4
text-[#CCD6F6]
placeholder:text-[#6B7280]
outline-none
transition-all
duration-300
focus:border-[#64FFDA]
focus:ring-2
focus:ring-[#64FFDA]/20
"                            />

                            <textarea
                                rows="7"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                className="
w-full
bg-[#112240]
border
border-[#233554]
rounded-lg
px-5
py-4
text-[#CCD6F6]
placeholder:text-[#6B7280]
outline-none
transition-all
duration-300
focus:border-[#64FFDA]
focus:ring-2
focus:ring-[#64FFDA]/20
"              />

                            <button
                                type="submit"
                                className="
w-full
bg-[#64FFDA]
text-[#0A192F]
font-semibold
py-4
rounded-lg
transition-all
duration-300
hover:-translate-y-1
"              >
                                Start Your Project →
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;