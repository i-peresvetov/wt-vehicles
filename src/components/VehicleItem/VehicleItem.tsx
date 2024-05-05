import React from "react"

import { Vehicle } from "../../api/types"

import styles from "./VehicleItem.module.scss"
import ownBackground from "../../assets/Item_own.png"
import premBackground from "../../assets/Item_prem.png"

type VehicleItemProps = {
  vehicle: Vehicle
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle }) => {
  const {
    identifier,
    realistic_br,
    images: { techtree },
  } = vehicle
  return (
    <div className={styles.item}>
      <div
        className={
          vehicle.is_premium ? styles["item__wrapper--prem"] : styles["item__wrapper--own"]
        }
      >
        <div className={styles.item__image}>
          <img src={`http://${techtree}`} alt={identifier} />
        </div>
        <div>
          <div>{identifier}</div>
          <div>{realistic_br}</div>
        </div>
      </div>
    </div>
  )
}

export default VehicleItem
