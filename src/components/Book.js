import React from 'react'

import { NONE } from '../constants/shelfTypes'
import BookShelfChanger from './BookShelfChanger'

const Book = props => {
  const { book, book: { title, authors, imageLinks }, shelf } = props

  let thumbnail = () => {
    if (imageLinks) {
      return imageLinks.thumbnail
    }
    // catch error, so users don't get an empty white box
    return 'https://imageWithNoLinks/img1'
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
          <BookShelfChanger book={book} shelf={shelf || NONE} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}

export default Book
