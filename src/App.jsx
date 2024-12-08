import { Header, LetterForm, Letters } from "./components/";
import LettersContextProvider from "./contexts/LettersConetxt";

export default function App() {
  return (
    <LettersContextProvider>
      <Header />
      <LetterForm />
      <Letters />
    </LettersContextProvider>
  );
}
