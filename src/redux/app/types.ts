import { VehicleTypes } from "../../api/types"

export enum GameMode {
  realistic = 'realistic',
  arcade = 'arcade',
  simulator = 'simulator',
}

export type AppSliceState = {
  filter: {
    filterNation: FilterNationObj
    filterBr: number[]
    filterRank: number[]
    filterType: VehicleTypes | undefined
    filterPrem: RadioFilterType
    filterGift: RadioFilterType
    gameMode: GameMode
  }
  sort: "br" | "name"
  lang: "ru" | "en"
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
