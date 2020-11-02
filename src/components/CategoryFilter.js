import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onChange }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <select onChange={e => onChange(e.target.value)} className="filter-top">
      {
        ['All', ...categories].map((category, idx) => (
          <option key={category} default={idx === 0 && true} value={category}>{category}</option>))
      }
    </select>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
