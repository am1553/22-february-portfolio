import { Section } from "../layout";
function Home() {
  return (
    <Section id="home" title="home">
      <>
        <div className="w-full flex flex-col gap-36 md:gap-48">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <h1 className="font-bold text-xxl md:text-[64px] lg:text-[96px] text-left">
              Web Developer
            </h1>
            <p className="opacity-50 text-left text-l md:text-xl lg:text-4xl lg:leading-[3.5rem] w-full md:leading-loosen">
              Passionate about devising solutions for intricate challenges and
              crafting visually captivating web applications for users.
            </p>
          </div>

          <div className="">
            <div className="flex flex-col gap-6">
              <span className="text-special uppercase opacity-50">
                frontend
              </span>
              <div className="">
                <span className="text-xl font-bold md:text-2xl">
                  Transforming designs into
                  <span className="opacity-50"> pixel perfect</span> web
                  application.
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    </Section>
  );
}

export default Home;
