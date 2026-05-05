import { useEffect, useRef } from "react";
import gsap from "gsap"; // ❌ you had `{ gsap }` (wrong)
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProgressBar = () => {
  const progressBarRef = useRef(null);
  const progressFillRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(progressFillRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          const progress = self.progress.toFixed(2); // ✅ spelling fixed

          if (progress > 0.75) {
            gsap.to(progressFillRef.current, {
              backgroundColor: "#7E22CE",
              duration: 0,
            });
          } else if (progress > 0.5) {
            gsap.to(progressFillRef.current, {
              backgroundColor: "#A855F7",
              duration: 0,
            });
          } else if (progress > 0.1) {
            gsap.to(progressFillRef.current, {
              backgroundColor: "#B53389", // ✅ fixed wrong color code (#B553389 ❌)
              duration: 0,
            });
          } else {
            gsap.to(progressFillRef.current, {
              backgroundColor: "#C54BBC",
              duration: 0,
            });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === document.body) {
          trigger.kill();
        }
      });
    };
  }, []); // ✅ added missing dependency array

  return (
    <div
      ref={progressBarRef}
      className="fixed top-0 left-0 w-full h-[5px] bg-gray-800 z-50"
    >
      <div
        ref={progressFillRef}
        className="h-full w-0 bg-[#A1045a] transition-colors duration-300"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
