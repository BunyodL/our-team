import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authApiSlice, usersApiSlice } from '../api';
import { authSlice, teamSlice, userSlice } from './reducers';

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
