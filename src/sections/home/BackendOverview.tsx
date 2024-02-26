import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
function BackendOverview() {
  const backendContainer = useRef<HTMLDivElement>(null);

  const contentContainer = document.getElementById("content")!;
  const backendIcons = document.querySelectorAll(".backend_overview_icon");
  const windowWidth = window.innerWidth;

  useGSAP(
    () => {
      if (backendIcons.length < 1) return;
      if (windowWidth > 1023) return;
      gsap.registerPlugin(ScrollTrigger);
      backendIcons.forEach((icon) => {
        gsap.from(icon, {
          opacity: 0,
          scaleX: 0.5,
          scaleY: 0.5,
          scrollTrigger: {
            trigger: backendContainer.current,
            start: "top bottom",
            end: "bottom bottom",
            endTrigger: backendContainer.current,
            scrub: true,
          },
        });
      });
    },

    { scope: contentContainer, dependencies: [backendIcons, contentContainer] }
  );

  return (
    <div
      className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12  lg:col-start-1 row-start-2"
      id="backend-overview"
      ref={backendContainer}
    >
      <span className="text-special uppercase opacity-50">backend</span>
      <div className="">
        <span className="text-2xl font-bold md:text-4xl lg:text-6xl">
          Building <span className="opacity-50"> RESTful APIs</span> that
          communicate with relational or non-relational database.
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <span>Node.js</span>
        <span>Express.js</span>
        <span>PostgresSQL</span>
        <span>MongoDB</span>
      </div>
    </div>
  );
}

export default BackendOverview;
