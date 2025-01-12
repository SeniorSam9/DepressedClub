import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

export default function Header() {
  return (
    <div id="header" className="flex items-center justify-between">
      <div id="icons" className="flex ml-4">
        {/* <AiOutlineExclamationCircle className="mr-4" size={24} /> */}
        {/* <MdDarkMode size={24} /> */}
      </div>
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
