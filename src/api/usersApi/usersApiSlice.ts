import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchUsersParams, SingleUserType, UpdatePhotoType, UsersApi } from './usersApi.types';

export const usersApiSlice = createApi({
  reducerPath: 'usersApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<UsersApi, FetchUsersParams>({
      query: ({ page, per_page }) => `users?page=${page}&per_page=${per_page}`,
    }),
    fetchUserById: builder.query<SingleUserType, string>({
      query: (userId) => `users/${userId}`,
    }),
    updateUserPhoto: builder.mutation<SingleUserType, UpdatePhotoType>({
      query: ({ userId, formData }) => ({
        url: `users/${userId}`,
        method: 'PUT',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': 'http://localhost:5173/',
          'Access-Control-Allow-Credentials': 'true',
        },
      }),
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUserByIdQuery, useUpdateUserPhotoMutation } =
  usersApiSlice;
