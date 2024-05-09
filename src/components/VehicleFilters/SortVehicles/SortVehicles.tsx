import React, { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import VehicleFilterRadio from "../../VehicleFilterRadio"

import { selectLang, selectSorting } from "../../../redux/app/selectors"
import { setSorting } from "../../../redux/app/slice"
import { localize, sortArr } from "../../../assets/dataArr"

import styles from "./SortVehicles.module.scss"
import { SortingType } from "../../../redux/app/types"

const SortVehicles: React.FC = () => {
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const { sort } = localize
  const sorting = useSelector(selectSorting)

  return (
    <fieldset className={styles.filter__sort}>
      <legend>{sort[lang]}</legend>
      <ul>
        {sortArr.map((item, index) => (
          <li key={index}>
            <VehicleFilterRadio
              value={item.value}
              label={item.locales[lang]}
              radioName="sort"
              state={sorting}
              changeFunc={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.value === SortingType.br || e.target.value === SortingType.name) {
                  dispatch(setSorting(e.target.value))
                }
              }}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  )
}

export default SortVehicles
