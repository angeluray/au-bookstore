/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFetch } from '../redux/books/books';
import circle from '../images/circle.png';

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
      <div className="bookContainer1">
        <h3 className="category">{category}</h3>
        <h2 className="bookTitle">{title}</h2>
        <h3 className="bookAuthor">{author}</h3>
        <button className="myButton" type="button">Comments</button>
        <button className="myButton myMiddleButton" type="button" onClick={removeBook}>Remove</button>
        <button className="myButton myLastButton" type="button">Edit</button>
      </div>

      <div className="bookContainer2">
        <div className="progressContainer">
          <img className="circleProgress" src={circle} alt="Progress circle" />
          <section className="progressSection">
            <p className="percentage">64%</p>
            <h3 className="completed">completed</h3>
          </section>
        </div>
        <div className="lineDevider" />
        <div className="progressChapterContainer">
          <section className="currentChapterContainer">
            <h3 className="currentChapter">CURRENT CHAPTER</h3>
            <p className="chapterInfo">Chapter 17</p>
          </section>
          <button type="button" className="updateBtn">UPDATE PROGRESS</button>
        </div>

      </div>
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
