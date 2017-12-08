import React from 'react'

import Book from './Book'

const BookShelf = (props) => {
  function renderBooks() {
    const { shelf, books } = props

    return books
      .filter(book => book.shelf === shelf)
      .map(book => {
        return (
          <Book
            key={book.id}
            book={book}
          />
        )
      })
  }
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{props.heading}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {renderBooks()}
      </ol>
    </div>
  </div>
  )
}

export default BookShelf