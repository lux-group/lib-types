import { Common } from "../common";

declare namespace Tour {
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
  }
}
