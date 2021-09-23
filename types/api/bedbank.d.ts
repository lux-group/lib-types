export namespace Bedbank {
  interface StrObject {
    [field: string]: string;
  }

  interface ReservationCancellationPolicy {
    currency: string;
    start: string;
    end: string;
    percent: number | null;
    amount: number | null;
    nights: number | null;
  }

  interface Configuration {
    type: string;
    size: string;
    quantity: number;
  }

  interface ReservationBedGroup {
    id: string;
    description: string;
    configuration: Configuration[];
  }

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
    flightsEnabled: boolean;
    airportCode: string | undefined;
  }

  interface OccupancyFee {
    type: string;
    amount: number;
    scope: string;
    frequency: string;
  }

  interface ReservationRoom {
    id: string;
    confirmationId: string;
    name: string;
    status: string;
    roomIndex: number;
    refundable: boolean;
    price: number;
    exclusivePrice: number;
    taxesAndFees: number;
    salesTax: number;
    costPriceInclusive: number;
    marketingFee: number;
    fees: OccupancyFee[];
    guestFirstName: string;
    guestLastName: string;
    guestSpecialRequests: string;
    numberOfAdults: number;
    numberOfChildren: number;
    childrenAges: number[];
    facilities: string[];
    bedGroup: ReservationBedGroup;
    cancellationPolicies: Array<ReservationCancellationPolicy>;
  }

  interface BedbankPropertyWithFlightEnableStatus {
    propertyId: string;
    isEnabled: boolean;
    airportCode: string | undefined;
  }

  interface PropertyWithAirport {
    status: number;
    message: string | null;
    result: Array<BedbankPropertyWithFlightEnableStatus>;
  }

  interface Reservation {
    id: string;
    state: string;
    transactionKey: string;
    externalId: string;
    propertyId: string;
    roomId: string;
    roomRateId: string;
    bookingEmail: string;
    bookingPhone: string;
    checkIn: string;
    checkOut: string;
    nights: number;
    totalPrice: number;
    exclusivePrice: number;
    taxesAndFees: number;
    propertyFees: number;
    costPriceInclusive: number;
    marketingFee: number;
    rooms: Array<ReservationRoom>;
  }

  interface RateCancellationPolicy {
    currency: string;
    start: string;
    end: string;
    percent?: number;
    amount?: number;
    nights?: number;
  }

  interface PropertyLocation {
    longitude: number;
    latitude: number;
  }

  interface CapacityResponse {
    id: string;
    adults: number;
    children: number;
    infants: number;
  }

  interface AgeCategoryResponse {
    id: string;
    name: "Adult" | "ChildAgeA" | "Infant";
    minimumAge: number;
  }

  interface BedGroupResponse {
    id: string;
    description: string;
    configuration: Configuration[];
  }

  interface FacilityGroupValues {
    name: string;
  }

  interface FacilityGroup {
    name: string;
    values: Array<FacilityGroupValues>;
  }

  interface RateOccupancyPricingResponse {
    exclusive: number;
    inclusive: number;
    taxesAndFees: number;
    occupancy: string;
    fees: OccupancyFee[];
    salesTax: number;
  }

  interface RoomRateTotalResponse {
    exclusive: number;
    inclusive: number;
    taxesAndFees: number;
    propertyFees?: number;
  }

  interface RoomRateResponse {
    id: string;
    refundable: boolean;
    regionCode: string;
    currencyCode: string;
    cancellationPolicies: Array<RateCancellationPolicy>;
    occupancyPricing: Array<RateOccupancyPricingResponse>;
    nights: number;
    facilities: string[];
    totals: RoomRateTotalResponse;
    bedGroups: BedGroupResponse[];
    price: number;
    value: number;
    discount: number;
  }

  interface ImageResponse {
    id: string;
  }

  interface RoomTypeCapacityResponse {
    combinations: CapacityResponse[];
    ageCategories: AgeCategoryResponse[];
  }

  interface RoomTypeResponse {
    id: string;
    name: string;
    description: string;
    images: ImageResponse[];
    roomRates: RoomRateResponse[];
    capacities: RoomTypeCapacityResponse;
    facilityGroups: Array<FacilityGroup>;
  }

  interface PropertyAddressResponse {
    line1?: string;
    line2?: string;
    city?: string;
    stateProvinceCode?: string | null;
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
    finePrintPets?: Array<string | undefined>;
  }

  interface PropertyResponse {
    id: string;
    name: string;
    slug: string;
    rating: string;
    roomTypes: RoomTypeResponse[];
    images: ImageResponse[];
    popularFacilities: Array<string>;
    facilityGroups: Array<FacilityGroup>;
    address: PropertyAddressResponse;
    attractions?: string;
    amenities?: string;
    timezone: string;
    location: PropertyLocation;
    phone: string;
    propertyFinePrint: PropertyFinePrint;
    description: string;
    metaDescription: string;
    airport: string | undefined;
    flightsEnabled: boolean;
  }
}
