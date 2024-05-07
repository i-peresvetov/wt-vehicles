import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { VehiclesResponse, VehiclesRequest, StatsResponse } from "./types"

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

    getVehicle: builder.query<void, void>({
      query: (identifier) => ({
        url: `/vehicles/${identifier}`,
      }),
    }),

    getStats: builder.query<StatsResponse, void>({
      query: () => ({
        url: '/vehicles/stats'
      })
    }),

  }),
})

export const { useGetVehiclesQuery, useGetStatsQuery } = apiSlice
