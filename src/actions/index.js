import {
  FETCH_ALL_BOOKS,
  CHANGE_BOOK_SHELF
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