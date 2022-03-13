import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <div className="footer">
        <a
          href="https://github.com/foraminifer/Weather-app"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>
        <span> by Amber Rutter</span>
      </div>
    </div>
  );
}
