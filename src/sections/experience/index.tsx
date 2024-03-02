import { Section } from "../../layout";

const EXPERIENCE: {
  name: string;
  role: string;
  from: string;
  to: string;
  aims: string[];
  techStack: string[];
}[] = [
  {
    name: "Northcott Global Solutions",
    role: "Frontend Developer",
    from: "January 2023",
    to: "February 2024",
    techStack: ["React.js", "TypeScript", "React Query", "TailwindCSS", "Jest"],
    aims: [
      "Developed and optimized an emergency service and logistics platform, achieving a 2-5 second faster loading time than the existing PHP platform by utilizing advanced React principles and in-depth JavaScript core fundamentals.",
      "Secured web access based on roles and authentication by implementing OAuth2 standards.",
      "Optimized geolocation storage, queries, mass sending of alerts by applying React fundamentals and using external libraries.",
      "Planned and discussed feature releases with the team and identified bugs by testing the user flow.",
      "Communicated ideas for improvements with the designer and manager which got implemented.",
      "Seamless integration of Google Maps API, where 45000 data points was being rendered, as well as creating dynamic drawings on map while keeping performance in check by following documentation on Google platform.",
    ],
  },
  {
    name: "Plume",
    role: "Frontend Developer",
    from: "May 2022",
    to: "November 2022",
    techStack: ["React.js", "React Query", "SCSS"],
    aims: [
      "Developed an e-learning and content management platform currently being used by over a million students.",
      "Restricted page access by implemenTng JWT authentication.",
      "Accessible across all device types by making it responsive using media queries in SCSS.",
      "Found solutions to challenges when creating custom PDF generated certificates upon course completion.",
      "Planned features and helped develop a higher-level data structure by communicating ideas with the team.",
    ],
  },
  {
    name: "Learn&Co",
    role: "Frontend Developer",
    from: "January 2022",
    to: "July 2022",
    techStack: ["React.js", "React Query", "SCSS"],
    aims: [
      "Built an e-learning languages platform localized to the user’s location.",
      "Accessible across all device types by making it responsive using media queries in SCSS.",
      "Planned features and helped develop a higher-level data structure by communicating ideas with the team.",
    ],
  },
];

function Experience() {
  return (
    <Section
      id="experience"
      title="experience"
      className="max-w-screen-2xl mx-auto py-32"
    >
      <div className="min-h-screen text-center flex flex-col gap-32 px-6">
        <span className="text-special lg:text-specialXL opacity-70 uppercase mx-auto ">
          Experience
        </span>
        <div className="flex flex-col gap-14 lg:grid lg:grid-cols-3">
          {EXPERIENCE.map((exp, i) => (
            <div className="text-left flex flex-col gap-4" key={i}>
              <div className="flex flex-col gap-2">
                <span className="text-xl">{exp.name}</span>
                <span className="text-l font-semibold">{exp.role}</span>
              </div>
              <div className="">
                <span>{exp.from}</span>
                <span>––</span>
                <span>{exp.to}</span>
              </div>
              <div className="opacity-70">
                <span>Tech: </span>
                {exp.techStack.map((stack, j) =>
                  i < 1 ? (
                    <span key={j}> {stack}</span>
                  ) : (
                    <span key={j}> &#x2022; {stack}</span>
                  )
                )}
              </div>
              <ul className="opacity-70 list-disc list-inside flex flex-col gap-4">
                {exp.aims.map((aim, j) => (
                  <li key={j}>{aim}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
