import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter, browserHistory } from 'react-router-dom'

import './importedstyles/normalize.css'
import './importedstyles/nprogress.css'
import './importedstyles/weather-icons.min.css'
import './importedstyles/weather-icons-wind.min.css'

import Home from './components/Home'
import Forecast from './components/Forecast'
import NotFound from './components/NotFound'

import store from './store'
import './app.scss'

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <section id='content-wrapper'>
        <Switch>
          <Route exact path='/' restrict component={Home} />
          <Route exact path='/forecast' restrict component={Forecast} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#main')
)
