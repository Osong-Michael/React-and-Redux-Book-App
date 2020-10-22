// eslint-disable-next-line import/no-cycle
import { initState } from '../index';

const booksReducer = (state = initState, action) => {
  if (action.type === 'CREATE_BOOK') {
    const allBooks = [...state.books, action.book];
    return {
      ...state,
      books: allBooks,
    };
  }
  if (action.type === 'REMOVE_BOOK') {
    const allBooks = state.books.filter(book => book.id !== action.book.id);
    return {
      ...state,
      books: allBooks,
    };
  }
  return state;
};

export default booksReducer;
