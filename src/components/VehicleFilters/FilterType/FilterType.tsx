import React from "react";
import { useSelector } from "react-redux";

import { selectLang } from "../../../redux/app/selectors";
import { localize, typesArr } from "../../../assets/dataArr";

import styles from "./FilterType.module.scss";
import VehicleFilterChekbox from "../../VehicleFilterChekbox";

const FilterType: React.FC = () => {
  const lang = useSelector(selectLang);
  const { type } = localize;

  return (
    <fieldset className={styles.filter__type}>
      <legend>{type[lang]}</legend>
      <ul>
        {/* {typesArr.map()} */}
      </ul>
      {/* <table>
        <tr>
          <td>Армия</td>
          <td>
            <p>Лёгкий танк</p>
            <p>Средний танк</p>
            <p>Тяжёлый танк</p>
            <p>САУ</p>
            <p>ЗСУ</p>
          </td>
        </tr>
        <tr>
          <td>Авиация</td>
          <td>
            <p>Истребитель</p>
            <p>Штурмовик</p>
            <p>Бомбордировщик</p>
            <p>Пикирующий бомбордировщик</p>
          </td>
        </tr>
        <tr>
          <td>Флот</td>
          <td>
            <p>Никому не нужен</p>
            <p>Ты что, флотоводец?</p>
          </td>
        </tr>
        <tr>Эвенты, ядерка</tr>
      </table> */}
    </fieldset>
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
