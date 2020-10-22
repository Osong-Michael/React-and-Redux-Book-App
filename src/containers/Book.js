import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Book = ({ book }) => {
  const {
    author, id, title, category,
  } = book;
  return (
    <tr>
      <td>{author}</td>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape.isRequired,
};

export default Book;
