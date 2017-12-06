import React, { Component } from 'react'

import Book from './Book'

class BookShelf extends Component {
  renderBooks() {
    const { shelf, books } = this.props

    return books
      .filter(book => book.shelf === shelf)
      .map(book => {
        return (
          <Book
            key={book.id}
            book={book}
            shelf={shelf}
          />
        )
      })
  }

  render () {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.heading}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.renderBooks()}
        </ol>
      </div>
    </div>
    )
  }
}

export default BookShelf