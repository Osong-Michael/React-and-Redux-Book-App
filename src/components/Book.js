import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Book = ({ book, removeBooks }) => {
  const myFunc = bookz => { removeBooks(bookz); };
  const {
    author, id, title, category,
  } = book;
  return (
    <tr>
      <td>{author}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={() => myFunc(book)}>
          Remove Book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBooks: PropTypes.func.isRequired,
};

export default Book;
