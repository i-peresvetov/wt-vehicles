import { RootState } from "../store";

export const selectFilters = (state: RootState) => state.app.filter
export const selectLang = (state: RootState) => state.app.lang
export const selectSorting = (state: RootState) => state.app.sort
