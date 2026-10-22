import { baseApi } from "@/store/config";
import type { PremiumLockInfo, Property } from "./types";

// Define a service using a base URL and expected endpoints
export const propertiesInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query<Property[], void>({
      query: () => "properties",
    }),
    getPremiumLockInfo: builder.query<PremiumLockInfo, string>({
      query: (id) => `properties/${id}/premium-lock`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPropertiesQuery, useGetPremiumLockInfoQuery } =
  propertiesInfoApi;
