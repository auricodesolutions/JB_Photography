import React from "react";
import { contactIntro, site, socialLinks } from "../../data/siteData.js";
import "./Footer.css";

function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();
  const whatsappMessage = encodeURIComponent(site.whatsappMessage);

  return (
    <footer className="footer" id="footer-contact" data-animate>
      <div className="footerTop">
        <div className="footerBrandBlock">
          <a href="/#home" className="footerLogo" aria-label="JB WEDDINGS home" onClick={(event) => { event.preventDefault(); onNavigate("home", "home"); }}>
            <img src="/assets/jb-logo-white.png" alt="JB WEDDINGS logo" />
          </a>

          <p className="footerLabel">JB WEDDINGS</p>


          <p className="footerText">
            {contactIntro.text}
          </p>

          <div className="footerCtaGroup">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="footerPrimaryBtn"
            >
              Ask a Quote <span>↗</span>
            </a>

            <a href="/portfolio" className="footerSecondaryBtn" onClick={(event) => { event.preventDefault(); onNavigate("portfolio"); }}>
              View Portfolio
            </a>
          </div>
        </div>

        <div className="footerColumns">
          <div className="footerColumn">
            <h3>Explore</h3>
            <a href="/#home" onClick={(event) => { event.preventDefault(); onNavigate("home", "home"); }}>Home</a>
            <a href="/about" onClick={(event) => { event.preventDefault(); onNavigate("about"); }}>About</a>
            <a href="/portfolio" onClick={(event) => { event.preventDefault(); onNavigate("portfolio"); }}>Portfolio</a>
            <a href="/wedding-films" onClick={(event) => { event.preventDefault(); onNavigate("films"); }}>Wedding Films</a>
            <a href="/#reviews" onClick={(event) => { event.preventDefault(); onNavigate("home", "reviews"); }}>Reviews</a>
          </div>

          <div className="footerColumn">
            <h3>Follow Us</h3>
            {socialLinks.map((social) => (
              <a href={social.url} target="_blank" rel="noreferrer" key={social.name}>
                {social.name}
              </a>
            ))}
          </div>

          <div className="footerColumn">
            <h3>Services</h3>
            <a href="/portfolio" onClick={(event) => { event.preventDefault(); onNavigate("portfolio"); }}>Wedding Photography</a>
            <a href="/wedding-films" onClick={(event) => { event.preventDefault(); onNavigate("films"); }}>Wedding Videography</a>
            <a href="/preshoots" onClick={(event) => { event.preventDefault(); onNavigate("preshoots"); }}>Preshoots</a>
            <a href="/events" onClick={(event) => { event.preventDefault(); onNavigate("events"); }}>Event Photography</a>
          </div>

        </div>
      </div>


      <div className="footerBottom">
        <div className="footerLegal">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <div className="footerLegalLinks">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>

        <p>
          Designed & Developed by{" "}
          <a
            href="https://www.auricodesolutions.com"
            target="_blank"
            rel="noreferrer"
          >
            Auricode Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
