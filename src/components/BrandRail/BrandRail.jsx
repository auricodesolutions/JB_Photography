import React from "react";
import "./BrandRail.css";

function BrandRail() {
  const railText = "JB WEDDINGS";
  const list = Array.from({ length: 6 }, () => railText);

  return (
    <section className="brandRail" aria-label="JB WEDDINGS brand rail" data-animate>
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
