import React from "react"

import styles from "./HeaderLine.module.scss"
import LangSwitch from "../LangSwitch/LangFlag"
import BaseStats from "../BaseStats"

const HeaderLine: React.FC = () => {
  // PTRootUI

  return (
    <header className={styles.header}>
      <BaseStats />
      <div className={styles["header__lang-switch"]}>
        <LangSwitch />
      </div>
    </header>
  )
}

export default HeaderLine
