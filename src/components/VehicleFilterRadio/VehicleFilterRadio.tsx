import React from "react"

import styles from "./VehicleFilterRadio.module.scss"

type VehicleFilterRadioProps = {
  radioName: string
  value: boolean | undefined | string
  label: string
  state: boolean | undefined | string
  changeFunc: any
}

const VehicleFilterRadio: React.FC<VehicleFilterRadioProps> = ({ radioName, value, label, state, changeFunc }) => {
  
  return (
    <label>
      <input type="radio" name={radioName} value={String(value)} checked={state === value} onChange={changeFunc}/>
      {label}
    </label>
  )
}

export default VehicleFilterRadio
