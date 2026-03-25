"use client";

import { useState } from "react";

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        borderRadius: "4px",
        overflow: "hidden",
        border: "1px solid rgba(184,148,31,0.2)",
        boxShadow: "0 10px 50px rgba(0,0,0,0.08)",
        position: "relative",
      }}
    >
      {/* Skeleton shimmer shown while map loads */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #ede5d5 25%, #f5f0e8 50%, #ede5d5 75%)",
            backgroundSize: "200% 100%",
            animation: "map-shimmer 1.5s infinite",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            🗺️ Loading map…
          </p>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0312383342225!2d85.32211147546876!3d27.747182476159768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d712b5f23%3A0x322c15050713e31d!2sHridaya%20Wellness%20and%20Spa!5e0!3m2!1sen!2snp!4v1773988361320!5m2!1sen!2snp"
        width="100%"
        height="420"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hridaya Wellness & Spa Center Location - Tokha Road Kathmandu"
        onLoad={() => setLoaded(true)}
      />
      <style>{`
        @keyframes map-shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
      `}</style>
    </div>
  );
}
