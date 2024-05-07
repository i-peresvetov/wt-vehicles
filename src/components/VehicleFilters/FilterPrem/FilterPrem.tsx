import React, { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import VehicleFilterRadio from "../../VehicleFilterRadio"

import { selectFilters, selectLang } from "../../../redux/app/selectors"
import { setFilterPrem } from "../../../redux/app/slice"
import { localize, radioArr } from "../../../assets/dataArr"

import styles from "./FilterPrem.module.scss"

const FilterPrem: React.FC = () => {
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const { prem } = localize
  const { filterPrem } = useSelector(selectFilters)

  return (
    <fieldset className={styles.filter__prem}>
    <legend>{prem[lang]}</legend>
    <ul>
      {radioArr.map((item, index) => (
        <li key={index}>
          <VehicleFilterRadio
            value={item.value}
            label={item.locales[lang]}
            radioName="prem"
            state={filterPrem}
            changeFunc={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === "true" || e.target.value === "false") {
                dispatch(setFilterPrem(Boolean(e.target.value === "true")))
              }
              if (e.target.value === "undefined") dispatch(setFilterPrem(undefined))
            }}
          />
        </li>
      ))}
    </ul>
  </fieldset>
  )
}

export default FilterPrem
