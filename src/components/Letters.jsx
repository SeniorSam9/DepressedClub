import { useContext } from "react";
import { LettersContext } from "../contexts/LettersConetxt";

export default function Letters() {
  const { letters } = useContext(LettersContext);

  return (
    <div id="letters" className="flex flex-col gap-y-4 items-center">
      {letters.map((letter) => (
        <div className="sm:w-[90%]" key={letter.id}>
          <h1>{letter.message}</h1>
          <p>{letter.views}</p>
        </div>
      ))}
    </div>
  );
}
