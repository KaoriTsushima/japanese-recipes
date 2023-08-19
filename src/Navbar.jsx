import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button
                  class="nav-link"
                  aria-current="page"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  onClick={() => navigate("getting-started")}
                >
                  Getting Started
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={() => navigate("recipes")}>
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
