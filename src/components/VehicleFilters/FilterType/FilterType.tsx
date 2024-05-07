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
      <ul>
        {/* <li>Танк</li>
      <li>Самолёт</li> */}
      </ul>
    </fieldset>
  )
}

export default FilterType
