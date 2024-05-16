import React from "react"

import styles from "./LangFlag.module.scss"

type LangFlagProps = {
  lang: string
}

const LangFlag: React.FC<LangFlagProps> = ({ lang }) => {
  return (
    <>
      <div
        className={styles["lang-switch__flag"]}
        style={{
          backgroundImage: `url(${require(`./../../assets/flag/${lang}.svg`)})`,
        }}
      ></div>
      {lang.toUpperCase()}
    </>
  )
}

export default LangFlag
