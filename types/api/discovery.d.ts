export namespace Discovery {
  interface RegionsResult {
    result: RegionAndZeroDecimalCurrencies;
  }

  interface RegionAndZeroDecimalCurrencies {
    regions: Region[];
    zero_decimal_currencies: string[];
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
}
