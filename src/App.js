import "bootstrap/dist/css/bootstrap.css";
import logo from "./Orbit.png";
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
        <p className="header-text">
          <i class="fas fa-user-astronaut"></i> Coded by{" "}
          <a
            href="https://www.abby.codes"
            target="_blank"
            rel="noreferrer noopener"
            alt="Abigail's Yi Portfolio Site"
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
          <br />
          <i class="fas fa-space-shuttle"></i> Link to NASA's APOD page{" "}
          <a
            href="https://apod.nasa.gov/apod/astropix.html"
            target="_blank"
            rel="norefferer noopener"
            alt="NASA's Astronomy Photo of the Day webpage"
            className="App-link"
          >
            here
          </a>
        </p>
      </footer>
    </div>
  );
}
