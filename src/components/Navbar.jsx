import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-buttons">
      <div className="home">
        <Link to={"/"}>
          {" "}
          <img src="/white-home-icon.png" alt="TapApp-homepage" />
        </Link>
      </div>
      <Link to={"/brewery"} className="button">
        Breweries
      </Link>
      <Link to={"/beers"} className="button">
        Beers
      </Link>
    </div>
  );
}
