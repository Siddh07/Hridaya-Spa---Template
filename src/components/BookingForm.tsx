"use client";

import { useState } from "react";

const services = [
  "Normal Oil Massage – NPR 1,000",
  "Dry Massage – NPR 1,000",
  "Jasmine/Lavender/Coconut Oil – NPR 1,200",
  "Chandan Oil Massage – NPR 1,400",
  "Lotion Massage – NPR 1,500",
  "Cream Massage – NPR 1,500",
  "Ayurvedic Oil Massage – NPR 1,500",
  "Four Hand Massage – NPR 2,000",
  "Deep Tissue Massage – NPR 2,000",
  "Thai Massage – NPR 2,000",
  "Coffee Body Massage – NPR 2,000",
  "Normal Massage + Body Scrub + Shower – NPR 1,500",
  "Moroccan Bath – NPR 1,200",
  "Massage with Moroccan Bath – NPR 2,000",
  "Waxing (Under Arms) – NPR 500",
  "Waxing (Bikini) – NPR 800",
  "Waxing (Both) – NPR 1,000",
];

type FormErrors = Partial<Record<"name" | "phone" | "service" | "date" | "time", string>>;

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (formData: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!String(formData.get("name") ?? "").trim()) errs.name = "Full name is required.";
    if (!String(formData.get("phone") ?? "").trim()) errs.phone = "Phone number is required.";
    if (!String(formData.get("service") ?? "").trim()) errs.service = "Please select a service.";
    if (!String(formData.get("date") ?? "").trim()) errs.date = "Please choose a date.";
    if (!String(formData.get("time") ?? "").trim()) errs.time = "Please select a time.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

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

  const inputStyle = (field?: keyof FormErrors): React.CSSProperties => ({
    width: "100%",
    padding: "0.85rem 1rem",
    background: "white",
    border: `1px solid ${field && errors[field] ? "#C0392B" : "#D8CFB8"}`,
    borderRadius: "2px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.88rem",
    color: "var(--text-dark)",
    outline: "none",
    boxShadow: field && errors[field] ? "0 0 0 3px rgba(192,57,43,0.1)" : undefined,
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  });

  const errMsg = (field: keyof FormErrors) =>
    errors[field] ? (
      <p style={{ color: "#C0392B", fontSize: "0.72rem", marginTop: "0.3rem", fontFamily: "Montserrat, sans-serif" }}>
        {errors[field]}
      </p>
    ) : null;

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
          <label htmlFor="name" style={labelStyle}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            style={inputStyle("name")}
            className="form-input"
            onChange={() => setErrors((p) => ({ ...p, name: undefined }))}
          />
          {errMsg("name")}
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+977 98XXXXXXXX"
            style={inputStyle("phone")}
            className="form-input"
            onChange={() => setErrors((p) => ({ ...p, phone: undefined }))}
          />
          {errMsg("phone")}
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
          style={inputStyle()}
          className="form-input"
        />
      </div>

      {/* Service */}
      <div style={{ marginBottom: "1.2rem" }}>
        <label htmlFor="service" style={labelStyle}>Select Service *</label>
        <select
          id="service"
          name="service"
          style={{ ...inputStyle("service"), cursor: "pointer" }}
          className="form-input"
          onChange={() => setErrors((p) => ({ ...p, service: undefined }))}
        >
          <option value="">— Choose a treatment —</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errMsg("service")}
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
          <label htmlFor="date" style={labelStyle}>Preferred Date *</label>
          <input
            id="date"
            name="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            style={inputStyle("date")}
            className="form-input"
            onChange={() => setErrors((p) => ({ ...p, date: undefined }))}
          />
          {errMsg("date")}
        </div>
        <div>
          <label htmlFor="time" style={labelStyle}>Preferred Time *</label>
          <select
            id="time"
            name="time"
            style={{ ...inputStyle("time"), cursor: "pointer" }}
            className="form-input"
            onChange={() => setErrors((p) => ({ ...p, time: undefined }))}
          >
            <option value="">— Select time —</option>
            {["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errMsg("time")}
        </div>
      </div>

      {/* Message */}
      <div style={{ marginBottom: "2rem" }}>
        <label htmlFor="message" style={labelStyle}>Special Requests / Notes</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Any preferences, health conditions, or special requests..."
          style={{ ...inputStyle(), resize: "vertical", minHeight: "100px" }}
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
