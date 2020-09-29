import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import RandomBeer from "./RandomBeer";
// import AnotherRandomBeer from "./AnotherRandomBeer";
import { array } from "prop-types";

export default function Home() {
  return (
    <div className="homepage">
      <h1>The Random Beer App!</h1>
      <h2>Click the Beer Glass to see results</h2>

      {/* <Link to={"/RandomBeer"}> <img src="https://res.cloudinary.com/harsh-pandloskar/image/upload/v1601261254/beer.gif" alt="beer"/> </Link> */}
      <Link to={`/RandomBeer/`}>
        {" "}
        <img
          src="https://res.cloudinary.com/harsh-pandloskar/image/upload/v1601261254/beer.gif"
          alt="beer"
        />{" "}
      </Link>
    </div>
  );
}
