import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
function LearningOverview() {
  const learningContainer = useRef<HTMLDivElement>(null);

  const contentContainer = document.getElementById("content")!;
  const learningIcons = document.querySelectorAll(".learning_overview_icon");
  const windowWidth = window.innerWidth;

  useGSAP(
    () => {
      if (learningIcons.length < 1) return;
      if (windowWidth > 1023) return;
      gsap.registerPlugin(ScrollTrigger);
      learningIcons.forEach((icon) => {
        gsap.to(icon, {
          border: "2px solid #F64F59",
          scrollTrigger: {
            trigger: learningContainer.current,
            start: "top bottom",
            end: "bottom bottom",
            endTrigger: learningContainer.current,
            scrub: true,
          },
        });
      });
      learningIcons.forEach((icon) => {
        gsap.from(icon, {
          opacity: 0,
          scaleX: 0.5,
          scaleY: 0.5,
          scrollTrigger: {
            trigger: learningContainer.current,
            start: "top bottom",
            end: "bottom bottom",
            endTrigger: learningContainer.current,
            scrub: true,
          },
        });
      });
    },

    { scope: contentContainer, dependencies: [learningIcons, contentContainer] }
  );

  useGSAP(
    () => {
      if (windowWidth < 1024) return;
      gsap.registerPlugin(ScrollTrigger);
      learningIcons.forEach((icon) => {
        gsap.to(icon, {
          border: "4px solid #F64F59",
          scrollTrigger: {
            trigger: learningContainer.current,
            start: "top bottom",
            end: "bottom bottom",
            endTrigger: learningContainer.current,
            scrub: true,
          },
        });
      });
      learningIcons.forEach((icon) => {
        gsap.from(icon, {
          opacity: 0,
          scaleX: 0,
          scaleY: 0,
          scrollTrigger: {
            trigger: learningContainer.current,
            start: "top 75%",
            end: "bottom center",
            endTrigger: learningContainer.current,
            scrub: true,
          },
        });
      });
    },
    { scope: contentContainer, dependencies: [learningIcons, contentContainer] }
  );

  return (
    <div
      className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12  lg:col-start-1 row-start-3"
      ref={learningContainer}
    >
      <span className="text-special uppercase opacity-50 lg:text-specialXL">
        learning
      </span>
      <div className="text-2xl font-bold md:text-4xl lg:text-6xl lg:leading-normal">
        <span className="opacity-70">Because it's</span>
        <span className="text-red"> fun</span>
      </div>

      <div className="grid grid-cols-3 gap-2 opacity-70">
        <span>Java</span>
        <span>C++</span>
        <span>All of Above</span>
      </div>
    </div>
  );
}

export default LearningOverview;
