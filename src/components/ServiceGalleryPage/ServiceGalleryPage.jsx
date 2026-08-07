import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ServiceGalleryPage.css";

function ServiceGalleryPage({ gallery, onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex === null ? null : gallery.images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % gallery.images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex(
          (index) => (index - 1 + gallery.images.length) % gallery.images.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, gallery.images.length]);

  const moveImage = (direction) => {
    setActiveIndex(
      (index) =>
        (index + direction + gallery.images.length) % gallery.images.length,
    );
  };

  return (
    <section className="serviceGalleryPage" data-animate>
      <header className="serviceGalleryHero">
        <img src={gallery.images[0]} alt="" aria-hidden="true" />
        <span className="serviceGalleryHeroShade" />
        <div className="serviceGalleryHeroCopy">
          <h1>{gallery.title}</h1>
          <span>{gallery.intro}</span>
          <a
            href="/booking"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("booking");
            }}
          >
            Reserve your date <b aria-hidden="true">→</b>
          </a>
        </div>
      </header>

      <div className="serviceGalleryIntro">
        <span>Explore the collection</span>
      </div>

      <div className="serviceGalleryGrid">
        {gallery.images.map((image, index) => (
          <button
            className="serviceGalleryItem"
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${gallery.title} image ${index + 1}`}
            style={{ "--gallery-delay": `${index * 70}ms` }}
            key={image}
          >
            <img
              src={image}
              alt={`${gallery.title} by JB WEDDINGS`}
              loading={index < 4 ? "eager" : "lazy"}
            />
            <span aria-hidden="true">View</span>
          </button>
        ))}
      </div>

      {activeImage &&
        createPortal(
          <div
            className="serviceGalleryLightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${gallery.title} image viewer`}
            onClick={() => setActiveIndex(null)}
            data-lenis-prevent=""
          >
            <button
              className="serviceGalleryClose"
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image viewer"
            >
              ×
            </button>
            <button
              className="serviceGalleryArrow serviceGalleryArrow--prev"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                moveImage(-1);
              }}
              aria-label="Previous image"
            >
              ←
            </button>
            <figure onClick={(event) => event.stopPropagation()}>
              <img src={activeImage} alt={`${gallery.title} enlarged`} />
              <figcaption>{gallery.title}</figcaption>
            </figure>
            <button
              className="serviceGalleryArrow serviceGalleryArrow--next"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                moveImage(1);
              }}
              aria-label="Next image"
            >
              →
            </button>
          </div>,
          document.body,
        )}
    </section>
  );
}

export default ServiceGalleryPage;
