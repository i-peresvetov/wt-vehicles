import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../redux/store"

import VehicleItem from "../VehicleItem"

import { selectFilters, selectLang, selectSorting } from "../../redux/app/selectors"
import { applyFilters, applySorting } from "../../utils/filterDb"

import { localize } from "../../assets/dataArr"
import { fakeDb } from "../../api/fakeApi"

import styles from "./VehicleList.module.scss"
// import { useGetVehiclesQuery, useLazyGetVehiclesQuery } from "../../api/apiSlice"

import { selectVehicles } from "../../redux/database/selectors"
import { fetchVehicles } from "../../redux/database/asyncActions"
import { useGetLocalesQuery } from "../../api/apiSlice"

const VehicleList: React.FC = () => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch()
  const vehiclesDb = useSelector(selectVehicles)
  const { found, onScreen } = localize
  const appFilters = useSelector(selectFilters)
  const sorting = useSelector(selectSorting)
  const lang = useSelector(selectLang)

  const { data: localesData } = useGetLocalesQuery(lang)

  const getVehicles = async (page: number) => {
    dispatch(fetchVehicles({ limit: 200, page }))
  }

  useEffect(() => {
    let fetchPage = 0
    while (fetchPage < 14) {
      getVehicles(fetchPage)
      fetchPage++
    }
  }, [])

  // const vehiclesData = fakeDb
  const vehiclesData = vehiclesDb

  const vehiclesFiltered = applyFilters(vehiclesData!, appFilters)
  const vehiclesFilteredAndSorted = applySorting(vehiclesFiltered, sorting, appFilters.gameMode)

  const vehiclesList = vehiclesFilteredAndSorted.slice(0, 50).map((vehicle) => (
    <li key={vehicle.identifier}>
      <VehicleItem
        vehicle={vehicle}
        localizedName={localesData?.vehicles[`${vehicle.identifier.toLowerCase()}_short`]}
      />
    </li>
  ))

  return (
    <>
      <p className={styles.total}>
        {found[lang]}: {vehiclesFiltered.length}
      </p>
      <p className={styles.total}>
        {onScreen[lang]}: {vehiclesList.length}
      </p>
      <ul className={styles.list}>{vehiclesList}</ul>
    </>
  )
}

export default VehicleList
