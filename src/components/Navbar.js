import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../styles/navbar.css";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <h1>FOODWISE</h1>
      </Link>
      {!isLoggedIn && (
        <ul className="navbar-links">
          <li className="narbar-links__item">
            <Link to="/" className="narbar-links__text">
              Home
            </Link>
          </li>
          <li className="narbar-links__item">
            <Link to="/signup" className="narbar-links__text">
              Sign up
            </Link>
          </li>
          <li className="narbar-links__item">
            <Link to="/login" className="narbar-links__text">
              Login
            </Link>
          </li>
        </ul>
      )}
      {isLoggedIn && (
        <ul className="navbar-links">
          <li className="narbar-links__item">
            <Link to="/" className="narbar-links__text">
              Home
            </Link>
          </li>
          <li className="narbar-links__item">
            <Link to="/profile" className="narbar-links__text">
              Profile
            </Link>
          </li>
          <li className="narbar-links__item">
            <button onClick={() => logout()}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
