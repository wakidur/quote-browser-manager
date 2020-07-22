import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link   className="nav-link" to="/">
              QOD
            </Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/quotes">
              Quotes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorite-quotes">
              Favorite Quotes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
