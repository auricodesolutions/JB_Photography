import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { films } from "../../data/siteData.js";
import "./Films.css";

const getYouTubeId = (url) => {
  if (!url) return "";

  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
  ];

  const match = patterns.map((pattern) => url.match(pattern)).find(Boolean);
  return match?.[1] || "";
};

function Films() {
  const preparedFilms = useMemo(
    () =>
      films.map((film) => {
        const youtubeId = getYouTubeId(film.youtubeUrl);

        return {
          ...film,
          youtubeId,
          thumbnail: youtubeId
            ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
            : "",
        };
      }),
    []
  );

  const [activeFilm, setActiveFilm] = useState(null);
  const activeEmbed = activeFilm?.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${activeFilm.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&origin=${encodeURIComponent(window.location.origin)}`
    : "";

  useEffect(() => {
    if (!activeFilm) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => event.key === "Escape" && setActiveFilm(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeFilm]);

  return (
    <section className="films section" id="films" data-animate>
      <div className="filmsInner">
        <div className="filmsHeader">
          <div>
            <p className="eyebrow">Wedding Films</p>
            <h2>Cinematic previews</h2>
          </div>

          <a href="#contact" className="filmsHeaderBtn">
            Request video coverage
          </a>
        </div>

        <div className="filmGrid">
          {preparedFilms.map((film) => (
            <article className="filmCard" key={film.title}>
              <div className="filmThumb">
                {film.thumbnail ? (
                  <img
                    src={film.thumbnail}
                    alt={`${film.title} video preview`}
                  />
                ) : (
                  <div className="filmThumbEmpty">Add YouTube Link</div>
                )}

                <button
                  type="button"
                  aria-label={`Watch ${film.title} on YouTube`}
                  onClick={() => setActiveFilm(film)}
                >
                  <span>▶</span>
                </button>
              </div>

              <div className="filmCardContent">
                <p>{film.label}</p>
                <h3>{film.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeFilm && createPortal(
        <div className="filmModal" role="dialog" aria-modal="true" aria-label={`${activeFilm.title} video`} onClick={() => setActiveFilm(null)}>
          <div className="filmModalBox" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="filmModalClose" onClick={() => setActiveFilm(null)} aria-label="Close video">×</button>
            <div className="filmModalVideo">
              <iframe
                src={activeEmbed}
                title={`${activeFilm.title} YouTube video`}
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="filmModalInfo">
              <p>{activeFilm.label}</p>
              <h3>{activeFilm.title}</h3>
              <a className="filmWatchLink" href={activeFilm.youtubeUrl} target="_blank" rel="noreferrer">Watch on YouTube</a>
            </div>
          </div>
        </div>,
        document.body,
      )}

    </section>
  );
}

export default Films;
