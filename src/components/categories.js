import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myStatusChecker } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const stateMessage = useSelector((state) => state.categories);

  const checkBtnMessage = () => {
    dispatch(myStatusChecker());
  };

  return (
    <>
      <button type="button" onClick={checkBtnMessage}>Check status</button>
      <p>{stateMessage}</p>
    </>
  );
};
export default Categories;
