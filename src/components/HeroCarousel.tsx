"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    tag: "Signature Treatment",
    title: "Ayurvedic Oil Massage",
    subtitle: "Ancient wisdom, modern serenity",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
    tag: "Chandan oil  Ritual",
    title: "Chandan oil  Massage",
    subtitle: "Energize body & soul",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
    tag: "Luxury Experience",
    title: "Four Hand Massage",
    subtitle: "Ultimate indulgence awaits",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    tag: "Body Treatment",
    title: "Moroccan Bath",
    subtitle: "Radiant, silky smooth skin",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 500);
    },
    [animating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <>
      <style>{`
        .carousel-root {
          position: relative;
          width: 100%;
          height: 520px;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(46,58,26,0.18);
        }

        /* Image layer */
        .carousel-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.9s cubic-bezier(0.77,0,0.175,1),
                      opacity 0.5s ease;
        }
        .carousel-img.entering-next  { transform: translateX(100%); opacity: 0; }
        .carousel-img.entering-prev  { transform: translateX(-100%); opacity: 0; }
        .carousel-img.active         { transform: translateX(0); opacity: 1; }
        .carousel-img.leaving-next   { transform: translateX(-60px); opacity: 0; }
        .carousel-img.leaving-prev   { transform: translateX(60px); opacity: 0; }

        /* Gradient overlay */
        .carousel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(30,40,15,0.82) 0%,
            rgba(30,40,15,0.25) 55%,
            transparent 100%
          );
          z-index: 1;
        }

        /* Gold frame border */
        .carousel-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 3px;
          z-index: 2;
          pointer-events: none;
        }

        /* Caption */
        .carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem 2rem 1.8rem;
          z-index: 3;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .carousel-caption.hidden { opacity: 0; transform: translateY(10px); }
        .carousel-caption.visible { opacity: 1; transform: translateY(0); }

        .carousel-tag {
          font-family: Montserrat, sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(212,175,55,0.85);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .carousel-tag::before {
          content: '';
          display: inline-block;
          width: 1.5rem;
          height: 1px;
          background: rgba(212,175,55,0.6);
        }

        .carousel-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 400;
          color: #F5F0E8;
          line-height: 1.15;
          margin-bottom: 0.3rem;
        }

        .carousel-subtitle {
          font-family: Montserrat, sans-serif;
          font-size: 0.72rem;
          color: rgba(245,240,232,0.55);
          letter-spacing: 0.05em;
        }

        /* Navigation arrows */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 4;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.35);
          background: rgba(30,40,15,0.45);
          backdrop-filter: blur(6px);
          color: rgba(212,175,55,0.85);
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, border-color 0.3s;
        }
        .carousel-btn:hover {
          background: rgba(184,148,31,0.25);
          border-color: rgba(212,175,55,0.7);
        }
        .carousel-btn-prev { left: 1rem; }
        .carousel-btn-next { right: 1rem; }

        /* Dot indicators */
        .carousel-dots {
          position: absolute;
          bottom: 1.1rem;
          right: 1.5rem;
          z-index: 4;
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .carousel-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(212,175,55,0.35);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, transform 0.3s, width 0.3s;
        }
        .carousel-dot.active {
          background: rgba(212,175,55,0.9);
          width: 18px;
          border-radius: 3px;
        }

        /* Progress bar */
        .carousel-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(to right, rgba(212,175,55,0.8), rgba(184,148,31,0.5));
          z-index: 5;
          animation: progress 4.5s linear infinite;
        }
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <div
        className="carousel-root"
        role="region"
        aria-label="Spa treatments slideshow"
      >
        {/* Progress bar */}
        <div key={current} className="carousel-progress" />

        {/* Image */}
        <div
          className={`carousel-img ${animating ? (direction === "next" ? "leaving-next" : "leaving-prev") : "active"}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden="true"
        />

        {/* Overlay */}
        <div className="carousel-overlay" />

        {/* Decorative frame */}
        <div className="carousel-frame" />

        {/* Caption */}
        <div className={`carousel-caption ${animating ? "hidden" : "visible"}`}>
          <p className="carousel-tag">{slide.tag}</p>
          <h3 className="carousel-title">{slide.title}</h3>
          <p className="carousel-subtitle">{slide.subtitle}</p>
        </div>

        {/* Arrows */}
        <button
          className="carousel-btn carousel-btn-prev"
          onClick={prev}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="carousel-btn carousel-btn-next"
          onClick={next}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dots */}
        <div className="carousel-dots" role="tablist">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
