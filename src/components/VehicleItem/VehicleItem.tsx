import React from "react"

import { Vehicle } from "../../api/types"

import styles from "./VehicleItem.module.scss"

type VehicleItemProps = {
  vehicle: Vehicle
}

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle }) => {
  const {
    identifier,
    realistic_br,
    images: { techtree },
  } = vehicle

  const real_br = Number.isInteger(Number(realistic_br)) ? `${realistic_br}.0` : realistic_br

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
        <div className={styles.item__text}>
          <div>
            <span className={styles.item__id}>{identifier}</span>
          </div>
          <div>
            <span>{real_br}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleItem
