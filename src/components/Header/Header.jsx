import React, { useEffect, useState } from "react";
import { site } from "../../data/siteData.js";
import "./Header.css";

function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappMessage = encodeURIComponent(site.whatsappMessage);
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;

  useEffect(() => {
    let frameId = 0;

    const updateHeader = () => {
      setScrolled(window.scrollY > 40);
      frameId = 0;
    };

    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateHeader);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menuLocked", open);

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      document.body.classList.remove("menuLocked");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const goTo = (event, page, sectionId) => {
    event.preventDefault();
    onNavigate(page, sectionId);
    closeMenu();
  };

  return (
    <header className={`siteHeader ${scrolled ? "isScrolled" : ""} ${open ? "menuOpen" : ""}`}>
      <a
        href="/"
        className="brand"
        aria-label="JB WEDDINGS home"
        onClick={(event) => goTo(event, "home")}
      >
        <span>JBWEDDINGS</span>
      </a>

      <button
        className={`menuButton ${open ? "isOpen" : ""}`}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={open ? "isOpen" : ""}
        aria-label="Main navigation"
        data-lenis-prevent=""
      >
        <div className="mobileNavMeta" aria-hidden="true">
          <span>Navigation</span>
          <span>JB WEDDINGS</span>
        </div>
        <a href="/#home" onClick={(event) => goTo(event, "home", "home")}>Home</a>
        <a href="/about" onClick={(event) => goTo(event, "about")}>About</a>
        <a href="/portfolio" onClick={(event) => goTo(event, "portfolio")}>Portfolio</a>
        <a href="/wedding-films" onClick={(event) => goTo(event, "films")}>Films</a>
        <a href="/booking" onClick={(event) => goTo(event, "booking")}>Reserve Now</a>
        <a href="/#reviews" onClick={(event) => goTo(event, "home", "reviews")}>Reviews</a>
        <a
          href={whatsappUrl}
          className="quoteLink"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <span>Ask for Quote</span>
          <b aria-hidden="true">&#8599;</b>
        </a>
        <div className="mobileNavFooter" aria-hidden="true">
          <span>Stories made timeless</span>
          <span>Colombo, Sri Lanka</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
