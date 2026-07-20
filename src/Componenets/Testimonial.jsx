import React, { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const testimonials = [
  {
    id: 1,
    name: "AHMAD",
    role: "CEO",
    company: "WOODGIG",
    review:
      "G mashallah dill sa kaam krna walae haein ap Inshahallah next b apka sath kaam krna pasand krun ga",
  },
  {
    id: 2,
    name: "SARIB",
    role: "CEO",
    company: "MUSHZANI",
    review:
      "Usman built our business website professionally. The design, responsiveness, and overall performance were outstanding.",
  },
  {
    id: 3,
    name: "MUNIR AHMAD",
    role: "CEO",
    company: "AL-USMAN-GROP",
    review:
      "Excellent communication and fast delivery. Every feature was implemented exactly as requested.",
  },
  {
    id: 4,
    name: "AQIB ABBAS",
    role: "CEO",
    company: "WIZZ-OIL",
    review:
            "Professional developer with strong technical skills. The project was delivered before deadline and the final result exceeded our expectations.",
  },
  {
    id: 5,
    name: "MUNIR",
    role: "CEO",
    company: "HSO",
    review:
      "From planning to deployment, everything was handled professionally. Great attention to detail and excellent support after project completion.",
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="testimonial"
      className="bg-[#0A192F] py-24 lg:py-32 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="flex items-center justify-between mb-16">

          <div className="flex items-center gap-5 w-full">

            <h2 className="text-[#64FFDA] text-2xl md:text-3xl font-bold whitespace-nowrap">
              05. Client Feedback
            </h2>

            <div className="w-full h-px bg-[#233554]" />

          </div>

          <div className="hidden md:flex items-center gap-4 ml-8">

            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full border border-[#233554] bg-[#112240] hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#CCD6F6] flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full border border-[#233554] bg-[#112240] hover:bg-[#64FFDA] hover:text-[#0A192F] text-[#CCD6F6] flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
                    {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="
                  h-full
                  bg-[#112240]
        
                  p-8
             
                "
              >
                <Quote
                  size={42}
                  className="text-[#64FFDA] mb-6 opacity-90"
                />

                <p className="text-[#8892B0] leading-8 text-base">
                  "{item.review}"
                </p>

                <div className="mt-8 pt-6 border-t border-[#233554] flex items-center gap-4">
                  

                  <div>
                    <h3 className="text-[#CCD6F6] text-xl font-bold">
                      {item.name}
                    </h3>

                    <p className="text-[#64FFDA] text-sm mt-1">
                      {item.role}
                    </p>

                    <p className="text-[#8892B0] text-sm">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        

        {/* Mobile Arrows */}

        <div className="flex md:hidden justify-center gap-4 mt-10">
          <button
            onClick={() => prevRef.current?.click()}
            className="
              w-12
              h-12
              rounded-full
              bg-[#112240]
              border
              border-[#233554]
              text-[#CCD6F6]
              hover:bg-[#64FFDA]
              hover:text-[#0A192F]
              transition-all
            "
          >
            <ChevronLeft className="mx-auto" size={20} />
          </button>

          <button
            onClick={() => nextRef.current?.click()}
            className="
              w-12
              h-12
              rounded-full
              bg-[#112240]
              border
              border-[#233554]
              text-[#CCD6F6]
              hover:bg-[#64FFDA]
              hover:text-[#0A192F]
              transition-all
            "
          >
            <ChevronRight className="mx-auto" size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
        