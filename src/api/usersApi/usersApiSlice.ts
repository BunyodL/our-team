import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SingleUserType, UsersApi } from './usersApi.types';

type UpdatePhotoType = {
  userId: number;
  formData: FormData;
};

type UpdatePhotoResponseType = {};

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
    updateUserPhoto: builder.mutation<SingleUserType, UpdatePhotoType>({
      query: ({ userId, formData }) => {
   
        return {
          url: `users/${userId}`,
          method: 'PUT',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': 'http://localhost:5173/',
            'Access-Control-Allow-Credentials': 'true',
          },
        };
      },
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUserByIdQuery, useUpdateUserPhotoMutation } =
  usersApiSlice;
