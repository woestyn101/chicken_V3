import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/navBar.css";
import Auth from "../utils/auth";

import { useState } from "react";
import auth from "../utils/auth";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(auth.loggedIn());

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    setLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
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
          <ul className="navbar-nav ms-auto">
            {loggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
            {loggedIn ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-lg btn-light m-2"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </React.Fragment>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/chicken">
                Chicken
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
