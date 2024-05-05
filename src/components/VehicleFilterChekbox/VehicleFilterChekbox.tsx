import React from "react"

import { Countries } from "../../api/types"

import styles from "./VehicleFilterChekbox.module.scss"

type VehicleFilterChekboxProps = {
  value: Countries | number
  labelText: string
  onChange: any
  status: boolean
}

const VehicleFilterChekbox: React.FC<VehicleFilterChekboxProps> = ({
  labelText,
  value,
  onChange,
  status
}) => {
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
        {labelText}
      </label>
    </div>
  )
}

export default VehicleFilterChekbox