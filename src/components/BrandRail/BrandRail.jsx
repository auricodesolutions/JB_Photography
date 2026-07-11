import React from "react";
import "./BrandRail.css";

function BrandRail() {
  const railText = "Jagath Bandara Photography";
  const list = Array.from({ length: 6 }, () => railText);

  return (
    <section className="brandRail" aria-label="Jagath Bandara Photography brand rail" data-animate>
      <div className="brandRailTrack">
        {[0, 1].map((group) => (
          <div className="brandRailGroup" key={group} aria-hidden={group === 1}>
            {list.map((item, index) => (
              <span key={`${group}-${item}-${index}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandRail;
