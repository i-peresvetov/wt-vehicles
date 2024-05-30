import React from "react";
import { useSelector } from "react-redux";
import { localize } from "../../assets/dataArr";
import { selectLang } from "../../redux/app/selectors";
import { selectInterfaceLocalization } from "../../redux/database/selectors";
import FilterNation from "../VehicleFilters/FilterNation";
import FilterRank from "../VehicleFilters/FilterRank";
import FilterType from "../VehicleFilters/FilterType";

import styles from "./VehicleFilterInline.module.scss";

const VehicleFilterInline: React.FC = () => {
  const lang = useSelector(selectLang);
  const { nation, br, rank, type, other } = localize;
  // const localization = useSelector(selectInterfaceLocalization);
  // const nation_l = localization["nation"];

  return (
    <div className={styles.filter}>
      <div className={styles.filter__wrapper}>
        <div className={styles.filter__column}>
          <span className={styles.filter__name}>
            {nation[lang].toUpperCase()}
            {}
          </span>
          <div className={styles.filter__content}>
            <FilterNation />
          </div>
        </div>

        <div className={styles.filter__column}>
          <span className={styles.filter__name}>{br[lang].toUpperCase()}</span>
        </div>

        <div className={styles.filter__column}>
          <span className={styles.filter__name}>
            {rank[lang].toUpperCase()}
          </span>
          <div className={styles.filter__content}>
            <FilterRank />
          </div>
        </div>

        <div className={styles.filter__column}>
          <span className={styles.filter__name}>
            {type[lang].toUpperCase()}
          </span>
          <div className={styles.filter__content}>
            <FilterType />
          </div>
        </div>

        <div className={styles.filter__column}>
          <span className={styles.filter__name}>
            {other[lang].toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilterInline;
