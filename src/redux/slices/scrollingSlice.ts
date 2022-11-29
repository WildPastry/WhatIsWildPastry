import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Set initialState
const initialState: IScrolling = {
  isScrolling: true
};

/*
 * Create scrollingSlice with one action
 * Including: Scrolling state of the app
 */
const scrollingSlice = createSlice({
  name: 'scrolling',
  initialState,
  reducers: {
    setScrolling(state, action: PayloadAction<boolean>) {
      state.isScrolling = action.payload;
    }
  }
});

// Export Scrolling actions from ScrollingSlice
export const { setScrolling } = scrollingSlice.actions;

// Export reducer
export default scrollingSlice.reducer;
