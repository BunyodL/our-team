import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType, UsersApi } from './usersApi.types';

export const usersApiSlice = createApi({
  reducerPath: 'usersApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<UsersApi, number>({
      query: (page) => `users?skip=${(page - 1) * 8}&limit=8`,
    }),
    fetchUserById: builder.query<UserType, string>({
      query: (userId) => `users/${userId}`,
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUserByIdQuery } = usersApiSlice;
