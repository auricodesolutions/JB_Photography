import React from "react";
import { site, socialLinks } from "../../data/siteData.js";
import "./Footer.css";

const socialIcons = {
  Facebook: "facebook",
  Instagram: "instagram",
  TikTok: "tiktok",
  YouTube: "youtube",
};

function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();
  const goTo = (event, page, sectionId) => {
    event.preventDefault();
    onNavigate(page, sectionId);
  };

  return (
    <footer className="footer" id="footer-contact" data-animate>
      <div className="footerTop">
        <div className="footerIdentity">
          <a
            className="footerWordmark"
            href="/#home"
            aria-label="JB WEDDINGS home"
            onClick={(event) => goTo(event, "home", "home")}
          >
            JB WEDDINGS
            <span>photography &amp; films</span>
          </a>

          <p className="footerTagline">Timeless wedding stories, photographed and filmed with honesty.</p>

          <address className="footerContactList">
            <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
              <i aria-hidden="true">&#9742;</i>
              <span>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`}>
              <i aria-hidden="true">&#9993;</i>
              <span>{site.email}</span>
            </a>

          </address>

          <div className="footerSocials" aria-label="Follow JB WEDDINGS">
            {socialLinks.map((social) => (
              <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.name} key={social.name}>
                {socialIcons[social.name] ? (
                  <img
                    src={`https://cdn.simpleicons.org/${socialIcons[social.name]}/ffffff`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                ) : (
                  <span>{social.name.slice(0, 2)}</span>
                )}
              </a>
            ))}
          </div>
        </div>

        <nav className="footerColumns" aria-label="Footer navigation">
          <div className="footerColumn">
            <h3>Explore</h3>
            <a href="/#home" onClick={(event) => goTo(event, "home", "home")}>Home</a>
            <a href="/about" onClick={(event) => goTo(event, "about")}>About Us</a>
            <a href="/portfolio" onClick={(event) => goTo(event, "portfolio")}>Portfolio</a>
            <a href="/#reviews" onClick={(event) => goTo(event, "home", "reviews")}>Reviews</a>
          </div>

          <div className="footerColumn">
            <h3>Services</h3>
            <a href="/portfolio" onClick={(event) => goTo(event, "portfolio")}>Wedding Photography</a>
            <a href="/wedding-films" onClick={(event) => goTo(event, "films")}>Wedding Films</a>
            <a href="/preshoots" onClick={(event) => goTo(event, "preshoots")}>Pre-shoots</a>
            <a href="/events" onClick={(event) => goTo(event, "events")}>Event Photography</a>
          </div>

          <div className="footerColumn">
            <h3>Useful Links</h3>
            <a href="/booking" onClick={(event) => goTo(event, "booking")}>Reserve Now</a>
            <a href="/#contact" onClick={(event) => goTo(event, "home", "contact")}>Contact</a>
            <a href="/#faq" onClick={(event) => goTo(event, "home", "faq")}>FAQ</a>
            <a href="/reviews" onClick={(event) => goTo(event, "reviews")}>Reviews</a>
          </div>
        </nav>
      </div>

      <div className="footerBottom">
        <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
        <div className="footerLegalLinks">

        </div>
        <p>
          Designed &amp; Developed by{" "}
          <a href="https://www.auricodesolutions.com" target="_blank" rel="noreferrer">Auricode Solutions</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
