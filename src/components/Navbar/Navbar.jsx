import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <section className="nav_Flex">
        <div className="nav_Home">
          <a href="#" className="homeLink">Home</a>
        </div>
        <div className="nav_Promotions">
          {/* Dropdown Links - WWE */}
          <div className="dropdown">
            <a className="dropbtn">WWE</a>
            <div className="dropdown-content">
              <a href="#">History</a>
              <a href="#">Superstars</a>
              <a href="#">Championships</a>
            </div>
          </div>
          {/* Dropdown Links - WCW */}
          <div className="dropdown">
            <a className="dropbtn">WCW</a>
            <div className="dropdown-content">
              <a href="#">History</a>
              <a href="#">Superstars</a>
              <a href="#">Championships</a>
            </div>
          </div>
          {/* Dropdown Links - ECW */}
          <div className="dropdown">
            <a className="dropbtn">ECW</a>
            <div className="dropdown-content">
              <a href="#">History</a>
              <a href="#">Superstars</a>
              <a href="#">Championships</a>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
