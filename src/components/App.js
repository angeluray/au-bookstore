import React from 'react';
import { useSelector } from 'react-redux';
import DisplayList from './displaylist';
import Form from './form';

const App = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="booksContainer">
      <DisplayList books={books} />
      <Form />
    </div>
  );
};

export default App;
