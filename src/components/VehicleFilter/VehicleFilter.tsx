import React from "react";

import FilterNation from "../VehicleFilters/FilterNation";
import FilterBR from "../VehicleFilters/FilterBR";
import FilterRank from "../VehicleFilters/FilterRank";
import FilterPrem from "../VehicleFilters/FilterPrem";
import FilterGift from "../VehicleFilters/FilterGift";
import SortVehicles from "../VehicleFilters/SortVehicles";
import FilterType from "../VehicleFilters/FilterType";

import styles from "./VehicleFilter.module.scss";

const VehicleFilter: React.FC = () => {
  return (
    <div className={styles.filter}>
      {/* <FilterNation /> */}
      <FilterBR />
      {/* <FilterRank /> */}
      {/* <FilterType /> */}
      <FilterPrem />
      {/* <FilterGift/> */}
      <SortVehicles />
    </div>
  );
};

export default VehicleFilter;
