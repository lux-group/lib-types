import { Common } from "./common";

export namespace Tour {
  export type GetTourResponse =
    | Common.OkResponse<Tour>
    | Common.BadRequestResponse
    | Common.NotFoundResponse
    | Common.InternalServerErrorResponse;

  type Tour = TourBase & Offer;

  interface TourBase {
    _links: {
      self: {
        href: string;
      };
    };
    id: string;
    type: "tour_v2";
    source: "ttc";
    name: string;
    brand: string;
    status: "content-approved" | "draft";
  }

  interface Offer {
    slug: string;
    copy: {
      overview: string;
      location: string;
    };
    images: Array<Image>;
    monthlyPrices: Array<Price>;
    itinerary: Array<ItineraryItem>;
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
    region: string;
    title: string;
    description: string;
    location: {
      startLocation: string;
      endLocation?: string;
    };
  }
}
