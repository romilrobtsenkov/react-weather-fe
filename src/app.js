import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter, browserHistory } from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'

import store from './store'
import './app.scss'

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <div id='content-wrapper'>
        <Switch>
          <Route exact path='/' restrict component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#main')
)
