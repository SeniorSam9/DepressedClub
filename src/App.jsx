import { Header, LetterForm, Letters } from "./components/";
import LettersContextProvider from "./contexts/LettersConetxt";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function fetchUser() {
      // check if user got an account on app mount
      const user = localStorage.getItem("username");
      if (!user) {
        fetc;
      }
    }
    fetchUser();
  }, []);
  return (
    <div className="h-screen overflow-auto bg-[#212631] text-white">
      <LettersContextProvider>
        <Header />
        <LetterForm />
        <Letters />
      </LettersContextProvider>
    </div>
  );
}
