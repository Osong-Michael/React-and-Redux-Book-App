/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BooksForm = () => {
  return (
    <form>
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

export default BooksForm;
