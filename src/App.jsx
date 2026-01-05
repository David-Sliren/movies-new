import { useState } from "react";

import viteLogo from "/vite.svg";

import "@fontsource-variable/inter";
import "@fontsource/bebas-neue";
import "@fontsource-variable/montserrat";

import Card from "./components/Card";
import Presentation from "./components/Sections/Presentation";
import Information from "./components/Sections/Information";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-zinc-800 flex flex-col gap-12 w-full h-dvh">
        <Presentation />
        <Information />
      </main>
    </>
  );
}

export default App;
