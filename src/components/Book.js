import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Book = ({ book, handleRemoveBook }) => {
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
        <button type="button" onClick={() => handleRemoveBook(book)}>
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
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
