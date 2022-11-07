import { combineReducers } from '@reduxjs/toolkit';
import loading from '../slices/loadingSlice';

const rootReducer = combineReducers({
  loading
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
