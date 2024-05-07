import React, { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import VehicleFilterRadio from "../../VehicleFilterRadio"

import { selectFilters, selectLang } from "../../../redux/app/selectors"
import { setFilterGift } from "../../../redux/app/slice"
import { localize, radioArr } from "../../../assets/dataArr"

import styles from "./FilterGift.module.scss"

const FilterGift: React.FC = () => {
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const { gift } = localize
  const { filterGift } = useSelector(selectFilters)

  return (
    <fieldset className={styles.filter__gift}>
      <legend>{gift[lang]}</legend>
      <ul>
        {radioArr.map((item, index) => (
          <li key={index}>
            <VehicleFilterRadio
              value={item.value}
              label={item.locales[lang]}
              radioName="gift"
              state={filterGift}
              changeFunc={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.value === "true" || e.target.value === "false") {
                  dispatch(setFilterGift(Boolean(e.target.value === "true")))
                }
                if (e.target.value === "undefined") dispatch(setFilterGift(undefined))
              }}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  )
}

export default FilterGift
