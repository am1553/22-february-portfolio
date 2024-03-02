import Screen from "../../components/mocks/Screen";
import KanbanTask1 from "../../assets/kanban-task-1.svg";
import KanbanMobileHeader from "../../assets/kanban-board/kanban-mobile-header.png";
import KanbanBoardColumns from "../../assets/kanban-board/kanban-board-columns.png";
import KanbanDesktop from "../../assets/kanban-desktop.png";
import TaskOverview from "../../assets/kanban-board/task-overview.svg";
import KanbanTaskOverview from "../../assets/kanban-taskoverview.png";
import { Section } from "../../layout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import MoreProjects from "./MoreProjects";

function Projects() {
  const projectSection = document.getElementById("projects");
  const experienceSection = document.getElementById("experience");
  const windowWidth = window.innerWidth;
  const projectDescription = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const task1Ref = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);
  const taskOverviewImageRef = useRef<HTMLImageElement>(null);
  const featuredProjectContainerRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const desktopTaskOverviewRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (windowWidth < 1024 || !projectSection || !experienceSection) return;
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(projectSection, {
        scrollTrigger: {
          trigger: desktopRef.current,
          start: "center center",
          end: "top center",
          endTrigger: experienceSection,
          pin: true,
          scrub: true,
        },
      });
      gsap.from(desktopRef.current, {
        opacity: 0.9,
        scaleX: 0.5,
        scaleY: 0.5,
        scrollTrigger: {
          trigger: projectSection,
          start: "top bottom",
          end: "bottom top",
          endTrigger: experienceSection,
          scrub: true,
        },
      });
      gsap.from(desktopTaskOverviewRef.current, {
        display: "none",
        scrollTrigger: {
          trigger: desktopTaskOverviewRef.current,
          start: "top top",
          end: "bottom top",
          endTrigger: experienceSection,
          scrub: true,
        },
      });
    },
    {
      scope: projectSection || undefined,
      dependencies: [projectSection, experienceSection],
    }
  );

  useGSAP(
    () => {
      if (windowWidth > 1023 || !projectSection) return;
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(projectSection, {
        scrollTrigger: {
          trigger: mobileRef.current,
          start: "center center",
          end: "bottom bottom",
          endTrigger: projectDescription.current,
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
          end: "bottom 40%",
          endTrigger: mobileRef.current,
          scrub: true,
        },
      });
      gsap.to(projectDescription.current, {
        translateY: 0,
        scrollTrigger: {
          trigger: projectDescription.current,
          start: "top bottom",
          end: "top 60%",
          endTrigger: projectDescription.current,
          scrub: true,
        },
        delay: 1000,
      });
    },

    {
      scope: projectSection || undefined,
      dependencies: [projectSection],
    }
  );

  return (
    <>
      <Section
        id="projects"
        title="projects"
        className="bg-white relative section_projects text-bg-dark-blue z-50 w-screen"
      >
        <>
          <div
            className="h-full w-full px-6 flex flex-col gap-32 relative mx-auto pt-32 max-w-screen-2xl"
            ref={featuredProjectContainerRef}
          >
            <span className="uppercase tracking-wider text-center lg:row-start-1 text-2xl font-bold md:text-4xl lg:text-6xl lg:leading-normal opacity-70">
              Kanban Board
            </span>
            <div className="relative w-full">
              {/**
               * DESKTOP SCREEN
               */}
              <div
                className="max-lg:hidden max-w-screen-2xl w-full mx-auto h-[56rem]"
                ref={desktopRef}
              >
                <Screen isMobile={false} className="shadow-md ">
                  <>
                    <div className="bg-[#F4F7FD] relative h-full w-full">
                      <img
                        src={KanbanDesktop}
                        alt=""
                        className="w-full h-fit"
                      />
                    </div>
                    <div className="" ref={desktopTaskOverviewRef}>
                      <div className="absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-30"></div>
                      <img
                        src={KanbanTaskOverview}
                        alt=""
                        className="z-50 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 h-96 rounded-md"
                      />
                    </div>
                  </>
                </Screen>
              </div>

              {/**
               * MOBILE SCREEN
               */}
              <div className="h-96 w-52 lg:h-[36rem] lg:w-72 mx-auto relative lg:absolute lg:top-0 lg:right-0 lg:hidden">
                <Screen
                  isMobile={true}
                  className="shadow-md"
                  mobileRef={mobileRef}
                >
                  <>
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
                    <div
                      ref={taskOverviewImageRef}
                      className="absolute top-28 left-0 right-4 overflow-hidden shadow-md rounded-md z-50"
                    >
                      <img
                        src={TaskOverview}
                        alt=""
                        className="h-full w-full "
                      />
                    </div>
                  </>
                </Screen>
              </div>
            </div>
            <div className="p-36 lg:hidden"></div>
            <div
              className="flex flex-col gap-8 relative z-50 lg:grid lg:gap-y-24 lg:grid-cols-3 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-2 before:w-screen before:max-lg:rounded-t-full before:bg-gradient-to-r before:from-light-blue before:via-purple before:to-red bg-white py-12 text-bg-dark-blue"
              ref={projectDescription}
            >
              <div className="flex flex-col gap-4">
                <span className="font-regular text-xl">Description</span>
                <p className="opacity-70 text-l">
                  A fullstack web application used to manage work visually,
                  depicting stages of a process with cards, applicable at
                  personal or organizational levels.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className=" font-regular text-xl">Tech Stack</span>
                <span className="lg:hidden opacity-70 text-l">
                  React.js &#x2022; Express.js &#x2022; Node.js &#x2022;
                  TypeScript &#x2022; PostgresSQL
                </span>
                <ul className="max-lg:hidden opacity-70 text-l">
                  <li>React.js</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>PostgresSQL</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 ">
                <span className=" font-regular text-xl">Features</span>
                <ul className="flex-col flex opacity-70 gap-2 text-l">
                  <li>
                    CRUD functionality connected with PostgresSQL database.
                  </li>
                  <li>
                    Authorization and authentication done using browser cookies
                    and JWT.
                  </li>
                  <li>Responsive across all devices.</li>
                </ul>
              </div>

              <div className="flex gap-6 mx-auto w-full lg:col-span-3 max-w-96 text-l">
                <button className="w-full border py-1 rounded-full">
                  Live
                </button>
                <button className="w-full border py-1 rounded-full">
                  Github
                </button>
              </div>
            </div>
          </div>

          <MoreProjects />
        </>
      </Section>
    </>
  );
}

export default Projects;
