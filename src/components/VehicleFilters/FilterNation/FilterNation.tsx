import React from "react"
import { useDispatch, useSelector } from "react-redux"

import VehicleFilterChekbox from "../../VehicleFilterChekbox"

import { selectFilters, selectLang } from "../../../redux/app/selectors"
import { setFilterNation, setFilterNationAll } from "../../../redux/app/slice"
import { countriesArr, localize } from "../../../assets/dataArr"

import styles from "./FilterNation.module.scss"

const FilterNation: React.FC = () => {
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const { nation, clear, all } = localize
  const { filterNation } = useSelector(selectFilters)

  return (
    <fieldset className={styles.filter__nation}>
    <legend>{nation[lang]}</legend>
    <ul>
      {countriesArr.map((country) => (
        <li key={country.value}>
          <VehicleFilterChekbox
            labelText={country.locales[lang]}
            value={country.value}
            onChange={() => {
              dispatch(
                setFilterNation({
                  ...filterNation,
                  [country.value]: !filterNation[country.value],
                })
              )
            }}
            status={filterNation[country.value]}
          />
        </li>
      ))}
    </ul>

    <button
      onClick={() => {
        dispatch(setFilterNationAll(false))
      }}
    >
      {clear[lang]}
    </button>
    <button
      onClick={() => {
        dispatch(setFilterNationAll(true))
      }}
    >
      {all[lang]}
    </button>
  </fieldset>
  )
}

export default FilterNation
