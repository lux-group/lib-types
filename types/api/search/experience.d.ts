export namespace Experience {
  type SearchResult = Array<string>;

  interface ListOffersParams {
    region: string;
    brand: string;
    checkIn?: string;
    checkOut?: string;
    geometryId?: string;
  }

  interface ListOffersResponseBody {
    status: number;
    message: string | null;
    result: SearchResult;
  }
}
