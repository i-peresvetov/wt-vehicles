import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { VehiclesRequest, StatsResponse, Vehicle, LocalesFile } from "./types"
import { Language } from "../redux/app/types"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wtvehiclesapi.sgambe.serv00.net/",
  }),

  endpoints: (builder) => ({
    getVehicles: builder.query<Vehicle[], VehiclesRequest>({
      query: ({ limit, page, country, type, era, isPremium, isGift }) => ({
        url: "api/vehicles",
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
        url: `api/vehicles/${identifier}`,
      }),
    }),

    getStats: builder.query<StatsResponse, void>({
      query: () => ({
        url: "api/vehicles/stats",
      }),
    }),

    getLocales: builder.query<LocalesFile, Language>({
      query: (lang) => ({
        url: `assets/locales/${lang}.json`,
      }),
    }),
  }),
})

export const { useGetVehiclesQuery, useLazyGetVehiclesQuery, useGetStatsQuery, useGetLocalesQuery } = apiSlice
