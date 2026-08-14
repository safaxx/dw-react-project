import { useState } from "react";
import "./App.css";
import { MoodBoard } from "../MoodBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <MoodBoard />
    </>
  );
}

export default App;
