import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/App.css'

import ListBooks from './pages/ListBooks';
import Search from './pages/Search'
import NotFound from './components/NotFound'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListBooks} />
          <Route exact path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App