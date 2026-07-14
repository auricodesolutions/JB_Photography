import React from "react";
import { contactIntro, site, socialLinks } from "../../data/siteData.js";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappMessage = encodeURIComponent(site.whatsappMessage);

  return (
    <footer className="footer" data-animate>
      <div className="footerTop">
        <div className="footerBrandBlock">
          <a href="#home" className="footerLogo" aria-label="JB WEDDINGS home">
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

            <a href="#portfolio" className="footerSecondaryBtn">
              View Portfolio
            </a>
          </div>
        </div>

        <div className="footerColumns">
          <div className="footerColumn">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#films">Wedding Films</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
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
            <a href="#services">Wedding Photography</a>
            <a href="#services">Wedding Videography</a>
            <a href="#services">Pre-shoot Photography</a>
            <a href="#services">Engagement Shoots</a>
            <a href="#services">Event Coverage</a>
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
