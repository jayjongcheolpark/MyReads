import React, { Component } from 'react'

import BookShelf from '../components/BookShelf'
import * as shelf from '../constants/shelfType'

class ListBooks extends Component {
  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf shelf={shelf.CURRENTLY_READING} />
          <BookShelf shelf={shelf.WANT_TO_READ} />
          <BookShelf shelf={shelf.READ_DONE} />
        </div>
      </div>
    )
  }
}

export default ListBooks