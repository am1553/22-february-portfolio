import { Section } from "../../layout";
import {
  AudiophileImageMobile,
  AudiophileImageLaptop,
  EntertainmentImageMobile,
  EntertainmentImageLaptop,
  InvoiceImageMobile,
  InvoiceImageLaptop,
  PhotosnapImageMobile,
  PhotosnapImageLaptop,
} from "../../assets";

const PROJECT_IMAGES: {
  title: string;
  description: string;
  mobileimg: string;
  desktopImg: string;
  tech: string[];
}[] = [
  {
    title: "Audiophile E-commerce",
    description:
      "A complete e-commerce CRUD web app made to be responsive across all devices. Advanced data handling and state management using Redux and Context. Used various JavaScript Methods to add and remove items from the cart.",
    mobileimg: AudiophileImageMobile,
    desktopImg: AudiophileImageLaptop,
    tech: ["TypeScript", "React.js", "Redux", "TailwindCSS"],
  },
  {
    title: "Invoice Web App",
    description:
      "A fully functional CRUD web app to keep a record of invoices integrated with Firebase.",
    mobileimg: InvoiceImageMobile,
    desktopImg: InvoiceImageLaptop,
    tech: ["React.js", "TailwindCSS", "Firebase"],
  },
  {
    title: "Entertainment Web App",
    description:
      "On this project, data was stored on a local JSON file and passed as props through reusable components and rendered using map function. There is filter functionality added to this, where shows can be rendered based on user search or category selected.",
    mobileimg: EntertainmentImageMobile,
    desktopImg: EntertainmentImageLaptop,
    tech: ["React.js", "SCSS"],
  },
  {
    title: "PhotoSnap Art Gallery",
    description:
      "This is a simple website that has multiple pages. Reusable components were used for this where data was passed as props from a local JSON file. This website is also responsive across all devices.",
    mobileimg: PhotosnapImageMobile,
    desktopImg: PhotosnapImageLaptop,
    tech: ["React.js", "GSAP", "SCSS"],
  },
];

function MoreProjects() {
  return (
    <Section
      id="more-projects"
      title="more projects"
      className="py-32 max-w-screen-2xl"
    >
      <div className="px-6">
        <span className="text-special lg:text-specialXL opacity-70 uppercase">
          more projects
        </span>

        <div className="flex flex-col gap-32 lg:grid lg:grid-cols-2">
          {PROJECT_IMAGES.map((project, i) => {
            return (
              <div className="w-full flex flex-col gap-6 h-full" key={i}>
                <div className="relative w-full ">
                  <img
                    src={project.mobileimg}
                    alt=""
                    className="absolute right-0 bottom-0  w-3/4"
                  />
                  <img src={project.desktopImg} alt="" />
                </div>

                <span className="text-xl font-semibold">{project.title}</span>
                <p className="text-l opacity-70 flex-1">
                  {project.description}
                </p>
                <ul className="flex gap-4 flex-wrap">
                  {project.tech.map((item, j) => (
                    <li key={j} className="border px-4 rounded-md py-1 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex w-full justify-start my-2 gap-6">
                  <button className="border px-6 py-1 rounded-full">
                    Live
                  </button>
                  <button className="border px-6 py-1 rounded-full">
                    Github
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default MoreProjects;
