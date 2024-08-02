import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Wrestler Stat Page</h1>
      <section className="nav_Flex">
        <div className="nav_Home">
          <p>Home</p>
        </div>
        <div className="nav_Promotions">
          <p>WWE</p>
          <p>WCW</p>
          <p>ECW</p>
        </div>
      </section>
    </nav>
  );
}
