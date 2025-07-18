import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#111827',
      color: 'white',
      padding: '3rem 0 1rem'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }} className="footer-grid">
          {/* Company Info */}
          <div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#60a5fa',
              marginBottom: '1rem',
              cursor: 'pointer'
            }} onClick={scrollToTop}>
              SoilSoft<span style={{ color: '#34d399' }}>Technologies</span>
            </div>
            <p style={{
              color: '#d1d5db',
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              This portfolio showcases our innovative AI solutions, 
              enterprise software, and automation services. Visit our main website for complete information.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {['LinkedIn', 'Twitter', 'GitHub'].map((platform, index) => (
                <a 
                  key={index}
                  href="#"
                  style={{
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.375rem',
                    color: '#d1d5db',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '0.875rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = '#d1d5db';
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Products
            </h4>
            <ul style={{
              listStyle: 'none'
            }}>
              {[
                { name: 'APIGen', href: 'https://www.apigen.soilsoft.ai' },
                { name: 'Custom ERP Solutions', href: '#' },
                { name: 'AI Agents', href: '#' },
                { name: 'Enterprise Software', href: '#' }
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    style={{
                      color: '#d1d5db',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none'
            }}>
              {[
                'Automation as a Service',
                'Mobile App Development',
                'E-Commerce Solutions',
                'Custom Development'
              ].map((service, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="#services"
                    style={{
                      color: '#d1d5db',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#34d399'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Contact
            </h4>
            <div style={{
              color: '#d1d5db',
              lineHeight: '1.6'
            }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Website:</strong> www.soilsoft.ai
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong>Email:</strong> contact@soilsoft.ai
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Location:</strong> Global Remote Team
              </div>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
                  color: 'white',
                  fontSize: '0.875rem',
                  padding: '0.5rem 1rem'
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            color: '#9ca3af',
            fontSize: '0.875rem'
          }}>
            © {currentYear} SoilSoft Technologies. All rights reserved.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            fontSize: '0.875rem'
          }}>
            <a 
              href="#"
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
              onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
            >
              Privacy Policy
            </a>
            <a 
              href="#"
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
              onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;