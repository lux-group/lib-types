export interface RegionsResult {
  result: RegionAndZeroDecimalCurrencies;
}

export interface RegionAndZeroDecimalCurrencies {
  regions: Region[];
  zero_decimal_currencies: string[];
  default_region: Region;
  current_region: string;
}

export interface Region {
  code: string;
  currency_code: string;
  currency_formatting_locale: string;
  currency_prefix: string;
  flag_id: string;
  flights?: Flights;
  gift_card_options: number[];
  has_flights: boolean;
  insurance_product_name: string;
  lang: string;
  latitude_threshold: number;
  mailing_address: string;
  name: string;
  payment_methods: string[];
  phone_prefix: string;
  phone: RegionPhone;
  referral_amount: string;
  referral_min_spend_amount: string;
}

export interface FlightPort {
  code: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface Flights {
  departure_ports: FlightPort[];
  destination_ports: FlightPort[];
  main_port: string;
}

export interface RegionPhone {
  local: RegionPhoneNumber;
  international: RegionPhoneNumber;
  default: string;
}

export interface RegionPhoneNumber {
  human_readable: string;
  number: string;
}

export interface Country {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: string;
  capital: string;
  currency: string;
  languages: string[];
}
