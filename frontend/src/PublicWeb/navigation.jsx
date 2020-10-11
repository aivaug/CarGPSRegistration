import * as React from 'react';
import { Link } from "react-router-dom";

export const StaticNav = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top" id="mainNav">
    <div className="container">
      <Link className="navbar-brand js-scroll-trigger" to="/">GPS registration</Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="navbar-brand js-scroll-trigger" to="/login">Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);