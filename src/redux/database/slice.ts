import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataBaseSliceState } from "./types";
import { Vehicle } from "../../api/types";
import { fetchVehicles } from "./asyncActions";

const initialState: DataBaseSliceState = {
  vehicles: [],
};

export const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    addVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      state.vehicles = state.vehicles.concat(action.payload);
      console.log(`добавлено ${action.payload.length} машин в базу`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchVehicles.fulfilled,
      (state, action: PayloadAction<Vehicle[]>) => {
        state.vehicles = state.vehicles.concat(action.payload);
        console.log(`санкой добавлено ${action.payload.length} машин в базу`);
      },
    );
    builder.addCase(fetchVehicles.rejected, (state, action) => {
      console.log("fetchVehicles.rejected");
    });
    // builder.addCase(fetchVehicles.pending, (state, action) => {

    // })
  },
});

export const { addVehicles } = databaseSlice.actions;

export default databaseSlice.reducer;
