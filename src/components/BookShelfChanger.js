import React from 'react'
import { connect } from 'react-redux'

import * as shelfType from '../constants/shelfTypes'
import { changeBookShelf } from '../actions'

const BookShelfChanger = ({ book, changeBookShelf, shelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={shelf || shelfType.NONE}
        onChange={e => changeBookShelf(book, e.target.value)}
      >
        <option value={shelfType.NONE} disabled>
          Move to...
        </option>
        <option value={shelfType.CURRENTLY_READING}>Currently Reading</option>
        <option value={shelfType.WANT_TO_READ}>Want to Read</option>
        <option value={shelfType.READ_DONE}>Read</option>
        <option value={shelfType.NONE}>None</option>
      </select>
    </div>
  )
}

export default connect(null, { changeBookShelf })(BookShelfChanger)
