import profile from "../assets/profile.jpg";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full p-8">
      <div>
        <h1 className="text-4xl font-bold text-[#f8fafc]">Hi, I'm Cal 👋🏾</h1>
        <h2 className="text-xl font-medium mt-2 text-[#9ca3af]">
          Full Stack Developer with 2 years experience working on side projects
        </h2>
      </div>
      <div className="flex justify-end">
        <img
          src={profile}
          alt="profile-logo"
          className="w-64 h-64 rounded-full object-cover object-top"
        />
      </div>
    </div>
  );
}
