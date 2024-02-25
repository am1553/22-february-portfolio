import { Section } from "../layout";
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
} from "../assets";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
function Intro() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 my-64">
      <h1 className="font-bold text-xxl md:text-[64px] lg:text-[96px] text-left">
        Web Developer
      </h1>
      <p className="opacity-50 text-left text-l md:text-xl lg:text-4xl lg:leading-[3.5rem] w-full md:leading-loosen">
        Passionate about devising solutions for intricate challenges and
        crafting visually captivating web applications for users.
      </p>
    </div>
  );
}

function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconsContainer = useRef<HTMLDivElement>(null);
  const frontendContainer = useRef<HTMLDivElement>(null);
  const backendContainer = useRef<HTMLDivElement>(null);
  const learningContainer = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (!contentRef.current) return;
      gsap.from(iconsContainer.current, {
        scrollTrigger: {
          trigger: iconsContainer.current,
          pin: true,
          start: "top top",
          end: "bottom bottom",
          endTrigger: contentRef.current,
          scrub: true,
          markers: true,
        },
      });

      gsap.from(frontendContainer.current, {
        zIndex: 10,
        scrollTrigger: {
          trigger: frontendContainer.current,
          start: "top center",
          end: "bottom bottom",
          pin: true,
          scrub: true,
          endTrigger: contentRef.current,
        },
      });

      gsap.to(frontendContainer.current, {
        zIndex: 0,
        scrollTrigger: {
          trigger: frontendContainer.current,
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.from(backendContainer.current, {
        zIndex: 20,
        scrollTrigger: {
          trigger: backendContainer.current,
          start: "top center",
          end: "bottom bottom",
          pin: true,
          scrub: true,
          endTrigger: contentRef.current,
        },
      });

      gsap.to(backendContainer.current, {
        zIndex: 0,
        scrollTrigger: {
          trigger: backendContainer.current,
          end: "bottom center",
        },
      });
      gsap.from(learningContainer.current, {
        zIndex: 20,
        scrollTrigger: {
          trigger: learningContainer.current,
          start: "top center",
          end: "bottom bottom",
          pin: true,
          scrub: true,
          endTrigger: contentRef.current,
        },
      });

      gsap.to(learningContainer.current, {
        zIndex: 0,
        scrollTrigger: {
          trigger: learningContainer.current,
          end: "bottom center",
        },
      });
    },

    { scope: contentRef, dependencies: [contentRef.current] }
  );

  return (
    <Section id="home" title="home">
      <>
        <div className="w-full flex flex-col gap-36 md:gap-48">
          <Intro />
          <div className="flex flex-col gap-32" ref={contentRef}>
            <div className="grid grid-rows-6 grid-cols-4" ref={iconsContainer}>
              <div className="col-start-1 row-start-1 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={HTMLIcon} alt="" className="rounded-full" />
              </div>

              <div className="col-start-1 row-start-3 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={ExpressIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-1 row-start-5 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={TypeScriptIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-2 row-start-2 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={JavaScriptIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-2 row-start-4 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={CPPIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-2 row-start-6 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={SCSSIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-3 row-start-1 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={NodeJSIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-3 row-start-3 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={CSSIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-3 row-start-5 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={JavaIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-4 row-start-2 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={PostgresSQLIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-4 row-start-4 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={MongoDBIcon} alt="" className="rounded-full" />
              </div>
              <div className="col-start-4 row-start-6 bg-white border w-12 h-12 rounded-full p-1 ">
                <img src={ReactIcon} alt="" className="rounded-full" />
              </div>
            </div>
            <div
              className="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 bg-white relative z-10 py-6"
              ref={frontendContainer}
            >
              <span className="text-special uppercase opacity-50">
                frontend
              </span>
              <div className="">
                <span className="text-2xl font-bold md:text-4xl lg:text-6xl ">
                  Transforming designs into
                  <span className="opacity-50"> pixel perfect</span> web
                  application.
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React.js</span>
              </div>
            </div>

            <div
              className="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 relative z-20 bg-white py-6 "
              ref={backendContainer}
            >
              <span className="text-special uppercase opacity-50">backend</span>
              <div className="">
                <span className="text-2xl font-bold md:text-4xl lg:text-6xl">
                  Building <span className="opacity-50"> RESTful APIs</span>{" "}
                  that communicate with relational or non-relational database.
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>PostgresSQL</span>
                <span>MongoDB</span>
              </div>
            </div>

            <div
              className="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 relative z-40 bg-white py-6"
              ref={learningContainer}
            >
              <span className="text-special uppercase opacity-50">
                learning
              </span>
              <div className="">
                <span className="text-2xl font-bold md:text-4xl lg:text-6xl relative z-30 bg-white">
                  Because it's <span className="opacity-50"> fun</span>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span>Java</span>
                <span>C++</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
      </>
    </Section>
  );
}

export default Home;
