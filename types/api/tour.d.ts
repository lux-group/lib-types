export namespace Tour {
  type Tour = TourBase & Offer & Links;

  interface TourBase {
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
    itinerary: Array<ItineraryDay>;
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
    day: number;
    numberOfNights: number;
    region: string;
    title: string;
    description: string;
    location: {
      startLocation: string;
      endLocation?: string;
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
