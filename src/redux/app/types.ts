import { VehicleTypes } from "../../api/types";
import FilterType from "../../components/VehicleFilters/FilterType";

export enum GameMode {
  realistic = "realistic",
  arcade = "arcade",
  simulator = "simulator",
}

export enum SortingType {
  br = "br",
  name = "name",
}

export type AppSliceState = {
  filter: AppFilters;
  sort: SortingType;
  lang: "ru" | "en";
};

export type AppFilters = {
  filterNation: FilterNationObj;
  filterBr: number[];
  filterRank: number[];
  filterType: FilterTypesObj;
  filterPrem: RadioFilterType;
  filterGift: RadioFilterType;
  gameMode: GameMode;
};

export type FilterNationObj = {
  usa: boolean;
  britain: boolean;
  china: boolean;
  france: boolean;
  israel: boolean;
  germany: boolean;
  italy: boolean;
  japan: boolean;
  sweden: boolean;
  ussr: boolean;
};

export type FilterTypesObj = {
  lighttank: boolean;
  mediumtank: boolean;
  heavytank: boolean;
  tankdestroyer: boolean;
  spaa: boolean;
  fighter: boolean;
  stormovik: boolean;
  bomber: boolean;
  divebomber: boolean;
  torpedoboat: boolean;
  submarinechaser: boolean;
  minelayer: boolean;
  transport: boolean;
  navalferrybarge: boolean;
  destroyer: boolean;
  torpedogunboat: boolean;
  ship: boolean;
  gunboat: boolean;
};

export type RadioFilterType = boolean | undefined;
