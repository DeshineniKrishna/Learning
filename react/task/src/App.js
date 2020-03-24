import React, { Component } from 'react'
import Home from './Home'
import Contact from './Contact'
import AboutUs from './AboutUs'
import Header from './Header'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <a href="#" class="previous">&laquo; Prev</a>
          <Route exact path='/' component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/AboutUs' component={AboutUs} />
        </div>
      </Router>
    )
  }
}

export default App
