import React from "react";
import { site } from "../../data/siteData.js";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello JB WEDDINGS, I would like to ask for a wedding/event quotation.",
  );

  return (
    <a
      className="whatsappButton"
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact JB WEDDINGS on WhatsApp"
    >
      <svg
        className="whatsappButton__icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16.04 3.2c-7.02 0-12.72 5.7-12.72 12.72 0 2.24.59 4.43 1.71 6.36L3.2 28.8l6.68-1.75a12.68 12.68 0 0 0 6.16 1.57h.01c7.01 0 12.72-5.7 12.72-12.72S23.06 3.2 16.04 3.2Zm0 23.26h-.01c-1.95 0-3.87-.52-5.55-1.5l-.4-.24-3.96 1.04 1.06-3.86-.26-.4a10.5 10.5 0 0 1-1.61-5.58c0-5.92 4.81-10.73 10.74-10.73 2.86 0 5.56 1.12 7.58 3.14a10.66 10.66 0 0 1 3.15 7.58c0 5.92-4.82 10.55-10.74 10.55Zm5.89-8.03c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-.99-2.4-.26-.62-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.11-1.13 2.7s1.16 3.13 1.32 3.34c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
