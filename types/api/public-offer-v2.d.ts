export namespace PublicOfferV2 {
  interface StrObject {
    [field: string]: string;
  }

  interface FacilityGroupValues {
    name: string;
  }

  interface FacilityGroup {
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

  type Package = LePackage | BedbankPackage;

  interface LePackage {
    id: string;
    fkRoomTypeId: string;
    rates: Array<RoomRate>;
    name: string;
    description: string;
    images: Array<Image>;
    facilityGroups: Array<FacilityGroup>;
    capacities: Capacity;
    inclusions: { description: string; bonus: string[] };
    includedGuestsLabel: string;
    sortOrder: number;
    copy: {
      description: string;
    };
  }

  interface BedbankPackage {
    fkRoomTypeId: string;
    rates: Array<RoomRate>;
    name: string;
    description: string;
    images: Array<Image>;
    facilityGroups: Array<FacilityGroup>;
    capacities: Capacity;
  }

  interface RoomType {
    name: string;
    images: Image[];
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

  type OfferType = "bedbank_hotel" | "hotel" | "last_minute_hotel" | "tactical_ao_hotel";
  type LeOfferType = Exclude<OfferType, "bedbank_hotel">;

  interface Property {
    id: string;
    address: PropertyAddressResponse;
    location: {
      longitude: number;
      latitude: number;
    };
  }

  interface Schedule {
    start: string;
    end: string;
  }

  interface Video {
    id: string;
    type: "vimeo";
  }

  interface Partnership {
    code: string;
    prefix: string;
    upsellText: string | null;
  }

  interface UrgencyTag {
    type: string;
    message: string;
  }

  interface Flight {
    cacheDisabled: boolean;
    destinationCode: string;
    earliestDestinationDepartureTime: string | null;
    latestDestinationArrivalTime: string | null;
    prices: Record<string, number>;
    warning: {
      heading: string;
      description: string;
    } | null;
  }

  type Offer = LeOffer | BedbankOffer;

  interface BedbankOffer {
    id: string;
    type: Extract<OfferType, "bedbank_hotel">;
    name: string;
    slug: string;
    description: string;
    metaDescription: string;
    packages: Array<Package>;
    images: Array<Image>;
    popularFacilities: Array<string>;
    facilityGroups: Array<FacilityGroup>;
    property: Property;
    attractions?: string;
    propertyFinePrint: PropertyFinePrint;
    copy: {
      description: string;
    };
  }

  interface LeOffer {
    id: string;
    type: LeOfferType;
    name: string;
    slug: string;
    copy: {
      additionalDescription: string | null;
      description?: string;
      facilities: string;
      finePrint: string;
      gettingThere: string;
      highlights: string;
      whatWeLike: string;
    };
    packages: Array<Package>;
    images: Array<Image>;
    popularFacilities: Array<string>;
    facilityGroups: Array<FacilityGroup>;
    property: Property;
    attractions?: string;
    propertyFinePrint: PropertyFinePrint;
    tags: {
      holidayTypes: Array<string>;
      location: Array<string>;
      urgency: Array<UrgencyTag>;
    };
    location: {
      description: string;
      heading: string;
      subheading: string;
    };
    durationLabel: string;
    insurance: { countries: Array<string> };
    partnerships: Array<Partnership>;
    listVisibilitySchedule: Schedule;
    onlinePurchaseSchedule: Schedule;
    availabilitySchedule: Schedule;
    panelImage: Image | null;
    video: Video | null;
    flights: Array<Flight>;
    shouldDisplayValue: boolean;
    recommendationTrackingCode: unknown; // TODO: type it
    inclusions: {
      description: string | null;
      tileHeading: string | null;
      tileDescription: string | null;
    };
  }
}
