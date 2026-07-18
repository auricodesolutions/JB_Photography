import React, { useState } from "react";
import "./WeddingChapters.css";

const chapters = [
  {
    title: "Preparations",
    text: "The anticipation, thoughtful details, and quiet moments before the celebration begins.",
    image: "/assets/img%20(72).jpeg",
    alt: "Bride being prepared before her wedding ceremony",
  },
  {
    title: "Ceremony",
    text: "Every meaningful ritual, joyful glance, and promise documented with care and respect.",
    image: "/assets/img%20(4).jpeg",
    alt: "Wedding couple sharing a meaningful ceremony moment",
  },
  {
    title: "Portraits",
    text: "Relaxed direction and honest connection shaped into elegant, timeless wedding portraits.",
    image: "/assets/img%20(115).jpeg",
    alt: "Elegant bride and groom wedding portrait",
  },
  {
    title: "Celebration",
    text: "Laughter, movement, and the people you love—preserved exactly as the evening felt.",
    image: "/assets/img%20(140).jpeg",
    alt: "Newlyweds celebrating together at their wedding reception",
  },
];

function WeddingChapters() {
  const [revealedChapters, setRevealedChapters] = useState([]);

  const revealChapter = (index) => {
    setRevealedChapters((current) =>
      current.includes(index) ? current : [...current, index],
    );
  };

  return (
    <section
      className="weddingChapters section"
      aria-labelledby="chapters-title"
      data-animate
    >
      <header className="weddingChaptersHeader">
        <div>
          <p className="eyebrow">Your story, completely remembered</p>
          <h2 id="chapters-title">A wedding in four chapters.</h2>
        </div>
        <p>
          From the first quiet preparations to the final celebration, every
          chapter is photographed as one honest, beautiful story.
        </p>
      </header>

      <div className="chapterAccordion">
        {chapters.map((chapter, index) => (
            <article
              className={`chapterCard${revealedChapters.includes(index) ? " is-revealed" : ""}`}
              onPointerEnter={() => revealChapter(index)}
              onTouchStart={() => revealChapter(index)}
              onFocusCapture={() => revealChapter(index)}
              key={chapter.title}
            >
              <img src={chapter.image} alt={chapter.alt} />
              <div className="chapterSolid" aria-hidden="true" />
              <div className="chapterShade" aria-hidden="true" />

              <div className="chapterTitle">
                <strong>{chapter.title}</strong>
              </div>

              <div className="chapterExpanded">
                <p>{chapter.text}</p>
                <a href="#portfolio">View photographs <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export default WeddingChapters;
