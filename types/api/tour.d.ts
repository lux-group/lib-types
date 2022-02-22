import { Common } from "./common";

export namespace Tour {
  export type GetTourResponse = GetResponse<Tour>;

  export type GetTourIndexResponse = GetResponse<TourIndex>;

  export type GetTourIdsResponse = GetResponse<TourIds>;

  type GetResponse<T> =
    | Common.OkResponse<T>
    | Common.BadRequestResponse
    | Common.NotFoundResponse
    | Common.InternalServerErrorResponse;

  interface Links {
    self: {
      href: string;
    };
  }

  interface TourIndex {
    count: number;
    total: number;
    tours: Tour[];
  }

  interface Tour {
    _links: Links;
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

  interface TourId {
    _links: Links;
    id: string;
    name: string;
  }

  interface TourIds {
    _links: Links;
    tourIds: TourId[];
  }

  export interface BrandObject {
    name: string;
    code: string;
    svcLogoId: string;
  }

  export type Source = "ttc";

  export type Brand =
    | "luxurygold"
    | "trafalgar"
    | "contiki"
    | "aatkings"
    | "costsaver"
    | "insightvacations";

  export type DepartureAvailability = "available" | "unavailable";

  interface Departure {
    id: string;
    currencyCode: string;
    endDate: string;
    endTime?: string;
    endTimeLocal: string;
    sellingRegion: string;
    startDate: string;
    startTime?: string;
    startTimeLocal: string;
    prices: Price[];
    availability: {
      total?: number;
      left?: number;
      status: DepartureAvailability;
    };
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
    maxChildDiscounts: number | null;
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
    minChildPriceAge: number | null;
    maxChildPriceAge: number | null;
    travelInclusions: Inclusion[];
    diningInclusions: Inclusion[];
    routeMapImage: string | null;
  }

  interface Inclusion {
    title: string;
    items: string[];
  }

  interface TourOption {
    id: string;
    name?: string;
    seasons: Array<Season>;
  }
}
