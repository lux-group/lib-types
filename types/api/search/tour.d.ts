import { Common } from "../common";
import { POSSIBLE_TOUR_TYPEAHEAD_PLACE_TYPES } from "./typeahead";

export namespace Tour {
  type SearchResult = Array<string>;

  interface ListOffersParams {
    region: string;
    brand: string;
    placeIds: string[];
    offerType: string;
  }

  type GetOfferIds200Response = Common.OkResponse<SearchResult>;

  type TYPEAHEAD_PLACE_TYPES = typeof POSSIBLE_TOUR_TYPEAHEAD_PLACE_TYPES[number];
}
