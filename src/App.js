import React from 'react';
import Navbar from '../src/components/Navbar'
import BookList from '../src/components/BookList'
import BookForm from '../src/components/BookForm'
import './App.css';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
       <Navbar />
       <BookList />
       <BookForm />
     </BookContextProvider>
    </div>
  );
}

export default App;
