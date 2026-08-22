import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
    <div className="logo text-xl font-bold text-orange-700">Safa Khan</div>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }} className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-700"} hover:text-orange-700`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={{ textDecoration: "none", color: "black" }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={{ textDecoration: "none", color: "black" }}
          >
            Projects
          </NavLink>
        </li>
         <li>
          <NavLink
            to="/github"
            style={{ textDecoration: "none", color: "black" }}
          >
            GitHub
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
