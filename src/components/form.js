import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addBookFetch } from '../redux/books/books';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submitBook = (infobook) => {
    dispatch(addBookFetch({ ...infobook, item_id: uuidv4() }));
    reset();
  };
  return (
    <div className="formParent">
      <hr className="formDevider" />
      <h2 className="titleForm">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit(submitBook)}>
        <div className="firstFormDevider">
          <input className="myInput" type="text" {...register('title', { required: true })} placeholder="Book title" />
          <input className="myInput" type="text" {...register('author', { required: true })} placeholder="Author" />
        </div>
        <div className="secondFormDevider">
          <select className="mySelect" {...register('category', { required: true })}>
            <option value="Action">Action</option>
            <option value="Sci-fi">Science Fiction</option>
            <option value="Economy">Economy</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Romance">Romance</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
          </select>
          <input className="submitBook" type="submit" value="ADD BOOK" />
        </div>
      </form>
    </div>
  );
};

export default Form;
