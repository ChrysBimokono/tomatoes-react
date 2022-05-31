export default function TomatoBox({ counter }) {
  return (
    <div className="tomato-box">
      <h1>{counter ? counter : "No tomatoes yet"}</h1>
    </div>
  );
}
