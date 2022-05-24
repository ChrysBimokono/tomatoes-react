import "./styles.css";

// 1 -> display the counter number w/ state
// 2 -> render the actual tomatoes 🍅
// 3 -> refactor to create a TomatoBox component
export default function App() {
  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <div className="tomato-box">
          <h1>0</h1>
        </div>
        <div className="buttons-container">
          <div className="button">-</div>
          <div className="button">+</div>
        </div>
      </div>
    </div>
  );
}
