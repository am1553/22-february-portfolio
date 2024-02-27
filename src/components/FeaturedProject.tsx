import Screen from "./mocks/Screen";
import KanbanboardMobileImage from "../assets/kanban.png";
import KanbanDesktopImage from "../assets/kanban-desktop.png";
import { KeyboardArrowDown } from "@mui/icons-material";

function Content() {
  return (
    <div className="h-96 w-full flex flex-col gap-6 relative max-lg:justify-end items-start">
      <span className="text-special uppercase opacity-70 relative z-50">
        featured
      </span>

      <div className="flex flex-col gap-4 relative z-50">
        <span className="text-4xl font-semibold uppercase tracking-wider">
          Kanban Board
        </span>
        <p className="opacity-70 text-m lg:text-xl lg:w-1/2">
          A fullstack web application used to manage work visually, depicting
          stages of a process with cards, applicable at personal or
          organizational levels.
        </p>
      </div>
      <div className="rounded-md py-2 flex w-48 items-center justify-between uppercase">
        <span>Jump to Project</span>
        <KeyboardArrowDown />
      </div>
    </div>
  );
}

function FeaturedProject() {
  return (
    <div className="bg-gradient-to-tr from-light-blue via-purple to-red p-8 lg:rounded-lg shadow-lg mt-64 relative max-lg:py-32">
      <Content />
      {/**
       * MOBILE
       *
       * */}
      <div className="absolute bottom-10 right-32 z-10 max-lg:hidden h-[26rem] w-52">
        <Screen className=" -skew-x-2 skew-y-12 shadow-lg" isMobile={true}>
          <img src={KanbanboardMobileImage} alt="" className="bg-cover" />
        </Screen>
      </div>
      {/**
       * DESKTOP
       *
       * */}
      <div className="absolute -top-1/4 max-lg:left-1/4 lg:right-10 max-lg:w-[32rem] lg:h-[26rem] lg:w-[40rem]">
        <Screen
          className="lg:skew-x-2 lg:-skew-y-12 shadow-lg"
          isMobile={false}
        >
          <img src={KanbanDesktopImage} alt="" />
        </Screen>
      </div>
    </div>
  );
}

export default FeaturedProject;
