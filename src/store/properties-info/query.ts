import { baseApi } from "@/store/config";

// Define a service using a base URL and expected endpoints
export const propertiesInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query<any, void>({
      query: () => "properties",
    }),
    getPremiumLockInfo: builder.query<any, string>({
      query: (id) => ({
        url: `properties/${id}/premium-lock`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPropertiesQuery, useGetPremiumLockInfoQuery } =
  propertiesInfoApi;
