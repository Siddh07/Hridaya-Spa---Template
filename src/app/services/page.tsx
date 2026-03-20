import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing — Massage & Spa Treatments",
  description:
    "Explore our full range of spa services at Hridaya Wellness Center. From relaxing oil massages to premium Chandan oil  massage, Moroccan Bath, and more. Transparent pricing in Kathmandu.",
};

const massageServices = [
  {
    name: "Normal Oil Massage",
    price: 1000,
    desc: "A soothing full-body massage with premium natural oil, designed to ease stress, relax muscles, and nourish the skin.",
  },

  {
    name: "Dry Massage",
    price: 1000,
    desc: "A soothing full-body massage with premium natural oil, designed to ease stress, relax muscles, and nourish the skin.",
  },
  {
    name: "Jasmine / Lavender / Coconut Oil",
    price: 1200,
    desc: "Experience the calming aroma of jasmine, lavender, or coconut oil in a therapeutic massage that soothes both body and mind.",
  },
  {
    name: "Chandan (Sandalwood) Oil",
    price: 1400,
    desc: "A luxurious massage with sacred sandalwood oil, known for its cooling and anti-inflammatory properties that promote deep healing.",
  },
  {
    name: "Lotion Massage",
    price: 1500,
    desc: "A silky-smooth massage with a rich moisturizing lotion that hydrates and softens skin while relieving tension.",
  },
  {
    name: "Cream Massage",
    price: 1500,
    desc: "Indulge in a nurturing massage using a premium cream for deep hydration, skin rejuvenation, and complete relaxation.",
  },
  {
    name: "Ayurvedic Oil Massage",
    price: 1500,
    desc: "Rooted in ancient Ayurvedic traditions, this therapeutic massage uses herbal oils to balance the body's energies and promote holistic wellness.",
  },
];

const premiumServices = [
  {
    name: "Four Hand Massage",
    price: 2000,
    desc: "An extraordinary synchronized massage performed by two therapists with perfectly coordinated movements — a uniquely luxurious experience.",
  },
  {
    name: "Deep Tissue Massage",
    price: 2000,
    desc: "An extraordinary synchronized massage performed by two therapists with perfectly coordinated movements — a uniquely luxurious experience.",
  },
  {
    name: "Thai Massage",
    price: 2000,
    desc: "A rejuvenating treatment using fresh coffee grounds to exfoliate, firm, and energize the skin, leaving it glowing and revitalized.",
  },
  {
    name: "Coffee Body Massage",
    price: 2000,
    desc: "A rejuvenating treatment using fresh coffee grounds to exfoliate, firm, and energize the skin, leaving it glowing and revitalized.",
  },
  {
    name: "Normal Massage + Body Scrub + Shower Assistance",
    price: 1500,
    desc: "The ultimate pampering package — a relaxing massage followed by an exfoliating body scrub and professional shower assistance for total renewal.",
  },
  {
    name: "Moroccan Bath",
    price: 1200,
    desc: "An authentic hammam ritual using black soap and kessa glove to deeply cleanse, smooth, and brighten the skin from head to toe.",
  },
  {
    name: "Massage with Moroccan Bath",
    price: 2000,
    desc: "The perfect wellness combination — a full-body massage paired with the signature Moroccan hammam ritual for complete body rejuvenation.",
  },
];

const waxingServices = [
  { name: "Under Arms Waxing", price: 500 },
  { name: "Bikini Waxing", price: 800 },
  { name: "Under Arms + Bikini (Both)", price: 1000 },
];

export default function ServicesPage() {
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
              "radial-gradient(circle at 20% 50%, rgba(184,148,31,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)",
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
            ✦ Treatments & Pricing
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
            Our Services
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
            Choose from our carefully curated menu of wellness treatments, each
            designed to restore, rejuvenate, and revitalize.
          </p>
        </div>
      </section>

      {/* Note Banner */}
      <div
        style={{
          background: "rgba(184,148,31,0.1)",
          borderBottom: "1px solid rgba(184,148,31,0.2)",
          padding: "0.85rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}
        >
          ✦ If Shower Assistance By Staff Is Required for Any Standard Massage,
          An Additional{" "}
          <strong style={{ color: "var(--gold)" }}>NPR 500</strong> Will Be
          Charged.
        </p>
      </div>

      {/* Massage Services */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              ✦ Standard Treatments
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "var(--olive-dark)",
                fontWeight: 400,
                marginBottom: "0.8rem",
              }}
            >
              Massage Therapies
            </h2>
            <div className="gold-divider" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {massageServices.map((s) => (
              <div
                key={s.name}
                className="service-card"
                style={{
                  background: "white",
                  border: "1px solid rgba(184,148,31,0.12)",
                  borderRadius: "4px",
                  padding: "1.8rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background:
                      "linear-gradient(180deg, var(--gold), var(--olive-light))",
                    borderRadius: "4px 0 0 4px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.7rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      color: "var(--olive-dark)",
                      fontWeight: 500,
                      flex: 1,
                    }}
                  >
                    {s.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      color: "var(--gold)",
                      fontWeight: 600,
                      marginLeft: "1rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    NPR {s.price.toLocaleString()}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #EDE5D5 0%, #E0D5BF 100%)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              ✦ Elevated Experiences
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "var(--olive-dark)",
                fontWeight: 400,
                marginBottom: "0.8rem",
              }}
            >
              Premium Services
            </h2>
            <div className="gold-divider" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {premiumServices.map((s) => (
              <div
                key={s.name}
                className="service-card"
                style={{
                  background: "white",
                  border: "1px solid rgba(184,148,31,0.2)",
                  borderRadius: "4px",
                  padding: "1.8rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      "linear-gradient(90deg, var(--gold), var(--gold-light))",
                  }}
                />
                <div
                  style={{ position: "absolute", top: "1rem", right: "1rem" }}
                >
                  <span
                    style={{
                      background: "rgba(184,148,31,0.1)",
                      color: "var(--gold)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "20px",
                      border: "1px solid rgba(184,148,31,0.3)",
                    }}
                  >
                    Premium
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.7rem",
                    paddingRight: "5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      color: "var(--olive-dark)",
                      fontWeight: 500,
                    }}
                  >
                    {s.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {s.desc}
                </p>
                <span
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.3rem",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  NPR {s.price.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waxing Services */}
      <section
        className="section-padding"
        style={{ background: "var(--cream)" }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              ✦ Beauty Services
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "var(--olive-dark)",
                fontWeight: 400,
                marginBottom: "0.8rem",
              }}
            >
              Waxing Services
            </h2>
            <div className="gold-divider" />
          </div>
          <div
            style={{
              background: "white",
              border: "1px solid rgba(184,148,31,0.2)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {waxingServices.map((s, i) => (
              <div
                key={s.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.2rem 2rem",
                  borderBottom:
                    i < waxingServices.length - 1
                      ? "1px solid rgba(184,148,31,0.1)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "0.9rem",
                    color: "var(--text-dark)",
                  }}
                >
                  {s.name}
                </span>
                <span
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.2rem",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  NPR {s.price.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Book Your Treatment?
          </h2>
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "0.9rem",
              color: "rgba(245,240,232,0.7)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            Select your preferred service and let our expert therapists guide
            you to complete relaxation.
          </p>
          <Link href="/book-appointment" className="btn-gold">
            Book Appointment Now
          </Link>
        </div>
      </section>
    </>
  );
}
