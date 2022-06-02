import React from "react";
import '../StyleSheet/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/profiles">Profiles</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Navbar;
