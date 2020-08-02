import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link to="/">
              <span className="line">Florian Lebrun.</span>
            </Link>
          </div>
          <ul className="nav">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
