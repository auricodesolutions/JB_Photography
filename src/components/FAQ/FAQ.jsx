import React, { useState } from "react";
import { faqs } from "../../data/siteData.js";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq section" id="faq" data-animate>
      <header className="faqHeader">
        <p className="eyebrow">Planning your story</p>
        <h2>Everything you need to know before your day.</h2>
        <p>Quick answers to help you plan your photography and film coverage with confidence.</p>
      </header>

      <div className="faqList">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;
          return (
            <article className={`faqItem ${isOpen ? "isOpen" : ""}`} key={item.question}>
              <h3>
                <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <span>{item.question}</span><i aria-hidden="true" />
                </button>
              </h3>
              <div className="faqAnswer" id={answerId} aria-hidden={!isOpen}>
                <div><p>{item.answer}</p></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
