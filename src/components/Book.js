import React, { Component } from 'react'
import styled from 'styled-components'

import BookShelfChanger from './BookShelfChanger'

const BookCover = styled.div`
  width: 128px;
  height: 192px;
  background-image:
    ${props => props.thumbnail ? `url(${props.thumbnail})` : ''};
`

class Book extends Component {
  render() {
    const { book, shelf } = this.props
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <BookCover
              className="book-cover"
              thumbnail={book.imageLinks.thumbnail}
            />
            <BookShelfChanger book={book} shelf={shelf} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
