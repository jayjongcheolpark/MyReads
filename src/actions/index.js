import {
  FETCH_ALL_BOOKS,
  CHANGE_BOOK_SHELF,
  SEARCH_BOOKS,
  CLEAR_SEARCH_RESULT
} from '../constants/actionTypes'

export const fetchAllBooks = () => {
  return {
    type: FETCH_ALL_BOOKS
  }
}

export const changeBookShelf = (book, shelf) => {
  return {
    type: CHANGE_BOOK_SHELF,
    payload: {
      book,
      shelf
    }
  }
}

export const searchBooks = (query) => {
  return {
    type: SEARCH_BOOKS,
    payload: query
  }
}

export const clearSearchResult = () => {
  return {
    type: CLEAR_SEARCH_RESULT
  }
}