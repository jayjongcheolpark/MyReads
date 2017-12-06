import { all, call, put, takeEvery } from 'redux-saga/effects'

import * as api from '../utils/BooksAPI'

import {
  FETCH_ALL_BOOKS,
  FETCH_ALL_BOOKS_SUCCESS,
  CHANGE_BOOK_SHELF
} from '../constants/actionTypes'

export function* fetchAllBooksHandler() {
  const books = yield call(api.getAll)
  yield put({
    type: FETCH_ALL_BOOKS_SUCCESS,
    books
  })
}

export function* fetchAllBooks() {
  yield takeEvery(FETCH_ALL_BOOKS, fetchAllBooksHandler)
}

export function* changeBookShelfHandler(action) {
  yield call(api.update, action.payload.book, action.payload.shelf)
  yield put({
    type: FETCH_ALL_BOOKS
  })
}

export function* changeBookShelf() {
  yield takeEvery(CHANGE_BOOK_SHELF, changeBookShelfHandler)
}

export default function* rootSaga() {
  yield all([
    fetchAllBooks(),
    changeBookShelf()
  ])
}