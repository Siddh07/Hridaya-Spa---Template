import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing — Massage & Spa Treatments",
  description:
    "Explore our full range of spa services at Hridaya Wellness Center. From relaxing oil massages to premium Chandan Oil massage, Moroccan Bath, and more. Transparent pricing in Kathmandu.",
};

const massageServices = [
  {
    name: "Normal Oil Massage",
    price: 1000,
    desc: "A relaxing full-body massage with natural oils to ease stress, relax muscles, and refresh your body.",
  },

  {
    name: "Dry Massage",
    price: 1000,
    desc: "A gentle massage without oil to relax your body, relieve tension, and calm your mind.",
  },
  {
    name: "Jasmine / Lavender / Coconut Oil",
    price: 1500,
    desc: "Calming aroma massage using jasmine, lavender, or coconut oil to soothe your body and mind.",
  },
  {
    name: "Lotion Massage",
    price: 1500,
    desc: "A smooth massage using rich lotion to hydrate your skin and relieve tension",
  },
  {
    name: "Cream Massage",
    price: 1500,
    desc: "Deeply nourishing massage with premium cream for soft skin and full relaxation.",
  },
  {
    name: "Ayurvedic Oil Massage",
    price: 1500,
    desc: "Based on ancient Ayurvedic traditions, using herbal oils to balance your body and promote wellness.",
  },
];

const signatureServices = [
  {
    name: "Chandan Oil Massage",
    price: 1400,
    desc: "A luxurious massage with sacred Chandan (Sandalwood) oil — known for its cooling, healing and anti-inflammatory properties. Experience this rare wellness ritual, now available for the first time in Nepal. (Get 1 FREE Chandan Oil Massage on 5 Sessions)",
    firstInNepal: true,
    promo: "Buy 5 Get 1 Free",
  },
];

const premiumServices = [
  {
    name: "Four Hand Massage",
    price: 2000,
    desc: "Two therapists working together for a perfectly coordinated massage — ultimate luxury and relaxation.",
  },
  {
    name: "Deep Tissue Massage",
    price: 2000,
    desc: "Specialized massage to release deep muscle tension and relieve stiffness.",
  },
  {
    name: "Thai Massage",
    price: 2000,
    desc: "Traditional stretching massage that improves flexibility, energy, and relieves body fatigue.",
  },
  {
    name: "Moroccan Bath",
    price: 1200,
    desc: "An authentic hammam ritual using black soap and kessa glove to deeply cleanse, smooth, and brighten the skin from head to toe.",
  },
  {
    name: "Normal Massage + Body Scrub + Shower Assistance",
    price: 1500,
    desc: "A complete pampering package — relaxing massage, body scrub, and shower assistance for full renewal.",
  },
  {
    name: "Massage with Moroccan Bath",
    price: 2000,
    desc: "The perfect wellness combination — a full-body massage paired with the signature Moroccan hammam ritual for complete body rejuvenation.",
  },
];

const wellnessPackages = [
  {
    name: "Hridaya Wellness Special Package",
    price: 4000,
    desc: "The ultimate wellness journey: Deep Tissue or Thai Massage + Chandan Oil + Moroccan Bath for total rejuvenation.",
    items: ["Deep Tissue or Thai Massage", "Chandan Oil", "Moroccan Bath"],
  },
];

const waxingServices = [
  { name: "Underarms", price: 500 },
  { name: "Bikini", price: 800 },
  { name: "Underarms + Bikini", price: 1000 },
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
          ✦ If Shower Assistance By Staff Is Needed for above services, An
          Additional <strong style={{ color: "var(--gold)" }}>NPR 500</strong>{" "}
          Will Be Charged.
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
              ✦ Essential Care
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
              Massage Types
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

      {/* Signature Services */}
      <section className="section-padding" style={{ background: "white" }}>
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
              ✦ Signature Rituals
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
              Hridaya Signature ⭐
            </h2>
            <div className="gold-divider" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {signatureServices.map((s) => (
              <div
                key={s.name}
                className="service-card"
                style={{
                  background: "var(--cream)",
                  border: "1px solid rgba(184,148,31,0.45)",
                  borderRadius: "4px",
                  padding: "2.5rem",
                  position: "relative",
                  maxWidth: "600px",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, var(--gold), var(--gold-light))",
                      color: "white",
                      fontSize: "0.65rem",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "0.3rem 1rem",
                      borderRadius: "20px",
                    }}
                  >
                    ✦ {s.promo}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.8rem",
                    color: "var(--olive-dark)",
                    fontWeight: 500,
                    marginBottom: "1rem",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  {s.desc}
                </p>
                <span
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.6rem",
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

      {/* Wellness Special Package */}
      <section
        className="section-padding"
        style={{
          background: "var(--olive-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage: "url('/logo1.png')",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}
        >
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
              ✦ The Ultimate Ritual
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "var(--cream)",
                fontWeight: 400,
                marginBottom: "0.8rem",
              }}
            >
              Hridaya Wellness Special
            </h2>
            <div className="gold-divider" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {wellnessPackages.map((s) => (
              <div
                key={s.name}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "8px",
                  padding: "3rem",
                  maxWidth: "800px",
                  width: "100%",
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "2.2rem",
                    color: "var(--gold-light)",
                    fontWeight: 400,
                    marginBottom: "1.5rem",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(245,240,232,0.8)",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  {s.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "1rem",
                    marginBottom: "2.5rem",
                  }}
                >
                  {s.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.2)",
                        color: "var(--gold-light)",
                        padding: "0.5rem 1rem",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        fontFamily: "Montserrat",
                      }}
                    >
                      ✦ {item}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "2.5rem",
                      color: "var(--cream)",
                      fontWeight: 600,
                      marginBottom: "1.5rem",
                    }}
                  >
                    NPR {s.price.toLocaleString()}
                  </span>
                  <Link
                    href="/book-appointment"
                    className="btn-gold"
                    style={{ padding: "1rem 3rem" }}
                  >
                    Experience Absolute Bliss
                  </Link>
                </div>
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
