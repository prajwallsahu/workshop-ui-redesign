function WorkshopCard({ workshop }) {
  return (
    <article className="workshop-card">
      
      {/* Top Row */}
      <div className="card-badge-row">
        <span className="badge">{workshop.category}</span>
        <span className="mode">{workshop.mode}</span>
      </div>

      {/* Title */}
      <h3 className="card-title">{workshop.title}</h3>

      {/* Description */}
      <p className="workshop-description">
        {workshop.description}
      </p>

      {/* Details */}
      <div className="card-details">
        <div>
          <span className="detail-label">Date</span>
          <strong>{workshop.date}</strong>
        </div>

        <div>
          <span className="detail-label">Seats</span>
          <strong>{workshop.seats}</strong>
        </div>

        <div>
          <span className="detail-label">Level</span>
          <strong>{workshop.level}</strong>
        </div>
      </div>

      {/* Button */}
      <button className="card-btn">
        Book Workshop
      </button>
    </article>
  )
}

export default WorkshopCard