import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DataBaseSliceState } from "./types"
import { Vehicle } from "../../api/types"

const initialState: DataBaseSliceState = {
  vehicles: [],
}

export const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    addVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      state.vehicles = state.vehicles.concat(action.payload)
      console.log(`добавлено ${action.payload.length} машин в базу`)
    },
  },
})

export const {addVehicles} = databaseSlice.actions

export default databaseSlice.reducer
