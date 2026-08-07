import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ExperienceSlider from "./components/ExperienceSlider/ExperienceSlider.jsx";
import AboutServices from "./components/AboutServices/AboutServices.jsx";
import BrandRail from "./components/BrandRail/BrandRail.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import WeddingChapters from "./components/WeddingChapters/WeddingChapters.jsx";
import Films from "./components/Films/Films.jsx";
import Booking from "./components/Booking/Booking.jsx";
import BookingPage from "./components/BookingPage/BookingPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton.jsx";
import JbReviews from "./components/JbReviews/JbReviews.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import VideoCTA from "./components/VideoCTA/VideoCTA.jsx";
import About from "./components/About/About.jsx";
import PhotographyPortfolio from "./components/PhotographyPortfolio/PhotographyPortfolio.jsx";
import WeddingTrailers from "./components/WeddingTrailers/WeddingTrailers.jsx";
import ServiceGalleryPage from "./components/ServiceGalleryPage/ServiceGalleryPage.jsx";
import { serviceGalleries } from "./data/siteData.js";
import useSmoothScroll from "./hooks/useSmoothScroll.js";

const pagePaths = {
  home: "/",
  about: "/about",
  portfolio: "/portfolio",
  films: "/wedding-films",
  booking: "/booking",
  preshoots: "/preshoots",
  events: "/events",
};

const getPageFromPath = () => {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/about") return "about";
  if (path === "/portfolio") return "portfolio";
  if (path === "/wedding-films") return "films";
  if (path === "/booking") return "booking";
  if (path === "/preshoots") return "preshoots";
  if (path === "/events") return "events";
  return "home";
};

function App() {
  const smoothScrollTo = useSmoothScroll();

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(getPageFromPath);

  const changePage = (targetPage) => {
    const motionDisabled = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (document.startViewTransition && !motionDisabled) {
      const transition = document.startViewTransition(() => {
        flushSync(() => setPage(targetPage));
      });

      return transition.finished.catch(() => undefined);
    }

    setPage(targetPage);
    return Promise.resolve();
  };

  const navigate = (targetPage, sectionId) => {
    const path = pagePaths[targetPage] || "/";
    window.history.pushState({}, "", sectionId ? `${path}#${sectionId}` : path);

    const scrollToDestination = () => {
      window.setTimeout(() => {
        if (sectionId) {
          smoothScrollTo(document.getElementById(sectionId));
        } else {
          smoothScrollTo(0);
        }
      }, 60);
    };

    if (targetPage === page) {
      scrollToDestination();
      return;
    }

    changePage(targetPage).finally(scrollToDestination);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      changePage(getPageFromPath()).finally(() => {
        window.setTimeout(() => {
          const sectionId = window.location.hash.slice(1);
          smoothScrollTo(
            sectionId ? document.getElementById(sectionId) : 0,
          );
        }, 60);
      });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const animatedItems = document.querySelectorAll("[data-animate]");
    const contentSelector = [
      "h2",
      "h3",
      "p",
      ".eyebrow",
      ".contactCards",
      "form",
      ".jbReviewControls",
    ].join(", ");

    const contentItems = document.querySelectorAll(
      `main section:not(.hero):not(.brandRail):not(.weddingChapters):not(.aboutServicesNew) :is(${contentSelector})`,
    );

    const mediaItems = document.querySelectorAll(
      [
        "main section:not(.hero)",
        ":not(.brandRail)",
        ":not(.experience)",
        ":not(.weddingChapters)",
        ":not(.aboutServicesNew)",
        " img",
      ].join(""),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -7% 0px" },
    );

    animatedItems.forEach((item) => observer.observe(item));

    contentItems.forEach((item, index) => {
      item.classList.add("revealContent");
      item.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
      observer.observe(item);
    });

    mediaItems.forEach((item, index) => {
      item.classList.add("revealMedia");
      item.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      [...contentItems, ...mediaItems].forEach((item) => {
        item.classList.remove("revealContent", "revealMedia", "is-visible");
        item.style.removeProperty("--reveal-delay");
      });
    };
  }, [loading, page]);

  useEffect(() => {
    const moveItems = document.querySelectorAll("[data-parallax]");
    const motionDisabled = window.matchMedia(
      "(prefers-reduced-motion: reduce), (hover: none)",
    ).matches;

    if (!moveItems.length || motionDisabled) return undefined;

    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const handleMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const x = (pointerX / window.innerWidth - 0.5) * 2;
        const y = (pointerY / window.innerHeight - 0.5) * 2;

        moveItems.forEach((item) => {
          const speed = Number(item.dataset.parallax || 10);
          item.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
        });

        frameId = 0;
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="pageLoader" aria-label="Website loading">
          <img src="/assets/jb-logo-white.png" alt="JB WEDDINGS" />
          <span>JB WEDDINGS</span>
        </div>
      )}

      <Header onNavigate={navigate} />
      <main className="pageView" key={page}>
        {page === "about" && <About />}
        {page === "booking" && <BookingPage />}
        {page === "preshoots" && (
          <ServiceGalleryPage gallery={serviceGalleries.preshoots} onNavigate={navigate} />
        )}
        {page === "events" && (
          <ServiceGalleryPage gallery={serviceGalleries.events} onNavigate={navigate} />
        )}
        {page === "portfolio" && (
          <PhotographyPortfolio onNavigate={navigate} />
        )}
        {page === "films" && <WeddingTrailers onNavigate={navigate} />}
        {page === "home" && (
          <>
            <Hero onNavigate={navigate} />
            <ExperienceSlider onNavigate={navigate} />
            <Portfolio onNavigate={navigate} />
            <AboutServices onNavigate={navigate} />
            <Films onNavigate={navigate} />
            <JbReviews onNavigate={navigate} />
            <FAQ />
            <Booking />
          </>
        )}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </>
  );
}

export default App;
