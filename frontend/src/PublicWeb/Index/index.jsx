import * as React from 'react';
import { Link } from "react-router-dom";
import './index.css';

const Index = () => (
    <div className="bg-container">
    <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="mb-5">Car GPS location registration system</p>
            <Link className="btn btn-info btn-xl js-scroll-trigger" to="/login">Log in!</Link>
          </div>
        </div>
      </div>
    </header>
    </div>
);

export default Index;