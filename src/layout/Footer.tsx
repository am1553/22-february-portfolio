import { ConnectOnLinkedInBtn } from "../components/buttons";

function Footer() {
  return (
    <footer className="bg-black py-32">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center gap-6 flex-col">
          <span className="text-xl lg:text-4xl opacity-70">
            Let's connect on LinkedIn :)
          </span>
          <ConnectOnLinkedInBtn />
        </div>

        <div className="opacity-70 flex flex-col gap-4 justify-center w-full items-center">
          <span>Email: am.career11@gmail.com</span>
          <span>Contact: +44 - 7446048446</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
