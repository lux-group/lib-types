export namespace Discovery {
  interface RegionsResult {
    result: RegionAndZeroDecimalCurrencies;
  }

  interface RegionAndZeroDecimalCurrencies {
    regions: Region[];
    zero_decimal_currencies: string[];
    default_region: Region;
    current_region: string;
  }

  interface Region {
    code: string;
    name: string;
    lang: string;
    currency_formatting_locale: string;
    currency_code: string;
    currency_prefix: string;
    flag_id: string;
    phone: RegionPhone;
    phone_prefix: string;
    mailing_address: string;
    latitude_threshold: number;
    referral_amount: string;
    payment_methods: string[];
    referral_min_spend_amount: string;
    gift_card_options: number[];
    has_flights: boolean;
    flights?: Flights;
  }

  interface FlightPort {
    code: string;
    name: string;
    latitude: number;
    longitude: number;
  }

  interface Flights {
    departure_ports: FlightPort[];
    destination_ports: FlightPort[];
    main_port: string;
  }

  interface RegionPhone {
    local: RegionPhoneNumber;
    international: RegionPhoneNumber;
    default: string;
  }

  interface RegionPhoneNumber {
    human_readable: string;
    number: string;
  }

  interface Country {
    code: string;
    name: string;
    native: string;
    phone: string;
    continent: string;
    capital: string;
    currency: string;
    languages: string[];
  }
}
