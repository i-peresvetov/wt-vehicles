import React from "react"
import { useSelector } from "react-redux"

import { selectLang } from "../../../redux/app/selectors"
import { localize } from "../../../assets/dataArr"

import styles from "./FilterType.module.scss"

const FilterType: React.FC = () => {
  const lang = useSelector(selectLang)
  const { type } = localize

  return (
    <fieldset className={styles.filter__type}>
      <legend>{type[lang]}</legend>
      <table>
        <tr>
          <td>Армия</td>
          <td>
            <p>Лёгкий танк</p>
            <p>Средний танк</p>
            <p>Тяжёлый танк</p>
            <p>САУ</p>
          </td>
        </tr>
        <tr>
          <td>Авиация</td>
          <td>
            <p>Истребитель</p>
            <p>Штурмовик</p>
            <p>Бомбордировщик</p>
          </td>
        </tr>
        <tr>
        <td>Флот</td>
          <td>
            <p>Никому не нужен</p>
            <p>Ты что, флотоводец?</p>
          </td>
        </tr>
        <tr>
          Эвенты, ядерка
        </tr>
      </table>
    </fieldset>
  )
}

export default FilterType
