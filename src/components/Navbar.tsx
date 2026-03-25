"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/book-appointment", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(245, 240, 232, 0.97)"
          : "rgba(245, 240, 232, 0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(184, 148, 31, 0.2)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "75px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo1.png"
            alt="Hridaya Wellness & Spa Center Logo"
            width={185}
            height={120}
            style={{ objectFit: "contain" }}
          />
          {/* <div>
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "var(--olive-dark)",
                letterSpacing: "0.05em",
                lineHeight: 1.1,
              }}
            >
              HRIDAYA
            </p>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                color: "var(--gold)",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Wellness & Spa Center
            </p>
          </div> */}
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color:
                    pathname === link.href ? "var(--gold)" : "var(--text-dark)",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/book-appointment"
              className="btn-gold"
              style={{ fontSize: "0.72rem", padding: "0.65rem 1.5rem" }}
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                height: "2px",
                background: menuOpen ? "var(--gold)" : "var(--olive-dark)",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: "var(--olive-dark)",
                opacity: menuOpen ? 0 : 1,
                transition: "all 0.3s",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: menuOpen ? "var(--gold)" : "var(--olive-dark)",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--cream)",
            borderTop: "1px solid rgba(184,148,31,0.2)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(184,148,31,0.1)",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color:
                  pathname === link.href ? "var(--gold)" : "var(--text-dark)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-appointment"
            onClick={() => setMenuOpen(false)}
            className="btn-gold"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "1rem",
              fontSize: "0.78rem",
              padding: "0.85rem 1.5rem",
            }}
          >
            Book Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
