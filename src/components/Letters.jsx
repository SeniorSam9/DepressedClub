import { useContext } from "react";
import { LettersContext } from "../contexts/LettersConetxt";
import UserAvatar from "../assets/user.png";
export default function Letters() {
  const { letters } = useContext(LettersContext);

  return (
    <div
      id="letters-container"
      className="flex flex-col items-center gap-y-4 overflow-y-auto"
    >
      {letters.map((letter) => (
        <div
          id="letter-card"
          className="sm:w-[90%] shadow-md py-4 px-2 my-2 w-[90%] flex flex-col rounded-lg bg-[#323a49]"
        >
          <div className="flex gap-x-2 mb-2 items-center">
            <img src={UserAvatar} alt="user-avatar" className="w-8 h-8" />
            <h3>{letter.owner}</h3>
          </div>
          <hr className="mb-2 border-gray-400" />
          <div className="sm:w-[100%] flex flex-col" key={letter.id}>
            <h1>{letter.message}</h1>
            <p className="text-gray-500 ml-auto">views: {letter.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
