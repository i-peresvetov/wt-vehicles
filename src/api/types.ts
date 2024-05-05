type Countries =
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

type VehicleTypes =
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

type BattleRaitings =
  | 1.0
  | 1.3
  | 1.7
  | 2.0
  | 2.3
  | 2.7
  | 3.0
  | 3.3
  | 3.7
  | 4.0
  | 4.3
  | 4.7
  | 5.0
  | 5.3
  | 5.7
  | 6.0
  | 6.3
  | 6.7
  | 7.0
  | 7.3
  | 7.7
  | 8.0
  | 8.3
  | 8.7
  | 9.0
  | 9.3
  | 9.7
  | 10.0
  | 10.3
  | 10.7
  | 11.0
  | 11.3
  | 11.7
  | 12.0
  | 12.3
  | 12.7

export type Vehicle = {
  identifier: string
  country: Countries
  vehicle_type: VehicleTypes
  era: number
  arcade_br: BattleRaitings
  realistic_br: BattleRaitings
  simulator_br: BattleRaitings
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

// export type VehicleUntyped = {
//   identifier: string
//   country: string
//   vehicle_type: string
//   era: number
//   arcade_br: number
//   realistic_br: number
//   simulator_br: number
//   event: null | string
//   release_date: null | string
//   is_premium: boolean
//   is_gift: boolean
//   value: number
//   req_exp: number
//   ge_cost: number
//   images: {
//     image: string
//     techtree: string
//   }
// }

export type VehiclesRequest = {
  limit?: number
  page?: number
  country?: Countries
  type?: VehicleTypes
  era?: VehicleRank
  isPremium?: 0 | 1
  isGift?: 0 | 1
}

export type VehiclesResponse = Vehicle[]
