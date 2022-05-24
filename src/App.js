import "./styles.css";
import React, { useState } from "react";
// 1 -> display the counter number w/ state
// 2 -> render the actual tomatoes 🍅
// 3 -> refactor to create a TomatoBox component
export default function App() {
  const [counter, setCounter] = useState("");

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <div className="tomato-box">
          <h1>{counter ? counter : "No tomatoes yet"}</h1>
        </div>
        <div className="buttons-container">
          <div
            className="button"
            onClick={() => setCounter(counter.slice(0, -2))}
          >
            -
          </div>
          <div className="button" onClick={() => setCounter(counter + "🍅")}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}
