import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addMyBook } from '../redux/books/books';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submitBook = (infobook) => {
    dispatch(addMyBook({ ...infobook, id: uuidv4() }));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submitBook)}>
      <input type="text" {...register('title', { required: true })} placeholder="Book title" />
      <input type="text" {...register('author', { required: true })} placeholder="Author" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
