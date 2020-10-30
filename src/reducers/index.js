/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import booksReducer from './books';
import filter from './filter';

const allReducers = combineReducers({ booksReducer, filter });

export default allReducers;
