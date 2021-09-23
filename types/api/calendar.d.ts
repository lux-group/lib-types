export namespace Calendar {
  interface Rate {
    accommodationPrice: number;
    extraGuestSurcharge: number;
    flightPrice: number | null;
    roomRateId: string;
    surcharge: number;
    taxesAndFees: number;
  }

  interface Price {
    checkIn: string;
    checkOut: string;
    day: number;
    month: number;
    rates: Rate[];
    year: number;
  }

  interface GetRatesResult {
    flightCacheActive: boolean;
    flightsNotAvailable: boolean;
    packageId: string;
    prices: Price[];
    uniqueKey: string;
  }

  interface GetRatesQueryParams {
    region: string;
    number_of_nights: number;
    occupancy: string[];
    package_ids: string;
    brand: string;
    enquiryType?: "admin" | "customer";
  }

  interface GetRatesResponse {
    message: null;
    result: GetRatesResult[];
    status: 200;
  }
}
