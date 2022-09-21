// READ-ONLY action types name
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const myInitialState = [
  {
    id: 1,
    title: 'My Angel book',
    author: 'Angel',
  },
  {
    id: 2,
    title: 'My second angel book',
    author: 'Angel 2',
  },
];

// Reducer section
const reducerbookstore = (state = myInitialState, action = {}) => {
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
