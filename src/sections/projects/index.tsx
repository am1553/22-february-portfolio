import Screen from "../../components/mocks/Screen";
import KanbanTask1 from "../../assets/kanban-task-1.svg";
import KanbanMobileHeader from "../../assets/kanban-board/kanban-mobile-header.png";
import KanbanBoardColumns from "../../assets/kanban-board/kanban-board-columns.png";
import TaskOverview from "../../assets/kanban-board/task-overview.svg";
import { Section } from "../../layout";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

function Projects() {
  const windowWidth = window.innerWidth;
  const mobileRefContainer = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const task1Ref = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);
  const taskOverviewImageRef = useRef<HTMLImageElement>(null);
  const featuredProjectContainerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (windowWidth > 1023) return;
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(featuredProjectContainerRef.current, {
        scrollTrigger: {
          trigger: featuredProjectContainerRef.current,
          start: "center center",
          end: "bottom top",
          endTrigger: featuredProjectContainerRef.current,
          pin: true,
          scrub: true,
        },
      });
      gsap.from(overlayRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "center center",
          end: "center 40%",
          scrub: true,
        },
      });
      gsap.to(mobileRef.current, {
        scaleX: 1.5,
        scaleY: 1.5,
        scrollTrigger: {
          trigger: mobileRef.current,
          start: "center bottom",
          end: "top top",
          endTrigger: mobileRef.current,
          scrub: true,
        },
      });
      gsap.to(task1Ref.current, {
        scaleY: 1.1,
        scaleX: 1.1,
        scrollTrigger: {
          trigger: task1Ref.current,
          start: "center bottom",
          end: "bottom top",
          endTrigger: mobileRef.current,
          scrub: true,
        },
      });
      gsap.from(taskOverviewImageRef.current, {
        display: "hidden",
        opacity: 0,
        scaleY: 1,
        scaleX: 1,
        scrollTrigger: {
          trigger: taskOverviewImageRef.current,
          start: "top 20%",
          end: "bottom top",
          endTrigger: mobileRef.current,
        },
        reversed: true,
      });
    },

    {
      scope: mobileRef,
      dependencies: [mobileRef],
    }
  );

  return (
    <Section
      id="projects"
      title="projects"
      className="bg-white relative section_projects py-32 text-bg-dark-blue z-50 min-h-screen"
    >
      <div className="h-full w-full" ref={featuredProjectContainerRef}>
        <div className="h-96 w-52 mx-auto relative" ref={mobileRefContainer}>
          <Screen isMobile={true} className="" mobileRef={mobileRef}>
            <div className="bg-[#F4F7FD] relative">
              <img src={KanbanMobileHeader} alt="" />
              <img
                src={KanbanBoardColumns}
                alt=""
                className="w-full mt-2 ml-2"
              />
              <img
                src={KanbanTask1}
                alt=""
                className="absolute left-2 top-14 w-36 rounded-md z-50"
                ref={task1Ref}
              />
              <div
                className="bg-black opacity-30 absolute z-40 -left-4 -right-4 -top-4 -bottom-4 blur-lg"
                ref={overlayRef}
              ></div>
            </div>
          </Screen>
          <div
            ref={taskOverviewImageRef}
            className="absolute top-20 -left-10 overflow-hidden shadow-md rounded-2xl"
          >
            <img src={TaskOverview} alt="" className="h-full w-full " />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
