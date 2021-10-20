import { Geo } from "./geo";

export namespace Reservation {
  interface Link {
    href: string;
  }

  interface TemplatedLink extends Link {
    templated: boolean;
  }

  interface Result {
    message: null;
    status: number;
  }

  interface HotelReservationResult extends Result {
    result: HotelReservation;
  }

  interface HotelReservation {
    _links: HotelReservationLinks;
    id: string;
    state: string;
    transaction_key: string;
    check_in: string;
    check_out: string;
    created_at: string;
    exceeds_included_guests: boolean;
    updated_at: string;
    first_name: string;
    last_name: string;
    booking_number: string;
    guest_first_name: string;
    guest_last_name: string;
    guest_special_requests: string;
    surcharge_total: number;
    surcharge_currency: string;
    surcharge_paid_direct_to_vendor: boolean;
    number_of_adults: number;
    number_of_children: number;
    number_of_infants: number;
    surcharge_cost_total: number;
    channel_managed: boolean;
    channel_manager: string;
    room_type: RoomTypeMemo;
    property: PropertyMemo;
  }

  interface HotelReservationLinks {
    self: Link;
    room_type: Link;
    property: Link;
    orders: Link;
    parent: Link;
  }

  interface PropertyMemo {
    name: string;
  }

  interface RoomTypeMemo {
    name: string;
  }

  interface RoomTypeResult {
    message: null;
    status: number;
    result: RoomType;
  }

  interface RoomType {
    _links: RoomTypeLinks;
    name: string;
    id: string;
    property_id: string;
    availability_threshold: null;
    size_sqm: number;
    description: string;
    availability: Availability;
    capacities: AdultChildInfant[];
    included_guests: AdultChildInfant[];
    amenities: Amenity[];
    images: Image[];
    additional_guest_amount_description: string;
    max_occupancy: number;
    max_adult_occupancy: number;
    max_child_occupancy: number;
    max_infant_occupancy: number;
    max_included_guests: number;
    max_adult_included_guests: number;
    max_child_included_guests: number;
    max_infant_included_guests: number;
    room_rates: RoomRate[];
    room_inclusions: string | null;
    room_type_code: string | null;
  }

  interface RoomTypeLinks {
    self: Link;
    property: Link;
    availability: TemplatedLink;
    enquiry: TemplatedLink;
  }

  interface Surcharges {
    id: string;
    currency: string;
    adult_cost: number;
    child_cost: number;
    infant_cost: number;
    adult_amount: number;
    child_amount: number;
    infant_amount: number;
  }

  interface RoomRate {
    _links: RoomRateLinks;
    id: string;
    rate_plan: RatePlan;
    included_guests: AdultChildInfant[];
    capacities: AdultChildInfant[];
    extra_guest_surcharges: Surcharges[];
  }

  interface RoomRateLinks {
    self: Link;
    surcharges: Link;
  }

  type CancellationPolicy =
    | "refundable"
    | "non-refundable"
    | "prior-to-check-in-one-day"
    | "prior-to-check-in-two-days"
    | "prior-to-check-in-seven-days"
    | "prior-to-check-in-fourteen-days"
    | "prior-to-check-in-twenty-one-days"
    | "prior-to-check-in-thirty-one-days"
    | "prior-to-check-in-sixty-days";

  interface BonusInclusion {
    id: string;
    from_nights: number;
    to_nights: number;
    content: string;
  }

  interface RatePlanResult {
    message: null;
    status: number;
    result: RatePlan;
  }

  interface RatePlan {
    _links: RatePlanLinks;
    id: string;
    id_salesforce_external: string;
    name: string;
    discount: number;
    default_plan: boolean;
    cancellation_policy: CancellationPolicy;
    cancellation_policy_detail?: Array<string>;
    inclusions: string | null;
    bonus_inclusions?: Array<BonusInclusion>;
    rate_plan_code: string | null;
    commission?: number;
    rate_type?: string;
  }

  interface RatePlanLinks {
    self: Link;
  }

  interface Amenity {
    id: number;
    name: string;
    built_in: boolean;
  }

  interface Availability {
    total: number;
    left: number;
  }

  interface AdultChildInfant {
    _links: AdultChildInfantLinks;
    id: string;
    room_type_id: string;
    adults: number;
    children: number;
    infants: number;
  }

  interface AdultChildInfantLinks {
    self: Link;
  }

