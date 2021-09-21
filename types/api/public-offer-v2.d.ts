export interface StrObject {
    [field: string]: string;
}
export interface AmenityGroupValues {
    name: string;
}
export interface AmenityGroup {
    name: string;
    values: Array<AmenityGroupValues>;
}
export interface FacilityGroupValues {
    name: string;
}
export interface FacilityGroup {
    name: string;
    values: Array<FacilityGroupValues>;
}
export interface Image {
    id: string;
    title?: string;
}
export interface Configuration {
    type: string;
    size: string;
    quantity: number;
}
export interface BedGroup {
    id: string;
    description: string;
    configuration: Configuration[];
}
export interface OccupancyFee {
    type: string;
    amount: number;
    scope: string;
    frequency: string;
}
export interface RateOccupancyPricing {
    exclusive: number;
    inclusive: number;
    taxesAndFees: number;
    occupancy: string;
    fees: OccupancyFee[];
    salesTax: number;
}
export interface RateCancellationPolicy {
    currency: string;
    start: string;
    end: string;
    percent?: number;
    amount?: number;
    nights?: number;
}
export interface RateTotal {
    exclusive: number;
    inclusive: number;
    taxesAndFees: number;
    propertyFees?: number;
}
export interface Surcharges {
    adultAmount: number;
    childAmount: number;
    infantAmount: number;
}
export interface RoomRate {
    id: string;
    capacities: Occupancy[];
    includedGuests: Occupancy[];
    extraGuestSurcharges: Surcharges[];
}
declare type LeCancellationPolicyType = "refundable" | "non-refundable" | "prior-to-check-in-one-day" | "prior-to-check-in-two-days" | "prior-to-check-in-seven-days" | "prior-to-check-in-fourteen-days" | "prior-to-check-in-twenty-one-days" | "prior-to-check-in-thirty-one-days" | "prior-to-check-in-sixty-days";
export interface RatePlan {
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
export interface LeOptionBase {
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
export interface LeHotelOption extends LeOptionBase {
    fkRoomRateId: string;
    fkRoomTypeId: string;
    fkRatePlanId: string;
}
export interface LeTourOption extends LeOptionBase {
    availability: {
        total: number;
        left: number;
    };
}
export interface BedbankRate {
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
export interface BedbankAgeCategory {
    name: "Adult" | "ChildAgeA" | "Infant";
    minimumAge: number;
}
export interface LeAgeCategory {
    name: "Adult" | "Child" | "Infant";
    minimumAge: number;
}
export interface BedbankCapacity {
    combinations: Array<Occupancy>;
    ageCategories: Array<BedbankAgeCategory>;
}
export interface Occupancy {
    adults: number;
    children: number;
    infants: number;
}
export interface BonusInclusion {
    fromNights: number;
    toNights: number;
    content: string;
}
export interface LePackageBase {
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
export interface LeHotelPackage extends LePackageBase {
    fkRoomTypeId: string;
}
export interface LeTourPackage extends LePackageBase {
}
export interface BedbankPackage {
    fkRoomTypeId: string;
    rates: Array<BedbankRate>;
    name: string;
    description: string;
    images: Array<Image>;
    amenityGroups: Array<AmenityGroup>;
    capacities: BedbankCapacity;
}
export interface RoomType {
    id: string;
    name: string;
    images: Image[];
    description: string;
    amenityGroups: AmenityGroup[];
    additionalGuestAmountDescription: string;
    sizeSqm: number;
    inclusions?: string;
}
export interface PropertyAddressResponse {
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
export interface PropertyFinePrint {
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
export interface Review {
    id: string;
    source: string;
    content: string;
}
export interface GeoData {
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
export interface Property {
    id: string;
    address: PropertyAddressResponse;
    timezone: string;
    location: {
        longitude: number;
        latitude: number;
    };
}
export interface LeProperty {
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
export interface Schedule {
    start?: string;
    end: string;
}
export interface Schedules {
    listVisibility?: Schedule;
    onlinePurchase?: Schedule;
    availability?: Schedule;
    bookBy?: Schedule;
    travelBy?: Schedule;
}
export interface Video {
    id: string;
    type: "vimeo";
}
export interface Partnership {
    code: string;
    prefix: string;
    upsellText?: string;
}
export interface PackagePartnership {
    code: string;
    prefix: string;
    upsellText?: string;
    bonusPoints: number;
    bonusDescription?: string;
    rewardCurrency: string;
    rewardConversion: number;
    localRewardConversionRate: number;
}
export interface UrgencyTag {
    type: string;
    message: string;
}
export interface Flight {
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
declare type TourSetting = "Self Serve" | "On Request";
export interface Tour {
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
declare type OfferType = "bedbank_hotel" | "hotel" | "last_minute_hotel" | "tactical_ao_hotel" | "tour";
declare type LeOfferType = Exclude<OfferType, "bedbank_hotel">;
declare type BedbankOfferType = Extract<OfferType, "bedbank_hotel">;
declare type LeHotelOfferType = Exclude<LeOfferType, "tour">;
declare type LeTourOfferType = Extract<LeOfferType, "tour">;
export declare type LeOffer = LeHotelOffer | LeTourOffer;
export declare type Offer = LeOffer | BedbankOffer;
export interface BedBankOutboundReturningRoute {
    cost_per_adult: number;
    departure_date: string;
    arrival_date: string;
    depature_time: string;
    arrival_time: string;
    total_time_difference: number;
    is_sold_out: boolean;
}
export interface BedBankFlightPrices {
    cost: number;
    fees: number;
    outbound_route: BedBankOutboundReturningRoute;
    returning_route: BedBankOutboundReturningRoute;
}
export interface FlightPricesWithAirportCode {
    flightPrices: BedBankFlightPrices | undefined;
    airportCode: string | undefined;
    flightsEnabled: boolean;
}
export interface BedbankOffer {
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
export interface LeOfferBase {
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
    insurance: {
        countries: Array<string>;
    };
    partnerships: Array<Partnership>;
    schedules: Schedules;
    panelImage?: Image;
    video?: Video;
    flights: Array<Flight>;
    shouldDisplayValue: boolean;
    recommendationTrackingCode: unknown;
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
export interface LeHotelOffer extends LeOfferBase {
    type: LeHotelOfferType;
    packages: Record<string, LeHotelPackage>;
    property: LeProperty;
    ratePlans: Record<string, RatePlan>;
    roomRates: Record<string, RoomRate>;
    roomTypes: Record<string, RoomType>;
    options: Array<LeHotelOption>;
}
export interface LeTourOffer extends LeOfferBase {
    options: Array<LeTourOption>;
    packages: Record<string, LeTourPackage>;
    tour: Tour;
    type: LeTourOfferType;
}
export interface Badge {
    name: string;
    url?: string;
    image: string;
    tagIcon: string;
    tagText: string;
    tagTooltip: string;
}
export interface GetOfferQueryParams {
    occupancy: Array<string> | string;
    checkIn: string;
    checkOut: string;
    region?: string;
    brand?: string;
    offerType?: OfferType;
    flightOrigin?: string;
}
export interface GetOffersQueryParams {
    offerIds: string;
    occupancy: Array<string> | string;
    checkIn: string;
    checkOut: string;
    region?: string;
    brand?: string;
    offerType?: OfferType;
    flightOrigin?: string;
}
export interface GetOfferListQueryParams {
    placeIds: string[];
    occupancy: Array<string> | string;
    checkIn: string;
    checkOut: string;
    region: string;
    brand: string;
    offerType: OfferType;
    flightOrigin?: string;
}
export interface GetOfferResponseBody {
    status: 200;
    message: undefined;
    result: Offer;
}
export interface GetOffersResponseBody {
    status: 200;
    message: undefined;
    result: Offer[];
    count: number;
}
export interface GetOfferListByPropertyQueryParams {
    region: string;
    brand: string;
    occupancy: Array<string> | string;
    searchNearby: string;
    checkIn?: string;
    checkOut?: string;
}
export interface GetOfferListByPropertyResponseBody {
    status: number;
    message: undefined;
    result: Array<{
        id: string;
        kind: string;
        packages?: string[];
    }>;
}
export interface GetOfferListByMapAreaQueryParams {
    region: string;
    brand: string;
    occupancy: Array<string> | string;
    checkIn?: string;
    checkOut?: string;
}
export interface GetOfferListByMapAreaResponseBody {
    status: number;
    message: undefined;
    result: Array<{
        id: string;
        kind: string;
        packages?: string[];
    }>;
}
export {};
