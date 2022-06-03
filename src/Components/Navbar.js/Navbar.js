import React from "react";
import Home from "../Home/Home";
import "../StyleSheet/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/profiles">Profiles</a>
        <a href="/contact">Contact</a>
      </div>
      <Home></Home>
    </div>
  );
};

export default Navbar;
