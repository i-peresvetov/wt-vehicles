import React from "react"
import { useDispatch, useSelector } from "react-redux"

import VehicleFilterChekbox from "../../VehicleFilterChekbox"

import { setFilterBr, setFilterBrAll } from "../../../redux/app/slice"
import { selectFilters, selectLang } from "../../../redux/app/selectors"

import { brArr, localize } from "../../../assets/dataArr"

import styles from "./FilterBR.module.scss"

const FilterBR: React.FC = () => {
  const dispatch = useDispatch()  
  const lang = useSelector(selectLang)
  const { filterBr } = useSelector(selectFilters)
  const { br, clear, all } = localize

  return (
    <fieldset className={styles.br}>
      <legend>{br[lang]}</legend>
      <ul>
        {brArr.map((br) => (
          <li>
            <VehicleFilterChekbox
              labelText={Number.isInteger(br) ? `${br}.0` : String(br)}
              value={br}
              onChange={() => {
                dispatch(setFilterBr(br))
              }}
              status={filterBr.includes(br)}
            />
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          dispatch(setFilterBrAll(false))
        }}
      >
        {clear[lang]}
      </button>
      <button
        onClick={() => {
          dispatch(setFilterBrAll(true))
        }}
      >
        {all[lang]}
      </button>
    </fieldset>
  )
}

export default FilterBR
