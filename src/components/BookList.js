import React, {useContext} from 'react'
import BookDetail from '../components/BookDetail'
import { BookContext } from '../contexts/BookContext'

export default function BookList() {
  const {books} = useContext(BookContext)
  return books.length ? (
    <div className="book-list">
      {books.map(book => (<BookDetail book={book} key={book.id} />))}
    </div>
  ) : (
    <div className="empty">No book to read</div>
  )
}
