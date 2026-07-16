import React, { useEffect, useState } from "react";
import "./Header.css";

function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const closeMenu = () => setOpen(false);
  const goTo = (event, page, sectionId) => {
    event.preventDefault();
    onNavigate(page, sectionId);
    closeMenu();
  };

  return (
    <header className={`siteHeader ${scrolled ? "isScrolled" : ""}`}>
      <a
        href="/"
        className="brand"
        aria-label="JB WEDDINGS home"
        onClick={(event) => goTo(event, "home")}
      >
        <img src="/assets/jb-logo-white.png" alt="JB WEDDINGS logo" />
      </a>

      <button
        className={`menuButton ${open ? "isOpen" : ""}`}
        type="button"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={open ? "isOpen" : ""} aria-label="Main navigation">
        <a href="/#home" onClick={(event) => goTo(event, "home", "home")}>Home</a>
        <a href="/about" onClick={(event) => goTo(event, "about")}>About</a>
        <a href="/#portfolio" onClick={(event) => goTo(event, "home", "portfolio")}>Portfolio</a>
        <a href="/#films" onClick={(event) => goTo(event, "home", "films")}>Wedding Films</a>
        <a href="/#reviews" onClick={(event) => goTo(event, "home", "reviews")}>Reviews</a>
        <a href="/#contact" className="quoteLink" onClick={(event) => goTo(event, "home", "contact")}>Ask a Quote</a>
      </nav>
    </header>
  );
}

export default Header;
