import { combineReducers } from '@reduxjs/toolkit';
import loading from '../slices/loadingSlice';
import scrolling from '../slices/scrollingSlice';

const rootReducer = combineReducers({
  loading,
  scrolling
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
