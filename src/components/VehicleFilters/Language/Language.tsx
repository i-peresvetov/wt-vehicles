import React, { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"

import VehicleFilterRadio from "../../VehicleFilterRadio"

import { selectLang, selectSorting } from "../../../redux/app/selectors"
import { setLanguage } from "../../../redux/app/slice"
import { languageArr, localize } from "../../../assets/dataArr"

import styles from "./Language.module.scss"

const Language: React.FC = () => {
  const dispatch = useDispatch()
  const lang = useSelector(selectLang)
  const { language } = localize
  const sorting = useSelector(selectSorting)

  return (
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
  )
}

export default Language
