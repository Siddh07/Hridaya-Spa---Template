"use client";

import { useState } from "react";

const services = [
  "Dry Massage – NPR 1,000",
  "Normal Oil Massage – NPR 1,000",
  "Jasmine/Lavender/Coconut Oil – NPR 1,200",
  "Chandan Oil Massage – NPR 1,400",
  "Lotion Massage – NPR 1,500",
  "Cream Massage – NPR 1,500",
  "Ayurvedic Oil Massage – NPR 1,500",
  "Thai Massage – NPR 2,000",
  "Deep Tissue Massage – NPR 2,000",
  "Four Hand Massage – NPR 2,000",
  "Coffee Body Massage – NPR 2,500",
  "Normal Massage + Body Scrub + Shower – NPR 1,500",
  "Moroccan Bath – NPR 1,200",
  "Massage with Moroccan Bath – NPR 2,000",
  "Waxing (Under Arms) – NPR 500",
  "Waxing (Bikini) – NPR 800",
  "Waxing (Both) – NPR 1,000",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", service: "", date: "", time: "", message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection.");
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

  return (
    <form onSubmit={handleSubmit}>
      {/* Name + Phone */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }} className="form-grid">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle} className="form-input" />
        </div>
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+977 98XXXXXXXX" style={inputStyle} className="form-input" />
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: "1.2rem" }}>
        <label style={labelStyle}>Email Address</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com (optional)" style={inputStyle} className="form-input" />
      </div>

      {/* Service */}
      <div style={{ marginBottom: "1.2rem" }}>
        <label style={labelStyle}>Select Service *</label>
        <select id="service" name="service" required value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }} className="form-input">
          <option value="">— Choose a treatment —</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Date + Time */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "1.2rem" }} className="form-grid">
        <div>
          <label style={labelStyle}>Preferred Date *</label>
          <input id="date" name="date" type="date" required value={form.date} onChange={handleChange}
            min={new Date().toISOString().split("T")[0]} style={inputStyle} className="form-input" />
        </div>
        <div>
          <label style={labelStyle}>Preferred Time *</label>
          <select id="time" name="time" required value={form.time} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }} className="form-input">
            <option value="">— Select time —</option>
            {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div style={{ marginBottom: "2rem" }}>
        <label style={labelStyle}>Special Requests / Notes</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
          placeholder="Any preferences, health conditions, or special requests..."
          style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }} className="form-input" />
      </div>

      {/* Success Message */}
      {status === "success" && (
        <div style={{ background: "rgba(74,92,43,0.08)", border: "1px solid rgba(74,92,43,0.3)", borderRadius: "4px", padding: "1.2rem 1.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "var(--olive-dark)", fontWeight: 600, fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}>✓ Booking Request Sent!</p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "4px" }}>We will confirm your appointment within 24 hours. Thank you!</p>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div style={{ background: "rgba(180,30,30,0.06)", border: "1px solid rgba(180,30,30,0.2)", borderRadius: "4px", padding: "1rem 1.5rem", marginBottom: "1.5rem" }}>
          <p style={{ color: "#8B2020", fontSize: "0.85rem" }}>⚠️ {errorMsg}</p>
        </div>
      )}

      <button type="submit" className="btn-gold" disabled={status === "loading"}
        style={{ width: "100%", fontSize: "0.82rem", padding: "1rem", letterSpacing: "0.15em", opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}>
        {status === "loading" ? "Sending Request..." : "Confirm Appointment Request"}
      </button>

      <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
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
