export namespace TourV2 {
  interface Tour {
    id: string;
    type: "tours_v2";
    source: "ttc";
    name: string;
    brand: string;
  }

  interface Offer extends Tour {
    slug?: string;
    copy?: {
      overview: string;
      location: string;
    };
    images?: {
      id: string;
      title?: string;
    };
    monthlyPrices?: Array<Price>;
    itinerary?: Array<ItineraryDay>;
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
}
