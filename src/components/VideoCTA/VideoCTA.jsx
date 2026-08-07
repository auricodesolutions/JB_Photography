import React from "react";
import "./VideoCTA.css";

function VideoCTA({ onNavigate }) {
  return (
    <section className="videoCta" aria-label="Book JB WEDDINGS" data-animate>
      <div className="videoCtaMedia" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/img%20(172).jpeg"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="videoCtaOverlay" />

      <div className="videoCtaPanel">
        <h2>
          <span>Don&apos;t let your precious</span>
          <span>memories fade away.</span>
        </h2>
        <p>
          Let us preserve every glance, laugh, and quiet moment in photographs
          and films that feel timeless.
        </p>
        <a
          href="/booking"
          className="button light"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("booking");
          }}
        >
          Reserve Now <b aria-hidden="true">→</b>
        </a>
      </div>
    </section>
  );
}

export default VideoCTA;
