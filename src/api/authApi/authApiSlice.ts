import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUpQueryBody, SignUpResponseType } from './authApi.types';
import { LocalStorage } from '../../@types/localStorage';

export const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    signUpRequest: builder.mutation<SignUpResponseType, SignUpQueryBody>({
      query: (authData) => ({
        url: 'register',
        method: 'POST',
        body: authData,
      }),
      transformResponse: (response: SignUpResponseType) => {
        localStorage.setItem(LocalStorage.token, response.token);
        return response;
      },
    }),
  }),
});

export const { useSignUpRequestMutation } = authApiSlice;
