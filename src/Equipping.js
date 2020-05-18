import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import './App.css'
import data from './data.json'
import { fetchData } from './util'

function Equipping() {
  const [classes, setClasses] = useState(data)
  const [checked, setChecked] = useState(false)
  const getClasses = async () => {
    const classData = await fetchData()
    if (classData) setClasses(classData)
  }
  useEffect(() => {
    getClasses()
  }, [])

  const equipping = classes.data
    .filter(
      e => e.relationships && e.relationships.group_type.data.id === '90554'
    )
    .filter(
      e =>
        e.attributes.enrollment_open ||
        e.attributes.enrollment_open === !checked
    )
  return (
    <div
      className="w-100% table-loading-overlay"
      style={{ position: 'relative' }}
    >
      <div style={{ margin: '30px 0' }}>
        <input
          type="checkbox"
          id="enrollment-status"
          className="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="enrollment-status" className="checkbox-label">
          Include closed &amp; full groups
        </label>
      </div>
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
