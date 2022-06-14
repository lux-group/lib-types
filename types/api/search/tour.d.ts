import { Common } from "../common";
import { TYPEAHEAD_TYPE } from "./typeahead";

export namespace Tour {
  type SearchResult = Array<string>;

  interface ListOffersParams {
    region: string;
    brand: string;
    placeIds: string[];
    offerType: string;
  }

  type GetOfferIds200Response = Common.OkResponse<SearchResult>;

  const POSSIBLE_TYPEAHEAD_PLACE_TYPES = [
    TYPEAHEAD_TYPE.CITY,
    TYPEAHEAD_TYPE.MULTI_CITY_VICINITY,
    TYPEAHEAD_TYPE.COLLOQUIAL_AREA,
    TYPEAHEAD_TYPE.PROVINCE_STATE,
    TYPEAHEAD_TYPE.COUNTRY,
    TYPEAHEAD_TYPE.HIGH_LEVEL_REGION,
    TYPEAHEAD_TYPE.CONTINENT,
  ] as const;

  type TYPEAHEAD_PLACE_TYPES = typeof POSSIBLE_TYPEAHEAD_PLACE_TYPES[number];
}
