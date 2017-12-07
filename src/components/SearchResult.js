import React, { Component } from 'react'
import { connect } from 'react-redux'

import Book from './Book'

class SearchResult extends Component {
  render() {
    const { books } = this.props

    return (
      <div className="search-books-results">
        <ol className="books-grid">
        {
          books.map(book => {
            return (
              <Book
                key={book.id}
                book={book}
              />
            )
          })
        }
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.searchedBooks
  }
}

export default connect(mapStateToProps)(SearchResult)
