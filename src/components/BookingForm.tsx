"use client";

import { useState } from "react";

const services = [
  "Normal Oil Massage – NPR 1,000",
  "Jasmine/Lavender/Coconut Oil – NPR 1,200",
  "Chandan Oil Massage – NPR 1,400",
  "Lotion Massage – NPR 1,500",
  "Cream Massage – NPR 1,500",
  "Ayurvedic Oil Massage – NPR 1,500",
  "Chandan oil  Massage – NPR 2,000",
  "Four Hand Massage – NPR 2,000",
  "Normal Oil Body Massage – NPR 2,500",
  "Normal Massage + Body Scrub + Shower – NPR 1,500",
  "Moroccan Bath – NPR 1,200",
  "Massage with Moroccan Bath – NPR 2,000",
  "Waxing (Under Arms) – NPR 500",
  "Waxing (Bikini) – NPR 800",
  "Waxing (Both) – NPR 1,000",
];

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "23091a18-8b27-4daa-aa1b-b655f040a609");
    formData.append("subject", "New Appointment Request – Hridaya Spa");
    formData.append("from_name", "Hridaya Wellness & Spa Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    background: "white",
    border: "1px solid #D8CFB8",
    borderRadius: "2px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.88rem",
    color: "var(--text-dark)",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--olive-dark)",
    marginBottom: "0.5rem",
  };

  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(74,92,43,0.08)",
          border: "1px solid rgba(74,92,43,0.3)",
          borderRadius: "4px",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "2rem",
            color: "var(--olive-dark)",
            fontWeight: 400,
            marginBottom: "0.8rem",
          }}
        >
          ✓ Booking Request Sent!
        </p>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "var(--text-muted)",
            fontSize: "0.85rem",
            lineHeight: 1.7,
          }}
        >
          We will confirm your appointment within 24 hours. Thank you for
          choosing Hridaya Spa!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Name + Phone */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.2rem",
          marginBottom: "1.2rem",
        }}
        className="form-grid"
      >
        <div>
          <label htmlFor="name" style={labelStyle}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            style={inputStyle}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+977 98XXXXXXXX"
            style={inputStyle}
            className="form-input"
          />
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: "1.2rem" }}>
        <label htmlFor="email" style={labelStyle}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com (optional)"
          style={inputStyle}
          className="form-input"
        />
      </div>

      {/* Service */}
      <div style={{ marginBottom: "1.2rem" }}>
        <label htmlFor="service" style={labelStyle}>
          Select Service *
        </label>
        <select
          id="service"
          name="service"
          required
          style={{ ...inputStyle, cursor: "pointer" }}
          className="form-input"
        >
          <option value="">— Choose a treatment —</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Date + Time */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.2rem",
          marginBottom: "1.2rem",
        }}
        className="form-grid"
      >
        <div>
          <label htmlFor="date" style={labelStyle}>
            Preferred Date *
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            style={inputStyle}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="time" style={labelStyle}>
            Preferred Time *
          </label>
          <select
            id="time"
            name="time"
            required
            style={{ ...inputStyle, cursor: "pointer" }}
            className="form-input"
          >
            <option value="">— Select time —</option>
            {[
              "9:00 AM",
              "10:00 AM",
              "11:00 AM",
              "12:00 PM",
              "1:00 PM",
              "2:00 PM",
              "3:00 PM",
              "4:00 PM",
              "5:00 PM",
              "6:00 PM",
              "7:00 PM",
            ].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div style={{ marginBottom: "2rem" }}>
        <label htmlFor="message" style={labelStyle}>
          Special Requests / Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Any preferences, health conditions, or special requests..."
          style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
          className="form-input"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div
          style={{
            background: "rgba(180,30,30,0.06)",
            border: "1px solid rgba(180,30,30,0.2)",
            borderRadius: "4px",
            padding: "1rem 1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <p style={{ color: "#8B2020", fontSize: "0.85rem" }}>
            ⚠️ Something went wrong. Please try again or call us directly at
            +977 9805011700.
          </p>
        </div>
      )}

      <button
        type="submit"
        className="btn-gold"
        disabled={status === "loading"}
        style={{
          width: "100%",
          fontSize: "0.82rem",
          padding: "1rem",
          letterSpacing: "0.15em",
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading" ? "Sending Request..." : "Confirm Appointment Request"}
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "0.78rem",
          color: "var(--text-muted)",
        }}
      >
        We will call you at the provided number to confirm your booking.
      </p>

      <style>{`
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
