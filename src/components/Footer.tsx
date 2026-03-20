import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--olive-dark)",
        color: "var(--cream)",
        paddingTop: "4rem",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1.2rem",
              }}
            >
              <Image
                src="/logo1.png"
                alt="Hridaya Logo"
                width={45}
                height={40}
                style={{
                  objectFit: "contain",
                  filter:
                    "brightness(0) invert(1) sepia(1) hue-rotate(3deg) saturate(2) brightness(0.85)",
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "var(--gold-light)",
                    letterSpacing: "0.06em",
                    lineHeight: 1.1,
                  }}
                >
                  HRIDAYA
                </p>
                <p
                  style={{
                    fontSize: "0.58rem",
                    letterSpacing: "0.15em",
                    color: "rgba(212,175,55,0.7)",
                    textTransform: "uppercase",
                  }}
                >
                  Wellness & Spa Center
                </p>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.7)",
                maxWidth: "260px",
              }}
            >
              A sanctuary of peace and healing, dedicated to restoring balance
              to your body, mind, and soul through ancient wellness traditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.2rem",
                color: "var(--gold-light)",
                marginBottom: "1.2rem",
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}
            >
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/book-appointment", label: "Book Appointment" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(245,240,232,0.7)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.3s",
                      letterSpacing: "0.03em",
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.2rem",
                color: "var(--gold-light)",
                marginBottom: "1.2rem",
                letterSpacing: "0.05em",
              }}
            >
              Our Specialties
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.7rem",
              }}
            >
              {[
                "Chandan oil  Massage",
                "Ayurvedic Oil Massage",
                "Four Hand Massage",
                "Moroccan Bath",
                "Normal Oil Body Massage",
              ].map((s) => (
                <li
                  key={s}
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    fontSize: "0.85rem",
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "1.2rem",
                color: "var(--gold-light)",
                marginBottom: "1.2rem",
                letterSpacing: "0.05em",
              }}
            >
              Find Us
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.7rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: "var(--gold-light)",
                    marginTop: "2px",
                    fontSize: "1rem",
                  }}
                >
                  📍
                </span>
                <p
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  Greenland Chowk, Tokha Road &
                  <br />
                  Opening Soon at Opposite building to Buddha Air, Pulchowk Rd,
                  <br />
                  Kathmandu, Nepal
                </p>
              </div>
              <div
                style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}
              >
                <span style={{ color: "var(--gold-light)", fontSize: "1rem" }}>
                  📞
                </span>
                <a
                  href="tel:+9779805011700"
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                  }}
                >
                  +977 9805011700
                </a>
              </div>
              <div
                style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}
              >
                <span style={{ color: "var(--gold-light)", fontSize: "1rem" }}>
                  🕐
                </span>
                <p
                  style={{
                    color: "rgba(245,240,232,0.7)",
                    fontSize: "0.85rem",
                  }}
                >
                  Open Daily: 9:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            padding: "1.5rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "rgba(245,240,232,0.5)", fontSize: "0.78rem" }}>
            © {currentYear} Hridaya Wellness & Spa Center. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(212,175,55,0.5)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            Greenland Chowk, Tokha Road, Kathmandu
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--gold-light) !important; }
      `}</style>
    </footer>
  );
}
