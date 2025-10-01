import axios from "axios";
import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
  retry,
} from "@reduxjs/toolkit/query/react";
import { SerializedError } from "@reduxjs/toolkit";
import values from "lodash/values";

const API_BASE = process.env.NEXT_PUBLIC_API_PATH;

export const baseQuery = retry(
  async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: `${API_BASE}`,
      prepareHeaders: (headers, { getState, endpoint }) => {
        const token = axios.defaults.headers.common["Authorization"] as string;
        if (token) {
          headers.set("Authorization", token);
        }
        headers.set("Content-Type", "application/json");

        return headers;
      },
    })(args, api, extraOptions);

    // If any error, need to try to call this api again
    if (result.error?.status === 503) {
      retry.fail(result.error);
    }
    return result;
  },
  {
    maxRetries: 0,
  }
);

export enum ITags {}

// Initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: values(ITags),
  endpoints: () => ({}),
});
