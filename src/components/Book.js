import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const {
    author, id, title, category,
  } = book;
  return (
    <div className="book">
      <p className="cat">{category}</p>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <div className="btns">
        <div className="first-btn btn">
          <button type="button">Comment</button>
        </div>
        <div className="second-btn btn">
          <button type="button" onClick={() => handleRemoveBook(book)}>
            Remove Book
          </button>
        </div>
        <div className="third-btn btn">
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
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
