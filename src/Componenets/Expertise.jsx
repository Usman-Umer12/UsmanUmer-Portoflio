import React from "react";

const expertise = [
    {
        id: "01",
        title: "AI-Powered Website Development",
        description:
            "I design and develop modern, responsive business websites that combine exceptional user experience with AI-powered features. Every website is optimized for performance, lead generation, and long-term business growth.",

        tech: [
            "React.js",
            "Next.js",
            "Node.js",
            "Tailwind-CSS",
            "Express.js",
            "MongoDB",
            "AI Integration",
            "REST API",
        ],
    },

    {
        id: "02",
        title: "Python & FastAPI Development",
        description:
            "I develop high-performance backend systems using Python and FastAPI for APIs, AI applications, automation services, and enterprise solutions. Every backend is designed for speed, security, scalability, and easy integration with modern frontend frameworks.",

        tech: [
            "Python",
            "FastAPI",
            "REST API",
            "PostgreSQL",
            "SQLite",
            "Authentication",
            "Docker",
        ],
    },
       {

        id: "03",
        title: "Custom SaaS Product Development",
        description:
            "From MVPs to production-ready SaaS platforms, I build scalable applications tailored to your business needs. Every product is developed with clean architecture, secure authentication, and an intuitive user experience.",

       tech: [
            "SAAS",
            "Authentication",
            "Dashboard",
            "PostgreSQL",
            "Stripe",
            "Cloud",
            "Scalable Architecture",
            "API Development"
        ],
    },
    {

        id: "04",
        title: "AI Automation & Business Integration",
        description:
            "I automate repetitive workflows using AI, APIs, and cloud services to save time, reduce manual work, and improve business efficiency. From CRM integrations to intelligent workflows, I build systems that work around the clock.",

        tech: [
            "OpenAI",
  "n8n",
  "Automation",
  "CRM",
  "WhatsApp API",
  "Email Automation",
  "Google Workspace",
  "Webhooks",
        ],
    },

    {
        id: "05",
        title: "Performance, SEO & Optimization",
        description:
            "A beautiful website is only valuable when it performs. I optimize websites for speed, search engines, accessibility, and Core Web Vitals to improve rankings, user engagement, and conversion rates.",

        tech: [
           "SEO",
"Core Web Vitals",
"Performance",
"Accessibility",
"Image Optimization",
"Schema",
"Lighthouse",
"Analytics"
        ],

    },
];

const Expertise = () => {
    return (
        <section
            id="expertise"
            className="bg-[#0A192F] py-24 lg:py-32 px-6 lg:px-20"
        >
            <div className="max-w-7xl mx-auto">

                {/* Top */}

                <div className="grid lg:grid-cols-12 gap-12 mb-24">

                    {/* Left */}

                    <div className="lg:col-span-9">

                        <h2 className="text-[#64FFDA] mb-5 text-2xl md:text-3xl font-bold">

                            03. Services
                        </h2>

                    <h2
  className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    leading-tight
    md:leading-[1.15]
    text-[#CCD6F6]
  "
>
  Solutions That Help
  <br className="hidden md:block" />
  <span className="block md:inline"> Businesses Grow</span>
</h2>
                    </div>

                    {/* Right */}

                    <div className="lg:col-span-8">

                        <p className="text-[#8892B0] text-lg md:text-xl leading-9">

                            I help startups, businesses, and entrepreneurs transform ideas into high-performing digital products. From modern websites and SaaS platforms to AI automation and performance optimization, every solution is designed to deliver measurable business value.

                        </p>

                    </div>

                </div>

                {/* Expertise List */}

                <div className="space-y-20">

                    {expertise.map((item) => (

                        <div
                            key={item.id}
                            className="
border-t
border-[#233554]
pt-14
transition-all
duration-300
hover:border-[#64FFDA]/40
"
                        >

                            <div className="grid lg:grid-cols-12 gap-10">

                                {/* Number */}

                                <div className="lg:col-span-2">

                                    <span className="text-5xl font-bold text-[#64FFDA]">
                                        {item.id}.
                                    </span>

                                </div>

                                {/* Content */}

                                <div className="lg:col-span-10">

                                    <h3 className="
text-3xl
md:text-4xl
font-bold
text-[#CCD6F6]
leading-tight
">

                                        {item.title}

                                    </h3>

                                    <p className="
mt-6
text-[#8892B0]
text-lg
leading-9
max-w-4xl
">

                                        {item.description}

                                    </p>

                                    {/* Tech */}

                                    <div className="flex flex-wrap gap-3 mt-10">

                                        {item.tech.map((tech) => (

                                            <span
                                                key={tech}
                                                className="
px-4
py-2
rounded-full
bg-[#112240]
border
border-[#233554]
text-[#64FFDA]
text-sm
transition-all
duration-300
hover:border-[#64FFDA]
hover:bg-[#172A45]
hover:-translate-y-1
"                      >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Expertise;