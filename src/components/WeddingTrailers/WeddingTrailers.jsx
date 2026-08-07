import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { weddingTrailers } from "../../data/siteData.js";
import "../Films/Films.css";
import "./WeddingTrailers.css";

const getYouTubeId = (url) => {
  const match = url?.match(/youtu\.be\/([^?&]+)/);
  return match?.[1] || "";
};

function WeddingTrailers({ onNavigate }) {
  const trailers = useMemo(
    () =>
      weddingTrailers.map((trailer) => {
        const youtubeId = getYouTubeId(trailer.youtubeUrl);
        return {
          ...trailer,
          youtubeId,
          thumbnail: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
        };
      }),
    [],
  );
  const [activeTrailer, setActiveTrailer] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!activeTrailer) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    const closeOnEscape = (event) =>
      event.key === "Escape" && setActiveTrailer(null);
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
  }, [activeTrailer]);

  const activeEmbed = activeTrailer?.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${activeTrailer.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
    : "";

  return (
    <section
      className="films trailerPage"
      id="wedding-trailers"
      aria-labelledby="trailers-title"
      data-animate
    >
      <header className="trailerPageHeader">
        <h1 id="trailers-title">JB Wedding Films</h1>
        <p>
          Watch ten real celebrations captured through movement, sound, and
          every feeling between the vows.
        </p>
        <nav className="portfolioJumpNav" aria-label="Portfolio sections">
          <a
            href="/portfolio"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("portfolio");
            }}
          >
            Photography albums
          </a>
          <a className="isActive" href="#wedding-trailers">Wedding films</a>
        </nav>
      </header>

      <div className="filmGallery trailerGallery">
        {trailers.map((trailer, index) => (
          <article
            className="filmCard"
            style={{ "--film-index": index }}
            key={trailer.youtubeUrl}
          >
            <button
              className="filmCardMedia"
              type="button"
              aria-label={`Play ${trailer.title}`}
              onClick={() => setActiveTrailer(trailer)}
            >
              <img
                src={trailer.thumbnail}
                alt={`${trailer.title} preview`}
                loading={index < 2 ? "eager" : "lazy"}
              />
              <span className="filmCardShade" />
              <span className="filmCardPlay">
                <b aria-hidden="true">▶</b>
                <span>Play trailer</span>
              </span>
              <span className="trailerNumber">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
            <div className="filmCardInfo">
              <p>JB WEDDINGS FILMS</p>
              <h3>{trailer.title}</h3>
            </div>
          </article>
        ))}
      </div>

      {activeTrailer &&
        createPortal(
          <div
            className="filmModal"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeTrailer.title} video`}
            data-lenis-prevent=""
            onClick={() => setActiveTrailer(null)}
          >
            <div
              className="filmModalBox"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="filmModalClose"
                aria-label="Close video"
                onClick={() => setActiveTrailer(null)}
              >
                ×
              </button>
              <div className="filmModalVideo">
                <iframe
                  src={activeEmbed}
                  title={`${activeTrailer.title} YouTube video`}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="filmModalInfo">
                <p>JB WEDDINGS FILMS</p>
                <h3>{activeTrailer.title}</h3>
                <a
                  className="filmWatchLink"
                  href={activeTrailer.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

export default WeddingTrailers;
