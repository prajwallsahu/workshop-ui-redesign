function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Modern workshop booking experience</p>
          <h1>Find and book workshops effortlessly on any device.</h1>
          <p className="hero-description">
            A redesigned workshop portal focused on readability, mobile usability,
            accessibility, and a cleaner booking flow for students and coordinators.
          </p>

          <div className="hero-actions">
            <a href="#workshops" className="primary-btn">
              Explore Workshops
            </a>
            <a href="#features" className="secondary-btn">
              View Improvements
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span className="status-dot"></span>
            <span>Booking Portal Overview</span>
          </div>

          <div className="hero-mini-grid">
            <div className="mini-box">
              <h3>Simple UI</h3>
              <p>Clear actions for booking and browsing.</p>
            </div>
            <div className="mini-box">
              <h3>Responsive</h3>
              <p>Optimized for students on phones first.</p>
            </div>
            <div className="mini-box">
              <h3>Accessible</h3>
              <p>Better contrast, spacing, and structure.</p>
            </div>
            <div className="mini-box">
              <h3>Fast</h3>
              <p>Minimal dependencies and lightweight code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero