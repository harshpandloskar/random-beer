import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Navbar.scss';

export default function Navbar() {
    return (
        <div className="nav-buttons">
           <div className="home">
            <Link to={"/"}> <img src="/home.png" alt="homepage"/></Link>
           </div>
            <Link to={"/brewery"} className="button">Breweries</Link>
        </div>
    )
}