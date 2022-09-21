import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeMyBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const { title, author } = book;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeMyBook(book.id));
  };

  return (
    <li className="bookCard">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button">Comments</button>
      <button type="button" onClick={removeBook}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
