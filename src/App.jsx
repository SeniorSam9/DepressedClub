import { Header, LetterForm, Letters } from "./components/";
import LettersContextProvider from "./contexts/LettersConetxt";

export default function App() {
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
