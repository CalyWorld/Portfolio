import { FaHome, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="sticky bottom-1.5 grid grid-cols-3 gap-2 bg-[#111827] p-4 shadow-md rounded-3xl divide-x divide-[#9ca3af] pointer-auto-event">
      <a
        href="#about-me"
        target="_blank"
        className="text-[#9ca3af] flex justify-center items-center px-2"
      >
        <FaHome size={25} />
      </a>
      <a
        className="text-[#9ca3af] flex justify-center items-center"
        href="https://www.linkedin.com/in/callistus-anizoba-151547134/"
        target="_blank"
      >
        <FaLinkedinIn size={25} />
      </a>
      <a
        className="text-[#9ca3af] flex justify-center items-center"
        href="https://github.com/CalyWorld"
        target="_blink"
      >
        <FaGithub size={25} />
      </a>
    </div>
  );
}
