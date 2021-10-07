export namespace PublicOfferV2 {
  export namespace TourV2 {
    interface Offer {
      id: string;
      type: "tour_v2";
      source: "ttc";
      name: string;
      brand: string;
      slug: string;
      copy: {
        overview: string;
        location: string;
      };
      images: Array<Image>;
      monthlyPrices: Array<Price>;
      itinerary: Array<ItineraryItem>;
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

    interface ItineraryItem {
      startDay: number;
      duration: number;
      region: string;
      title: string;
      description: string;
      location: {
        startLocation: string;
        endLocation?: string;
      };
    }
  }

  interface StrObject {
    [field: string]: string;
  }

  interface AmenityGroupValues {
    name: string;
  }

  interface AmenityGroup {
    name: string;
    values: Array<AmenityGroupValues>;
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
    title?: string;
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
    discount: number;
    cancellationPolicy: {
      type: LeCancellationPolicyType;
      description: Array<string>;
    };
    inclusions: {
      bonus: BonusInclusion[];
      description?: string;
    };
  }

  type LeOption = LeHotelOption | LeTourOption;
  type Option = LeOption | BedbankRate;

  interface LeOptionBase {
    id: string;
    fkPackageId: string;
    name: string;
    totals?: RateTotal;
    duration: number;
    value?: number;
    currencyCode: string;
    price?: number;
    trackingPrice?: number;
  }

  interface LeHotelOption extends LeOptionBase {
    fkRoomRateId: string;
    fkRoomTypeId: string;
    fkRatePlanId: string;
  }

  interface LeTourOption extends LeOptionBase {
    availability: { total: number; left: number };
  }

  interface BedbankRate {
    id: string;
    refundable: boolean;
    regionCode: string;
    currencyCode: string;
    cancellationPolicies: Array<RateCancellationPolicy>;
    occupancyPricing: Array<RateOccupancyPricing>;
    totals: RateTotal;
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

  interface BonusInclusion {
    fromNights: number;
    toNights: number;
    content: string;
  }

  type LePackage = LeHotelPackage | LeTourPackage;
  type Package = LePackage | BedbankPackage;

  interface LePackageBase {
    id: string;
    name: string;
    inclusions: {
      description: string;
      highlights?: string;
      bonus: BonusInclusion[];
    };
    includedGuestsLabel: string;
    sortOrder?: number;
    partnerships: PackagePartnership[];
    copy: {
      roomPolicyDescription?: string;
    };
  }

  interface LeHotelPackage extends LePackageBase {
    fkRoomTypeId: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface LeTourPackage extends LePackageBase {}

  interface BedbankPackage {
    fkRoomTypeId: string;
    rates: Array<BedbankRate>;
    name: string;
    description: string;
    images: Array<Image>;
    amenityGroups: Array<AmenityGroup>;
    capacities: BedbankCapacity;
  }

  interface RoomType {
    id: string;
    name: string;
    images: Image[];
    description: string;
    amenityGroups: AmenityGroup[];
    additionalGuestAmountDescription: string;
    sizeSqm: number;
    inclusions?: string;
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

  interface Review {
    id: string;
    source: string;
    content: string;
  }

  interface GeoData {
    continentCode: string | null;
    country: string;
    countryCode: string;
    locality: string | null;
    route: string | null;
    streetNumber: string | null;
    administrativeAreaLevel1: string;
    administrativeAreaLevel2: string | null;
    administrativeAreaLevel3: string | null;
    administrativeAreaLevel4: string | null;
    administrativeAreaLevel5: string | null;
    placeId: string;
  }

  interface Property {
    id: string;
    address: PropertyAddressResponse;
    timezone: string;
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
    useDynamicTaxesFees: boolean;
    useDynamicCancellationPolicies: boolean;
    useDynamicOccupancy: boolean;
  }

  interface Schedule {
    start?: string;
    end: string;
  }

  interface Schedules {
    listVisibility?: Schedule;
    onlinePurchase?: Schedule;
    availability?: Schedule;
    bookBy?: Schedule;
    travelBy?: Schedule;
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
    rewardCurrency: string;
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
    earliestDestinationDepartureTime?: string;
    latestDestinationArrivalTime?: string;
    prices: Record<string, number>;
    warning?: {
      heading: string;
      description: string;
    };
  }

  type TourSetting = "Self Serve" | "On Request";

  interface Tour {
    id: string;
    name: string;
    itinerary: string;
    logo: {
      id?: string;
    };
    location: {
      longitude: number;
      latitude: number;
    };
    timezone: string;
    timezoneOffset: number;
    geoData: GeoData;
    onHold?: TourSetting;
    dateChange?: TourSetting;
    latestDepartureDateChangeAllowed?: string;
    reviews: Review[];
  }

  type OfferType =
    | "bedbank_hotel"
    | "hotel"
    | "last_minute_hotel"
    | "tactical_ao_hotel"
    | "tour";

  type LeOfferType = Exclude<OfferType, "bedbank_hotel">;
  type BedbankOfferType = Extract<OfferType, "bedbank_hotel">;
  type LeHotelOfferType = Exclude<LeOfferType, "tour">;
  type LeTourOfferType = Extract<LeOfferType, "tour">;

  type LeOffer = LeHotelOffer | LeTourOffer;
  type Offer = LeOffer | BedbankOffer | TourV2.Offer;

  interface BedBankOutboundReturningRoute {
    cost_per_adult: number;
    departure_date: string;
    arrival_date: string;
    depature_time: string;
    arrival_time: string;
    total_time_difference: number;
    is_sold_out: boolean;
  }

  interface BedBankFlightPrices {
    cost: number;
    fees: number;
    outbound_route: BedBankOutboundReturningRoute;
    returning_route: BedBankOutboundReturningRoute;
  }

  interface FlightPricesWithAirportCode {
    flightPrices: BedBankFlightPrices | undefined;
    airportCode: string | undefined;
    flightsEnabled: boolean;
  }

  interface BedbankOffer {
    id: string;
    type: BedbankOfferType;
    name: string;
    slug: string;
    packages: Array<BedbankPackage>;
    images: Array<Image>;
    popularFacilities: Array<string>;
    amenityGroups: Array<AmenityGroup>;
    property: Property;
    propertyFinePrint: PropertyFinePrint;
    copy: {
      description: string;
      metaDescription: string;
      attractions?: string;
      amenities?: string;
    };
    flight: FlightPricesWithAirportCode;
  }

  interface LeOfferBase {
    id: string;
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
    schedules: Schedules;
    panelImage?: Image;
    video?: Video;
    flights: Array<Flight>;
    shouldDisplayValue: boolean;
    recommendationTrackingCode: unknown; // TODO: type it
    saleUnit: string;
    noIndex: boolean;
    daysBeforeCheckInChangesDisallowed: number;
    inclusions: {
      heading?: string;
      description?: string;
      tileHeading?: string;
      tileDescription?: string;
    };
    badge?: Badge;
  }

  interface LeHotelOffer extends LeOfferBase {
    type: LeHotelOfferType;
    packages: Record<string, LeHotelPackage>;
    property: LeProperty;
    ratePlans: Record<string, RatePlan>;
    roomRates: Record<string, RoomRate>;
    roomTypes: Record<string, RoomType>;
    options: Array<LeHotelOption>;
  }

  interface LeTourOffer extends LeOfferBase {
    options: Array<LeTourOption>;
    packages: Record<string, LeTourPackage>;
    tour: Tour;
    type: LeTourOfferType;
  }

  interface Badge {
    name: string;
    url?: string;
    image: string;
    tagIcon: string;
    tagText: string;
    tagTooltip: string;
  }

  interface GetOfferQueryParams {
    occupancy?: Array<string> | string;
    checkIn?: string;
    checkOut?: string;
    region: string;
    brand: string;
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

  interface GetOfferListQueryParams {
    placeIds: string[];
    occupancy: Array<string> | string;
    checkIn: string;
    checkOut: string;
    region: string;
    brand: string;
    offerType: OfferType;
    flightOrigin?: string;
  }

  interface GetOfferResponseBody {
    status: 200;
    message: undefined;
    result: Offer;
  }

  interface GetOffersResponseBody {
    status: 200;
    message: undefined;
    result: Offer[];
    count: number;
  }

  interface GetOfferListByPropertyQueryParams {
    region: string;
    brand: string;
    occupancy: Array<string> | string;
    searchNearby: string;
    checkIn?: string;
    checkOut?: string;
  }

  interface GetOfferListByPropertyResponseBody {
    status: number;
    message: undefined;
    result: Array<{
      id: string;
      kind: string;
      packages?: string[];
    }>;
  }

  interface GetOfferListByMapAreaQueryParams {
    region: string;
    brand: string;
    occupancy: Array<string> | string;
    checkIn?: string;
    checkOut?: string;
  }

  interface GetOfferListByMapAreaResponseBody {
    status: number;
    message: undefined;
    result: Array<{
      id: string;
      kind: string;
      packages?: string[];
    }>;
  }
}
