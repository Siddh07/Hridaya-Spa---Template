import HeroCarousel from "@/components/HeroCarousel";
import QuoteCarousel from "@/components/QuoteCarousel";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hridaya Wellness & Spa Center | Premium Spa in Kathmandu",
  description:
    "Welcome to Hridaya Wellness & Spa Center — your sanctuary of peace in Kathmandu. We offer premium massages, body treatments, and holistic therapies at Greenland Chowk, Tokha Road.",
};

const featuredServices = [
  {
    icon: "✦",
    name: "Normal Oil Massage",
    desc: "Ancient healing with therapeutic oils to restore body balance and promote deep relaxation.",
    price: "NPR 1,000",
  },
  {
    icon: "✦",
    name: "Chandan oil  Massage",
    desc: "Traditional stretching and acupressure to energize your body and improve flexibility.",
    price: "NPR 1,400",
  },
  {
    icon: "✦",
    name: "Four Hand Massage",
    desc: "Synchronized luxury massage by two therapists simultaneously for ultimate indulgence.",
    price: "NPR 2,000",
  },
  {
    icon: "✦",
    name: "Ayurvedic Oil Massage",
    desc: "Exfoliating and rejuvenating coffee-infused body treatment that leaves skin glowing.",
    price: "NPR 1,500",
  },
  {
    icon: "✦",
    name: "Moroccan Bath",
    desc: "Deep cleansing ritual for silky smooth, radiant and deeply nourished skin.",
    price: "NPR 1,200",
  },
];

const whyUs = [
  {
    num: "01",
    title: "Experienced Therapists",
    desc: "Our certified therapists bring years of expertise in traditional and modern wellness techniques.",
  },
  {
    num: "02",
    title: "Serene Environment",
    desc: "Step into a tranquil sanctuary carefully designed to calm your senses from the moment you arrive.",
  },
  {
    num: "03",
    title: "Natural Products",
    desc: "We use only premium natural oils, herbs, and ingredients for the purest wellness experience.",
  },
  {
    num: "04",
    title: "Personalised Care",
    desc: "Every session is tailored to your body's unique needs, ensuring optimal results every time.",
  },
];

