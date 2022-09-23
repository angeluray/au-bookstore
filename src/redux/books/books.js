/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const APID = '6jFLTwMRKqyHQ7J7Rg0F';
const fullURL = `${baseURL + APID}/books`;
const BASEACTION = 'bookstore/books/';
const ADD = `${BASEACTION}/ADD`;
const REMOVE = `${BASEACTION}/REMOVE`;
const BOOKFETCH = `${BASEACTION}/GET`;

// Fetchbooks
const fetchBooks = createAsyncThunk(BOOKFETCH, async () => {
  const res = await fetch(fullURL);
  const data = await res.json();
  // eslint-disable-next-line camelcase
  const books = Object.keys(data).map((item_id) => ({ item_id, ...data[item_id][0] }));
  return books;
});

const addBookFetch = createAsyncThunk(ADD, async (book, thunkAPI) => {
  await fetch(fullURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }).then(() => thunkAPI.dispatch(fetchBooks()));
  return book;
});

const removeBookFetch = createAsyncThunk(REMOVE, async (id, thunkAPI) => {
  await fetch(`${fullURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => thunkAPI.dispatch(fetchBooks()));
  return id;
});

const bookStoreSlice = createSlice({
  name: BASEACTION,
  initialState: {
    loading: 'pending',
    books: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      // Add `.addCase()` lines for each action case
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = 'completed';
        state.books = action.payload;
      })

      .addCase(fetchBooks.rejected, (state) => {
        state.loading = 'failed';
      })

      .addCase(addBookFetch.pending, (state) => {
        state.loading = 'loading';
      })

      .addCase(addBookFetch.fulfilled, (state) => {
        state.loading = 'completed';
      })

      .addCase(addBookFetch.rejected, (state) => {
        state.loading = 'failed';
      })

      .addCase(removeBookFetch.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(removeBookFetch.fulfilled, (state) => {
        state.loading = 'completed';
      })
      .addCase(removeBookFetch.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

const { actions, reducer } = bookStoreSlice;
export {
  actions,
  fetchBooks,
  addBookFetch,
  removeBookFetch,
};
export default reducer;
