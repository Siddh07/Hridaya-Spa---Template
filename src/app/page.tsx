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
    desc: "A relaxing full-body massage with natural oils to ease stress, relax muscles, and refresh your body.",
    price: "NPR 1,000",
  },
  {
    icon: "✦",
    name: "Chandan Oil Massage",
    desc: "A luxurious massage with Chandan oil — cooling, healing, and deeply restorative. Now available for the first time in Nepal at Hridaya Spa.",
    price: "NPR 1,400",
    firstInNepal: true,
  },
  {
    icon: "✦",
    name: "Four Hand Massage",
    desc: "Two therapists working together for a perfectly coordinated massage — ultimate luxury and relaxation.",
    price: "NPR 2,000",
  },
  {
    icon: "✦",
    name: "Ayurvedic Oil Massage",
    desc: "Based on ancient Ayurvedic traditions, using herbal oils to balance your body and promote wellness.",
    price: "NPR 1,500",
  },
  {
    icon: "✦",
    name: "Moroccan Bath",
    desc: "Authentic hammam ritual with black soap and kessa glove to cleanse, smooth, and brighten your skin.",
    price: "NPR 1,200",
  },
];

const whyUs = [
  {
    num: "01",
    title: "Experienced Therapists",
    desc: "Our well-trained therapists give massages that help you relax and feel refreshed.",
  },
  {
    num: "02",
    title: "Friendly Environment",
    desc: "Our staff is warm and welcoming so you feel at home from the moment you arrive",
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
              Hridaya
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--gold)",
                }}
              >
                Healing
              </span>
              <br />
              begins with touch.
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
              Take a break from your busy life. Our treatments help you relax
              your body and mind.
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
                { num: "5,000+", label: "Happy Customers" },
                { num: "4.6★", label: "Google Reviews" },
                { num: "100%", label: "Natural Products" },
                { num: "5+", label: "Expert Therapists" },
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
                  border: service.firstInNepal
                    ? "1px solid rgba(184,148,31,0.45)"
                    : "1px solid rgba(184,148,31,0.12)",
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

                {/* First in Nepal badge */}
                {service.firstInNepal && (
                  <div style={{ marginBottom: "0.7rem" }}>
                    <span
                      style={{
                        background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                        color: "white",
                        fontSize: "0.58rem",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        padding: "0.22rem 0.7rem",
                        borderRadius: "20px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      ✦ First in Nepal
                    </span>
                  </div>
                )}

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
                  marginBottom: "2rem",
                }}
              >
                Trusted by <strong style={{ color: "var(--gold-light)" }}>5,000+ customers</strong> — our professional therapists,
                natural products, and a truly relaxing environment will help you feel better from the very first visit.
              </p>
              {/* Mini trust badges */}
              <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                {[
                  { icon: "🏆", label: "5,000+ Customers" },
                  { icon: "🌿", label: "100% Natural Oils" },
                  { icon: "⭐", label: "4.6 Google Rating" },
                ].map((b) => (
                  <div
                    key={b.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.2)",
                      borderRadius: "20px",
                      padding: "0.3rem 0.8rem",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem" }}>{b.icon}</span>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.62rem", letterSpacing: "0.1em", color: "rgba(245,240,232,0.8)", textTransform: "uppercase", fontWeight: 500 }}>{b.label}</span>
                  </div>
                ))}
              </div>
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

      {/* ===== TESTIMONIALS ===== */}
      <section
        style={{
          background: "var(--cream)",
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(184,148,31,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <span style={{ display: "block", width: "2rem", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--olive-light)", fontWeight: 500 }}>
                Client Stories
              </span>
              <span style={{ display: "block", width: "2rem", height: "1px", background: "var(--gold)" }} />
            </div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 300, color: "var(--olive-dark)" }}>
              What Our{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Guests Say</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { name: "Priya Sharma", rating: 5, review: "The Ayurvedic oil massage was absolutely divine. The therapists are highly skilled and the ambiance is so peaceful. I left feeling completely renewed — will definitely be back!", service: "Ayurvedic Oil Massage" },
              { name: "Rajesh Thapa", rating: 5, review: "Tried the Four Hand Massage and it was beyond expectations. Both therapists were perfectly synchronized. Hridaya truly delivers a premium experience in Kathmandu.", service: "Four Hand Massage" },
              { name: "Sita Maharjan", rating: 5, review: "The Moroccan Bath left my skin incredibly smooth and glowing. The staff is warm, professional and truly caring. Best spa experience I've had!", service: "Moroccan Bath" },
            ].map((t) => (
              <div key={t.name} className="service-card" style={{ background: "white", border: "1px solid rgba(184,148,31,0.12)", borderRadius: "4px", padding: "2rem", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold), var(--olive-light))", borderRadius: "4px 4px 0 0" }} />
                <div style={{ color: "var(--gold)", fontSize: "1rem", marginBottom: "1rem", letterSpacing: "3px" }}>{"★".repeat(t.rating)}</div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontStyle: "italic", color: "var(--text-dark)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  &ldquo;{t.review}&rdquo;
                </p>
                <div style={{ width: "2rem", height: "1px", background: "rgba(184,148,31,0.3)", marginBottom: "1rem" }} />
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", fontWeight: 600, color: "var(--olive-dark)", marginBottom: "0.2rem" }}>{t.name}</p>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>{t.service}</p>
              </div>
            ))}
          </div>
        </div>
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
            Ready to Relax and Feel Better?
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
