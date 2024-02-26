import { useRef } from "react";
import { Section } from "../../layout";
import Intro from "./Intro";
import IconsContainer from "./IconsContainer";
import Overview from "./Overview";
function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Section id="home" title="home">
      <>
        <div className="w-full flex flex-col md:gap-48">
          <Intro />
          <div
            className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:place-items-start lg:place-content-start lg:gap-x-6"
            ref={contentRef}
            id="content"
          >
            <IconsContainer />
            <Overview />
          </div>
        </div>
      </>
    </Section>
  );
}

export default Home;
