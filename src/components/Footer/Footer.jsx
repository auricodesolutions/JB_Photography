import React from "react";
import { site } from "../../data/siteData.js";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="/assets/jb-logo-white.png" alt="JB Photography logo" />
        <strong>{site.fullName}</strong>
      </div>

      <nav aria-label="Footer navigation">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#films">Films</a>
        <a href="#contact">Contact</a>
      </nav>

      <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
