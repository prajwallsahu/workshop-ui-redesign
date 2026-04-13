import { features } from '../data'

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Design improvements</p>
          <h2>Built around clarity, responsiveness, and better user flow.</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features