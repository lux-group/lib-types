export namespace Hotel {
  type OfferType =
    | "bedbank_hotel"
    | "hotel"
    | "last_minute_hotel"
    | "tactical_ao_hotel"
    | "tour";

  type SortBy = "price.asc" | "price.desc" | "distance";

  type SearchResult = Array<{
    id: string;
    kind: string;
    packages?: string[];
    distance?: number;
  }>;

  interface ListOffersParams {
    region: string;
    brand: string;
    occupancy: Array<string> | string;
    offerType: string;
    checkIn?: string;
    checkOut?: string;
    // Params for different search type
    placeIds?: string;
    propertyId?: string;
    nearby?: boolean;
    bounds?: string;
    sortBy?: SortBy;
    optimiseRanking?: boolean;
    searchType?: "destination" | "property" | "landmark" | "map_area";
  }

  interface ListOffersResponseBody {
    status: number;
    message: string | null;
    result: SearchResult;
    total?: number;
  }

  interface Place {
    placeId: string;
    createdAt: string;
    availableOffers: {
      state: string[];
      continent: string[];
      country: string[];
      local: string[];
    };
    includesSurroundingAreas: boolean;
    continent?: string;
    country?: string;
    state?: string;
    local?: string;
    locationAlert: {
      level: string;
      value: string;
      geocode: {
        lng: number;
        lat: number;
      };
    };
  }
}
