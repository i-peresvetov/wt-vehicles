import React from "react"

import styles from "./VehicleFilterInline.module.scss"

const VehicleFilterInline: React.FC = () => {
  return (
    <div className={styles.filter}>
      <div>НАЦИЯ</div>
      <div>БОЕВОЙ РЕЙТИНГ</div>
      <div>РАНГ</div>
      <div>ТИП</div>
      <div>ДРУГОЕ</div>
    </div>
  )
}

export default VehicleFilterInline
