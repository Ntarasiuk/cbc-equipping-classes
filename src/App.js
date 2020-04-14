import _ from 'lodash'
import React, { useState } from 'react'
import './App.css'
import data from './data.json'

const App = () => {
  const [hasError, setErrors] = useState(false)
  const [classes, setClasses] = useState(data)

  async function fetchData() {
    const res = await fetch(
      'https://api.planningcenteronline.com/groups/v2/groups?per_page=100',
      {
        headers: {
          Authorization:
            'Basic ZTM1NTliNjhhMjVhN2Y5MDk4YTY0ODQ1ZGEzMTNmNWRkNjRhZjY2Yzg2YzIwNTU3MzQ5ZGI5ZGNkMTQ2Njk2NTozNDNmYTgzZTE1OWI5MjJlZjA5MjdjZWM3YzJkZWFmNmIzYzg1NGM5NzZhMGQ5ZjliZjBmZmNhOWZhMDI5MDZk'
        }
      }
    )

    res
      .json()
      .then(res => {
        setClasses(res)
      })
      .catch(err => setErrors(err))
  }

  // useEffect(() => {
  //   fetchData();
  // });

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
                  <span className="badge ml-1 closed-badge" data-css-z6vvyp="">
                    closed
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
export default App
