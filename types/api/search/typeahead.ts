enum TYPEAHEAD_TYPE {
  AIRPORT = "airport",
  PROVINCE_STATE = "province_state",
  NEIGHBORHOOD = "neighborhood",
  CITY = "city",
  HIGH_LEVEL_REGION = "high_level_region",
  COUNTRY = "country",
  MULTI_CITY_VICINITY = "multi_city_vicinity",
  METRO_STATION = "metro_station",
  CONTINENT = "continent",
  TRAIN_STATION = "train_station",
  POINT_OF_INTEREST = "point_of_interest",
  COLLOQUIAL_AREA = "colloquial_area",
  LE_PROPERTY = "le_property",
  BEDBANK_PROPERTY = "bedbank_property",
}

export const POSSIBLE_TOUR_TYPEAHEAD_PLACE_TYPES = [
  TYPEAHEAD_TYPE.CITY,
  TYPEAHEAD_TYPE.MULTI_CITY_VICINITY,
  TYPEAHEAD_TYPE.COLLOQUIAL_AREA,
  TYPEAHEAD_TYPE.PROVINCE_STATE,
  TYPEAHEAD_TYPE.COUNTRY,
  TYPEAHEAD_TYPE.HIGH_LEVEL_REGION,
  TYPEAHEAD_TYPE.CONTINENT,
] as const;
