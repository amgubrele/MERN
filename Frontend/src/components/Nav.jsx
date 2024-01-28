import React from "react";
import "../components/nav.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">logo</div>
        <ul>
          <li>
            <NavLink  to={"/"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/servce"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/regester "}>Regester</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
