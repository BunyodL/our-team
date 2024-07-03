import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SingleUserType, UserType, UsersApi } from './usersApi.types';

export const usersApiSlice = createApi({
  reducerPath: 'usersApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<UsersApi, number>({
      query: (page) => `users?per_page=8&page=${page}`,
    }),
    fetchUserById: builder.query<SingleUserType, string>({
      query: (userId) => `users/${userId}`,
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUserByIdQuery } = usersApiSlice;
