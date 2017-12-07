import React, { Component } from 'react'

import { NONE } from '../constants/shelfTypes'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  render() {
    const { book, shelf } = this.props

    let thumbnail = undefined
    if (book.imageLinks) {
      thumbnail = book.imageLinks.thumbnail
    }

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${thumbnail})`
              }}
              className="book-cover"
            >
            </div>
            <BookShelfChanger book={book} shelf={shelf || NONE} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
