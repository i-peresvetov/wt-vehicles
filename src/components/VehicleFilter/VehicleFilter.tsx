import React, { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import FilterNation from "../VehicleFilters/FilterNation"
import VehicleFilterChekbox from "../VehicleFilterChekbox"
import VehicleFilterRadio from "../VehicleFilterRadio"

import { selectFilters, selectLang, selectSorting } from "../../redux/app/selectors"
import {
  setFilterBr,
  setFilterBrAll,
  setFilterGift,
  setFilterNation,
  setFilterNationAll,
  setFilterPrem,
  setFilterRank,
  setFilterRankAll,
  setLanguage,
  setSorting,
} from "../../redux/app/slice"

import {
  brArr,
  countriesArr,
  languageArr,
  localize,
  radioArr,
  rankArr,
  sortArr,
} from "../../assets/dataArr"

import styles from "./VehicleFilter.module.scss"
import FilterBR from "../VehicleFilters/FilterBR"
import FilterRank from "../VehicleFilters/FilterRank"

const VehicleFilter: React.FC = () => {
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const sorting = useSelector(selectSorting)
  const { nation, type, br, prem, gift, sort, rank, clear, all, language } = localize
  const { filterPrem, filterGift, filterNation, filterBr, filterRank } = useSelector(selectFilters)

  return (
    <div className={styles.filter}>
      <FilterNation />
      <FilterBR />
      <FilterRank />

      <fieldset className={styles.filter__type}>
        <legend>{type[lang]}</legend>
        <ul>
          {/* <li>Танк</li>
          <li>Самолёт</li> */}
        </ul>
      </fieldset>

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

      {/* <fieldset className={styles.filter__gift}>
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
      </fieldset> */}

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
                  if (e.target.value === "br" || e.target.value === "name") {
                    dispatch(setSorting(e.target.value))
                  }
                }}
              />
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset>
        <legend>{language[lang]}</legend>
        <ul>
          {languageArr.map((language) => (
            <li key={language.value}>
              <VehicleFilterRadio
                value={language.value}
                label={language.locales[lang]}
                radioName="lang"
                state={lang}
                changeFunc={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value === "ru" || e.target.value === "en") {
                    dispatch(setLanguage(e.target.value))
                  }
                }}
              />
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  )
}

export default VehicleFilter
