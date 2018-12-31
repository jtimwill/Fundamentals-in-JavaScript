import React from 'react';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="logo.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
          Fundamentals
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
