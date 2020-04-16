import createBrowserHistory from 'history/createBrowserHistory'
import React, { useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Community from './Community'
import Equipping from './Equipping'
import Events from './Events'

const fs = require('fs')

const App = () => {
  const [hasError, setErrors] = useState(false)
  const history = createBrowserHistory()

  // async function fetchData() {
  //   const res = await fetch(
  //     'https://api.planningcenteronline.com/groups/v2/groups?per_page=100',
  //     {
  //       headers: {
  //         Authorization:
  //           'Basic ZTM1NTliNjhhMjVhN2Y5MDk4YTY0ODQ1ZGEzMTNmNWRkNjRhZjY2Yzg2YzIwNTU3MzQ5ZGI5ZGNkMTQ2Njk2NTozNDNmYTgzZTE1OWI5MjJlZjA5MjdjZWM3YzJkZWFmNmIzYzg1NGM5NzZhMGQ5ZjliZjBmZmNhOWZhMDI5MDZk'
  //       }
  //     }
  //   )

  //   res
  //     .json()
  //     .then(res => {
  //       fs.writeFile(
  //         'data.json',
  //         JSON.stringify(res, null, 2),
  //         'utf8',
  //         function(err) {
  //           if (err) {
  //             console.log(
  //               'Some error occured - file either not saved or corrupted file saved.'
  //             )
  //           } else {
  //             console.log("It's saved!")
  //           }
  //         }
  //       )
  //     })
  //     .catch(err => setErrors(err))
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/equipping">
          <Equipping />
        </Route>
        <Route path="/community">
          <Community />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
      </Switch>
    </HashRouter>
  )
}
export default App
