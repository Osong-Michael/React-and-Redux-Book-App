/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

class BookForm extends Component {
  constructor() {
    super();

    this.state = {
      author: '',
      id: Math.random(),
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createBook(this.state);
    e.target.reset();
    this.resetState();
  }

  resetState() {
    this.setState({
      author: '',
      id: Math.random(),
      title: '',
      category: '',
    });
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const catList = categories.map(cat => (
      <option key={Math.random()} value={cat}>
        {cat}
      </option>
    ));

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="author">
          Author:
          <input name="author" type="text" onChange={this.handleChange} />
        </label>
        <label htmlFor="title">
          Title:
          <input name="title" type="text" onChange={this.handleChange} />
        </label>

        <select name="category" onChange={this.handleChange} value={this.state.category}>
          {catList}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});

export default connect(null, mapDispatchToProps)(BookForm);
