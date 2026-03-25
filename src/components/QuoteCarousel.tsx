"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const quotes = [
  {
    quote: (
      <>
        &ldquo;Hridaya — meaning{" "}
        <span style={{ color: "var(--gold-light)", fontWeight: 400 }}>
          heart
        </span>{" "}
        in Sanskrit — is our promise to treat every guest with warmth, care, and
        genuine healing intention from the bottom of our hearts.&rdquo;
      </>
    ),
    label: "Founding Principle",
  },
  {
    quote: (
      <>
        &ldquo;True healing begins not with the hands, but with{" "}
        <span style={{ color: "var(--gold-light)", fontWeight: 400 }}>
          presence
        </span>{" "}
        — hridaya healing begin with touch.&rdquo;
      </>
    ),
    label: "On Presence",
  },
  {
    quote: (
      <>
        &ldquo;You step in with stress and walk out with peace — it is a form
        of{" "}
        <span style={{ color: "var(--gold-light)", fontWeight: 400 }}>
          self-respect
        </span>
        , a quiet ritual of returning to yourself.&rdquo;
      </>
    ),
    label: "On Beauty",
  },
];

export default function QuoteCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActive(index);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % quotes.length;
        const track = trackRef.current;
        if (track) {
          const slide = track.children[next] as HTMLElement;
          if (slide) track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
        }
        return next;
      });
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startAutoPlay]);

  const manualGoTo = useCallback((index: number) => {
    goTo(index);
    startAutoPlay();
  }, [goTo, startAutoPlay]);

  const prev = () => manualGoTo(Math.max(0, active - 1));
  const next = () => manualGoTo(Math.min(quotes.length - 1, active + 1));

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
    const idx = Math.round(track.scrollLeft / slideWidth);
    setActive(idx);
  };

  return (
    <section
      style={{
        background: "var(--olive-dark)",
        padding: "6rem 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at center, rgba(208,175,55,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(212,175,55,0.6)",
          marginBottom: "3.5rem",
          position: "relative",
        }}
      >
        ✦ Our Philosophy
      </p>

      {/* Carousel wrapper */}
      <div style={{ position: "relative" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "12vw",
            background:
              "linear-gradient(to right, var(--olive-dark) 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "12vw",
            background:
              "linear-gradient(to left, var(--olive-dark) 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            gap: "0",
          }}
          className="quote-track"
        >
          {quotes.map((item, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 100%",
                scrollSnapAlign: "center",
                padding: "0 clamp(2rem, 12vw, 14rem)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Decorative open-quote glyph */}
              <span
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "6rem",
                  lineHeight: 0.6,
                  color: "rgba(212,175,55,0.12)",
                  display: "block",
                  marginBottom: "2rem",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </span>

              <blockquote
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.55rem, 2.8vw, 2.4rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "var(--cream)",
                  margin: "0 0 2rem",
                  maxWidth: "720px",
                }}
              >
                {item.quote}
              </blockquote>

              {/* Thin gold rule */}
              <div
                style={{
                  width: "2rem",
                  height: "1px",
                  background: "rgba(212,175,55,0.4)",
                  marginBottom: "1.2rem",
                }}
              />

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(212,175,55,0.5)",
                  margin: 0,
                }}
              >
                — {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "3.5rem",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Prev */}
        <button
          onClick={prev}
          disabled={active === 0}
          aria-label="Previous quote"
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.3)",
            background: "transparent",
            color:
              active === 0 ? "rgba(212,175,55,0.2)" : "rgba(212,175,55,0.7)",
            fontSize: "1.1rem",
            cursor: active === 0 ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s",
            lineHeight: 1,
          }}
        >
          ←
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "0.55rem", alignItems: "center" }}>
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => manualGoTo(i)}
              aria-label={`Go to quote ${i + 1}`}
              style={{
                width: i === active ? "1.8rem" : "0.4rem",
                height: "0.4rem",
                borderRadius: "99px",
                background:
                  i === active
                    ? "rgba(212,175,55,0.85)"
                    : "rgba(212,175,55,0.22)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition:
                  "width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.25s",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          disabled={active === quotes.length - 1}
          aria-label="Next quote"
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.3)",
            background: "transparent",
            color:
              active === quotes.length - 1
                ? "rgba(212,175,55,0.2)"
                : "rgba(212,175,55,0.7)",
            fontSize: "1.1rem",
            cursor: active === quotes.length - 1 ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s",
            lineHeight: 1,
          }}
        >
          →
        </button>
      </div>

      {/* ── suppress scrollbar on WebKit */}
      <style>{`
        .quote-track::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
