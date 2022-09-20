// READ-ONLY action types name
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const myInitialState = [];

// Reducer section
const reducerbookstore = (state = myInitialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action creators section
export const addMyBook = (book) => ({
  type: ADD, book,
});

export const removeMyBook = (id) => ({
  type: REMOVE, id,
});

export default reducerbookstore;
