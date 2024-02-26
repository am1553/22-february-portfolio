import { useRef } from "react";
import {
  ExpressIcon,
  HTMLIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  CPPIcon,
  SCSSIcon,
  NodeJSIcon,
  CSSIcon,
  JavaIcon,
  PostgresSQLIcon,
  MongoDBIcon,
  ReactIcon,
} from "../../assets";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function IconsContainer() {
  const iconsContainer = useRef<HTMLDivElement>(null);
  const contentContainer = document.getElementById("content")!;
  const htmlIconRef = useRef<HTMLImageElement>(null);
  const cssIconRef = useRef<HTMLImageElement>(null);

  const windowWidth = window.innerWidth;
  useGSAP(
    () => {
      if (windowWidth > 1023) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(iconsContainer.current, {
        scrollTrigger: {
          trigger: iconsContainer.current,
          start: "top top",
          end: "bottom center",
          pin: true,
          endTrigger: contentContainer,
        },
      });
    },

    { scope: contentContainer, dependencies: [contentContainer] }
  );
  useGSAP(
    () => {
      if (windowWidth < 1024) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(iconsContainer.current, {
        scrollTrigger: {
          trigger: iconsContainer.current,
          start: "center center",
          end: "bottom center",
          pin: true,
          endTrigger: contentContainer,
        },
      });
    },
    { scope: contentContainer, dependencies: [contentContainer] }
  );
  return (
    <div
      className="grid grid-rows-6 grid-cols-4 lg:grid-cols-3 lg:grid-rows-8 w-full lg:col-start-2 lg:row-span-3 z-10 py-10 bg-bg-dark-blue mx-auto place-items-center"
      ref={iconsContainer}
    >
      <div className="col-start-1 row-start-1 bg-transparent border w-12 h-12 rounded-full p-1 frontend_overview_icon">
        <img
          src={HTMLIcon}
          alt=""
          className="rounded-full "
          ref={htmlIconRef}
        />
      </div>

      <div className="col-start-1 row-start-3 bg-transparent border w-12 h-12 rounded-full p-1 backend_overview_icon">
        <img src={ExpressIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-1 row-start-5 bg-transparent border w-12 h-12 rounded-full p-1 frontend_overview_icon">
        <img src={TypeScriptIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-2 row-start-2 bg-transparent border w-12 h-12 rounded-full p-1 frontend_overview_icon">
        <img src={JavaScriptIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-2 row-start-4 bg-transparent border w-12 h-12 rounded-full p-1 learning_overview_icon">
        <img src={CPPIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-2 row-start-6 bg-transparent border w-12 h-12 rounded-full p-1 frontend_overview_icon">
        <img src={SCSSIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-3 row-start-1 bg-transparent border w-12 h-12 rounded-full p-1 backend_overview_icon">
        <img src={NodeJSIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-3 row-start-3 bg-transparent border w-12 h-12 rounded-full p-1 frontend_overview_icon">
        <img src={CSSIcon} alt="" className="rounded-full " ref={cssIconRef} />
      </div>
      <div className="col-start-3 row-start-5 bg-transparent border w-12 h-12 rounded-full p-1 learning_overview_icon">
        <img src={JavaIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-4 row-start-2 lg:col-start-1 lg:row-start-7 bg-transparent border w-12 h-12 rounded-full p-1 backend_overview_icon">
        <img src={PostgresSQLIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-4 row-start-4 lg:col-start-2 lg:row-start-8 bg-transparent border w-12 h-12 rounded-full p-1 backend_overview_icon">
        <img src={MongoDBIcon} alt="" className="rounded-full " />
      </div>
      <div className="col-start-4 row-start-6 lg:col-start-3 lg:row-start-7 bg-transparent border w-12 h-12 rounded-full p-1 flex items-center justify-center frontend_overview_icon">
        <img src={ReactIcon} alt="" className="rounded-full  w-[95%] h-[95%]" />
      </div>
    </div>
  );
}

export default IconsContainer;
