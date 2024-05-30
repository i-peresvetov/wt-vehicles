import React from "react"

import { Countries, VehicleTypes } from "../../api/types"

import styles from "./VehicleFilterChekbox.module.scss"
import { url } from "inspector"

type VehicleFilterChekboxProps = {
  value: Countries | number | VehicleTypes
  labelText: string
  onChange: any
  status: boolean
  addFlagImage?: boolean
}

const VehicleFilterChekbox: React.FC<VehicleFilterChekboxProps> = ({
  labelText,
  value,
  onChange,
  status,
  addFlagImage,
}) => {
  let imagePath = ""
  if (addFlagImage) {
    imagePath = require(`../../assets/flag/country_${value}.webp`)
  }

  const flagImage = (
    <span className={styles.line__flag} style={{ backgroundImage: `url(${imagePath})` }}></span>
  )

  return (
    <div className={styles.line}>
      <label htmlFor={labelText} className={styles.line__lable}>
        <input
          type="checkbox"
          className={styles.line__input}
          value={value}
          onChange={onChange}
          checked={status}
          id={labelText}
        />
        <span className={styles["filter-line__checkbox"]} />
        {imagePath ? flagImage : ""}
        <span>{labelText}</span>
      </label>
    </div>
  )
}

export default VehicleFilterChekbox
