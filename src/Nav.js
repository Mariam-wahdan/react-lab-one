import React from "react";
import logo from "./logo.svg"; 

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block me-2 rounded-circle" />
          <span className="fs-4 fw-bold">My React App</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg-primary ms-3 rounded-pill px-4" href="#">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
