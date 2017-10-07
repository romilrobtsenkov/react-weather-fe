import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter, browserHistory } from 'react-router-dom'

import 'normalize.css'
import 'weathericons/css/weather-icons.min.css'
import 'weathericons/css/weather-icons-wind.min.css'
import './importedstyles/nprogress.css'
import './app.scss'

import Home from './components/Home'
import Forecast from './components/Forecast'
import NotFound from './components/NotFound'

import store from './store'

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
