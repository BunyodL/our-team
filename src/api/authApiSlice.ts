import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUpResponseType } from './authApi.types';

type QueryBody = { email: string; password: string };

export const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    signUpRequest: builder.mutation<SignUpResponseType, QueryBody>({
      query: (authData) => ({
        url: 'register',
        method: 'POST',
        body: authData,
      }),
      transformResponse: (response: SignUpResponseType) => {
        localStorage.setItem('token', response.token);
        return response;
      },
    }),
  }),
});

export const { useSignUpRequestMutation } = authApiSlice;
