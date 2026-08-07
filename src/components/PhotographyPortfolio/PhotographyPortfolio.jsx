import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { portfolio } from "../../data/siteData.js";
import "./PhotographyPortfolio.css";

function PhotographyPortfolio({ onNavigate }) {
  const albums = portfolio.slice(0, 10);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!activeAlbum) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    const closeOnEscape = (event) =>
      event.key === "Escape" && setActiveAlbum(null);
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    });

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [activeAlbum]);

  return (
    <section
      className="photographyPortfolio"
      id="photography"
      aria-labelledby="albums-title"
      data-animate
    >
      <header className="portfolioPageHeader">
        <h1 id="albums-title">JB Wedding photography</h1>
        <p>
          Explore ten celebrations filled with honest emotion, elegant
          portraits, and the moments each couple will remember forever.
        </p>
        <nav className="portfolioJumpNav" aria-label="Portfolio sections">
          <a className="isActive" href="#photography">Photography albums</a>
          <a
            href="/wedding-films"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("films");
            }}
          >
            Wedding films
          </a>
        </nav>
      </header>

      <div className="albumGrid">
        {albums.map((album, index) => (
          <article
            className="albumCard"
            key={album.coupleName || album.title}
            style={{ "--album-index": index }}
          >
            <button
              className="albumCardButton"
              type="button"
              aria-label={`Open ${album.coupleName || album.title} wedding album`}
              onClick={() => setActiveAlbum(album)}
            >
              <span className="albumCardImages">
                <img
                  src={album.image}
                  alt={album.alt}
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </span>
              <span className="albumCardShade" />
              <span className="albumCardCopy">
                <small>{album.albumTag || album.tag}</small>
                <strong>{album.coupleName || album.title}</strong>
              </span>
              <span className="albumCardArrow" aria-hidden="true">›</span>
            </button>
          </article>
        ))}
      </div>

      {activeAlbum &&
        createPortal(
          <div
            className="albumModal"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeAlbum.coupleName || activeAlbum.title} wedding album`}
            data-lenis-prevent=""
            onClick={() => setActiveAlbum(null)}
          >
            <div
              className="albumModalInner"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                className="albumModalClose"
                type="button"
                aria-label="Close wedding album"
                onClick={() => setActiveAlbum(null)}
              >
                ×
              </button>
              <header>
                <p>{activeAlbum.albumTag || activeAlbum.tag}</p>
                <h2>{activeAlbum.coupleName || activeAlbum.title}</h2>
              </header>
              <div className="albumModalImages">
                {(activeAlbum.gallery || [activeAlbum.image]).map(
                  (image, index) => (
                    <figure
                      className="albumModalFigure"
                      key={`${activeAlbum.coupleName}-${image}`}
                      style={{ "--gallery-index": index }}
                    >
                      <img
                        src={image}
                        alt={`${activeAlbum.coupleName || activeAlbum.title} wedding album photograph ${index + 1}`}
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </figure>
                  ),
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

export default PhotographyPortfolio;
