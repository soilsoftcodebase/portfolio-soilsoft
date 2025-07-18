import React from "react";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  //   setIsMenuOpen(false);
  // };

  return (
    <section
      id="hero"
      style={{
        background:
          'linear-gradient(135deg, rgba(29, 29, 29, 0.75) 0%, rgba(5, 36, 33, 0.75) 100%), url("https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover',
        paddingTop: "6rem",
        paddingBottom: "4rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        position: "relative",
      }}
    >
      {/* Overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, hsla(158, 88.50%, 10.20%, 0.75) 0%, rgba(3, 61, 56, 0.75) 100%)",
          zIndex: 1,
        }}
      ></div>

      <div className="container">
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Portfolio Badge */}
          {/* <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '2rem',
            color: 'white'
          }}>
            📁 PORTFOLIO SHOWCASE
          </div> */}

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              lineHeight: "1.1",
              marginBottom: "1.5rem",
              color: "white",
              marginTop: "4rem",
            }}
            className="hero-title"
          >
            SoilSoft Portfolio
            <br />
          </h1>

          <p
            style={{
              fontSize: "1.5rem",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "1rem",
              lineHeight: "1.6",
              fontWeight: "300",
            }}
          >
            Showcasing Our Innovation in AI Solutions & Enterprise Software
          </p>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "3rem",
              lineHeight: "1.6",
            }}
          >
            Explore our flagship products, cutting-edge services, and successful
            client implementations
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            <a
              href="https://www.soilsoft.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white",
              }}
            >
              Visit Main Website
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            {/* <a
              href="https://www.apigen.soilsoft.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                color: "white",
                boxShadow: "0 4px 15px rgba(96, 165, 250, 0.3)",
              }}
            >
              Explore APIGen
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a> */}
            <button
              onClick={scrollToProducts}
              className="btn btn-outline"
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                cursor: "pointer",
              }}
            >
              View Portfolio
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>

          {/* Portfolio Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
            className="portfolio-highlights"
          >
            {/* <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "1.5rem",
                borderRadius: "1rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                🏢
              </div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                }}
              >
                50+
              </div>
              <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                Enterprise Clients
              </div>
            </div> */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "10px",
                borderRadius: "1rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={scrollToProducts}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                🤖
              </div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                }}
              >
                Products
              </div>
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "10px",
                borderRadius: "1rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={scrollToServices}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                📱
              </div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                }}
              >
                Services
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.8rem !important;
          }
          .portfolio-highlights {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
