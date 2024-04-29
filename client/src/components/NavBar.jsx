import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/navBar.css';
import Auth from '../utils/auth'

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> 
          <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </li>

             {/* {Auth.loggedIn() ? (
              <>
              <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </li>
              </>

             ) : (
                <>
                <li className="nav-item">
              <Link className="nav-link" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
                
                </>

             )} */}
            
            
            
            
            <li className="nav-item">
              <Link className="nav-link" to="/chicken">Chicken</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;