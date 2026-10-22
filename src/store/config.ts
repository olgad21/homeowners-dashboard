import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import values from "lodash/values";

const API_BASE = process.env.NEXT_PUBLIC_API_PATH;

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE,
  prepareHeaders: (headers) => {
    const token = axios.defaults.headers.common["Authorization"] as string;
    if (token) {
      headers.set("Authorization", token);
    }
    headers.set("Content-Type", "application/json");

    return headers;
  },
});

export enum ITags {}

// Initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: values(ITags),
  endpoints: () => ({}),
});
