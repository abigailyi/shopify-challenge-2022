import "bootstrap/dist/css/bootstrap.css";
import logo from "./Orbit-icon-2.png";
import "./App.css";
import Gallery from "./Gallery";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-icon" alt="orbit icon" />
        <h3>Welcome to</h3>
        <h1>Spacestagram</h1>
        <p className="header-text mt-1">
          Brought to you by NASA's Astronomy Photo of the Day (APOD) API
        </p>
      </header>
      <Gallery />
      <footer>
        <i class="fas fa-user-astronaut"></i> Coded by{" "}
        <a
          href="https://eloquent-swartz-9918f7.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          alt="Abigail's Yi Portfolio"
          className="App-link"
        >
          Abigail Yi
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/abigailyi/shopify-challenge-2022"
          target="_blank"
          rel="noreferrer noopener"
          alt="Abigail Yi's GitHub"
          className="App-link"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
