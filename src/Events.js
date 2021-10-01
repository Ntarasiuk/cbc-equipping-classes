import React, { useEffect, useState } from 'react'
import './App.css'
import data from './data.json'

function Equipping() {
  const [classes, setClasses] = useState(data)

  async function fetchData() {
    const res = await fetch(
      'https://api.churchcenter.com/registrations/v2/events?order=starts_at&filter=active,not_hidden&per_page=100',
      {
        headers: {
          Authorization:
            'OrganizationToken dd9c6a67a03e20362ac8a1aaf7dd909843b64f5adbb16762c19642eb5cef53e0'
        }
      }
    )

    res
      .json()
      .then(res => {
        setClasses(res)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const equipping = classes.data
  return (
    <div
      className="w-100% table-loading-overlay"
      style={{ position: 'relative' }}
    >
      <div>
        <section className="card-list">
          {equipping.map(card => (
            <article className="card-list__item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={card.attributes.public_url}
                className="d-b"
              >
                <div className="card-list-item__image">
                  <img src={card.attributes.logo_url} alt="event cover" />
                </div>
                <div className="d-f jc-sb ai-fs">
                  <h1 className="pr-1 fs-3 mb-0 lh-1.25 card-list-item__title">
                    {card.attributes.name}
                  </h1>
                  <span
                    className={
                      card.attributes.registration_state === 'open'
                        ? 'badge ml-1 open-badge'
                        : 'badge ml-1 closed-badge'
                    }
                    data-css-z6vvyp=""
                  >
                    {card.attributes.registration_state ? 'open' : 'closed'}
                  </span>
                </div>
                <div className="c-gray_800 fs-13">
                  {card.attributes.event_time}
                </div>
              </a>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Equipping
