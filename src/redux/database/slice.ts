import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataBaseSliceState, LocalizationFile } from "./types";
import { Vehicle } from "../../api/types";
import { fetchVehicles } from "./asyncActions";
import { eventVehicles } from "../../assets/dataArr";

const initialState: DataBaseSliceState = {
  vehicles: [],
  localization: {
    interface: {},
  },
};

export const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    addVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      state.vehicles = state.vehicles.concat(action.payload);
    },
    setLocalization: (state, action: PayloadAction<LocalizationFile>) => {
      state.localization = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchVehicles.fulfilled,
      (state, action: PayloadAction<Vehicle[]>) => {
        const newVehicles = action.payload.filter((vehicle) => {
          return !eventVehicles.includes(vehicle.identifier.toLowerCase());
        });
        state.vehicles = state.vehicles.concat(newVehicles);
      },
    );
    builder.addCase(fetchVehicles.rejected, (state, action) => {
      // console.log("fetchVehicles.rejected");
    });
    // builder.addCase(fetchVehicles.pending, (state, action) => {

    // })
  },
});

export const { addVehicles, setLocalization } = databaseSlice.actions;

export default databaseSlice.reducer;
