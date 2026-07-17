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
        <img src="/assets/jb-logo-white.png" alt="JB WEDDINGS logo" />
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

      <nav id="main-navigation" className={open ? "isOpen" : ""} aria-label="Main navigation">
        <div className="mobileNavMeta" aria-hidden="true">
          <span>Navigation</span>
          <span>JB WEDDINGS</span>
        </div>
        <a href="/#home" onClick={(event) => goTo(event, "home", "home")}><span>01</span>Home</a>
        <a href="/about" onClick={(event) => goTo(event, "about")}><span>02</span>About</a>
        <a href="/#portfolio" onClick={(event) => goTo(event, "home", "portfolio")}><span>03</span>Portfolio</a>
        <a href="/#films" onClick={(event) => goTo(event, "home", "films")}><span>04</span>Wedding Films</a>
        <a href="/#reviews" onClick={(event) => goTo(event, "home", "reviews")}><span>05</span>Reviews</a>
        <a href="/#contact" className="quoteLink" onClick={(event) => goTo(event, "home", "contact")}><span>06</span>Ask a Quote</a>
        <div className="mobileNavFooter" aria-hidden="true">
          <span>Stories made timeless</span>
          <span>Colombo, Sri Lanka</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
