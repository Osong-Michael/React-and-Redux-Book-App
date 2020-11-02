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
      <tr>
        <td>No Books in this Category</td>
      </tr>
    );
  }

  return (
    <>
      <CategoryFilter onChange={changeFilter} />
      <div>
        <table>
          <thead>
            <tr>
              <th>Book Author</th>
              <th>Book ID</th>
              <th>Book Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            { bookList }
          </tbody>
        </table>
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
