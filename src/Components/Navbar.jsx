import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, Variants } from "framer-motion";
export default function Navbar() {
  
  const [showNav, setShowNav] = useState(false);
  return (
    <motion.nav className= "nav-bar"
    // initial={{height:"70px",opacity:0.7}}
    animate={showNav ? "open" : "closed"}
    transition={
      {duration: 0.5}
    }
    variants={{
      open: {  x: 0 },
      closed: {height: "70px" , opacity:0.7},
    }}
     >
      <ul>
        <li className="nav-toogle"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <i class=" icon fa nav-item fa-bars"></i>
        </li>
        <li>
          <NavLink
            to="Home"
            className={({ isActive }) =>
              isActive ? "active nav-item" : "nav-item"
            }
          >
            <i className="icon fa fa-home"></i>
            <p>Home</p>{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="AboutMe" className="nav-item">
            <i className="icon fa fa-user-alt"></i>
            <p>About Me</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="Resume" className="nav-item">
            <i className="icon fa fa-file-alt"></i>
            <p>Resume</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="Contact" className="nav-item">
            <i className="icon fa fa-envelope"></i>
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>
    </motion.nav>
  );
}
