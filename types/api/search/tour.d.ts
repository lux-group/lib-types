import { Common } from "../common";

declare namespace Tour {
  import TYPEAHEAD_TYPE = Typeahead.TYPEAHEAD_TYPE;
  type SearchResult = Array<string>;

  interface ListOffersParams {
    region: string;
    brand: string;
    placeIds: string[];
    offerType: string;
  }

  type GetOfferIds200Response = Common.OkResponse<SearchResult>;

  enum PossibleTypeaheadPlaceTypes {
    CITY = TYPEAHEAD_TYPE.CITY,
  }
}
