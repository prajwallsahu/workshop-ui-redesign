import { stats } from '../data'

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <article className="stat-card" key={index}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Stats