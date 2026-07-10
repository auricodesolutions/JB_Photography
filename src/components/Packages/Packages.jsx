import React from "react";
import { packages } from "../../data/siteData.js";
import "./Packages.css";

function Packages() {
  return (
    <section className="packages section" id="packages" data-animate>
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Packages</p>
          <h2>Choose the right coverage</h2>
        </div>
        <a href="#contact">Ask package price</a>
      </div>

      <div className="packageGrid">
        {packages.map((item) => (
          <article className="package" key={item.name}>
            <p>{item.name}</p>
            <h3>{item.price}</h3>
            <ul>
              {item.items.map((packageItem) => (
                <li key={packageItem}>{packageItem}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Packages;
