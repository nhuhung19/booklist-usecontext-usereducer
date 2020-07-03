import React, {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {
  const {dispatch} = useContext(BookContext)
  const [newBook, setNewBook] = useState({title: '', author: ''})
  function onInputChange(e){
    setNewBook({...newBook, [e.target.name]: e.target.value})
  }

  function addNewBook(e){
    e.preventDefault()
    dispatch({type: 'ADD_BOOK', newBook})
    setNewBook({title: '', author: ''})
  }

  return (
    <form onSubmit={addNewBook} onChange={onInputChange}>
      <input value={newBook.title} type="text" placeholder="book title" name="title" required />
      <input value={newBook.author} type="text" placeholder="author" name="author" required />
      <input type="submit" value="Add Book"/>
    </form>
  )
}
