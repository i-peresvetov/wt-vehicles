import React from "react";
import { useDispatch, useSelector } from "react-redux";

import VehicleFilterChekbox from "../../VehicleFilterChekbox";

import { selectFilters, selectLang } from "../../../redux/app/selectors";
import { setFilterRank, setFilterRankAll } from "../../../redux/app/slice";
import { rankArr, localize } from "../../../assets/dataArr";

import styles from "./FilterRank.module.scss";

const FilterRank: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);
  const { rank, clear, all } = localize;
  const { filterRank } = useSelector(selectFilters);

  return (
    <div>
      <ul>
        {rankArr.map((rank) => (
          <li key={rank.value}>
            <VehicleFilterChekbox
              labelText={rank.text}
              value={rank.value}
              onChange={() => {
                dispatch(setFilterRank(rank.value));
              }}
              status={filterRank.includes(rank.value)}
            />
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          dispatch(setFilterRankAll(true));
        }}
      >
        {all[lang]}
      </button>
      <button
        onClick={() => {
          dispatch(setFilterRankAll(false));
        }}
      >
        {clear[lang]}
      </button>
    </div>
  );
};

export default FilterRank;
