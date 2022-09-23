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
    /* console.log(dispatch(addBookFetch({ ...infobook, item_id: uuidv4() }))); */
    reset();
  };
  return (
    <div className="formParent">
      <hr className="formDevider" />
      <h2 className="titleForm">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit(submitBook)}>
        <input type="text" {...register('title', { required: true })} placeholder="Book title" />
        <input type="text" {...register('author', { required: true })} placeholder="Author" />
        <input type="text" {...register('category', { required: true })} placeholder="Category" />
        <input className="submitBook" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Form;
