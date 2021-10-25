export namespace Search {
  type OfferType =
    | "bedbank_hotel"
    | "hotel"
    | "last_minute_hotel"
    | "tactical_ao_hotel"
    | "tour";

  type SearchResult = Array<{
    id: string;
    kind: string;
    packages?: string[];
  }>;

  interface ListOffersParams {
    region: string;
    brand: string;
    occupancy: Array<string> | string;
    offerTypes: OfferType[];
    userAgent: string;
    checkIn?: string;
    checkOut?: string;
    // Params to perform different search types
    placeIds?: string[];
    propertyId?: string;
    nearby?: boolean;
    bounds?: string;
  }

  // An itermediate interface for search by either place ids or map area
  // TODO: remove this interface after introduced /list endpoint
  interface SearchParams {
    region: string;
    brand: string;
    occupancy: Array<string> | string;
    userAgent: string;
    checkIn?: string;
    checkOut?: string;
    placeIds?: string[];
    bounds?: string;
  }

  interface ListOffersResponseBody {
    status: number;
    message: string | null;
    result: SearchResult;
  }

  interface SearchByPlaceQueryParams {
    placeIds: string[];
    userAgent: string;
    brand: string;
    occupancy: string | string[];
    checkIn?: string;
    checkOut?: string;
    region: string;
  }

  // TODO: change to `SearchResult`
  // to make the response align with other endpoints
  type SearchLeByPlaceResult = Array<{
    id_salesforce_external: string;
    packages: Array<{
      id_salesforce_external: string;
    }>;
  }>;

  interface SearchLeByPlaceResponseBody {
    status: number;
    message: string | null;
    result: SearchLeByPlaceResult;
  }

  type SearchBedbankByPlaceResult = string[];

  interface SearchBedbankByPlaceResponseBody {
    status: number;
    message: string | null;
    result: SearchBedbankByPlaceResult;
  }

  interface SearchByPropertyQueryParams {
    propertyId: string;
    brand: string;
    region: string;
    occupancy: string | string[];
    userAgent: string;
    checkIn?: string;
    checkOut?: string;
    searchNearby?: boolean;
  }

  type SearchByPropertyResult = SearchResult;

  type SearchByPropertyResponseBody = ListOffersResponseBody;

  interface SearchByMapAreaQueryParams {
    bounds: string;
    brand: string;
    region: string;
    occupancy: string | string[];
    userAgent: string;
    checkIn?: string;
    checkOut?: string;
  }

  type SearchByMapAreaResult = SearchResult;

  type SearchByMapAreaResponseBody = ListOffersResponseBody;
}
