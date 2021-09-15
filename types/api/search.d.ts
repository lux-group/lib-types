export namespace Search {
  export type SearchResult = Array<{
    id: string;
    kind: string;
    packages?: string[];
  }>;

  export interface ListOffersParams {
    region: string;
    brand: string;
    occupancy: Array<string> | string;
    offerTypes: string;
    checkIn?: string;
    checkOut?: string;
    // Params to perform different search types
    placeIds?: string[];
    propertyId?: string;
    nearby?: boolean;
    bounds?: string;
  }

  export interface ListOffersResponseBody {
    status: number;
    message: string | null;
    result: SearchResult;
  }

  export interface SearchByPlaceQueryParams {
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
  export type SearchLeByPlaceResult = Array<{
    id_salesforce_external: string;
    packages: Array<{
      id_salesforce_external: string;
    }>;
  }>;

  export interface SearchLeByPlaceResponseBody {
    status: number;
    message: string | null;
    result: SearchLeByPlaceResult;
  }

  export type SearchBedbankByPlaceResult = string[];

  export interface SearchBedbankByPlaceResponseBody {
    status: number;
    message: string | null;
    result: SearchBedbankByPlaceResult;
  }

  export interface SearchByPropertyQueryParams {
    propertyId: string;
    brand: string;
    region: string;
    occupancy: string | string[];
    userAgent: string;
    checkIn?: string;
    checkOut?: string;
    searchNearby?: boolean;
  }

  export type SearchByPropertyResult = SearchResult;

  export type SearchByPropertyResponseBody = ListOffersResponseBody;

  export interface SearchByMapAreaQueryParams {
    bounds: string;
    brand: string;
    region: string;
    occupancy: string | string[];
    userAgent: string;
    checkIn?: string;
    checkOut?: string;
  }

  export type SearchByMapAreaResult = SearchResult;

  export type SearchByMapAreaResponseBody = ListOffersResponseBody;
}
