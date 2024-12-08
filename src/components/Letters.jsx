import { useContext } from "react";
import { LettersContext } from "../contexts/LettersConetxt";

export default function Letters() {
  const { letters } = useContext(LettersContext);

  return (
    <div id="letters">
      {letters.map((letter) => (
        <div key={letter.id}>
          <h1>{letter.message}</h1>
          <p>{letter.views}</p>
        </div>
      ))}
    </div>
  );
}
