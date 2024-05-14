export type Countries =
  | "britain"
  | "china"
  | "france"
  | "germany"
  | "israel"
  | "italy"
  | "japan"
  | "sweden"
  | "usa"
  | "ussr"

export type VehicleTypes =
  | "lighttank"
  | "mediumtank"
  | "heavytank"
  | "tankdestroyer"
  | "spaa"
  | "fighter"
  | "stormovik"
  | "bomber"
  | "divebomber"
  | "torpedoboat"
  | "submarinechaser"
  | "minelayer"
  | "transport"
  | "navalferrybarge"
  | "destroyer"
  | "torpedogunboat"
  | "ship"
  | "gunboat"

enum VehicleRank {
  rank1 = 1,
  rank2 = 2,
  rank3 = 3,
  rank4 = 4,
  rank5 = 5,
  rank6 = 6,
  rank7 = 7,
  rank8 = 8,
}

export type Vehicle = {
  identifier: string
  country: Countries
  vehicle_type: VehicleTypes
  era: number
  arcade_br: number
  realistic_br: number
  simulator_br: number
  event: null | string
  release_date: null | string
  is_premium: boolean
  is_gift: boolean
  value: number
  req_exp: number
  ge_cost: number
  images: {
    image: string
    techtree: string
  }
}

export type VehiclesRequest = {
  limit?: number
  page?: number
  country?: Countries
  type?: VehicleTypes
  era?: VehicleRank
  isPremium?: 0 | 1
  isGift?: 0 | 1
}

export type StatsResponse = StatsResponseCountry[]

type StatsResponseCountry = {
  country: Countries
  total_value: number
  total_req_exp: number
  total_vehicles: number
}

export type LocalesFile = {
  vehicles: {
    [key: string]: string
  },
  modifications: {
    [key: string]: string
  },
  presets: {
    [key: string]: string
  },
  weaponry: {
    [key: string]: string
  }
}
