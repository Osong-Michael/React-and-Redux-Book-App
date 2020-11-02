import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList({
  books, removeBook, filter, changeFilter,
}) {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  let bookList;

  if (filter === 'All') {
    bookList = books.map(book => (
      <Book handleRemoveBook={handleRemoveBook} book={book} key={Math.random()} />
    ));
  } else {
    bookList = books
      .filter(book => book.category === filter)
      .map(book => (
        <Book handleRemoveBook={handleRemoveBook} book={book} key={Math.random()} />
      ));
  }

  if (bookList.length < 1) {
    bookList = (
      <p className="not-found">
        <td>No Books in this Category</td>
      </p>
    );
  }

  return (
    <>
      <nav className="header">
        <h1 className="book-app">MY BOOKS</h1>
        <p className="books-nav">Books</p>
        <CategoryFilter onChange={changeFilter} />
      </nav>
      <div>
        <div className="books-ctn">
          { bookList }
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({ books: state.booksReducer.books, filter: state.filter });

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapDispatchToProps = dispatch => ({
  removeBook: book => { dispatch(removeBook(book)); },
  changeFilter: filter => { dispatch(changeFilter(filter)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
