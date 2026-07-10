import React from "react";
import "./BrandRail.css";

function BrandRail() {
  const railText = "Jagath Bandara Photography";
  const list = Array.from({ length: 6 }, () => railText);

  return (
    <section className="brandRail" aria-label="Jagath Bandara Photography brand rail">
      {[...list, ...list].map((item, index) => (
        <span key={`${item}-${index}`}>{item}</span>
      ))}
    </section>
  );
}

export default BrandRail;
