import React from "react";

import { Vehicle } from "../../api/types";

import styles from "./VehicleItem.module.scss";
import { GameMode } from "../../redux/app/types";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/app/selectors";

type VehicleItemProps = {
  vehicle: Vehicle;
};

const VehicleItem: React.FC<VehicleItemProps> = ({ vehicle }) => {
  const {
    identifier,
    realistic_br,
    arcade_br,
    simulator_br,
    images: { techtree },
  } = vehicle;

  const { gameMode } = useSelector(selectFilters);

  let selectedBr = realistic_br;
  if (gameMode === GameMode.arcade) selectedBr = arcade_br;
  if (gameMode === GameMode.simulator) selectedBr = simulator_br;

  const br_modified = Number.isInteger(Number(selectedBr))
    ? `${selectedBr}.0`
    : selectedBr;

  return (
    <div className={styles.item}>
      <div
        className={
          vehicle.is_premium
            ? styles["item__wrapper--prem"]
            : styles["item__wrapper--own"]
        }
      >
        <div className={styles.item__image}>
          <img src={`https://${techtree}`} alt={identifier} />
        </div>
        <div className={styles.item__text}>
          <div>
            <span className={styles.item__id}>{identifier}</span>
          </div>
          <div>
            <span>{br_modified}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleItem;
