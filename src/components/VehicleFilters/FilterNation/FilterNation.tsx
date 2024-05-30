import React from "react";
import { useDispatch, useSelector } from "react-redux";

import VehicleFilterChekbox from "../../VehicleFilterChekbox";

import { selectFilters, selectLang } from "../../../redux/app/selectors";
import { setFilterNation, setFilterNationAll } from "../../../redux/app/slice";
import { countriesArr, localize } from "../../../assets/dataArr";

import styles from "./FilterNation.module.scss";

const FilterNation: React.FC = () => {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);
  const { clear, all } = localize;
  const { filterNation } = useSelector(selectFilters);

  return (
    <div>
      <ul>
        {countriesArr.map((country) => {
          return (
            <li key={country.value}>
              <VehicleFilterChekbox
                labelText={country.locales[lang]}
                value={country.value}
                onChange={() => {
                  dispatch(
                    setFilterNation({
                      ...filterNation,
                      [country.value]: !filterNation[country.value],
                    }),
                  );
                }}
                status={filterNation[country.value]}
              />
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          dispatch(setFilterNationAll(true));
        }}
      >
        {all[lang]}
      </button>
      <button
        onClick={() => {
          dispatch(setFilterNationAll(false));
        }}
      >
        {clear[lang]}
      </button>
    </div>
  );
};

export default FilterNation;
