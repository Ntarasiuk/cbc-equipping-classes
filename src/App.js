import createBrowserHistory from 'history/createBrowserHistory'
import React, { useState } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Community from './Community'
import Equipping from './Equipping'

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
  //       setClasses(res)
  //     })
  //     .catch(err => setErrors(err))
  // }

  // useEffect(() => {
  //   fetchData();
  // });

  return (
    <Router history={history}>
      <Switch>
        <Route path="/cbc-equipping-classes/build/equipping">
          <Equipping />
        </Route>
        <Route path="/cbc-equipping-classes/build/community">
          <Community />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
