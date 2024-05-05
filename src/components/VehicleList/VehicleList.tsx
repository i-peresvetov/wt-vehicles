import React from "react"

import { Vehicle } from "../../api/types"

import styles from "./VehicleList.module.scss"
import VehicleItem from "../VehicleItem"
import { useSelector } from "react-redux"
import { selectFilters, selectSorting } from "../../redux/app/selectors"

type VehicleListProps = {
  vehicles: Vehicle[]
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  const { filterNation, filterPrem, filterGift, filterBr, filterRank } = useSelector(selectFilters)
  const sorting = useSelector(selectSorting)

  const vehiclesFiltered = vehicles.filter((vehicle) => {
    let premFilterResult: boolean = true
    if (filterPrem !== undefined) premFilterResult = vehicle.is_premium === filterPrem

    let giftFilterResult: boolean = true
    if (filterGift !== undefined) giftFilterResult = vehicle.is_gift === filterGift

    return (
      filterNation[vehicle.country] &&
      premFilterResult &&
      giftFilterResult &&
      filterBr.includes(vehicle.realistic_br) &&
      filterRank.includes(vehicle.era)
    )
  })

  if (sorting === "br") {
    vehiclesFiltered.sort((a, b) => {
      if (a.realistic_br > b.realistic_br) return 1
      return -1
    })
  }

  if (sorting === "name") {
    vehiclesFiltered.sort((a, b) => a.identifier.localeCompare(b.identifier))
  }

  const vehiclesList = vehiclesFiltered.map((vehicle) => (
    <li key={vehicle.identifier}>
      <VehicleItem vehicle={vehicle} />
    </li>
  ))

  return <ul className={styles.list}>{vehiclesList}</ul>
}

export default VehicleList
