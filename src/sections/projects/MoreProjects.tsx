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
  live: string;
  repo: string;
}[] = [
  {
    title: "Audiophile E-commerce",
    description:
      "A complete e-commerce CRUD web app made to be responsive across all devices. Advanced data handling and state management using Redux and Context. Used various JavaScript Methods to add and remove items from the cart.",
    mobileimg: AudiophileImageMobile,
    desktopImg: AudiophileImageLaptop,
    tech: ["TypeScript", "React.js", "Redux", "TailwindCSS"],
    live: "https://am1553.github.io/audiophile/",
    repo: "https://github.com/am1553/audiophile",
  },
  {
    title: "Invoice Web App",
    description:
      "A fully functional CRUD web app to keep a record of invoices integrated with Firebase.",
    mobileimg: InvoiceImageMobile,
    desktopImg: InvoiceImageLaptop,
    tech: ["React.js", "TailwindCSS", "Firebase"],
    live: "https://am1553.github.io/invoice-app/",
    repo: "https://github.com/am1553/invoice-app",
  },
  {
    title: "Entertainment Web App",
    description:
      "On this project, data was stored on a local JSON file and passed as props through reusable components and rendered using map function. There is filter functionality added to this, where shows can be rendered based on user search or category selected.",
    mobileimg: EntertainmentImageMobile,
    desktopImg: EntertainmentImageLaptop,
    tech: ["React.js", "SCSS"],
    live: "https://am1553.github.io/entertainment-web-app/",
    repo: "https://github.com/am1553/entertainment-web-app",
  },
  {
    title: "PhotoSnap Art Gallery",
    description:
      "This is a simple website that has multiple pages. Reusable components were used for this where data was passed as props from a local JSON file. This website is also responsive across all devices.",
    mobileimg: PhotosnapImageMobile,
    desktopImg: PhotosnapImageLaptop,
    tech: ["React.js", "GSAP", "SCSS"],
    live: "https://am1553.github.io/photosnap/",
    repo: "https://github.com/am1553/photosnap",
  },
];

function MoreProjects() {
  return (
    <Section
      id="more-projects"
      title="more projects"
      className="max-w-screen-2xl py-36"
    >
      <div className="px-6  text-center">
        <span className="text-special lg:text-specialXL opacity-70 uppercase mx-auto ">
          more projects
        </span>

        <div className="flex flex-col gap-32 lg:grid lg:grid-cols-2 text-left">
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
                <ul className="flex gap-4 flex-wrap text-sm lg:text-l opacity-70">
                  {project.tech.map((item, j) =>
                    j < 1 ? (
                      <li key={j}>{item}</li>
                    ) : (
                      <li key={j}>&#x2022; {item}</li>
                    )
                  )}
                </ul>

                <div className="flex w-full justify-start my-2 gap-6">
                  <a
                    className="border px-12 py-1 rounded-full text-center"
                    href={project.live}
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    className="border px-12 py-1 rounded-full text-center"
                    href={project.repo}
                    target="_blank"
                  >
                    Github
                  </a>
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
