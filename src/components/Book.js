import React from 'react'

import BookShelfChanger from './BookShelfChanger'

const Book = props => {
  const { book, book: { title, authors, imageLinks }, shelf } = props

  let thumbnail = () => {
    if (imageLinks) {
      return imageLinks.thumbnail
    }
    // catch error, so users don't get an empty white box
    return `http://via.placeholder.com/128x192?text=${encodeURIComponent(title.trim())}`
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${thumbnail()})`
            }}
            className="book-cover"
          />
          <BookShelfChanger book={book} shelf={shelf || book.shelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors ? book.authors.join(', ') : ''}</div>
      </div>
    </li>
  )
}

export default Book
