import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechCorp Solutions',
      company: 'TechCorp Solutions',
      content: 'SoilSoft Technologies transformed our testing infrastructure with APIGen. The automation capabilities reduced our testing time by 75% while improving coverage significantly.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      position: 'Operations Director, GlobalManufacturing Inc.',
      company: 'GlobalManufacturing Inc.',
      content: 'The custom ERP solution delivered by SoilSoft has streamlined our operations across 12 locations. Outstanding technical expertise and project management.',
      rating: 5,
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Rodriguez',
      position: 'Founder, InnovateRetail',
      company: 'InnovateRetail',
      content: 'Their e-commerce platform exceeded our expectations. The mobile app development team created a seamless experience that boosted our sales by 40%.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const caseStudies = [
    {
      title: 'Fortune 500 API Testing Revolution',
      description: 'Reduced testing cycles from weeks to hours for a major financial services company',
      metric: '75% Faster Testing',
      industry: 'Financial Services'
    },
    {
      title: 'Manufacturing ERP Transformation',
      description: 'Integrated 12 global locations with a unified inventory management system',
      metric: '50% Cost Reduction',
      industry: 'Manufacturing'
    },
    {
      title: 'E-Commerce Platform Scale-Up',
      description: 'Built scalable platform handling 1M+ daily transactions',
      metric: '300% Growth',
      industry: 'Retail'
    }
  ];

  return (
    <section className="section-padding" style={{
      background: 'white'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #EA580C 0%, #DC2626 100%)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            🏆 CLIENT PORTFOLIO
          </div>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Portfolio <span className="text-gradient">Success Stories</span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Real client testimonials and case studies from our project portfolio
          </p>
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }} className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card"
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
              }}
            >
              {/* Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '2rem',
                color: '#e5e7eb'
              }}>
                "
              </div>

              {/* Rating */}
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '1rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#fbbf24', fontSize: '1.25rem' }}>⭐</span>
                ))}
              </div>

              {/* Content */}
              <p style={{
                color: '#374151',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <div style={{
                    fontWeight: '600',
                    color: '#1f2937'
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    {testimonial.position}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#2563EB',
                    fontWeight: '500'
                  }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Case Studies
          </h3>
          <p style={{
            color: '#6b7280',
            fontSize: '1.125rem'
          }}>
            Real results from real clients
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }} className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>
              
              <div style={{
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem'
                }}>
                  {study.metric}
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {study.title}
                </h4>
                <p style={{
                  marginBottom: '1rem',
                  opacity: 0.9
                }}>
                  {study.description}
                </p>
                <div style={{
                  fontSize: '0.875rem',
                  opacity: 0.8,
                  fontWeight: '500'
                }}>
                  Industry: {study.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .case-studies-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;