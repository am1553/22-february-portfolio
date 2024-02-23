import { useRef } from "react";
import { Section } from "../layout";
import { ChevronRight } from "@mui/icons-material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
function Home() {
  const titleContainer1 = useRef<HTMLDivElement>(null);
  const titleContainer2 = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      /**
       * SECTION
       */

      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          scrub: true,
          pin: true,
        },
      });
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          end: "bottom bottom",
          scrub: true,
          pin: false,
        },
      });
    },
    { scope: sectionRef }
  );
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      /**
       * TITLE 1
       */

      gsap.from(titleContainer1.current, {
        scrollTrigger: {
          trigger: titleContainer1.current,
          start: "top 30%",
          end: "bottom 50%",
          scrub: true,
          pin: true,
        },
      });
      gsap.from(titleContainer1.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: titleContainer1.current,
          start: "top 30%",
          scrub: true,
        },
      });
      gsap.to(titleContainer1.current, {
        opacity: 0,
        display: "none",
        scrollTrigger: {
          trigger: titleContainer1.current,
          start: "top 30%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    },
    { scope: titleContainer1 }
  );
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      /**
       * TITLE 2
       */

      gsap.from(titleContainer2.current, {
        display: "none",
        opacity: 0,
        scrollTrigger: {
          trigger: titleContainer2.current,
          start: "top 10%",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(titleContainer2.current, {
        display: "auto",
        opacity: 0.9,
        scrollTrigger: {
          trigger: titleContainer2.current,
          start: "bottom top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: titleContainer2 }
  );

  return (
    <Section id="home" title="home">
      <div className="h-full w-full">
        <div
          className="flex flex-col gap-10 items-center text-center justify-center py-80 h-fit relative"
          ref={sectionRef}
        >
          <div
            className="flex flex-col gap-2 h-fit"
            id="title"
            ref={titleContainer1}
          >
            <h1 className="text-4xl font-black leading-loose tracking-wide">
              Web Developer
            </h1>
            <p className="leading-loose opacity-50 tracking-wide">
              Passionate about devising solutions for intricate challenges and
              crafting visually captivating web applications for users.
            </p>
          </div>

          <div className="flex flex-col gap-2 h-fit" ref={titleContainer2}>
            <h1 className="text-4xl font-black leading-loose tracking-wide">
              3 Years of Frontend Experience
            </h1>
          </div>

          <button className="border fixed bottom-40 px-6 py-2 rounded-md flex items-center gap-4">
            <span>Connect on LinkedIn</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Home;
