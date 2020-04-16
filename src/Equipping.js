import _ from 'lodash'
import React, { useState } from 'react'
import './App.css'
import data from './data.json'

function Equipping() {
  const [classes, setClasses] = useState(data)

  const equipping = classes.data.filter(
    e => e.relationships && e.relationships.group_type.data.id === '90554'
  )
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
                href={`https://citybiblechurch.churchcenter.com/groups/equipping-classes/${_.kebabCase(
                  card.attributes.name
                )}`}
                className="d-b"
              >
                <div className="card-list-item__image">
                  <img src={card.attributes.header_image.medium} />
                </div>
                <div className="d-f jc-sb ai-fs">
                  <h1 className="pr-1 fs-3 mb-0 lh-1.25 card-list-item__title">
                    {card.attributes.name}
                  </h1>
                  <span
                    className={
                      card.attributes.enrollment_open
                        ? 'badge ml-1 open-badge'
                        : 'badge ml-1 closed-badge'
                    }
                    data-css-z6vvyp=""
                  >
                    {card.attributes.enrollment_open ? 'open' : 'closed'}
                  </span>
                </div>
                <div className="c-gray_800 fs-13">
                  {card.attributes.schedule}
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
