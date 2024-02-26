import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
function FrontendOverview() {
  const frontendContainer = useRef<HTMLDivElement>(null);
  const contentContainer = document.getElementById("content")!;
  const frontendIcons = document.querySelectorAll(".frontend_overview_icon");
  const windowWidth = window.innerWidth;

  useGSAP(
    () => {
      if (frontendIcons.length < 1) return;
      if (windowWidth > 1023) return;
      gsap.registerPlugin(ScrollTrigger);
      frontendIcons.forEach((icon) => {
        gsap.from(icon, {
          opacity: 0,
          scaleX: 0.5,
          scaleY: 0.5,
          scrollTrigger: {
            trigger: frontendContainer.current,
            start: "top bottom",
            end: "bottom bottom",
            endTrigger: frontendContainer.current,
            scrub: true,
          },
        });
      });
    },

    { scope: contentContainer, dependencies: [frontendIcons, contentContainer] }
  );

  return (
    <div
      className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12  lg:col-start-1 row-start-1"
      id="frontend-overview"
      ref={frontendContainer}
    >
      <span className="text-special uppercase opacity-50">frontend</span>
      <div className="text-2xl font-bold md:text-4xl lg:text-6xl">
        <span className="opacity-70">Transforming designs into</span>
        <span className="text-light-blue"> pixel perfect </span>
        <span className="opacity-70">web application</span>
      </div>
      <div className="grid grid-cols-3 gap-2 opacity-70">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>React.js</span>
      </div>
    </div>
  );
}

export default FrontendOverview;
