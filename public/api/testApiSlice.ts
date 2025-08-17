// shared/api/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: [],
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = testApi;
