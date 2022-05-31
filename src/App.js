import "./styles.css";
import React, { useState } from "react";
import TomatoBox from "./TomatoBox";
import ButtonContainer from "./ButtonContainer";
// 1 -> display the counter number w/ state
// 2 -> render the actual tomatoes 🍅
// 3 -> refactor to create a TomatoBox component

export default function App() {
  const [counter, setCounter] = useState("");

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <TomatoBox counter={counter} />
        <ButtonContainer counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}
