import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar_body">
      <ul>
        <li>Captured Thinkings</li>
      </ul>
      <div className="rightside">
            <a href="#">Home</a>
            <a href="#">About Me</a>
        <div class="dropdown">
          <span class="dropbtn">Language</span>
          <div class="dropdown-content">
            <a href="#">Kannada</a>
            <a href="#">English</a>
          </div>
        </div>
      </div>
    </div>
  );
}
