import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import VehicleItem from "../VehicleItem"

import { selectFilters, selectLang, selectSorting } from "../../redux/app/selectors"
import { applyFilters, applySorting } from "../../utils/filterDb"

import { localize } from "../../assets/dataArr"
import { fakeDb } from "../../api/fakeApi"

import styles from "./VehicleList.module.scss"
import { useGetVehiclesQuery, useLazyGetVehiclesQuery } from "../../api/apiSlice"
import { addVehicles } from "../../redux/database/slice"
import { selectVehicles } from "../../redux/database/selectors"

const VehicleList: React.FC = () => {
  const dispatch = useDispatch()
  const vehiclesDb = useSelector(selectVehicles)
  // const {
  //   data: vehiclesData,
  //   isLoading: vehiclesIsLoading,
  //   isSuccess: vehiclesIsSuccess,
  // } = useGetVehiclesQuery({ limit: 200 })
  const [triggerVehiclesLoading, vehicleLoadingResult] = useLazyGetVehiclesQuery()
  const { data, isLoading, isSuccess } = vehicleLoadingResult

  useEffect(()=>{
    let fetchPage = 0
    // while(vehiclesDb.length < 400) {
    //   triggerVehiclesLoading({limit: 200, page: fetchPage})
    //   if (isSuccess) dispatch(addVehicles(data))
    //   fetchPage++
    // }
  }, [])

  // const vehiclesData = fakeDb
  const vehiclesData = vehiclesDb

  const { found } = localize
  const appFilters = useSelector(selectFilters)
  const sorting = useSelector(selectSorting)
  const lang = useSelector(selectLang)

  // useEffect(() => {
  //   if (vehiclesIsSuccess) {
  //     dispatch(addVehicles(vehiclesData))
  //     console.log(vehiclesData.length)
  //     console.log(vehiclesDb.length)
  //   }
  // }, [vehiclesIsSuccess])

  // if (vehiclesIsLoading) return <p>ЗАГРУЗКА...</p>

  const vehiclesFiltered = applyFilters(vehiclesData!, appFilters)
  const vehiclesFilteredAndSorted = applySorting(vehiclesFiltered, sorting, appFilters.gameMode)

  const vehiclesList = vehiclesFilteredAndSorted.map((vehicle) => (
    <li key={vehicle.identifier}>
      <VehicleItem vehicle={vehicle} />
    </li>
  ))

  return (
    <>
      <p className={styles.total}>
        {found[lang]}: {vehiclesFiltered.length}
      </p>
      <ul className={styles.list}>{vehiclesList}</ul>
    </>
  )
}

export default VehicleList
