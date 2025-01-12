import { useContext, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { LettersContext } from "../contexts/LettersConetxt";
import { v4 as uuidv4 } from "uuid";

export default function LetterForm() {
  const userLetterRef = useRef(null);
  const { addLetter } = useContext(LettersContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const generateUniqueAccount = () => {
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    const uniqueId = uuidv4();
    return `Anonymous#${randomNumbers}-${uniqueId}`;
  };

  const handleLetterSubmit = async (evt) => {
    evt.preventDefault();
    // start processing
    setIsLoading(true);
    // add letter to state
    addLetter({
      id: uuidv4(),
      owner: generateUniqueAccount(),
      message: userLetterRef.current.value,
      views: 0,
    });
    try {
      // add letter to DB backend
      const response = await fetch("http://localhost:3000/letter/add-letter", {
        method: "POST",
        body: JSON.stringify({
          id: uuidv4(),
          owner: generateUniqueAccount(),
          message: userLetterRef.current.value,
          views: 0,
        }),
        "Content-Type": "application/json",
        mode: "cors",
      });
      const data = await response.json();
    } catch (error) {
      console.log(`Error adding user's letter: ${error}`);
    } finally {
      userLetterRef.current.value = "";
    }
  };

  return (
    <form
      className="flex flex-col items-center mt-4"
      onSubmit={handleLetterSubmit}
    >
      <h1>This is your space to share anything on your mind.</h1>
      <textarea
        ref={userLetterRef}
        placeholder="Thoughts, worries, or feelings..."
        className="focus:border-1 shadow-md bg-[#323a49] text-white min-h-[100px] mt-4 w-3/4 sm:w-9/10 p-2 outline-none rounded-lg transition duration-300 ease-in-out
       placeholder: placeholder-sm:text-sm placeholder-md:text-base placeholder-lg:text-lg placeholder-xl:text-xl"
        required
      />
      <div className="sm:w-[75%] flex justify-end">
        <button
          type="submit"
          className="shadow-md flex items-center bg-indigo-800 text-white rounded-lg px-6 py-2 mt-4 hover:bg-indigo-900 focus:outline-none focus:ring-2 transition duration-300 ease-in-out"
        >
          Post
          <IoIosSend className="ml-2" />
        </button>
      </div>
      <hr className="sm:w-[90%] w-[90%] mt-8 border-gray-400" />
    </form>
  );
}
