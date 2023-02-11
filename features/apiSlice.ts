import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const satangApi = createApi({
  reducerPath: 'satangApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://satangcorp.com/api/v3/ticker',
  }),
  endpoints: (builder) => ({
    getSymbol: builder.query({
      query: (pathname: string) => `/24hr?symbol=${pathname}`,
    }),
  }),
});

export const { useGetSymbolQuery } = satangApi;
