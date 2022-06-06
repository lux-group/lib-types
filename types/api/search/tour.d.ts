import { Common } from "../common";

export namespace Tour {
  type SearchResult = Array<string>;

  interface ListOffersParams {
    region: string;
    brand: string;
    placeId: string;
    offerType: string;
  }

  export type GetOfferIds200Response = Common.OkResponse<SearchResult>
}
