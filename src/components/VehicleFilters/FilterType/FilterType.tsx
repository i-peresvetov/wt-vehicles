import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilters, selectLang } from "../../../redux/app/selectors";
import { TypesEnum, localize, typesArr } from "../../../assets/dataArr";

import styles from "./FilterType.module.scss";
import VehicleFilterChekbox from "../../VehicleFilterChekbox";
import {
  setFilterType,
  setFilterTypeArmy,
  setFilterTypeAvia,
  setFilterTypeFleet,
} from "../../../redux/app/slice";

const FilterType: React.FC = () => {
  const dispatch = useDispatch();
  const { filterType } = useSelector(selectFilters);
  const lang = useSelector(selectLang);
  const { type, all, clear, aviation, army, fleet } = localize;

  const setFilter = (type: { value: TypesEnum }) => {
    dispatch(
      setFilterType({ ...filterType, [type.value]: !filterType[type.value] }),
    );
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <p>{army[lang]}</p>
              <button
                onClick={() => {
                  dispatch(setFilterTypeArmy(true));
                }}
              >
                {all[lang]}
              </button>
              <button
                onClick={() => {
                  dispatch(setFilterTypeArmy(false));
                }}
              >
                {clear[lang]}
              </button>
            </td>
            <td>
              <ul>
                {typesArr.map((type) => {
                  if (type.globaltype === "army") {
                    return (
                      <li key={type.value}>
                        <VehicleFilterChekbox
                          value={type.value}
                          labelText={type.locales[lang]}
                          onChange={() => {
                            setFilter(type);
                          }}
                          status={filterType[type.value]}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>{aviation[lang]}</p>
              <button
                onClick={() => {
                  dispatch(setFilterTypeAvia(true));
                }}
              >
                {all[lang]}
              </button>
              <button
                onClick={() => {
                  dispatch(setFilterTypeAvia(false));
                }}
              >
                {clear[lang]}
              </button>
            </td>
            <td>
              <ul>
                {typesArr.map((type) => {
                  if (type.globaltype === "aviation") {
                    return (
                      <li key={type.value}>
                        <VehicleFilterChekbox
                          value={type.value}
                          labelText={type.locales[lang]}
                          onChange={() => {
                            setFilter(type);
                          }}
                          status={filterType[type.value]}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <p>{fleet[lang]}</p>
              <button
                onClick={() => {
                  dispatch(setFilterTypeFleet(true));
                }}
              >
                {all[lang]}
              </button>
              <button
                onClick={() => {
                  dispatch(setFilterTypeFleet(false));
                }}
              >
                {clear[lang]}
              </button>
            </td>
            <td>
              <ul>
                {typesArr.map((type) => {
                  if (type.globaltype === "fleet") {
                    return (
                      <li key={type.value}>
                        <VehicleFilterChekbox
                          value={type.value}
                          labelText={type.locales[lang]}
                          onChange={() => {
                            setFilter(type);
                          }}
                          status={filterType[type.value]}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </td>
          </tr>
          {/* <tr>Эвенты, ядерка</tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default FilterType;

// | "lighttank" лёгкий такн
// | "mediumtank" Средний танк
// | "heavytank" Тяжёлый танк
// | "tankdestroyer" САУ
// | "spaa" ЗСУ

// | "fighter" Истребитель
// | "stormovik" Штурмовик
// | "bomber" Бомбордировщик
// | "divebomber" Пикирующий Бомбордировщик

// | "torpedoboat"
// | "submarinechaser"
// | "minelayer"
// | "transport"
// | "navalferrybarge"
// | "destroyer"
// | "torpedogunboat"
// | "ship"
// | "gunboat"
