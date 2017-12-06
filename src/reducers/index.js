import { combineReducers } from 'redux'
import { FETCH_ALL_BOOKS_SUCCESS } from '../constants/actionTypes'

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS_SUCCESS:
      return [ ...action.books ]
    default:
      return state
  }
}

export default combineReducers({
  books: bookReducer
})