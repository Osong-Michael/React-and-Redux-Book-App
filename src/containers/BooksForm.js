/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const BooksForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author Name:
        <input type="text" name=" Author Name" />
      </label>
      <label>
        Book Name:
        <input type="text" name="Book Name" />
      </label>
      <label>
        Select Category:
        <select>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

BooksForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default BooksForm;
