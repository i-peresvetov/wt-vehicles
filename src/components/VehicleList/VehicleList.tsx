import React from "react"

import { Vehicle } from "../../api/types"

import styles from "./VehicleList.module.scss"
import VehicleItem from "../VehicleItem"
import { useSelector } from "react-redux"
import { selectFilters, selectSorting } from "../../redux/app/selectors"
import { GameMode } from "../../redux/app/types"

type VehicleListProps = {
  vehicles: Vehicle[]
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
  const { filterNation, filterPrem, filterGift, filterBr, filterRank, gameMode } =
    useSelector(selectFilters)
  const sorting = useSelector(selectSorting)

  const vehiclesFiltered = vehicles.filter((vehicle) => {
    let premFilterResult: boolean = true
    if (filterPrem !== undefined) premFilterResult = vehicle.is_premium === filterPrem

    let giftFilterResult: boolean = true
    if (filterGift !== undefined) giftFilterResult = vehicle.is_gift === filterGift

    let brFilterResult: boolean = filterBr.includes(vehicle.realistic_br)
    if (gameMode === GameMode.arcade) brFilterResult = filterBr.includes(vehicle.arcade_br)
    if (gameMode === GameMode.simulator) brFilterResult = filterBr.includes(vehicle.simulator_br)

    return (
      filterNation[vehicle.country] &&
      premFilterResult &&
      giftFilterResult &&
      brFilterResult &&
      filterRank.includes(vehicle.era)
    )
  })

  if (sorting === "br") {
    vehiclesFiltered.sort((a, b) => {
      if (a.realistic_br > b.realistic_br) return 1
      if (gameMode === GameMode.arcade && a.arcade_br > b.arcade_br) return 1
      if (gameMode === GameMode.simulator && a.simulator_br > b.simulator_br) return 1
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
