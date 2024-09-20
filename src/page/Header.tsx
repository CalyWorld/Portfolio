import profile from "../assets/profile.jpg";

export default function Header() {
  return (
    <div id="about-me">
      <div className="xs:hidden lg:flex justify-between items-center max-w-2xl">
        <div>
          <h1 className="text-4xl font-bold text-[#f8fafc]">Hi, I'm Cal 👋🏾</h1>
          <h2 className="text-xl font-medium mt-2 text-[#9ca3af]">
            Full Stack Developer with 2 years experience working on side
            projects
          </h2>
        </div>
        <div>
          <img
            src={profile}
            alt="profile-logo"
            className="w-64 h-48 rounded-full object-cover object-top"
          />
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center max-w-2xl">
        <div className="flex justify-end">
          <img
            src={profile}
            alt="profile-logo"
            className="w-64 h-64 rounded-full object-cover object-top"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#f8fafc] text-center">
            Hi, I'm Cal 👋🏾
          </h1>
          <h2 className="text-xl font-medium mt-2 text-[#9ca3af] text-center">
            Full Stack Developer with 2 years experience working on side
            projects
          </h2>
        </div>
      </div>
    </div>
  );
}
