import { useContext, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { LettersContext } from "../contexts/LettersConetxt";
import { v4 as uuidv4 } from "uuid";

export default function LetterForm() {
  const userLetterRef = useRef(null);
  const { addLetter } = useContext(LettersContext);

  const handleLetterSubmit = (evt) => {
    evt.preventDefault();
    addLetter({
      id: uuidv4(),
      owner: "me",
      message: userLetterRef.current.value,
      views: 500,
    });
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
        className="min-h-[100px] mt-4 sm:w-[75%] p-2 outline-none border rounded-lg transition duration-300 ease-in-out focus:border-indigo-400"
        required
      />
      <div className="sm:w-[75%] flex justify-end">
        <button
          type="submit"
          className="border flex items-center bg-indigo-500 text-white rounded-lg px-6 py-2 mt-4 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 ease-in-out shadow-lg"
        >
          Post
          <IoIosSend className="ml-2" />
        </button>
      </div>
      <hr className="sm:w-[90%] mt-8 border-black" />
    </form>
  );
}
