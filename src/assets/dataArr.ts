import { GameMode } from "../redux/app/types";

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
];

export enum TypesEnum {
  lighttank = "lighttank",
  mediumtank = "mediumtank",
  heavytank = "heavytank",
  tankdestroyer = "tankdestroyer",
  spaa = "spaa",
  fighter = "fighter",
  stormovik = "stormovik",
  bomber = "bomber",
  divebomber = "divebomber",

  torpedoboat = "torpedoboat",
  submarinechaser = "submarinechaser",
  minelayer = "minelayer",
  transport = "transport",
  navalferrybarge = "navalferrybarge",
  destroyer = "destroyer",
  torpedogunboat = "torpedogunboat",
  ship = "ship",
  gunboat = "gunboat",
}

export const typesArr = {
  army: [
    {
      value: TypesEnum.lighttank,
      locales: { ru: "Легкий танк", en: "Light tank" },
    },
    {
      value: TypesEnum.mediumtank,
      locales: { ru: "Средний танк", en: "Medium tank" },
    },
    {
      value: TypesEnum.heavytank,
      locales: { ru: "Тяжёлый танк", en: "Heavy tank" },
    },
    {
      value: TypesEnum.tankdestroyer,
      locales: { ru: "САУ", en: "Tank destroyer" },
    },
    { value: TypesEnum.spaa, locales: { ru: "ЗСУ", en: "SPAA" } },
  ],
  aviation: [
    { value: TypesEnum.fighter, locales: { ru: "Истребитель", en: "Fighter" } },
    {
      value: TypesEnum.stormovik,
      locales: { ru: "Штурмовик", en: "Attack aircraft" },
    },
    {
      value: TypesEnum.bomber,
      locales: { ru: "Бомбордировщик", en: "Bomber" },
    },
    {
      value: TypesEnum.divebomber,
      locales: { ru: "Пикирующий бомбордировщик", en: "Dive bomber" },
    },
  ],
  fleet: [
    {
      value: TypesEnum.torpedoboat,
      locales: { ru: "Торпедный катер", en: "Torpedo boat" },
    },
    {
      value: TypesEnum.submarinechaser,
      locales: { ru: "Морской охотник", en: "Submarine chaser" },
    },
    {
      value: TypesEnum.minelayer,
      locales: { ru: "Минный заградитель", en: "Minelayer" },
    },
    // { value: TypesEnum.transport, locales: { ru: "[???] Транспорт", en: "[???] Transport" } },
    {
      value: TypesEnum.navalferrybarge,
      locales: { ru: "Плавбатарея ПВО", en: "Naval ferry barge" },
    },
    {
      value: TypesEnum.destroyer,
      locales: { ru: "Лёгкий крейсер", en: "Destroyer" },
    },
    {
      value: TypesEnum.torpedogunboat,
      locales: { ru: "Фрегат", en: "Torpedo gunboat" },
    },
    // { value: TypesEnum.ship, locales: { ru: "[???] Корабль", en: "[???] Ship" } },
    {
      value: TypesEnum.gunboat,
      locales: { ru: "Артиллерийский катер", en: "Gunboat" },
    },
  ],
};

export const brArr = [
  1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 4.3, 4.7, 5.0, 5.3, 5.7,
  6.0, 6.3, 6.7, 7.0, 7.3, 7.7, 8.0, 8.3, 8.7, 9.0, 9.3, 9.7, 10.0, 10.3, 10.7,
  11.0, 11.3, 11.7, 12.0, 12.3, 12.7,
];

export const rankArr = [
  { value: 1, text: "I" },
  { value: 2, text: "II" },
  { value: 3, text: "III" },
  { value: 4, text: "IV" },
  { value: 5, text: "V" },
  { value: 6, text: "VI" },
  { value: 7, text: "VII" },
  { value: 8, text: "VIII" },
];

export const radioArr = [
  { value: undefined, locales: { ru: "Не важно", en: "Doesn't matter" } },
  { value: true, locales: { ru: "Да", en: "Yes" } },
  { value: false, locales: { ru: "Нет", en: "No" } },
];

export const sortArr = [
  { value: "br", locales: { ru: "Боевой рейтинг", en: "Battle raiting" } },
  { value: "name", locales: { ru: "Название", en: "Name" } },
];

export const languageArr = [
  { value: "ru", locales: { ru: "Русский", en: "Russian" } },
  { value: "en", locales: { ru: "Английский", en: "English" } },
];

export const gameModeArr = [
  { value: GameMode.arcade, locales: { ru: "Аркада", en: "Arcade" } },
  {
    value: GameMode.realistic,
    locales: { ru: "Релистичный", en: "Realistic" },
  },
  {
    value: GameMode.simulator,
    locales: { ru: "Симуляторный", en: "Simulator" },
  },
];

