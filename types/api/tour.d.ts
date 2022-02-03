import { Common } from "./common";

export namespace Tour {
  export type GetTourResponse = GetResponse<Tour>;

  type GetResponse<T> =
    | Common.OkResponse<T>
    | Common.BadRequestResponse
    | Common.NotFoundResponse
    | Common.InternalServerErrorResponse;

  interface Tour {
    _links: {
      self: {
        href: string;
      };
    };
    id: string;
    type: "tour_v2";
    source: Source;
    name: string;
    brand: Brand;
    brandObject: BrandObject;
    status: "content-approved" | "draft";
    slug: string;
    tourOptions: Array<TourOption>;
  }

  export interface BrandObject {
    name: string;
    code: string;
    svcLogoId: string
  }

  export type Source = "ttc";

  export interface Brand {
    code: string;
    name: string;
    svcLogoId: string;
  }

  export type SellingRegion = "au";

  interface Departure {
    id: string;
    currencyCode: string;
    endDate: string;
    endTime?: string;
    endTimeLocal: string;
    sellingRegion: SellingRegion;
    startDate: string;
    startTime?: string;
    startTimeLocal: string;
    prices: Price[];
  }

  interface Image {
    id: string;
    title?: string;
  }

  interface ItineraryItem {
    title: string;
    description: string;
    startDay: number;
    duration: number;
    region?: string;
    accommodation: string | null;
    meals: string[] | null;
    locationsVisited: string[] | null;
  }

  interface Price {
    id: string;
    basePrice: number;
    fullPrice: number;
    roomType: string;
    guestType: string;
  }

  interface Season {
    id: string;
    fromDate: string;
    toDate: string;
    name: string;
    description: string;
    startLocation: string | null;
    endLocation: string | null;
    countriesVisited: string[] | null;
    images: Image[];
    itinerary: ItineraryItem[];
    departures: Departure[];
  }

  interface TourOption {
    id: string;
    name?: string;
    seasons: Array<Season>;
  }
}
