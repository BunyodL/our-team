import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FetchUsersParams, UserType } from '../../api/usersApi';

export interface TeamState {
  users: Array<UserType>;
  totalUsersCount: number;
  totalPages: number;
  fetchUsersParams: FetchUsersParams;
}

const initialState: TeamState = {
  fetchUsersParams: {
    page: 1,
    per_page: 8,
  },
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
    setPerPageParam: (state, action: PayloadAction<number>) => {
      state.fetchUsersParams.per_page = action.payload;
    },
    setPageParam: (state, action: PayloadAction<number>) => {
      state.fetchUsersParams.page = action.payload;
    },
  },
});

export const { setUsers, setTotalUsersCount, setTotalPages, setPerPageParam, setPageParam } =
  teamSlice.actions;

export default teamSlice.reducer;
