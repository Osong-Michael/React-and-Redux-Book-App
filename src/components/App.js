import React from 'react';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

function App() {
  return (
    <div className="ctn">
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
