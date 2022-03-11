import "./App.css";
import { Route, Link, Routes, Router } from "react-router-dom";
import { useState } from "react";
import Home from "./Home/Home";
import About from "./About/About";
import LandingPage from "./LandingPage/LandingPage";
import BugsLibrary from "./BugsLibrary/BugsLibrary";
import FishLibrary from "./FishLibrary/FishLibrary";
import DivingLibrary from "./DivingLibrary/DivingLibrary";
import CaughtLibrary from "./CaughtLibrary/CaughtLibrary";
import Footer from "./Footer/Footer";
import ScrollTop from "./ScrollTop/ScrollTop";

function App() {
  const [caught, setCaught] = useState([]);
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <nav>
        <Link to="/project-2-react">
          <img
            className="logo"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8fe0719-55c2-4775-9ea5-fa68ad28d089/dd98bnh-cdaa0e7e-c5f1-45f9-99fb-5a22d3c2974b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZmUwNzE5LTU1YzItNDc3NS05ZWE1LWZhNjhhZDI4ZDA4OVwvZGQ5OGJuaC1jZGFhMGU3ZS1jNWYxLTQ1ZjktOTlmYi01YTIyZDNjMjk3NGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H5-GEp9jfOrDQHz79paU8SrDzpRUBT1_lw85MCM2Ra8"
            alt="logo"
          />
        </Link>
        <img
          className="menu-icon"
          onClick={toggleMenu}
          src="https://dodo.ac/np/images/thumb/4/4c/Celeste_NH_Character_Icon.png/120px-Celeste_NH_Character_Icon.png"
          alt="character"
        />
        <h3 className="menu-title">MENU</h3>
        <h1>
          <Link className="title" to="/home">
            Critterpedia
          </Link>
        </h1>
        <div className={menuOpen ? "nav-bar-closed" : "nav-bar-open"}>
          <h2>
            <Link
              onClick={toggleMenu}
              className="nav-links"
              to="/project-2-react"
            >
              Home
            </Link>
          </h2>
          <h2>
            <Link onClick={toggleMenu} className="nav-links" to="/home">
              Search
            </Link>
          </h2>
          <h2>
            <Link onClick={toggleMenu} className="nav-links" to="/about">
              About
            </Link>
          </h2>
          <h2>
            <Link
              onClick={toggleMenu}
              className="nav-links bug-link"
              to="/bugs"
            >
              Bugs
            </Link>
          </h2>
          <h2>
            <Link onClick={toggleMenu} className="nav-links" to="/fish">
              Fish
            </Link>
          </h2>
          <h2>
            <Link onClick={toggleMenu} className="nav-links" to="/diving">
              Diving
            </Link>
          </h2>
          <h2>
            <Link onClick={toggleMenu} className="nav-links" to="/caught">
              Caught
            </Link>
          </h2>
        </div>
      </nav>
      <div className="main">
          <ScrollTop>
            <Routes>
                <Route path="/project-2-react" element={<LandingPage />} />
                <Route
                  path="/home"
                  element={<Home caught={caught} setCaught={setCaught} />}
                />
                <Route path="/about" element={<About />} />
                <Route
                  path="/bugs"
                  element={<BugsLibrary caught={caught} setCaught={setCaught} />}
                />
                <Route
                  path="/fish"
                  element={<FishLibrary caught={caught} setCaught={setCaught} />}
                />
                <Route
                  path="/diving"
                  element={<DivingLibrary caught={caught} setCaught={setCaught} />}
                />
                <Route
                  path="/caught"
                  element={<CaughtLibrary caught={caught} setCaught={setCaught} />}
                />
              </Routes>
          </ScrollTop>
      </div>
      <Footer />
    </div>
  );
}

export default App;
