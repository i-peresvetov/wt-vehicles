import React from "react"

import styles from "./LangSwitch.module.scss"

const LangSwitch: React.FC = () => {
  return (
    <div className={styles["lang-switch"]}>
      <div>[---] RU ^</div>
      <div>
        <ul>
          <li>[---] RU</li>
          <li>[---] EN</li>
        </ul>
      </div>
    </div>
  )
}

export default LangSwitch
