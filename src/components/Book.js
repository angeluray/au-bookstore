/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFetch } from '../redux/books/books';

const Book = (props) => {
  const { id, book } = props;
  const {
    title, author, category,
  } = book;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeBookFetch(id));
  };

  return (
    <li className="bookCard">
      <h3>{category}</h3>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button">Comments</button>
      <button type="button" onClick={removeBook}>Remove</button>
      <button type="button">Edit</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
