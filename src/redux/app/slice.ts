import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {
  AppSliceState,
  FilterNationObj,
  FilterTypesObj,
  GameMode,
  RadioFilterType,
  SortingType,
} from "./types"

const initialState: AppSliceState = {
  filter: {
    filterNation: {
      usa: true,
      britain: false,
      china: false,
      france: false,
      israel: false,
      germany: false,
      italy: false,
      japan: false,
      sweden: false,
      ussr: false,
    },
    filterBr: [
      1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 4.3, 4.7, 5.0, 5.3, 5.7, 6.0, 6.3, 6.7, 7.0,
      7.3, 7.7, 8.0, 8.3, 8.7, 9.0, 9.3, 9.7, 10.0, 10.3, 10.7, 11.0, 11.3, 11.7, 12.0, 12.3, 12.7,
    ],
    gameMode: GameMode.realistic,
    filterRank: [3],
    filterType: {
      lighttank: true,
      mediumtank: true,
      heavytank: true,
      tankdestroyer: true,
      spaa: true,
      fighter: true,
      stormovik: true,
      bomber: true,
      divebomber: true,
      torpedoboat: false,
      submarinechaser: false,
      minelayer: false,
      transport: false,
      navalferrybarge: false,
      destroyer: false,
      torpedogunboat: false,
      ship: false,
      gunboat: false,
    },
    filterPrem: undefined,
    filterGift: undefined,
  },
  sort: SortingType.br,
  lang: "ru",
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFilterNation: (state, action: PayloadAction<FilterNationObj>) => {
      state.filter.filterNation = action.payload
    },

    setFilterNationAll: (state, action: PayloadAction<boolean>) => {
      let country: keyof FilterNationObj
      for (country in state.filter.filterNation) {
        state.filter.filterNation[country] = action.payload
      }
    },

    setFilterBr: (state, action: PayloadAction<number>) => {
      const brArr = state.filter.filterBr
      if (brArr.includes(action.payload)) {
        const i = brArr.indexOf(action.payload)
        brArr.splice(i, 1)
      } else {
        brArr.push(action.payload)
      }
    },

    setFilterBrAll: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.filter.filterBr = [
          1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 4.3, 4.7, 5.0, 5.3, 5.7, 6.0, 6.3, 6.7,
          7.0, 7.3, 7.7, 8.0, 8.3, 8.7, 9.0, 9.3, 9.7, 10.0, 10.3, 10.7, 11.0, 11.3, 11.7, 12.0,
          12.3, 12.7,
        ]
      } else {
        state.filter.filterBr = []
      }
    },

    setGameMode: (state, action: PayloadAction<GameMode>) => {
      state.filter.gameMode = action.payload
    },

    setFilterRank: (state, action: PayloadAction<number>) => {
      const rankArr = state.filter.filterRank
      if (rankArr.includes(action.payload)) {
        const i = rankArr.indexOf(action.payload)
        rankArr.splice(i, 1)
      } else {
        rankArr.push(action.payload)
      }
    },

    setFilterRankAll: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.filter.filterRank = [1, 2, 3, 4, 5, 6, 7, 8]
      } else {
        state.filter.filterRank = []
      }
    },

    setFilterType: (state, action: PayloadAction<FilterTypesObj>) => {
      state.filter.filterType = action.payload
    },

    setFilterTypeArmy: (state, action: PayloadAction<boolean>) => {
      state.filter.filterType.lighttank = action.payload
      state.filter.filterType.mediumtank = action.payload
      state.filter.filterType.heavytank = action.payload
      state.filter.filterType.tankdestroyer = action.payload
      state.filter.filterType.spaa = action.payload
    },

    setFilterTypeAvia: (state, action: PayloadAction<boolean>) => {
      state.filter.filterType.fighter = action.payload
      state.filter.filterType.stormovik = action.payload
      state.filter.filterType.bomber = action.payload
      state.filter.filterType.divebomber = action.payload
    },

    setFilterTypeFleet: (state, action: PayloadAction<boolean>) => {
      state.filter.filterType.torpedoboat = action.payload
      state.filter.filterType.submarinechaser = action.payload
      state.filter.filterType.minelayer = action.payload
      state.filter.filterType.transport = action.payload
      state.filter.filterType.navalferrybarge = action.payload
      state.filter.filterType.destroyer = action.payload
      state.filter.filterType.torpedogunboat = action.payload
      state.filter.filterType.ship = action.payload
      state.filter.filterType.gunboat = action.payload
    },

    setFilterPrem: (state, action: PayloadAction<RadioFilterType>) => {
      state.filter.filterPrem = action.payload
    },

    setFilterGift: (state, action: PayloadAction<RadioFilterType>) => {
      state.filter.filterGift = action.payload
    },

    setSorting: (state, action: PayloadAction<SortingType>) => {
      state.sort = action.payload
    },

    setLanguage: (state, action: PayloadAction<"ru" | "en">) => {
      state.lang = action.payload
    },
  },
})

export const {
  setFilterNation,
  setFilterNationAll,
  setFilterBr,
  setFilterBrAll,
  setGameMode,
  setFilterRank,
  setFilterRankAll,
  setFilterType,
  setFilterTypeArmy,
  setFilterTypeAvia,
  setFilterTypeFleet,
  setFilterPrem,
  setFilterGift,
  setSorting,
  setLanguage,
} = appSlice.actions

export default appSlice.reducer
