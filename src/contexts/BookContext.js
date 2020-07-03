import React, { createContext, useReducer, useEffect } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();
export default function BookContextProvider(props) {
  
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    return JSON.parse(localStorage.getItem("books")) ? JSON.parse(localStorage.getItem("books")) : [] 
  }); // third argument will ignore initial value and return new value (second argument)
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  
  return (
    <BookContext.Provider value={{ books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
}
