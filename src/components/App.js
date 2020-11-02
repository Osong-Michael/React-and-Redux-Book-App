import React from 'react';
import BooksList from '../containers/BooksList';
import BookForm from '../containers/BooksForm';

function App() {
  return (
    <div className="ctn">
      <BooksList />
      <h3 className="new-header">Add New Book</h3>
      <BookForm />
    </div>
  );
}

export default App;
