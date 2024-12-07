import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LettersContext = createContext();

export default function LettersContextProvider({ children }) {
  const [letters, setLetters] = useState([]);

  const addLetter = (letter) => {
    setLetters([...letters, letter]);
  };

  const updateLetterViews = (id, views) => {
    setLetters(
      letters.map((letter) => {
        letter.id === id ? { ...letter, views } : letter;
      })
    );
  };

  return (
    <LettersContext.Provider value={{ letters, addLetter, updateLetterViews }}>
      {children}
    </LettersContext.Provider>
  );
}
