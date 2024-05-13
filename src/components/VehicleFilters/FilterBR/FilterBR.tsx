import React from "react"
import { useDispatch, useSelector } from "react-redux"

import VehicleFilterChekbox from "../../VehicleFilterChekbox"

import { setFilterBr, setFilterBrAll, setGameMode } from "../../../redux/app/slice"
import { selectFilters, selectLang } from "../../../redux/app/selectors"

import { brArr, gameModeArr, localize } from "../../../assets/dataArr"

import styles from "./FilterBR.module.scss"
import VehicleFilterRadio from "../../VehicleFilterRadio"

const FilterBR: React.FC = () => {
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const { filterBr, gameMode } = useSelector(selectFilters)
  const { br, clear, all, mode } = localize

  return (
    <fieldset className={styles.br}>
      <legend>{br[lang]}</legend>
      <ul>
        {brArr.map((br) => (
          <li key={br}>
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
          dispatch(setFilterBrAll(true))
        }}
      >
        {all[lang]}
      </button>
      <button
        onClick={() => {
          dispatch(setFilterBrAll(false))
        }}
      >
        {clear[lang]}
      </button>

      <fieldset>
        <legend>{mode[lang]}</legend>
        <ul>
          {gameModeArr.map((mode) => (
            <li key={mode.value}>
              <VehicleFilterRadio
                value={mode.value}
                label={mode.locales[lang]}
                radioName="gameMode"
                state={gameMode}
                changeFunc={() => {
                  dispatch(setGameMode(mode.value))
                }}
              />
            </li>
          ))}
        </ul>
      </fieldset>
    </fieldset>
  )
}

export default FilterBR
