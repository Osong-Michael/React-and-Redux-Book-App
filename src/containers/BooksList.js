import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList({ books, removeBook }) {
  const removeBooks = book => {
    removeBook(book);
  };

  const bookList = books.map(book => (
    <Book book={book} key={Math.random()} removeBooks={removeBooks} />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book Author</th>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Category</th>
            <th>Delete Book</th>
          </tr>
        </thead>
        <tbody>
          { bookList }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({ books: state.booksReducer.books });

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapDispatchToProps = dispatch => ({
  removeBook: book => { dispatch(removeBook(book)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
