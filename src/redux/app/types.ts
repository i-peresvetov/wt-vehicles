import { VehicleTypes } from "../../api/types"

export enum GameMode {
  realistic = "realistic",
  arcade = "arcade",
  simulator = "simulator",
}

export enum SortingType {
  br = 'br',
  name = 'name',
}

export type AppSliceState = {
  filter: AppFilters
  sort: SortingType
  lang: "ru" | "en"
}

export type AppFilters = {
  filterNation: FilterNationObj
  filterBr: number[]
  filterRank: number[]
  filterType: VehicleTypes | undefined
  filterPrem: RadioFilterType
  filterGift: RadioFilterType
  gameMode: GameMode
}

export type FilterNationObj = {
  usa: boolean
  britain: boolean
  china: boolean
  france: boolean
  israel: boolean
  germany: boolean
  italy: boolean
  japan: boolean
  sweden: boolean
  ussr: boolean
}

export type RadioFilterType = boolean | undefined
