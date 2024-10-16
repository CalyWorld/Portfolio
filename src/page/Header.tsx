import profile from "../assets/profile.jpg";

export default function Header() {
  const introduction = {
    title: "Hi, I'm Cal 👋🏾",
    message:
      "Full Stack Developer with 2 years experience working on side projects",
  };

  return (
    <div id="about-me">
      <div className="xs:hidden lg:flex justify-between items-center max-w-2xl">
        <div>
          <h1 className="text-4xl font-bold text-[#f8fafc]">
            {introduction.title}
          </h1>
          <h2 className="text-xl font-medium mt-2 text-[#9ca3af]">
            {introduction.message}
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
            {introduction.title}
          </h1>
          <h2 className="text-xl font-medium mt-2 text-[#9ca3af] text-center">
            {introduction.message}
          </h2>
        </div>
      </div>
    </div>
  );
}
