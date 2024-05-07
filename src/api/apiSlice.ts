import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { VehiclesResponse, VehiclesRequest } from "./types"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wtvehiclesapi.sgambe.serv00.net/api/",
  }),

  endpoints: (builder) => ({
    getVehicles: builder.query<VehiclesResponse, VehiclesRequest>({
      query: ({ limit, page, country, type, era, isPremium, isGift }) => ({
        url: "/vehicles",
        params: {
          limit, // 200 max
          page,
          country,
          type,
          era,
          isPremium,
          isGift,
        },
      }),
    }),
  }),
})

export const { useGetVehiclesQuery } = apiSlice
