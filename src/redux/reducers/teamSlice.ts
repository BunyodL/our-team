import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../api/usersApi.types';

export interface TeamState {
  users: Array<UserType>;
  totalUsersCount: number;
}

const initialState: TeamState = {
  users: [],
  totalUsersCount: 0,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<UserType>>) => {
      state.users = action.payload;
    },
    setTotalUsersCount: (state, action: PayloadAction<number>) => {
      state.totalUsersCount = action.payload;
    },
  },
});

export const { setUsers, setTotalUsersCount } = teamSlice.actions;

export default teamSlice.reducer;
