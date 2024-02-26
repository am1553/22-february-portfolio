import { ConnectOnLinkedInBtn } from "../../components/buttons";

function Intro() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 mt-64 mb-32 lg:my-64">
      <h1 className="font-bold text-xxl md:text-[64px] lg:text-[96px] text-left">
        Web Developer
      </h1>
      <p className="opacity-50 text-left text-l md:text-xl lg:text-4xl lg:leading-[3.5rem] w-full md:leading-loosen">
        Passionate about devising solutions for intricate challenges and
        crafting visually captivating web applications for users.
      </p>
      <div className="">
        <ConnectOnLinkedInBtn />
      </div>
    </div>
  );
}

export default Intro;
