"use client";

import { useEffect, useRef, useState } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/9779805011700"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        style={{
          position: "fixed",
          bottom: "1.8rem",
          right: "1.8rem",
          zIndex: 9999,
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.7)",
          textDecoration: "none",
        }}
        className="wa-btn"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.737 5.476 2.027 7.784L0 32l8.425-2.007A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.797-1.864l-.487-.29-5.002 1.192 1.24-4.868-.318-.5A13.257 13.257 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.275-9.87c-.398-.2-2.355-1.163-2.72-1.296-.365-.133-.63-.2-.896.2-.265.398-1.029 1.296-1.261 1.562-.232.266-.464.3-.862.1-.398-.2-1.681-.62-3.201-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.614.174-.812.179-.179.398-.465.597-.698.2-.232.266-.398.398-.664.133-.265.067-.498-.033-.698-.1-.2-.896-2.16-1.228-2.958-.323-.776-.651-.67-.896-.682l-.763-.013c-.266 0-.698.1-1.063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.855 1.628 4.121c.2.265 2.81 4.288 6.81 6.016.952.41 1.695.655 2.274.838.955.303 1.825.26 2.512.158.766-.114 2.355-.963 2.688-1.894.333-.93.333-1.728.233-1.894-.1-.166-.365-.266-.763-.465z" />
        </svg>

        {/* Pulse ring */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(37,211,102,0.5)",
            animation: "wa-pulse 2s ease-out infinite",
          }}
        />
      </a>

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            bottom: "5.8rem",
            right: "1.8rem",
            zIndex: 9998,
            background: "#1a1a1a",
            color: "white",
            padding: "0.5rem 0.9rem",
            borderRadius: "6px",
            fontSize: "0.78rem",
            fontFamily: "Montserrat, sans-serif",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          💬 Chat on WhatsApp
          <span
            style={{
              position: "absolute",
              bottom: "-5px",
              right: "1.5rem",
              width: "10px",
              height: "10px",
              background: "#1a1a1a",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      )}

      <style>{`
        .wa-btn:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 8px 32px rgba(37,211,102,0.5) !important;
        }
        @keyframes wa-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </>
  );
}
