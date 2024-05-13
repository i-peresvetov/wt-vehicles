import { createAsyncThunk } from "@reduxjs/toolkit";
import { Vehicle } from "../../api/types";
import store from "../store";
import { apiSlice } from "../../api/apiSlice";

export type FetchVehiclesArgs = {
  limit?: number;
  page?: number;
  country?: string;
  type?: string;
  era?: number;
  isPremium?: boolean;
  isGift?: boolean;
};

export const fetchVehicles = createAsyncThunk<Vehicle[], FetchVehiclesArgs>(
  "database/fetchVehicles",
  async (params) => {
    const {
      limit = 200,
      page = 0,
      // country,
      // type,
      // era,
      // isPremium,
      // isGift,
    } = params;
    const promise = store.dispatch(
      apiSlice.endpoints.getVehicles.initiate({ limit, page }),
    );
    // const { refetch } = promise;
    // interact with the cache in the same way as you would with a useFetch...() hook
    // const { data, isLoading, isSuccess /*...*/ } = await promise;
    const { data, isSuccess } = await promise;
    if (isSuccess) return data;
    return [];
  },
);
