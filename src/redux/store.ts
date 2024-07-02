import { configureStore } from '@reduxjs/toolkit';
import teamSlice from './reducers/teamSlice';
import { useDispatch } from 'react-redux';
import { usersApiSlice } from '../api/usersApiSlice';
import { useSelector } from 'react-redux';
import userSlice from './reducers/userSlice';
import { authApiSlice } from '../api/authApiSlice';
import authSlice from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    team: teamSlice,
    user: userSlice,
    auth: authSlice,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApiSlice.middleware, authApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
