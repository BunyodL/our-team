import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocalStorage } from '../../@types/localStorage';

export interface AuthState {
  isAuth: boolean;
  errorMessage: string;
}

const initialState: AuthState = {
  isAuth: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp(state) {
      state.isAuth = true;
    },
    signOut(state) {
      state.isAuth = false;
      localStorage.removeItem(LocalStorage.token);
    },
    setError(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const { signUp, signOut, setError } = authSlice.actions;

export default authSlice.reducer;