export const localize = {
  nation: { ru: "Нация", en: "Nation" },
  br: { ru: "Боевой рейтинг", en: "Battle raiting" },
  rank: { ru: "Ранг", en: "Rank" },
  type: { ru: "Тип", en: "Type" },
  prem: { ru: "Премиум", en: "Premium" },
  gift: { ru: "Подарок (я хз)", en: "Gift" },
  sort: { ru: "Сортировка", en: "Sort" },
  clear: { ru: "❌", en: "❌" },
  all: { ru: "✅", en: "✅" },
  language: { ru: "Язык", en: "Language" },
  mode: { ru: "Режим", en: "Game mode" },
  loading: { ru: "Загрузка...", en: "Loading..." },
  total: { ru: "Всего техники в базе", en: "Total vehicles in base" },
  found: { ru: "Найдено", en: "Found" },
  onScreen: { ru: "На экране", en: "On screen" },
  army: { ru: "Армия", en: "Army" },
  aviation: { ru: "Авиация", en: "Aviation" },
  fleet: { ru: "Флот", en: "Fleet" },
  loaded: { ru: "Техники загружено", en: "Vehicles loaded" },
};

export const eventVehicles = [
  "us_m18_hellcat_black_cat_race",
  "po_2op_event",
  "germ_sturmmorser_sturmtiger_event",
  "po-2_nw",
  "os2u_1_naval",
  "us_amx_13_75",
  "us_amx_13_90",
  "us_m551_football",
  "ussr_m551_football",
  "md_460_usa",
  "md_460_yt_cup_2019",
  "ussr_t_72b3_2017_race",
  "ussr_t_80u_race",
  "us_m1a1_abrams_yt_cup_2019",
  "ussr_t_80u_yt_cup_2019",
  "uk_challenger_ii_yt_cup_2019",
  "germ_leopard_2a5_yt_cup_2019",
  "j_8f_missile_test",
  "mirage_2000_5f_missile_test",
  "saab_jas39c_south_africa_missile_test",
  "mig_29smt_9_19_missile_test",
  "f_16d_block_40_barak_2_missile_test",
  "f_16c_block_50_missile_test",

  "md_ystervark_spaa_uparmor_flamer",
  "md_ystervark_spaa_uparmor",
  "md_ystervark_spaa_flamer",
  "md_ystervark_spaa",
  "md_vickers_mk_11",
  "md_vickers_mk_11_uparmor_rearmed",
  "md_vickers_mk_11_uparmor",
  "md_vickers_mk_11_rearmed",
  "md_bosvark",
  "md_bosvark_recoiless_rifle",
  "md_bosvark_uparmor",
  "md_bosvark_uparmor_recoiless_rifle",
  "md_btr_80a",
  "md_btr_80a_projector",
  "md_btr_80a_uparmor",
  "md_btr_80a_uparmor_projector",
  "md_flarakrad",
  "md_flarakrad_uparmor",
  "md_m53_59",
  "md_m53_59_rocket",
  "md_m53_59_uparmor",
  "md_m53_59_uparmor_rocket",
  "md_tgdgb_m40_lv",
  "md_tgdgb_m40_lv_uparmor",

  "uk_crusader_aa_mk_2_tutorial",
  "ussr_t_50_for_tutorial",
  "us_m26_pershing_tutorial",
  "germ_panther_ii_tutorial",
  "us_m4a2_76w_sherman_tutorial",

  "b-29_france_killstreak",
  "b-29_germany_killstreak",
  "b-29_iaf_killstreak",
  "b-29_italy_killstreak",
  "b-29_japan_killstreak",
  "b-29_killstreak",
  "b-29_sweden_killstreak",
  "b-29_uk_killstreak",
  "canberra_bimk6_france_killstreak",
  "canberra_bimk6_germany_killstreak",
  "canberra_bimk6_iaf_killstreak",
  "canberra_bimk6_italy_killstreak",
  "canberra_bimk6_japan_killstreak",
  "canberra_bimk6_killstreak",
  "canberra_bimk6_sweden_killstreak",
  "canberra_bimk6_usa_killstreak",
  "il_28_china_killstreak",
  "il_28_killstreak",
  "jaguar_a_germany_killstreak",
  "jaguar_a_iaf_killstreak",
  "jaguar_a_italy_killstreak",
  "jaguar_a_japan_killstreak",
  "jaguar_a_killstreak",
  "jaguar_a_sweden_killstreak",
  "jaguar_a_uk_killstreak",
  "jaguar_a_usa_killstreak",
  "su-7bkl_china_killstreak",
  "su-7bkl_killstreak",
  "tu_4_china_killstreak",
  "tu_4_killstreak",
  "ucav_mq_1_predator_france_killstreak",
  "ucav_mq_1_predator_germany_killstreak",
  "ucav_mq_1_predator_iaf_killstreak",
  "ucav_mq_1_predator_italy_killstreak",
  "ucav_mq_1_predator_japan_killstreak",
  "ucav_mq_1_predator_sweden_killstreak",
  "ucav_mq_1_predator_uk_killstreak",
  "ucav_mq_1_predator_usa_killstreak",
  "ucav_orion_killstreak",
  "ucav_wing_loong_i_killstreak",

  "ucav_orion",
  "ucav_mq_1_predator",
  "ucav_wing_loong_i",
  "ucav_recon_micro",
  "ucav_recon_micro_flir",
  "uav_quadcopter",
];
