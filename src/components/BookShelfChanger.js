import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as shelf from '../constants/shelfTypes'
import { changeBookShelf } from '../actions'

class BookShelfChanger extends Component {
  changeHandler = (e) => {
    this.props.changeBookShelf(this.props.book, e.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={this.props.shelf}
          onChange={this.changeHandler}
        >
          <option value={shelf.NONE} disabled>
            Move to...
          </option>
          <option value={shelf.CURRENTLY_READING}>Currently Reading</option>
          <option value={shelf.WANT_TO_READ}>Want to Read</option>
          <option value={shelf.READ_DONE}>Read</option>
          <option value={shelf.NONE}>None</option>
        </select>
      </div>
    )
  }
}

export default connect(null, { changeBookShelf })(BookShelfChanger)
