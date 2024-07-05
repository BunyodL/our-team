import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ScreenState {
  isMobile: boolean;
}

const initialState: ScreenState = {
  isMobile: false,
};

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = screenSlice.actions;

export default screenSlice.reducer;
