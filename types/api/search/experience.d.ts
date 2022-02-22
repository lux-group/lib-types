export namespace Experience {
  type SearchResult = Array<string>;

  interface ListOffersParams {
    region: string;
    brand: string;
    availableFrom?: string;
    availableTo?: string;
    geometryId: string;
  }

  interface ListOffersResponseBody {
    status: number;
    message: string | null;
    result: SearchResult;
  }
}
