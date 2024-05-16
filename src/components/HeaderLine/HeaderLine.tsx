import React from "react"

import styles from "./HeaderLine.module.scss"
import LangSwitch from "../LangSwitch"
import BaseStats from "../BaseStats"

const HeaderLine: React.FC = () => {

  // PTRootUI
  
  return (
    <header className={styles.header}>
      {/* <ul>
        <li>[---]: 123</li>
        <li>[---]: 123</li>
        <li>[---]: 123</li>
        <li>[---]: 123</li>
      </ul> */}
      {/* <div>Loaded: 1234</div> */}
      <BaseStats/>

      <LangSwitch/>

      {/* <div>
        <div>[---] RU ^</div>
        <div>
          <ul>
            <li>[---] RU</li>
            <li>[---] EN</li>
          </ul>
        </div>
      </div> */}
    </header>
  )
}

export default HeaderLine
