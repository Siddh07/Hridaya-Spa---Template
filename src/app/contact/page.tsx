import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Hridaya Wellness & Spa, Tokha Road Kathmandu",
  description:
    "Get in touch with Hridaya Wellness & Spa Center located at Greenland Chowk, Tokha Road, Kathmandu. Call us at 9805011700 or visit us open daily 9AM–8PM.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          paddingTop: "130px",
          paddingBottom: "4rem",
          background:
            "linear-gradient(135deg, var(--olive-dark) 0%, #3A4C1E 100%)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(184,148,31,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "700px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(212,175,55,0.7)",
              marginBottom: "1rem",
            }}
          >
            ✦ Get In Touch
          </p>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--cream)",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Contact Us
          </h1>
          <div className="gold-divider" style={{ marginBottom: "1.2rem" }} />
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "0.9rem",
              color: "rgba(245,240,232,0.7)",
              lineHeight: 1.8,
            }}
          >
            We&apos;d love to hear from you. Reach out to us for inquiries,
            bookings, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Info Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            {[
              {
                icon: "📍",
                title: "Our Location",
                content: "Greenland Chowk, Tokha Road\nKathmandu, Nepal",
                link: "https://maps.google.com/?q=Tokha+Road+Kathmandu",
                linkText: "Get Directions →",
              },
              {
                icon: "📞",
                title: "Phone",
                content: "+977 9805011700",
                link: "tel:+9779805011700",
                linkText: "Call Now →",
              },
              {
                icon: "🕐",
                title: "Opening Hours",
                content: "Monday – Sunday\n9:00 AM – 8:00 PM",
                link: null,
                linkText: null,
              },
              {
                icon: "💆",
                title: "Book a Treatment",
                content:
                  "Request your appointment online and we'll confirm within a few hours.",
                link: "/book-appointment",
                linkText: "Book Now →",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "white",
                  border: "1px solid rgba(184,148,31,0.15)",
                  borderRadius: "4px",
                  padding: "2rem",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                className="service-card"
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.3rem",
                    color: "var(--olive-dark)",
                    marginBottom: "0.7rem",
                    fontWeight: 500,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    whiteSpace: "pre-line",
                    marginBottom: card.link ? "1rem" : 0,
                  }}
                >
                  {card.content}
                </p>
                {card.link && (
                  <a
                    href={card.link}
                    style={{
                      color: "var(--gold)",
                      fontFamily: "Montserrat",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(184,148,31,0.4)",
                    }}
                  >
                    {card.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "0.72rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.8rem",
              }}
            >
              ✦ Find Us
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "var(--olive-dark)",
                fontWeight: 400,
                marginBottom: "0.8rem",
              }}
            >
              We Are Located At
            </h2>
            <div className="gold-divider" style={{ marginBottom: "1rem" }} />
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              Greenland Chowk, Tokha Road, Kathmandu, Nepal
            </p>
          </div>

          <div
            style={{
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid rgba(184,148,31,0.2)",
              boxShadow: "0 10px 50px rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0312383342225!2d85.32211147546876!3d27.747182476159768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d712b5f23%3A0x322c15050713e31d!2sHridaya%20Wellness%20and%20Spa!5e0!3m2!1sen!2snp!4v1773988361320!5m2!1sen!2snp"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hridaya Wellness & Spa Center Location - Tokha Road Kathmandu"
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href="https://maps.app.goo.gl/5DkcwBBxLuTpACXn9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        style={{
          background: "var(--olive-dark)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "var(--cream)",
              fontWeight: 300,
              marginBottom: "1.2rem",
            }}
          >
            Ready for a{" "}
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
              Blissful Experience?
            </em>
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="tel:+9779805011700" className="btn-gold">
              📞 Call: 9805011700
            </a>
            <a
              href="/book-appointment"
              className="btn-outline"
              style={{
                borderColor: "rgba(212,175,55,0.6)",
                color: "var(--gold-light)",
              }}
            >
              Book Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
