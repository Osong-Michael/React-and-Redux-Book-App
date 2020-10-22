/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: null,
      title: null,
      category: 'Select a Category',
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
    console.log(this.state);
    // this.props.createBook(this.state);
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
        <label htmlFor="title">
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

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => { dispatch(createBook(book)); },
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
