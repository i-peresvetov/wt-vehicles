import React from "react"

import styles from "./BaseStats.module.scss"
import { useGetStatsQuery } from "../../api/apiSlice"
import { localize, countriesArr } from "../../assets/dataArr"
import { useSelector } from "react-redux"
import { selectLang } from "../../redux/app/selectors"

const BaseStats: React.FC = () => {
  const { data, isLoading } = useGetStatsQuery()
  const { loading, total } = localize
  const lang = useSelector(selectLang)

  if (isLoading) return <div className={styles.stats}>{loading[lang]}</div>

  const vehicleSum = data!.reduce((sum, countyStat) => sum + countyStat.total_vehicles, 0)

  return (
    <div className={styles.stats}>
      <p>
        {countriesArr.map((country) => (
          <span>
            {country.locales[lang]}:{" "}
            {data!.find((countryStat) => countryStat.country === country.value)?.total_vehicles}.{" "}
          </span>
        ))}
      </p>
      <p>
        {total[lang]}: {vehicleSum}
      </p>
    </div>
  )
}

export default BaseStats
