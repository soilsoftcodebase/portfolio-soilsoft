import React, { useState, useEffect } from "react";
import SSLogo from "../assets/SSLogo.webp";
import Headline from "../assets/headline.png";
import APIGenThumbnail from "../assets/apigenlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(229, 231, 235, 0.5)",
        zIndex: 1000,
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <div className="logo-container" onClick={() => scrollToSection("hero")}>
          <img src={SSLogo} className="logo-img" alt="SoilSoft" />
        </div>
        <div className="headline-container">
          <img src={Headline} className="headline-img" alt="SoilSoft" />
        </div>
        {/* Desktop Navigation */}
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          <button
            onClick={() => scrollToSection("products")}
            style={{
              background: "none",
              border: "none",
              color: "#374151",
              fontWeight: "500",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("services")}
            style={{
              background: "none",
              border: "none",
              color: "#374151",
              fontWeight: "500",
              cursor: "pointer",
              transition: "color 0.3s ease",
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
            onMouseLeave={(e) => (e.target.style.color = "#374151")}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn-primary"
          >
            Contact Us
          </button>
        </div> */}
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#374151",
          }}
          className="mobile-menu-toggle"
        >
          ☰
        </button>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "white",
              borderBottom: "1px solid #e5e7eb",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              padding: "1rem",
            }}
            className="mobile-nav"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <button
                onClick={() => scrollToSection("products")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#374151",
                  fontWeight: "500",
                  cursor: "pointer",
                  padding: "0.5rem",
                  textAlign: "left",
                  fontSize: "1rem",
                }}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("services")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#374151",
                  fontWeight: "500",
                  cursor: "pointer",
                  padding: "0.5rem",
                  textAlign: "left",
                  fontSize: "1rem",
                }}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-primary"
                style={{ justifyContent: "center" }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
