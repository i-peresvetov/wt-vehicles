import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

import VehicleItem from "../VehicleItem";

import {
  selectFilters,
  selectLang,
  selectSorting,
} from "../../redux/app/selectors";
import { applyFilters, applySorting } from "../../utils/filterDb";

import { localize } from "../../assets/dataArr";
import { fakeDb } from "../../api/fakeApi";

import styles from "./VehicleList.module.scss";
import {
  useGetVehiclesQuery,
  useLazyGetVehiclesQuery,
} from "../../api/apiSlice";

import { selectVehicles } from "../../redux/database/selectors";
import { fetchVehicles } from "../../redux/database/asyncActions";

const VehicleList: React.FC = () => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const vehiclesDb = useSelector(selectVehicles);

  const getVehicles = async (page: number) => {
    dispatch(fetchVehicles({ limit: 200, page }));
  };
  // const {
  //   data: vehiclesData,
  //   isLoading: vehiclesIsLoading,
  //   isSuccess: vehiclesIsSuccess,
  // } = useGetVehiclesQuery({ limit: 200 })
  // const [triggerVehiclesLoading, vehicleLoadingResult] = useLazyGetVehiclesQuery()
  // const { data, isLoading, isSuccess } = vehicleLoadingResult

  useEffect(() => {
    let fetchPage = 0;
    // 1967
    // while (fetchPage < Math.ceil(1967 / 200)) {
    //   getVehicles(fetchPage);
    //   console.log(`загружена страница ${fetchPage}`);
    //   fetchPage++;
    // }
    getVehicles(0);
    getVehicles(1);
    getVehicles(2);
    getVehicles(3);
    getVehicles(4);
    getVehicles(5);
    getVehicles(6);
    getVehicles(7);
    getVehicles(8);
    getVehicles(9);
    getVehicles(10);
    getVehicles(11);
    getVehicles(12);
    getVehicles(13);
  }, []);

  // const vehiclesData = fakeDb
  const vehiclesData = vehiclesDb;

  const { found } = localize;
  const appFilters = useSelector(selectFilters);
  const sorting = useSelector(selectSorting);
  const lang = useSelector(selectLang);

  // useEffect(() => {
  //   if (vehiclesIsSuccess) {
  //     dispatch(addVehicles(vehiclesData))
  //     console.log(vehiclesData.length)
  //     console.log(vehiclesDb.length)
  //   }
  // }, [vehiclesIsSuccess])

  // if (vehiclesIsLoading) return <p>ЗАГРУЗКА...</p>

  const vehiclesFiltered = applyFilters(vehiclesData!, appFilters);
  const vehiclesFilteredAndSorted = applySorting(
    vehiclesFiltered,
    sorting,
    appFilters.gameMode,
  );

  const vehiclesList = vehiclesFilteredAndSorted.map((vehicle) => (
    <li key={vehicle.identifier}>
      <VehicleItem vehicle={vehicle} />
    </li>
  ));

  return (
    <>
      <p className={styles.total}>
        {found[lang]}: {vehiclesFiltered.length}
      </p>
      <ul className={styles.list}>{vehiclesList}</ul>
    </>
  );
};

export default VehicleList;
