import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/App.css'

import ListBooks from './pages/ListBooks';
import Search from './pages/Search'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ListBooks} />
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App