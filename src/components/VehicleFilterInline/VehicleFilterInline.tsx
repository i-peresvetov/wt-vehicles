import React from "react";

import styles from "./VehicleFilterInline.module.scss";

const VehicleFilterInline: React.FC = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__wrapper}>
        <div className={styles.filter__name}>НАЦИЯ</div>
        <div className={styles.filter__name}>БОЕВОЙ РЕЙТИНГ</div>
        <div className={styles.filter__name}>РАНГ</div>
        <div className={styles.filter__name}>ТИП</div>
        <div className={styles.filter__name}>ДРУГОЕ</div>
      </div>
    </div>
  );
};

export default VehicleFilterInline;
