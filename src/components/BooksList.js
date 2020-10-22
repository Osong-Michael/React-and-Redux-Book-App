import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../containers/Book';

function BooksList({ books }) {
  const bookList = books.map(book => (
    <Book book={book} key={Math.random()} />
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
          </tr>
        </thead>
        <tbody>
          { bookList }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.array),
};

BooksList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps)(BooksList);
