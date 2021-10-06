export namespace Tour {
  type Tour = TourBase & Offer & Links;

  interface TourBase {
    id: string;
    type: "tour_v2";
    source: Source;
    name: string;
    brand: string;
    status: string;
  }

  type Source = "ttc";

  export interface Offer {
    slug?: string;
    copy?: {
      overview: string;
      location: string;
    };
    images?: Array<Image>;
    monthlyPrices?: Array<Price>;
    itinerary?: Array<ItineraryDay>;
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

  interface ItineraryDay {
    day: string;
    numberOfNights: string;
    region: number;
    title: string;
    description: string;
    location: {
      start: string;
      end?: string;
    };
  }

  interface Links {
    _links: {
      self: {
        href: string;
      };
    };
  }
}
