import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Book = ({ book }) => {
  return (
    <div>
      {book}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.element.isRequired,
};

export default Book;
