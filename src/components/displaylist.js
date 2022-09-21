import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const DisplayList = (props) => {
  const { books } = props;
  return (
    <ul>
      { books.map((book) => <Book key={book.id} book={book} />)}
    </ul>
  );
};

DisplayList.propTypes = {
  books: PropTypes.instanceOf(Object),
};

DisplayList.defaultProps = {
  books: [],
};

export default DisplayList;
