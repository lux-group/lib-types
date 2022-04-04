export namespace Calendar {
  interface Rate {
    accommodationPrice: number;
    extraGuestSurcharge: number;
    flightPrice: number | null;
    roomRateId: string;
    surcharge: number;
    taxesAndFees: number;
    inclusions: number;
    availableRooms: number;
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
    enquiry_type?: "admin" | "customer";
  }

  interface GetRatesResponse {
    message: null;
    result: GetRatesResult[];
    status: 200;
  }

  interface GetLowestPricesQueryParams {
    region: string;
    brand: string;
    offer_ids: string;
    check_in: string;
    check_out: string;
    occupancy: string[];
  }

  interface GetLowestPricesResult {
    id: string;
    type: string;
    duration: number;
    package_id: string;
    package_unique_key: string;
    room_rate_id: string;
    package_price: number;
    package_duration_surcharge_total: number;
    package_duration_extra_guest_surcharge_total: number;
    package_total_tax: number;
    package_total_inclusions: number;
    package_total_price: number;
  }

  interface GetLowestPricesResponse {
    status: 200;
    message: null;
    result: GetLowestPricesResult[];
  }
}
