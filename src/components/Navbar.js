import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ title }) {
  return (
    <header className="top-navbar">
      <div className="brand-section">
      <NavLink to="/" className="brand-link">
        <img 
          src="/taiji.png"
          alt="TaiScript Logo" 
          className="brand-logo"
        />
        </NavLink>
      </div>
{/*
      <nav className="nav-links">

        <NavLink
        to="/documentation"
        className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Documentation
        </NavLink>
        <NavLink to="/codeide" className={({ isActive }) => isActive ? "active-link" : ""}>
          CodeIDE
        </NavLink>
      </nav>
*/}

    </header>
  );
}

export default Navbar;
