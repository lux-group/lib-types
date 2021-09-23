export namespace Calendar {
  interface Rate {
    accommodationPrice: number;
    extraGuestSurcharge: number;
    roomRateId: string;
    surcharge: number;
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
    packageId: string;
    prices: Price[];
  }

  interface GetRatesResponse {
    result: GetRatesResult[];
  }
}
