import React from "react";
import logo from "../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import ShareButton from "./ShareButton";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const url = window.location.href;
  return (
    <>
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <a className="navbar-brand heading">CRUD APP</a>
          <ShareButton url={url} />
          <header>
            <h5>{isDarkMode ? "Dark Mode" : "Light Mode"}</h5>
            <button className="dark-mode-button" onClick={toggleDarkMode}>
              <div className={`toggle ${isDarkMode ? "toggle-dark" : ""}`} />
            </button>
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