export default function HomePage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: "Hridaya Wellness & Spa Center",
    description:
      "Premium wellness and spa center offering massages, body treatments, and holistic therapies in Kathmandu.",
    url: "https://hridayaspa.com",
    telephone: "+9779805011700",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Greenland Chowk, Tokha Road",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    openingHours: "Mo-Su 09:00-20:00",
    priceRange: "NPR 1000 - 2500",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          minHeight: "100vh",
          background: "var(--cream)",
          display: "flex",
          alignItems: "center",
          paddingTop: "90px",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background circle top-right */}
        <div
          style={{
            position: "absolute",
            top: "-15vh",
            right: "-10vw",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(184,148,31,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Decorative background circle bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-10vh",
            left: "-10vw",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,92,43,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "3rem",
                  height: "1px",
                  background: "var(--gold)",
                }}
              />
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--olive-light)",
                  fontWeight: 500,
                }}
              >
                Premium Wellness Center
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--olive-dark)",
                marginBottom: "2rem",
                letterSpacing: "-0.01em",
              }}
            >
              Rediscover
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--gold)",
                }}
              >
                Balance
              </span>
              <br />& Serenity.
            </h1>

            {/* Divider */}
            <div
              style={{
                width: "5rem",
                height: "1px",
                background:
                  "linear-gradient(to right, var(--gold), transparent)",
                marginBottom: "1.8rem",
              }}
            />

            {/* Description */}
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "var(--text-muted)",
                maxWidth: "460px",
                marginBottom: "2.5rem",
              }}
            >
              Escape the city&apos;s rush. Experience our signature treatments
              designed to restore your harmony and awaken your purest vitality.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "3.5rem",
              }}
            >
              <Link href="/book-appointment" className="btn-gold">
                Reserve Your Time
              </Link>
              <Link href="/services" className="btn-outline">
                Our Treatments
              </Link>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "3rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid rgba(184,148,31,0.15)",
              }}
            >
              {[
                { num: "15+", label: "Rituals" },
                { num: "4.5★", label: "Rated Spa" },
                { num: "100%", label: "Natural" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "2.2rem",
                      color: "var(--olive-dark)",
                      lineHeight: 1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {stat.num}
                  </p>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image Panel */}
          <div
            className="hero-image-col"
            style={{ width: "100%", height: "100%" }}
          >
            <HeroCarousel />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-image-col { display: none !important; }
          }
        `}</style>
      </section>

      {/* ===== ABOUT QUOTE STRIP ===== */}
      <QuoteCarousel />

      {/* ===== FEATURED SERVICES ===== */}
      <section
        style={{
          background: "var(--cream)",
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Corner accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "300px",
            height: "300px",
            background: "var(--cream-dark)",
            borderRadius: "0 0 0 100%",
            opacity: 0.5,
          }}
        />

        <div
          style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
        >
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "2rem",
                  height: "1px",
                  background: "var(--gold)",
                }}
              />
              <span
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--olive-light)",
                  fontWeight: 500,
                }}
              >
                Curated For You
              </span>
              <span
                style={{
                  display: "block",
                  width: "2rem",
                  height: "1px",
                  background: "var(--gold)",
                }}
              />
            </div>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--olive-dark)",
                marginBottom: "1.2rem",
              }}
            >
              Our Signature{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
                Services
              </span>
            </h2>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Every treatment is a journey toward complete restoration — crafted
              to soothe, heal, and revitalize your entire being.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredServices.map((service) => (
              <div
                key={service.name}
                className="service-card"
                style={{
                  background: "white",
                  border: "1px solid rgba(184,148,31,0.12)",
                  borderRadius: "4px",
                  padding: "2.2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Left gold accent bar */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background:
                      "linear-gradient(to bottom, var(--gold), var(--olive-light))",
                    borderRadius: "4px 0 0 4px",
                  }}
                />

                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {service.icon} Treatment
                </p>
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.5rem",
                    color: "var(--olive-dark)",
                    fontWeight: 500,
                    marginBottom: "0.7rem",
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.83rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {service.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "1.2rem",
                    borderTop: "1px solid rgba(184,148,31,0.1)",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "0.55rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginBottom: "2px",
                      }}
                    >
                      Starting from
                    </span>
                    <span
                      style={{
                        fontFamily: "Cormorant Garamond, serif",
                        fontSize: "1.5rem",
                        color: "var(--olive-dark)",
                        fontWeight: 600,
                      }}
                    >
                      {service.price}
                    </span>
                  </div>
                  <Link
                    href="/book-appointment"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(184,148,31,0.4)",
                      paddingBottom: "2px",
                      transition: "color 0.3s",
                    }}
                  >
                    Reserve →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/services" className="btn-outline">
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--olive-dark) 0%, #3A4C1E 100%)",
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative angled panel */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "30%",
            height: "100%",
            background: "rgba(74,92,43,0.25)",
            transform: "skewX(-8deg) translateX(20%)",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="why-grid"
          >
            {/* Left — Headline */}
            <div>
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(212,175,55,0.7)",
                  marginBottom: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "2rem",
                    height: "1px",
                    background: "rgba(212,175,55,0.5)",
                  }}
                />
                Our Promise
              </p>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                }}
              >
                Why Choose{" "}
                <span
                  style={{ fontStyle: "italic", color: "var(--gold-light)" }}
                >
                  Hridaya?
                </span>
              </h2>
              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.85,
                  color: "rgba(245,240,232,0.65)",
                  maxWidth: "380px",
                  marginBottom: "2.5rem",
                }}
              >
                We go beyond standard therapies. Our approach weaves together
                ancient wisdom, premium natural elements, and profound respect
                for your personal wellness journey.
              </p>
              <div
                style={{
                  width: "4rem",
                  height: "1px",
                  background:
                    "linear-gradient(to right, var(--gold), transparent)",
                }}
              />
            </div>

            {/* Right — Four pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2.5rem",
              }}
            >
              {whyUs.map((item) => (
                <div key={item.title} className="why-item">
                  <p
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      color: "rgba(184,148,31,0.2)",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.num}
                  </p>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      color: "var(--cream)",
                      fontWeight: 400,
                      marginBottom: "0.8rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.8rem",
                      lineHeight: 1.75,
                      color: "rgba(245,240,232,0.55)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .why-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        style={{
          background: "var(--cream)",
          padding: "6rem 1.5rem",
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
              "radial-gradient(circle at center, rgba(184,148,31,0.04) 0%, transparent 60%)",
          }}
        />

        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            background: "white",
            border: "1px solid rgba(184,148,31,0.15)",
            borderRadius: "4px",
            padding: "4rem 3rem",
            boxShadow: "0 20px 80px rgba(46,58,26,0.06)",
            position: "relative",
          }}
        >
          {/* Top decorative element */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              background: "var(--cream)",
              border: "1px solid rgba(184,148,31,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
            }}
          >
            🌿
          </div>

          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--olive-light)",
              marginBottom: "1.5rem",
              marginTop: "0.5rem",
            }}
          >
            Ready for Tranquility?
          </p>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 300,
              color: "var(--olive-dark)",
              marginBottom: "1.2rem",
              lineHeight: 1.2,
            }}
          >
            Begin Your Wellness{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Journey
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.88rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "420px",
              margin: "0 auto 2.5rem",
            }}
          >
            Book your appointment today and experience professional wellness
            therapies designed exclusively for you.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/book-appointment" className="btn-gold">
              Reserve an Appointment
            </Link>
            <a href="tel:+9779805011700" className="btn-outline">
              ☏ Call: 9805011700
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
