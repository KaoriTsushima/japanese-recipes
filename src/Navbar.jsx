import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-brand">Kaori's Kitchen</button>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link"
                  aria-current="page"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => navigate("getting-started")}
                >
                  Getting Started
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => navigate("recipes")}
                >
                  Recipes
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
