import React from "react";
import style from "./navbar.css"

export default function Navbar() {
  return(
    <div className="navbar">
      <div className="container">
        <ul className="navbar-link">
          <li className="navbar-link-item"><a href="">Recommended Tours</a></li>
          <li className="navbar-link-item"><a href="">Private Tours</a></li>
          <li className="navbar-link-item"><a href="">Excursions</a></li>
          <li className="navbar-link-item"><a href="">Airport Transfer</a></li>
          <li className="navbar-link-item"><a href="">Rent House</a></li>
        </ul>
      </div>
    </div>
  )
}