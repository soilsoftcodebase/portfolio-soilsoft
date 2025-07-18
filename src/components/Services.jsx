import React from "react";

const Services = () => {
  const services = [
    {
      title: "Automation as a Service",
      description:
        "Streamline your business processes with intelligent automation solutions that reduce manual work and increase efficiency.",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Process Analysis & Optimization",
        "Custom Automation Workflows",
        "Integration with Existing Systems",
        "Performance Monitoring",
      ],
      icon: "🤖",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      image:
        "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
      ],
      icon: "📱",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Complete online store development and management solutions with modern features and seamless payment integration.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Custom Online Stores",
        "Payment Gateway Integration",
        "Inventory Management",
        "Analytics & Reporting",
      ],
      icon: "🛒",
    },
    {
      title: "Custom Product Development",
      description:
        "Tailored software solutions designed specifically for your unique business requirements and objectives.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Requirement Analysis",
        "Custom Architecture Design",
        "Agile Development Process",
        "Ongoing Support & Maintenance",
      ],
      icon: "⚙️",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
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
            background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            💼 SERVICE PORTFOLIO
          </div> */}
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#1f2937",
            }}
          >
            Service <span className="text-gradient">Capabilities</span>
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Showcasing our comprehensive service offerings and technical
            expertise
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
              style={{
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Service Image */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  position: "relative",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "50%",
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  {service.icon}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: "#1f2937",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  marginBottom: "1.5rem",
                  lineHeight: "1.6",
                }}
              >
                {service.description}
              </p>

              {/* Features List */}
              <ul
                style={{
                  listStyle: "none",
                  marginBottom: "2rem",
                  textAlign: "left",
                }}
              >
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
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

              <button className="btn btn-secondary" style={{ width: "100%" }}>
                Get Started
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
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
            padding: "3rem",
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#1f2937",
            }}
          >
            Ready to Transform Your Business?
          </h3>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#6b7280",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Let's discuss how our services can accelerate your digital
            transformation and drive sustainable growth for your organization.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn"
            style={{
              background: "linear-gradient(135deg, #EA580C 0%, #DC2626 100%)",
              color: "white",
              boxShadow: "0 4px 15px rgba(234, 88, 12, 0.3)",
            }}
          >
            Start Your Project
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
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
