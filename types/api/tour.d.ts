import { Common } from "./common";

export namespace Tour {
  export type GetTourResponse = GetResponse<Tour>;

  type GetResponse<T> =
    | Common.OkResponse<T>
    | Common.BadRequestResponse
    | Common.NotFoundResponse
    | Common.InternalServerErrorResponse;

  export type Tour = TourBase & Offer;

  interface TourBase {
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

  interface Offer {
    slug: string;
    copy: {
      overview: string;
      location: string;
    };
    monthlyPrices: Array<Price>;
    itinerary: Array<ItineraryItem>;
    tourOptions: Array<TourOption>;
  }

  interface Image {
    id: string;
    title?: string;
  }

  interface Price {
    year: string;
    month: string;
    price: number;
  }

  interface ItineraryItem {
    startDay: number;
    duration: number;
    region?: string;
    title: string;
    description: string;
  }

  interface Season {
    id: string;
    fromDate: Date;
    toDate: Date;
    name: string;
    description: string;
  }

  interface TourOption {
    id: string;
    name?: string;
    seasons: Array<Season>;
  }
}
