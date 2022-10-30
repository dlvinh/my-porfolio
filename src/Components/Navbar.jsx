import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink
            to="Home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <i className="icon fa fa-home"></i>
            <p>Home</p>{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="AboutMe">
            <i className="icon fa fa-user-alt"></i>
            <p>About Me</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="Resume">
            <i className="icon fa fa-file-alt"></i>
            <p>Resume</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="Contact">
            <i className="icon fa fa-envelope"></i>
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
