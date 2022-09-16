import React, { useState } from 'react';
import DisplayList from './displaylist';
import Form from './form';

const App = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'Book1',
      author: 'Author1',
    },
  ]);

  return (
    <div className="booksContainer">
      <DisplayList books={books} />
      <Form />
    </div>
  );
};

export default App;
