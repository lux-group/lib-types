import { Common } from "../common";
import { Typeahead } from "./typeahead";

export namespace Tour {
  type SearchResult = Array<string>;

  interface ListOffersParams {
    region: string;
    brand: string;
    placeIds: string[];
    offerType: string;
  }

  type GetOfferIds200Response = Common.OkResponse<SearchResult>;

  enum PossibleTypeaheadPlaceTypes {
    CITY = Typeahead.TYPES.CITY,
    PROVINCE_STATE = Typeahead.TYPES.PROVINCE_STATE,
    HIGH_LEVEL_REGION = Typeahead.TYPES.HIGH_LEVEL_REGION,
    COUNTRY = Typeahead.TYPES.COUNTRY,
    MULTI_CITY_VICINITY = Typeahead.TYPES.MULTI_CITY_VICINITY,
    CONTINENT = Typeahead.TYPES.CONTINENT,
    COLLOQUIAL_AREA = Typeahead.TYPES.COLLOQUIAL_AREA,
  }
}
