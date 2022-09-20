// Action types name READ-ONLY
const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';

const myInitialState = [];

// Reducer section
const reducerStatusChecker = (state = myInitialState, action) => {
  switch (action.type) {
    case CHECKED_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// Action creator section
export const myStatusChecker = () => ({
  type: CHECKED_STATUS,
});

export default reducerStatusChecker;
