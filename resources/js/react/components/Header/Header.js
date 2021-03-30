import React from 'react';
import './Header.css';


function Header(props) {
  console.log('laravelGlobals =', props);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href= {props.laravelGlobals.baseUrl}>
          {props.laravelGlobals.appName} 
                </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href= {props.laravelGlobals.baseUrl + '/dashboard'} >Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
