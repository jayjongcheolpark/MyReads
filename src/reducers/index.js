import { combineReducers } from 'redux'
import {
  FETCH_ALL_BOOKS_SUCCESS,
  SEARCH_BOOKS_SUCCESS,
  CLEAR_SEARCH_RESULT
} from '../constants/actionTypes'

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS_SUCCESS:
      return [ ...action.books ]
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