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
    status: "content-approved" | "draft";
    slug: string;
    tourOptions: Array<TourOption>;
  }

  export type Source = "ttc";

  export type Brand =
    | "luxurygold"
    | "trafalgar"
    | "contiki"
    | "aatkings"
    | "costsaver"
    | "insightvacations";

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
    fkSeasonId: string;
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
  }

  interface Price {
    id: string;
    basePrice: number;
    roomType: string;
    guestType: string;
  }

  interface Season {
    id: string;
    fromDate: string;
    toDate: string;
    name: string;
    description: string;
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
