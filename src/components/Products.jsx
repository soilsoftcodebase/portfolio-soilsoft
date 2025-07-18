import React, { useState } from "react";

const Products = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoPlay = () => {
    setShowVideo(true);
  };

  return (
    <section
      id="products"
      className="section-padding"
      style={{
        background: "white",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          {/* <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            🚀 PORTFOLIO SHOWCASE
          </div> */}
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#1f2937",
            }}
          >
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Explore our flagship products and innovative solutions from our main
            portfolio
          </p>
        </div>

        {/* Featured Product - APIGen */}
        <div
          className="card"
          style={{
            marginBottom: "4rem",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            border: "2px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="featured-grid"
          >
            <div>
              {/* <div
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "2rem",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                🚀 FLAGSHIP PRODUCT
              </div> */}

              <h3
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#1f2937",
                }}
              >
                APIGen
              </h3>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                  lineHeight: "1.7",
                }}
              >
                Revolutionary API testing platform that automates testing
                workflows, generates comprehensive test suites, and ensures
                robust API reliability for enterprise applications.
              </p>

              {/* Key Features */}
              <ul
                style={{
                  listStyle: "none",
                  marginBottom: "2rem",
                }}
              >
                {[
                  "Automated API test generation",
                  "Real-time performance monitoring",
                  "Comprehensive reporting dashboard",
                  "Enterprise-grade security testing",
                ].map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                      color: "#374151",
                    }}
                  >
                    <span
                      style={{
                        color: "#10b981",
                        fontSize: "1.25rem",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://apigen.soilsoft.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit APIGen
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
                <button onClick={handleVideoPlay} className="btn btn-secondary">
                  Watch Demo
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Section */}
            <div>
              {!showVideo ? (
                <div className="video-thumbnail" onClick={handleVideoPlay}>
                  <img
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="APIGen Demo Video Thumbnail"
                  />
                  <div className="play-button"></div>
                </div>
              ) : (
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/Gkn8zvQki1I?si=RJseYydjYG13SGK7"
                    title="APIGen Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Other Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
          }}
          className="products-grid"
        >
          {/* Custom Enterprise Solutions */}
          <div className="card">
            <div
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "0.75rem",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <img
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Custom Enterprise Solutions"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              Custom Enterprise Solutions
            </h3>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              Tailored ERP systems and inventory management solutions designed
              to streamline your business operations and improve efficiency.
            </p>

            <ul
              style={{
                listStyle: "none",
                marginBottom: "2rem",
              }}
            >
              {[
                "Customized ERP Systems",
                "Inventory Management",
                "Business Process Automation",
                "Integration Services",
              ].map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                    color: "#374151",
                    fontSize: "0.9rem",
                  }}
                >
                  <span style={{ color: "#10b981" }}>•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* <button className="btn btn-outline" style={{ width: "100%" }}>
              Learn More
            </button> */}
          </div>

          {/* AI Agents */}
          <div className="card">
            <div
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "0.75rem",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Agents and Automation"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              AI Agents
            </h3>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              Intelligent automation agents that handle complex workflows,
              decision-making processes, and customer interactions with
              precision.
            </p>

            <ul
              style={{
                listStyle: "none",
                marginBottom: "2rem",
              }}
            >
              {[
                "Intelligent Process Automation",
                "Customer Service Bots",
                "Data Analysis Agents",
                "Workflow Optimization",
              ].map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                    color: "#374151",
                    fontSize: "0.9rem",
                  }}
                >
                  <span style={{ color: "#10b981" }}>•</span>
                  {feature}
                </li>
              ))}
            </ul>
            {/* 
            <button className="btn btn-outline" style={{ width: "100%" }}>
              Explore AI Solutions
            </button> */}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
