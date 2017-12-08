import { combineReducers } from 'redux'
import {
  FETCH_ALL_BOOKS_SUCCESS,
  SEARCH_BOOKS_SUCCESS,
  CLEAR_SEARCH_RESULT,
  CHANGE_BOOK_SHELF
} from '../constants/actionTypes'

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS_SUCCESS:
      return [ ...action.books ]
    case CHANGE_BOOK_SHELF: /* optimistic update */
      const index = state.indexOf(action.payload.book)
      const items = state.splice(index, 1)
      items[0].shelf = action.payload.shelf
      state.push(items[0])
      return [ ...state ]
    default:
      return state
  }
}

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_BOOKS_SUCCESS:
      return [ ...action.books ]
    case CLEAR_SEARCH_RESULT:
      return []
    default:
      return state
  }
}

export default combineReducers({
  books: bookReducer,
  searchedBooks: searchReducer
})