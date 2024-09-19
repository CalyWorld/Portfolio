import { FaHome, FaLinkedinIn, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-4 sticky bottom-0 bg-gray-800 p-4 shadow-md border border-gray-700 rounded-3xl bottom-2 ">
      <div className="text-[#9ca3af]">
        <FaHome size={25} />
      </div>
      <div className="text-[#9ca3af]">
        <FaLinkedinIn size={25} />
      </div>
      <div className="text-[#9ca3af]">
        <FaGithub size={25} />
      </div>
    </div>
  );
}
