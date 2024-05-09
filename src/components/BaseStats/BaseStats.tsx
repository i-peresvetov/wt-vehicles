import React from "react"

import styles from "./BaseStats.module.scss"
import { useGetStatsQuery } from "../../api/apiSlice"
import { localize, countriesArr } from "../../assets/dataArr"
import { useSelector } from "react-redux"
import { selectLang } from "../../redux/app/selectors"
import { selectVehicles } from "../../redux/database/selectors"

const BaseStats: React.FC = () => {
  const lang = useSelector(selectLang)
  const vehicleDb = useSelector(selectVehicles)
  const { loading, total } = localize

  const { data: statsData, isLoading: statsIsLoading } = useGetStatsQuery()

  if (statsIsLoading) return <div className={styles.stats}>{loading[lang]}</div>

  const vehicleSum = statsData!.reduce((sum, countyStat) => sum + countyStat.total_vehicles, 0)

  return (
    <div className={styles.stats}>
      <ul>
        {countriesArr.map((country) => (
          <li key={country.value}>
            {" "}
            <span>
              {country.locales[lang]}:{" "}
              {
                statsData!.find((countryStat) => countryStat.country === country.value)
                  ?.total_vehicles
              }
              .{" "}
            </span>
          </li>
        ))}
      </ul>
      <p>
        {total[lang]}: {vehicleSum}
      </p>
      <p>Загружено: {vehicleDb.length}</p>
    </div>
  )
}

export default BaseStats
