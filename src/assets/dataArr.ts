import { GameMode } from "../redux/app/types"

enum CountriesEnum {
  usa = "usa",
  britain = "britain",
  china = "china",
  france = "france",
  germany = "germany",
  israel = "israel",
  italy = "italy",
  japan = "japan",
  sweden = "sweden",
  ussr = "ussr",
}

export const countriesArr = [
  { value: CountriesEnum.usa, locales: { ru: "США", en: "USA" } },
  { value: CountriesEnum.germany, locales: { ru: "Германия", en: "Germany" } },
  { value: CountriesEnum.ussr, locales: { ru: "СССР", en: "USSR" } },
  { value: CountriesEnum.britain, locales: { ru: "Британия", en: "Britain" } },
  { value: CountriesEnum.japan, locales: { ru: "Япония", en: "Japan" } },
  { value: CountriesEnum.china, locales: { ru: "Китай", en: "China" } },
  { value: CountriesEnum.italy, locales: { ru: "Италия", en: "Italy" } },
  { value: CountriesEnum.france, locales: { ru: "Франция", en: "France" } },
  { value: CountriesEnum.sweden, locales: { ru: "Швеция", en: "Sweden" } },
  { value: CountriesEnum.israel, locales: { ru: "Израиль", en: "Israel" } },
]

export const brArr = [
  1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 4.3, 4.7, 5.0, 5.3, 5.7, 6.0, 6.3, 6.7, 7.0,
  7.3, 7.7, 8.0, 8.3, 8.7, 9.0, 9.3, 9.7, 10.0, 10.3, 10.7, 11.0, 11.3, 11.7, 12.0, 12.3, 12.7,
]

export const rankArr = [
  { value: 1, text: "I" },
  { value: 2, text: "II" },
  { value: 3, text: "III" },
  { value: 4, text: "IV" },
  { value: 5, text: "V" },
  { value: 6, text: "VI" },
  { value: 7, text: "VII" },
  { value: 8, text: "VIII" },
]

export const radioArr = [
  { value: undefined, locales: { ru: "Не важно", en: "Doesn't matter" } },
  { value: true, locales: { ru: "Да", en: "Yes" } },
  { value: false, locales: { ru: "Нет", en: "No" } },
]

export const sortArr = [
  { value: "br", locales: { ru: "Боевой рейтинг", en: "Battle raiting" } },
  { value: "name", locales: { ru: "Название", en: "Name" } },
]

export const languageArr = [
  { value: "ru", locales: { ru: "Русский", en: "Russian" } },
  { value: "en", locales: { ru: "Английский", en: "English" } },
]

export const gameModeArr = [
  { value: GameMode.arcade, locales: { ru: "Аркада", en: "Arcade" } },
  { value: GameMode.realistic, locales: { ru: "Релистичный", en: "Realistic" } },
  { value: GameMode.simulator, locales: { ru: "Симуляторный", en: "Simulator" } },
]

export const localize = {
  nation: { ru: "Нация", en: "Nation" },
  br: { ru: "Боевой рейтинг", en: "Battle raiting" },
  rank: { ru: "Ранг", en: "Rank" },
  type: { ru: "[в разработке] Тип", en: "[in dev] Type" },
  prem: { ru: "Премиум", en: "Premium" },
  gift: { ru: "Подарок (я хз)", en: "Gift" },
  sort: { ru: "Сортировка", en: "Sort" },
  clear: { ru: "Очистить", en: "Clear" },
  all: { ru: "Все", en: "All" },
  language: { ru: "Язык", en: "Language" },
  mode: { ru: "Режим", en: "Game mode" },
}
