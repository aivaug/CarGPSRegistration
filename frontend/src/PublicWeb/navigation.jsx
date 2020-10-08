import * as React from 'react';
import { Link } from "react-router-dom";
// import { NavLink } from "./Utils/Page/NavLink";

export const StaticNav = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top" id="mainNav">
    <div className="container">
      <Link className="navbar-brand js-scroll-trigger" to="/">Find your next travel</Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* <NavLink to="/about">About us</NavLink> */}
            <Link className="navbar-brand js-scroll-trigger" to="/login">Log in</Link>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/reviews">Our travelers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login">Log in</NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
);