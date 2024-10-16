import { FaGithub } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";

export default function Section() {
  const introduction = {
    message:
      "I'm a skilled web developer with experience in building dynamic and responsive applications. Passionate about coding, learning, and problem-solving, I have a solid foundation in both front-end and back-end development. I'm constantly exploring new technologies to create impactful projects.",
  };

  const experiences = [
    {
      company: "Symph",
      logo: "https://cdn.prod.website-files.com/632954a961fe6a195cb51903/632957958a18b28555656437_symph%20logo%402x.svg",
      role: "Front-End Developer Intern",
      technologies: "React, Typescript, Styled-components",
      duration: "April 2023 - July 2023",
    },
    {
      company: "Lanex Corporation",
      logo: "https://lanexcorp.com/wp-content/uploads/2024/06/lanexcorp-logo.svg",
      role: "Front-End Developer Intern",
      technologies: "Nuxt, Vue, APIs, dockers",
      duration: "Feb 2024 - June 2024",
    },
  ];

  const education = {
    school: "University of San Carlos",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/39/University_of_San_Carlos_logo.png",
    degree: "Bachelor's Computer Engineering",
    graduationYear: "August 2018 - June 2024",
  };

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node",
    "Express",
    "MongoDB",
    "Tailwind",
    "Python(Begineer)",
  ];

  const projects = [
    {
      name: "Hospital Management",
      description:
        "Hospital Management system managed by admin, has a dashboard view, doctors and table view, admin has full control but it comes with authentication, currently ongoing",
      skills: [
        "React",
        "Redux/toolKit",
        "Typescript",
        "MongoDB",
        "Express",
        "Node",
      ],
      icons: [
        {
          id: "github-hospital",
          element: (
            <a
              className="text-[#9ca3af]"
              href="https://github.com/CalyWorld/Hospital-management"
              target="_blank"
            >
              <FaGithub size={25} />
            </a>
          ),
        },
      ],
    },
    {
      name: "Blog API",
      description:
        "Inspired by Medium blog site as i love to write and read blogs so i decided to make mine",
      skills: ["React", "Typescript", "MongoDB", "Express", "Node"],
      icons: [
        {
          id: "github-blog",
          element: (
            <a
              className="text-[#9ca3af]"
              href="https://github.com/CalyWorld/Blog-API"
              target="_blank"
            >
              <FaGithub size={25} />
            </a>
          ),
        },
      ],
    },
    {
      name: "ChatGPT Clone",
      description:
        "leveraging chatGPT 3.5 LLM to make prompts, store chats, delete chats and integrating it with firebase authentication and cloudeStore",
      skills: ["React", "Typescript", "Firebase"],
      icons: [
        {
          id: "browser-gpt",
          element: (
            <a
              className="text-[#9ca3af]"
              href="https://chatgpt-clone-u74b4kgv7-calyworld.vercel.app/"
              target="_blank"
            >
              <BsBrowserChrome size={25} />
            </a>
          ),
        },
        {
          id: "github-gpt",
          element: (
            <a
              className="text-[#9ca3af]"
              href="https://github.com/CalyWorld/CHATGPT-CLONE-TS"
              target="_blank"
            >
              <FaGithub size={25} />
            </a>
          ),
        },
      ],
    },
    {
      name: "Where's Waldo",
      description:
        "leveraging the use of clientHeight and ClientWidth to get positions on an image so as to find characters, fastest time is saved and a ranking is provided to view fastest users to find waldo characters given",
      skills: ["React", "JavaScript", "Firebase"],
      icons: [
        {
          id: "browser-waldo",
          element: (
            <a
              className="text-[#9ca3af]"
              href="https://calyworld.github.io/Where-s-Waldo-A-Photo-Tagging-App-/#/Game"
              target="_blank"
            >
              <BsBrowserChrome size={25} />
            </a>
          ),
        },
        {
          id: "github-waldo",
          element: (
            <a
              className="text-[#9ca3af]"
              href="https://github.com/CalyWorld/Where-s-Waldo-A-Photo-Tagging-App-"
              target="_blank"
            >
              <FaGithub size={25} />
            </a>
          ),
        },
      ],
    },
  ];

  return (
    <>
      {/* Content */}
      <div className="flex flex-col gap-16 max-w-2xl">
        {/* About Me */}
        <div className="about-me max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-4 text-[#f8fafc] text-center lg:text-left">
            About Me
          </h2>
          <p className="text-[#9ca3af] text-center lg:text-left">
            {introduction.message}
          </p>
        </div>

        {/* Professional Experience */}
        <div className="professional-experience">
          <h2 className="text-2xl font-bold mb-4 text-[#f8fafc] text-center lg:text-left">
            Professional Experience
          </h2>
          {experiences.map(
            ({ company, logo, role, technologies, duration }) => (
              <div
                key={company}
                className="experience-item sm:flex flex-col lg:flex items-center lg:flex-row  p-2 gap-4 bg-[#111827] shadow-lg rounded-md mb-4"
              >
                <img
                  src={logo}
                  alt={`${company}-logo`}
                  className="w-12 h-12 mx-auto"
                />
                <div className="sm:flex flex-col text-center lg:flex-row items-center justify-between w-full">
                  <div className="sm:text-center lg:text-left">
                    <p className="text-lg font-semibold text-[#9ca3af]">
                      {company}
                    </p>
                    <p className="text-sm text-[#9ca3af]">{role}</p>
                    <p className="text-xs text-[#9ca3af]">{technologies}</p>
                  </div>
                  <p className="sm:text-center text-sm text-gray-500 sm:mt-2 lg:mt-0">
                    {duration}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        {/* Education */}
        <div className="education">
          <h2 className="text-2xl font-bold mb-4 text-[#f8fafc] text-center lg:text-left">
            Education
          </h2>
          <div
            key={education.school}
            className="experience-item sm:flex flex-col lg:flex items-center lg:flex-row  p-2 gap-4 bg-[#111827] shadow-lg rounded-md mb-4"
          >
            <img
              src={education.logo}
              alt={`${education}-logo`}
              className="w-12 h-12 mx-auto"
            />
            <div className="sm:flex flex-col text-center lg:flex-row items-center justify-between w-full">
              <div className="sm:text-center lg:text-left">
                <p className="text-lg font-semibold text-[#9ca3af]">
                  {education.school}
                </p>
                <p className="text-sm text-[#9ca3af]">{education.degree}</p>
              </div>
              <p className="sm:text-center text-sm text-gray-500 sm:mt-2 lg:mt-0">
                {education.graduationYear}
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills flex min-h-0 flex-col">
          <h2 className="text-2xl font-bold mb-4 text-[#f8fafc] text-center lg:text-left">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1.5 text-center justify-center">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex flex-wrap justify-center rounded-md gap-1 p-1 shadow-md bg-[#9ca3af]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="projects flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-[#f8fafc]">
            My Projects
          </h2>
          <p className="text-center mb-4 text-[#9ca3af]">
            Here are a few of my favorite{" "}
            <span className="text-2xl font-bold mb-4 text-[#f8fafc]">
              projects that I have worked on
            </span>
          </p>
          <div className="project-container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col justify-between bg-[#111827] rounded-md p-4 shadow-md"
              >
                <h2 className="text-xl font-bold mb-4 text-[#9ca3af] text-center">
                  {project.name}
                </h2>
                <p className="text-center mb-4 text-[#9ca3af]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-xs rounded-md p-1 shadow-md mb-4 items-center bg-[#9ca3af]"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 justify-center">
                  {project.icons.map(({ id, element }) => (
                    <span key={id}>{element}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
