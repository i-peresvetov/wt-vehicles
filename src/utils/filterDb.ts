import { Vehicle } from "../api/types";
import { AppFilters, GameMode, SortingType } from "../redux/app/types";

export const applyFilters = (
  db: Vehicle[],
  activeFilters: AppFilters,
): Vehicle[] => {
  const {
    filterPrem,
    filterGift,
    filterBr,
    gameMode,
    filterNation,
    filterRank,
    filterType,
  } = activeFilters;

  return db.filter((vehicle) => {
    let premFilterResult: boolean = true;
    if (filterPrem !== undefined)
      premFilterResult = vehicle.is_premium === filterPrem;

    let giftFilterResult: boolean = true;
    if (filterGift !== undefined)
      giftFilterResult = vehicle.is_gift === filterGift;

    let brFilterResult: boolean = filterBr.includes(vehicle.realistic_br);
    if (gameMode === GameMode.arcade)
      brFilterResult = filterBr.includes(vehicle.arcade_br);
    if (gameMode === GameMode.simulator)
      brFilterResult = filterBr.includes(vehicle.simulator_br);

    return (
      filterNation[vehicle.country] &&
      filterType[vehicle.vehicle_type] &&
      premFilterResult &&
      giftFilterResult &&
      brFilterResult &&
      filterRank.includes(vehicle.era)
    );
  });
};

export const applySorting = (
  db: Vehicle[],
  activeSorting: SortingType,
  gameMode: GameMode,
): Vehicle[] => {
  if (activeSorting === SortingType.br) {
    return db.sort((a, b) => {
      if (a.realistic_br > b.realistic_br) return 1;
      if (gameMode === GameMode.arcade && a.arcade_br > b.arcade_br) return 1;
      if (gameMode === GameMode.simulator && a.simulator_br > b.simulator_br)
        return 1;
      return -1;
    });
  }

  if (activeSorting === SortingType.name) {
    return db.sort((a, b) => a.identifier.localeCompare(b.identifier));
  }

  return [];
};

// if (sorting === "br") {
//   vehiclesFiltered.sort((a, b) => {
//     if (a.realistic_br > b.realistic_br) return 1
//     if (appFilters.gameMode === GameMode.arcade && a.arcade_br > b.arcade_br) return 1
//     if (appFilters.gameMode === GameMode.simulator && a.simulator_br > b.simulator_br) return 1
//     return -1
//   })
// }

// if (sorting === "name") {
//   vehiclesFiltered.sort((a, b) => a.identifier.localeCompare(b.identifier))
// }
