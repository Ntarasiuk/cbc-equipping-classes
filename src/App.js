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
