import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import store, { history } from './store'
import App from './containers/app'
import Home from './containers/home'
import About from './containers/about'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </App>
    </Router>
  </Provider>,
  target
)
