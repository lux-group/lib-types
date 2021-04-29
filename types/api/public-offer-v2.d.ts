import { Bedbank } from "./bedbank";

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

  interface RateTotal {
    exclusive: number;
    inclusive: number;
    taxesAndFees: number;
    propertyFees?: number;
  }

  interface Surcharges {
    adultAmount: number;
    childAmount: number;
    infantAmount: number;
  }

  interface RoomRate {
    id: string;
    capacities: Occupancy[];
    includedGuests: Occupancy[];
    extraGuestSurcharges: Surcharges[];
  }

  type LeCancellationPolicyType =
    | "refundable"
    | "non-refundable"
    | "prior-to-check-in-one-day"
    | "prior-to-check-in-two-days"
    | "prior-to-check-in-seven-days"
    | "prior-to-check-in-fourteen-days"
    | "prior-to-check-in-twenty-one-days"
    | "prior-to-check-in-thirty-one-days"
    | "prior-to-check-in-sixty-days";

  interface RatePlan {
    id: string;
    cancellationPolicy: {
      type: LeCancellationPolicyType;
      description: Array<string>;
    };
    inclusions: {
      bonus: string[];
      description: string;
    };
  }

  type Option = LeOption | BedbankRate;

  interface LeOption {
    id: string;
    fkRoomRateId: string;
    fkRoomTypeId: string;
    fkRatePlanId: string;
    fkPackageId: string;
    name: string;
    totals?: RateTotal;
    duration: number;
    value?: number;
    currencyCode: string;
    price?: number;
    discount?: number;
    trackingPrice: number;
  }

  interface BedbankRate {
    id: string;
    refundable: boolean;
    regionCode: string;
    currencyCode: string;
    cancellationPolicies: Array<RateCancellationPolicy>;
    occupancyPricing: Array<RateOccupancyPricing>;
    totals: RateTotal;
    nights: number; // TODO: Remove as part of TBB-111
    duration: number;
    facilities: string[];
    bedGroups: Array<BedGroup>;
    value: number;
    price: number;
    discount: number;
  }

  interface BedbankAgeCategory {
    name: "Adult" | "ChildAgeA" | "Infant";
    minimumAge: number;
  }

  interface LeAgeCategory {
    name: "Adult" | "Child" | "Infant";
    minimumAge: number;
  }

  interface BedbankCapacity {
    combinations: Array<Occupancy>;
    ageCategories: Array<BedbankAgeCategory>;
  }

  interface Occupancy {
    adults: number;
    children: number;
    infants: number;
  }

  type Package = LePackage | BedbankPackage;

  interface LePackage {
    id: string;
    fkRoomTypeId: string;
    name: string;
    inclusions: { description: string; bonus: string[] };
    includedGuestsLabel: string;
    sortOrder: number;
    partnerships: PackagePartnership[];
    copy: {
      description: string;
      roomPolicyDescription?: string;
    };
  }

  interface BedbankPackage {
    fkRoomTypeId: string;
    rates: Array<BedbankRate>;
    name: string;
    description: string;
    images: Array<Image>;
    facilityGroups: Array<FacilityGroup>;
    capacities: BedbankCapacity;
  }

  interface AmenityGroup {
    name: string;
    values: Array<FacilityGroupValues>;
  }

  interface RoomType {
    id: string;
    name: string;
    images: Image[];
    description: string;
    amenityGroups: AmenityGroup[];
    additionalGuestAmountDescription: string;
    sizeSqm: number;
    inclusions: unknown;
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

  type OfferType =
    | "bedbank_hotel"
    | "hotel"
    | "last_minute_hotel"
    | "tactical_ao_hotel";

  type LeOfferType = Exclude<OfferType, "bedbank_hotel">;
  type BedbankOfferType = Extract<OfferType, "bedbank_hotel">;

  interface Review {
    id: string;
    source: string;
    content: string;
  }

  interface GeoData {
    continentCode: string;
    country: string;
    countryCode: string;
    locality: string;
    route: string;
    streetNumber: string;
    administrativeAreaLevel1: string;
    administrativeAreaLevel2: string;
    administrativeAreaLevel3: string;
    administrativeAreaLevel4: string;
    administrativeAreaLevel5: string;
    placeId: string;
  }

  interface Property {
    id: string;
    address: PropertyAddressResponse;
    location: {
      longitude: number;
      latitude: number;
    };
  }

  interface LeProperty {
    id: string;
    address: string;
    logo: Image;
    name: string;
    timezone: string;
    timezoneOffset: number;
    childrenPolicy: string;
    ageCategories: LeAgeCategory[];
    taxAndFeesContent?: string;
    reviews: Review[];
    geoData: GeoData;
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
    upsellText?: string;
  }

  interface PackagePartnership {
    code: string;
    prefix: string;
    upsellText?: string;
    bonusPoints: number;
    bonusDescription?: string;
    rewardCurrency: CurrencyCode;
    rewardConversion: number;
    localRewardConversionRate: number;
  }

  interface UrgencyTag {
    type: string;
    message: string;
  }

  interface Flight {
    cacheDisabled: boolean;
    destinationCode: string;
    earliestDestinationDepartureTime: string?;
    latestDestinationArrivalTime: string?;
    prices: Record<string, number>;
    warning?: {
      heading: string;
      description: string;
    };
  }

  type Offer = LeOffer | BedbankOffer;

  interface BedbankOffer {
    id: string;
    type: BedbankOfferType;
    name: string;
    slug: string;
    description: string;
    metaDescription: string;
    packages: Array<BedbankPackage>;
    images: Array<Image>;
    popularFacilities: Array<string>;
    facilityGroups: Array<FacilityGroup>; // TODO: Remove as part of TBB-111
    amenityGroups?: Array<FacilityGroup>; // TODO: Change to mandatory as part of TBB-111
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
      additionalDescription?: string;
      description?: string;
      facilities: string;
      finePrint: string;
      gettingThere: string;
      highlights: string;
      whatWeLike: string;
    };
    images: Array<Image>;
    property: LeProperty;
    attractions?: string;
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
    schedules: {
      listVisibility: Schedule;
      onlinePurchase: Schedule;
      availability: Schedule;
    };
    panelImage?: Image;
    video?: Video;
    flights: Array<Flight>;
    shouldDisplayValue: boolean;
    recommendationTrackingCode: unknown; // TODO: type it
    saleUnit: string;
    noIndex: boolean;
    daysBeforeCheckInChangesDisallowed: number;
    inclusions: {
      description?: string;
      tileHeading?: string;
      tileDescription?: string;
    };
    roomRates: Record<string, RoomRate>;
    ratePlans: Record<string, RatePlan>;
    roomTypes: Record<string, RoomType>;
    packages: Record<string, LePackage>;
    options: Array<LeOption>;
  }

  interface LeOptions {
    offerType: LeOfferType;
    options: Array<LeOption>;
    roomRates: Record<string, RoomRate>;
    ratePlans: Record<string, RatePlan>;
    roomTypes: Record<string, RoomType>;
    packages: Record<string, LePackage>;
  }

  interface BedbankOptions {
    offerType: BedbankOfferType;
    options: Array<BedbankRate>;
    roomTypes: Record<string, Bedbank.RoomTypeResponse>;
  }

  type Options = LeOptions | BedbankOptions;

  interface GetOfferQueryParams {
    occupancy: Array<string> | string;
    checkIn: string;
    checkOut: string;
    region?: string;
    brand?: string;
    offerType?: OfferType;
    flightOrigin?: string;
  }

  interface GetOffersQueryParams {
    offerIds: string;
    occupancy: Array<string> | string;
    checkIn: string;
    checkOut: string;
    region?: string;
    brand?: string;
    offerType?: OfferType;
    flightOrigin?: string;
  }

  interface GetOptionsQueryParams {
    occupancy: string;
    checkIn: string;
    checkOut: string;
    region: string;
    brand: string;
    flightOrigin?: string;
  }

  interface GetOptionsPathParams {
    id: string;
  }

  interface GetOptionsResponseBody {
    status: 200;
    message: null;
    result: Options;
  }

  interface GetOfferListQueryParams {
    placeIds: string[];
    occupancy: Array<string> | string;
    checkIn: string;
    checkOut: string;
    region?: string;
    brand?: string;
    offerType?: OfferType;
    flightOrigin?: string;
  }

  interface GetOfferResponseBody {
    status: 200;
    message: null;
    result: Offer;
  }
}
