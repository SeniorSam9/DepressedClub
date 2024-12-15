import { Header, LetterForm, Letters } from "./components/";
import LettersContextProvider from "./contexts/LettersConetxt";

export default function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <LettersContextProvider>
        <Header />
        <LetterForm />
        <Letters />
      </LettersContextProvider>
    </div>
  );
}
