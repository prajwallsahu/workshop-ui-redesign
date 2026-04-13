import { useState } from 'react'
import { workshops } from '../data'
import WorkshopCard from './WorkshopCard'

function WorkshopSection() {
  const [search, setSearch] = useState('')

  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="workshops-section" id="workshops">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Upcoming sessions</p>
          <h2>Discover workshops without getting lost in clutter.</h2>
          <p>
            The layout highlights the most important information first so users can
            compare options quickly on both desktop and mobile.
          </p>

          <input
            type="text"
            placeholder="Search workshops..."
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="workshop-grid">
          {filteredWorkshops.length > 0 ? (
            filteredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))
          ) : (
            <p>No workshops found.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default WorkshopSection