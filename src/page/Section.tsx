export default function Section() {
  return (
    <div className="p-8 flex flex-col gap-16">
      {/* About Me */}
      <div className="about-me">
        <h2 className="text-2xl font-bold mb-4 text-[#f8fafc]">About Me</h2>
        <p className="text-base leading-relaxed text-[#9ca3af]">
          I'm a skilled web developer with experience in building dynamic and
          responsive applications. Passionate about coding, learning, and
          problem-solving, I have a solid foundation in both front-end and
          back-end development. I'm constantly exploring new technologies to
          create impactful projects.
        </p>
      </div>

      {/* Professional Experience */}
      <div className="professional-experience">
        <h2 className="text-2xl font-bold mb-4 text-[#f8fafc]">
          Professional Experience
        </h2>
        <div className="experience-item flex items-center gap-4 p-4 bg-[#111827] shadow-lg rounded-md">
          <img
            src="https://cdn.prod.website-files.com/632954a961fe6a195cb51903/632957958a18b28555656437_symph%20logo%402x.svg"
            alt="symph-logo"
            className="w-12 h-12"
          />
          <div className="flex w-full justify-between">
            <div>
              <p className="text-lg font-semibold text-[#9ca3af]">Symph</p>
              <p className="text-sm text-[#9ca3af]">Front-End Developer</p>
              <p className="text-xs text-[#9ca3af]">
                React, Typescript, Styled-components
              </p>
            </div>
            <p className="text-sm text-gray-500">April 2023 - July 2023</p>
          </div>
        </div>

        {/* Repeat for more experience */}
        <div className="experience-item flex items-center gap-4 p-4 shadow-lg bg-[#111827] rounded-md mt-4">
          <img
            src="https://lanexcorp.com/wp-content/uploads/2024/06/lanexcorp-logo.svg"
            alt="symph-logo"
            className="w-12 h-12"
          />
          <div className="flex w-full justify-between">
            <div>
              <p className="text-lg font-semibold text-[#9ca3af]">
                Lanex Corporation
              </p>
              <p className="text-sm text-[#9ca3af]">Front-End Developer</p>
              <p className="text-xs text-[#9ca3af]">Nuxt, Vue, APIs, dockers</p>
            </div>
            <p className="text-sm text-gray-500">Feb 2024 - June 2024</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="education">
        <h2 className="text-2xl font-bold mb-4 text-[#f8fafc]">Education</h2>
        <div className="education-item flex items-center gap-4 p-4 shadow-lg bg-[#111827] rounded-md">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/39/University_of_San_Carlos_logo.png"
            alt="school-logo"
            className="w-12 h-12"
          />
          <div className="flex w-full justify-between">
            <div>
              <p className="text-lg font-semibold text-[#9ca3af]">
                University of San Carlos
              </p>
              <p className="text-sm text-[#9ca3af]">
                Bachelor's in Computer Engineering
              </p>
            </div>
            <p className="text-sm text-gray-500">Graduated 2024</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="skills">
        <h2 className="text-2xl font-bold mb-4 text-[#f8fafc]">Skills</h2>
        <div className="flex gap-1.5 text-center justify-center">
          <div className="w-24 rounded-md p-2 shadow-md bg-[#9ca3af]">
            React
          </div>
          <div className="w-24 rounded-md p-2 shadow-md bg-[#9ca3af]">
            TypeScript
          </div>
          <div className="w-24 rounded-md p-2 shadow-md bg-[#9ca3af]">
            JavaScript
          </div>
          <div className="w-24 rounded-md p-2 shadow-md bg-[#9ca3af]">Node</div>
          <div className="w-24 rounded-md p-2 shadow-md bg-[#9ca3af]">
            Express
          </div>
          <div className="w-24 rounded-md p-2 shadow-md bg-[#9ca3af]">
            MongoDB
          </div>
          <div className="w-24 rounded-md p-2 shadow-md col-span-3 bg-[#9ca3af]">
            Tailwind
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="projects flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-[#f8fafc]">My Projects</h2>
        <p className="text-center mb-4 text-[#9ca3af]">
          Here are a few of my favorite projects that I have worked on:
        </p>
        <div className="project-container flex justify-center gap-4">
          <div className="bg-gray-200 rounded-md p-4 shadow-md">
            ChatGPT Clone
          </div>
          <div className="bg-gray-200 rounded-md p-4 shadow-md">Blog API</div>
          <div className="bg-gray-200 rounded-md p-4 shadow-md">
            Where's Waldo
          </div>
        </div>
      </div>
    </div>
  );
}
