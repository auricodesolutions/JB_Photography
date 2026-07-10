import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ExperienceSlider from "./components/ExperienceSlider/ExperienceSlider.jsx";
import BrandRail from "./components/BrandRail/BrandRail.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Films from "./components/Films/Films.jsx";
import Booking from "./components/Booking/Booking.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton.jsx";
import JbReviews from "./components/JbReviews/JbReviews.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(() =>
    window.location.pathname === "/about" ? "about" : "home",
  );

  const navigate = (targetPage, sectionId) => {
    const path = targetPage === "about" ? "/about" : "/";
    window.history.pushState({}, "", sectionId ? `${path}#${sectionId}` : path);
    setPage(targetPage);

    if (targetPage === "home" && sectionId) {
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setPage(window.location.pathname === "/about" ? "about" : "home");
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const animatedItems = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 },
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    const moveItems = document.querySelectorAll("[data-parallax]");

    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      moveItems.forEach((item) => {
        const speed = Number(item.dataset.parallax || 10);
        item.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <>
      {loading && (
        <div className="pageLoader" aria-label="Website loading">
          <img src="/assets/jb-logo-white.png" alt="JB Photography" />
          <span>JB Photography</span>
        </div>
      )}

      <Header onNavigate={navigate} />
      <main>
        {page === "about" ? (
          <About onNavigate={navigate} />
        ) : (
          <>
            <Hero />
            <ExperienceSlider />
            <BrandRail />
            <Portfolio />
            <Films />
            <JbReviews />
            <Booking />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
