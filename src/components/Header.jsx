import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

export default function Header() {
  return (
    <div
      id="header"
      className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#212631] shadow-md z-10"
    >
      <div id="icons" className="flex ml-4"></div>
      <div
        id="title"
        className="flex items-center justify-center flex-grow mr-12"
      >
        <GiBrain className="" size={24} />
        <h1 className="">DepressedClub</h1>
      </div>
    </div>
  );
}
