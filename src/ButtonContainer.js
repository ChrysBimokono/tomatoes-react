export default function ButtonContainer({ counter, setCounter }) {
  return (
    <div className="buttons-container">
      <div className="button" onClick={() => setCounter(counter.slice(0, -2))}>
        -
      </div>
      <div className="button" onClick={() => setCounter(counter + "🍅")}>
        +
      </div>
    </div>
  );
}
