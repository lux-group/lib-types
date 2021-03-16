export namespace PublicOfferV2 {
  interface StrObject {
    [field: string]: string;
  }

  interface FacilityGroupValues {
    name: string;
  }

  interface FacilityGroups {
    name: string;
    values: Array<FacilityGroupValues>;
  }

  interface Image {
    id: string;
  }

  interface Configuration {
    type: string;
    size: string;
    quantity: number;
  }

  interface BedGroup {
    id: string;
    description: string;
    configuration: Configuration[];
  }

  interface OccupancyFee {
    type: string;
    amount: number;
    scope: string;
    frequency: string;
  }

  interface RateOccupancyPricing {
    exclusive: number;
    inclusive: number;
    taxesAndFees: number;
    occupancy: string;
    fees: OccupancyFee[];
    salesTax: number;
  }

  interface RateCancellationPolicy {
    currency: string;
    start: string;
    end: string;
    percent?: number;
    amount?: number;
    nights?: number;
  }

  interface RoomRateTotal {
    exclusive: number;
    inclusive: number;
    taxesAndFees: number;
    propertyFees?: number;
  }

  interface RoomRate {
    id: string;
    refundable: boolean;
    regionCode: string;
    currencyCode: string;
    cancellationPolicies: Array<RateCancellationPolicy>;
    occupancyPricing: Array<RateOccupancyPricing>;
    totals: RoomRateTotal;
    nights: number;
    facilities: string[];
    bedGroups: Array<BedGroup>;
    value: number;
    price: number;
    discount: number;
  }

  interface Capacity {
    combinations: Array<{
      adults: number;
      children: number;
      infants: number;
    }>;
    ageCategories: Array<{
      name: string;
      minimumAge: number;
    }>;
  }

  interface Package {
    fkRoomTypeId: string;
    rates: Array<RoomRate>;
    name: string;
    description: string;
    images: Array<Image>;
    facilityGroups: Array<FacilityGroups>;
    capacities: Capacity;
  }

  interface PropertyAddressResponse {
    line1?: string;
    line2?: string;
    city?: string;
    stateProvinceCode?: string;
    stateProvinceName?: string;
    postalCode?: string;
    countryCode?: string;
    countryName?: string;
    obfuscationRequired: boolean;
  }

  interface PropertyFinePrint {
    checkIn: {
      beginTime?: string;
      endTime?: string;
      instructions?: string;
      specialInstructions?: string;
    };
    checkOut: {
      time?: string;
    };
    fees: {
      mandatory?: string;
      optional?: string;
    };
    policies?: StrObject;
    pets?: Array<string | undefined>;
  }

  interface Offer {
    id: string;
    type: "bedbank_hotel";
    name: string;
    slug: string;
    description: string;
    metaDescription: string;
    packages: Array<Package>;
    images: Array<Image>;
    popularFacilities: Array<string>;
    facilityGroups: Array<FacilityGroups>;
    property: {
      id: string;
      address: PropertyAddressResponse;
      location: {
        longitude: number;
        latitude: number;
      };
    };
    attractions?: string;
    propertyFinePrint: PropertyFinePrint;
  }
}
