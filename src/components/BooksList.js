import React from 'react';

function BooksList() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book Author</th>
            <th>Book ID</th>
            <th>Book Titles</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JK Rowlings</td>
            <td>12</td>
            <td>Harry Potter</td>
            <td>Mystery</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
