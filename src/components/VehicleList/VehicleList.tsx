import React from "react"

import { Vehicle } from "../../api/types"

import styles from "./VehicleList.module.scss"
import VehicleItem from "../VehicleItem"

type VehicleListProps = {
  vehicles: Vehicle[]
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  const vehiclesList = vehicles.map((vehicle) => <li key={vehicle.identifier}><VehicleItem vehicle={vehicle} /></li>)

  return <ul className={styles.list}>{vehiclesList}</ul>
}

export default VehicleList
