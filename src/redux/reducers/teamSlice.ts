import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../api/usersApi.types';

export interface TeamState {
  users: Array<UserType>;
  totalUsersCount: number;
  totalPages: number;
}

const initialState: TeamState = {
  users: [],
  totalUsersCount: 0,
  totalPages: 0,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<UserType>>) => {
      if (!state.users.includes(action.payload[0])) {
        state.users = action.payload;
      }
    },
    setTotalUsersCount: (state, action: PayloadAction<number>) => {
      state.totalUsersCount = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setUsers, setTotalUsersCount, setTotalPages } = teamSlice.actions;

export default teamSlice.reducer;
