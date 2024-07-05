import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../api/usersApi';
import { LocalStorage } from '../../@types/localStorage';

export interface UserState {
  user: UserType | null;
  followedUsers: number[];
}

const initialState: UserState = {
  user: null,
  followedUsers: [], // ids of followed users
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    followUser: (state, action: PayloadAction<number>) => {
      if (!state.followedUsers.includes(action.payload)) {
        state.followedUsers.push(action.payload);
      }
      localStorage.setItem(LocalStorage.followedUsers, JSON.stringify(state.followedUsers));
    },
    unfollowUser: (state, action: PayloadAction<number>) => {
      state.followedUsers = state.followedUsers.filter((id) => id !== action.payload);

      localStorage.setItem(LocalStorage.followedUsers, JSON.stringify(state.followedUsers));
    },
    setFollowedUsers: (state, action: PayloadAction<number[]>) => {
      state.followedUsers = action.payload;
    },
  },
});

export const { setUser, followUser, unfollowUser, setFollowedUsers } = userSlice.actions;

export default userSlice.reducer;
