export namespace TourV2 {
  interface TourBase {
    id: string;
    type: "tours_v2";
    source: "ttc";
    name: string;
    brand: string;
  }

  interface PublicOffer extends TourBase {
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
}
