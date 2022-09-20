import { configureStore } from '@reduxjs/toolkit';
import reducerbookstore from './books/books';
import reducerStatusChecker from './categories/categories';

const store = configureStore({
  reducer: {
    books: reducerbookstore,
    categories: reducerStatusChecker,
  },
});

export default store;
