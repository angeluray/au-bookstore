import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisplayList from './displaylist';
import Form from './form';
import { fetchBooks } from '../redux/books/books';

const App = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="booksContainer">
      <DisplayList books={books} />
      <Form />
    </div>
  );
};

export default App;
