import { Vehicle } from "../../api/types";

export type LocalizationFile = {
  interface:
    | {
        [key: string]: string;
      }
    | {};
};

export type DataBaseSliceState = {
  vehicles: Vehicle[];
  localization: LocalizationFile;
};
