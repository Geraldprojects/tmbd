import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
export const Header = () => {
  return (
    <div className="header">
      <input type="checkbox" id="res-menu" value="" />
      <label id="res-icons">
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </label>

      <div className="logo">Home</div>
      <ul className="menu-items">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="popular">Popular Films</Link>
        </li>
        <li>
          <Link to="about">About the developer</Link>
        </li>
      </ul>
    </div>
  );
};