  interface Image {
    id: string;
    id_cloudinary_external: string;
    room_type_id: string;
    order: number;
    created_at: string;
    updated_at: string;
  }

  interface PropertyResult {
    message: null;
    status: number;
    result: Property;
  }

  interface TaxesAndFees {
    name: string;
    unit: "percentage" | "amount";
    value: number;
  }

  interface Property {
    _links: PropertyLinks;
    room_types_count: number;
    reviews_count: number;
    name: string;
    has_availability: boolean;
    room_types: RoomType[];
    reviews?: Review[];
    id: string;
    address: string;
    longitude: number;
    latitude: number;
    id_salesforce_external: string;
    logo_id_cloudinary_external: string;
    location_heading: string;
    location_subheading: string;
    children_policy: string;
    hotel_code: string | null;
    channel_managed: boolean;
    channel_manager: string;
    use_dynamic_taxes_fees: boolean;
    use_dynamic_cancellation_policies: boolean;
    use_dynamic_occupancy: boolean;
    siteminder_channel_region: string;
    geo_data: Geo.Data;
    max_child_age: number | null;
    max_infant_age: number | null;
    timezone: string;
    timezone_offset: number;
    taxes_and_fees?: TaxesAndFees[];
    taxes_and_fees_content?: string;
    outgoing_connections?: string[];
  }

  interface PropertyLinks {
    room_type: TemplatedLink;
    self: Link;
  }

  interface Review {
    id: string;
    content: string;
    source: string;
  }

  interface TourOptionLinks {
    self: Link;
    tour: Link;
    enquiry: TemplatedLink;
  }

  interface TourOptionAvailability {
    total: number;
    left: number;
  }

  interface TourOption {
    _links: TourOptionLinks;
    name: string;
    id: string;
    tour_id: string;
    availability: TourOptionAvailability;
  }

  interface TourLinks {
    tour_option: TemplatedLink;
    tour_legs: TemplatedLink;
    self: Link;
  }

  interface Tour {
    _links: TourLinks;
    tour_options_count: number;
    tour_legs_count: number;
    reviews_count: number;
    has_availability: boolean;
    name: string;
    tour_options: TourOption[];
    reviews?: Review[];
    logo_id?: string;
    id: string;
    itinerary: string;
    id_salesforce_external: string;
    location_description: string;
    longitude: number;
    latitude: number;
    timezone: string;
    timezone_offset: number;
    geo_data: Geo.Data;
  }

  interface TourResult extends Result {
    result: Tour;
  }

  interface EnquiryRate {
    id: string;
    duration_surcharge_total: number;
    duration_extra_guest_surcharge_total: number;
    duration_peak_period_surcharge_total: number;
    duration_blackout_applies: boolean;
    duration_rates_applies: boolean;
    duration_amount: number;
    duration_tax: number;
    check_in_blackout_applies: boolean;
    check_in_surcharge_applies: boolean;
    check_in_surcharge_amount: number;
    check_in_extra_guest_surcharge_amount: number;
    check_in_peak_period_surcharge_amount: number;
    check_in_amount: number;
    check_in_tax: number;
    check_in_rates_applies: boolean;
  }

  interface EnquiryRateFull {
    id: string;
    duration_surcharge_total: number;
    duration_extra_guest_surcharge_total: number;
    duration_peak_period_surcharge_total: number;
    duration_blackout_applies: boolean;
    duration_rates_applies: boolean;
    duration_amount: number;
    duration_tax: number;
    check_in: string;
    check_in_blackout_applies: boolean;
    check_in_surcharge_applies: boolean;
    check_in_surcharge_amount: number;
    check_in_extra_guest_surcharge_amount: number;
    check_in_peak_period_surcharge_amount: number;
    check_in_amount: number;
    check_in_tax: number;
    check_in_rates_applies: boolean;
    check_out: string;
    last_night: string;
    number_of_rooms: number;
    use_dynamic_price_calculation_by_rooms: boolean;
  }

  interface EnquiryDate {
    check_in: string;
    check_out: string;
    last_night: string;
    rates: EnquiryRate;
  }

  interface EnquiryResult {
    property_id: string;
    room_type_id: string;
    room_rate_ids: string[];
    unique_key: string;
    dates: EnquiryDate[];
  }

  interface CreateEnquiryResult extends Result {
    _links: string;
    result: EnquiryResult[];
  }

  interface GetEnquiryResult extends Result {
    result: EnquiryRateFull[];
    total: number;
  }
}
