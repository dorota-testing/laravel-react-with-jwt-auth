import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  //console.log('laravelGlobals =', props);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">{props.laravelGlobals.appName} </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" activeClassName="active">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
