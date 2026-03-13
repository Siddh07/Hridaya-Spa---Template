import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Appointment — Hridaya Wellness & Spa",
  description:
    "Book a massage or wellness treatment at Hridaya Spa in Kathmandu. Fill in our simple appointment form and we'll confirm your slot. Available 9AM–8PM daily.",
};

export default function BookAppointmentPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{
        paddingTop: "130px",
        paddingBottom: "4rem",
        background: "linear-gradient(135deg, var(--olive-dark) 0%, #3A4C1E 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(184,148,31,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ fontFamily: "Montserrat", fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(212,175,55,0.7)", marginBottom: "1rem" }}>✦ Reserve Your Visit</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--cream)", fontWeight: 300, lineHeight: 1.2, marginBottom: "1rem" }}>
            Book an Appointment
          </h1>
          <div className="gold-divider" style={{ marginBottom: "1.2rem" }} />
          <p style={{ fontFamily: "Montserrat", fontSize: "0.9rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.8 }}>
            Fill in the form below and our team will confirm your appointment within a few hours.
          </p>
        </div>
      </section>

      {/* Form + Info Section */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 380px", gap: "4rem", alignItems: "start" }}
          className="booking-grid">

          {/* Form */}
          <div style={{ background: "white", border: "1px solid rgba(184,148,31,0.15)", borderRadius: "4px", padding: "2.5rem", boxShadow: "0 10px 50px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", color: "var(--olive-dark)", marginBottom: "0.5rem", fontWeight: 500 }}>
              Appointment Details
            </h2>
            <p style={{ fontFamily: "Montserrat", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              All fields marked with * are required.
            </p>
            <BookingForm />
          </div>

          {/* Sidebar Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Info Card */}
            <div style={{ background: "var(--olive-dark)", borderRadius: "4px", padding: "2rem", color: "var(--cream)" }}>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", color: "var(--gold-light)", marginBottom: "1.5rem" }}>
                Visit Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.1rem", marginTop: "2px" }}>📍</span>
                  <div>
                    <p style={{ fontSize: "0.78rem", color: "rgba(212,175,55,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>Location</p>
                    <p style={{ fontSize: "0.87rem", lineHeight: 1.6, color: "rgba(245,240,232,0.85)" }}>Greenland Chowk, Tokha Road<br />Kathmandu, Nepal</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.1rem", marginTop: "2px" }}>📞</span>
                  <div>
                    <p style={{ fontSize: "0.78rem", color: "rgba(212,175,55,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>Phone</p>
                    <a href="tel:+9779805011700" style={{ fontSize: "0.87rem", color: "rgba(245,240,232,0.85)", textDecoration: "none" }}>+977 9805011700</a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.1rem", marginTop: "2px" }}>🕐</span>
                  <div>
                    <p style={{ fontSize: "0.78rem", color: "rgba(212,175,55,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>Hours</p>
                    <p style={{ fontSize: "0.87rem", color: "rgba(245,240,232,0.85)" }}>Open Daily: 9:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div style={{ background: "white", border: "1px solid rgba(184,148,31,0.15)", borderRadius: "4px", padding: "2rem" }}>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", color: "var(--olive-dark)", marginBottom: "1.5rem" }}>
                How It Works
              </h3>
              {[
                { step: "1", title: "Fill the Form", desc: "Select your treatment, date, and preferred time." },
                { step: "2", title: "We Confirm", desc: "Our team will call or message you within a few hours." },
                { step: "3", title: "Arrive & Relax", desc: "Come to Hridaya Spa and enjoy your session." },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "1rem", marginBottom: "1.2rem", alignItems: "flex-start" }}>
                  <div style={{
                    minWidth: "32px", height: "32px", borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: "1rem",
                  }}>{item.step}</div>
                  <div>
                    <p style={{ fontFamily: "Montserrat", fontSize: "0.82rem", fontWeight: 600, color: "var(--olive-dark)", marginBottom: "2px" }}>{item.title}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Call */}
            <a href="tel:+9779805011700" style={{
              display: "block", background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
              color: "white", borderRadius: "4px", padding: "1.2rem 1.5rem", textAlign: "center",
              textDecoration: "none", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(184,148,31,0.3)",
            }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", marginBottom: "2px" }}>Prefer to Call?</p>
              <p style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.08em" }}>+977 9805011700</p>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .booking-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
