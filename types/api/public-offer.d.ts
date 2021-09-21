import * as Geo from "./geo";
import * as Reservation from "./reservation";
export interface Link {
    href: string;
}
export interface LinkWithTemplate extends Link {
    templated: boolean;
}
export interface OffersLinks {
    self: Link;
    next?: Link;
    prev?: Link;
}
export interface OfferLinks {
    self: Link;
    voucher_status: Link;
}
export interface OfferFiltersLinks {
    self: Link;
}
export interface OfferFilterTotals {
    [name: string]: number;
}
export interface OfferFilters {
    locations?: OfferFilterTotals;
    holiday_types?: OfferFilterTotals;
    campaigns?: OfferFilterTotals;
    type?: OfferFilterTotals;
}
export interface OfferFiltersResult {
    _links: OfferFiltersLinks;
    message: null;
    status: number;
    result: OfferFilters;
    count: number;
    total: number;
}
export interface OfferResult {
    message: null | string;
    status: number;
    result: Offer;
}
export interface OffersResult {
    _links: OffersLinks;
    message: null | string;
    status: number;
    result: Offer[];
    count: number;
    total: number;
}
export interface UrgencyTag {
    type: string;
    message: null | string;
}
export interface Offer {
    _links: OfferLinks;
    id_salesforce_external: string;
    le_offer_id: string;
    satisfaction_survey_link: null | string;
    type: string;
    booking_type: string;
    name: string;
    description: string;
    location: string;
    highlights: null | string;
    what_we_like: string;
    facilities: string;
    run_date: string;
    end_date: string;
    hand_picked_inclusions: null | string;
    additional_description: null | string;
    exclusive_extras: null | string;
    exclusive_extras_large: null | string;
    offer_inclusions_heading: null | string;
    offer_inclusions_long: null | string;
    offer_inclusions_short: null | string;
    travel_from_date: null | string;
    travel_to_date: null | string;
    book_by_date: null | string;
    slug: string;
    status: string;
    panel_cloudinary_id: string;
    video_cloudinary_id: null | string;
    video_youtube_id: null | string;
    vendor_account_id: string;
    vendor_contact_phone: null | string;
    vendor_booking_email: string;
    vendor_email: string;
    surcharge_paid_direct_to_vendor: boolean;
    qff_enabled: boolean;
    upsell_text_qantas: string;
    partnerships: OfferPartnership[];
    memberships: OfferMembership[];
    tour_flight_details_required: boolean;
    staff_discount_enabled: boolean;
    no_index: boolean;
    enable_customer_portal_date_change: boolean;
    packages_count: number;
    packages: Package[];
    images_count: number;
    images: Image[];
    hero_image: Image;
    benefit_labels: BenefitLabelWithMembershipCode[];
    booking_guarantee: string;
    getting_there: string;
    fine_print: string;
    locations: string[];
    flights_enabled: boolean;
    flights_cache_disabled: boolean;
    flights_max_arrival_time: null | string;
    flight_regions: string[];
    flight_destination_port: null | string;
    insurance_countries: string[];
    holiday_types: string[];
    campaigns: string[];
    sale_unit: string;
    display_value: boolean;
    subject_line: string;
    preheader: string;
    objectID: string;
    id: string;
    has_errors: boolean;
    errors: Errors;
    availability_schedule?: Schedule;
    online_purchase_schedule?: Schedule;
    list_visibility_schedules: ListVisibilitySchedules;
    duration_label: string;
    video_vimeo_id: string;
    mobile_vimeo_video_url: string;
    mobile_vimeo_thumb_url: string;
    number_of_nights_max: number;
    number_of_nights_min: number;
    number_of_nights_summary: string;
    lowest_price_package: Package;
    is_popular: boolean;
    voucher: Voucher;
    location_heading: string;
    location_subheading: string;
    is_limited: boolean;
    urgency_label_type: string;
    urgency_label_text: null | string;
    urgency_tags: UrgencyTag[];
    available_for_purchase: boolean;
    flight_origin_list: string[];
    flight_cache_active: boolean;
}
export interface Schedule {
    _links: SelfWithParentLinks;
    id: number;
    offer_id_salesforce_external: string;
    start: string;
    end: string;
    type: string;
    region: string;
    brand: string;
}
export interface SelfWithParentLinks {
    self: Link;
    offer: Link;
}
export interface Errors {
    [key: string]: string;
}
export interface Image {
    _links: SelfWithParentLinks;
    id_image: number;
    offer_id_salesforce_external: string;
    id_cloudinary_external: string;
    order: number;
}
export interface ListVisibilitySchedules {
    [regionCode: string]: Schedule;
}
export interface PackageRate {
    unique_key: string;
    price: number;
    value: number;
    number_of_nights: number;
    number_of_days: number;
    prices: Price[];
}
export interface Package {
    _links: PackageLinks;
    fk_room_type_id: string;
    fk_property_id: string;
    fk_room_rate_id: string;
    fk_room_policy_id: number | null;
    room_policy_description: string | null;
    number_of_nights: number;
    number_of_days: number;
    airport_transfers_included: boolean;
    status: string;
    id_salesforce_external: string;
    offer_id_salesforce_external: string;
    unique_key: string;
    name: string;
    rates: PackageRate[];
    deal_option_name: string;
    description: string;
    discount_percent: null | number;
    inclusion_highlights: string;
    flexible_nights: boolean;
    is_exclusive: boolean;
    prices_count: number;
    qff_bonus_points: null | string;
    qff_bonus_description: null | string;
    regions: string[];
    prices: Price[];
    room_occupancy: string;
    addons: Addon[];
    partnerships: PackagePartnership[];
    memberships: PackageMembership[];
    check_in_closes: string;
    price: number;
    value: number;
    price_with_flights?: number;
    value_with_flights?: number;
    currency_code: string;
    duration_label: string;
    tracking_price: number;
    sale_unit_with_flights: string;
    has_errors: boolean;
    errors: Errors;
    property?: Property;
    room_type?: RoomType;
    room_rate?: Reservation.RoomRate;
    tour?: Tour;
    tour_option?: TourOption;
}
export interface PackageLinks {
    self: Link;
    offer: Link;
    addons: Link;
    room_type: Link;
    property: Link;
}
export interface Price {
    currency_code: string;
    price: number;
    value: number;
}
export interface PropertyLinks {
    room_type: LinkWithTemplate;
    self: Link;
}
export interface Property {
    _links: PropertyLinks;
    room_types_count: number;
    reviews_count: number;
    name: string;
    reviews?: Review[];
    room_types: RoomType[];
    id: string;
    address: string;
    longitude: number;
    latitude: number;
    timezone: string;
    timezone_offset: number;
    id_salesforce_external: string;
    logo_id_cloudinary_external: string;
    location_heading: string;
    location_subheading: string;
    children_policy: string;
    hotel_code: null | string;
    channel_managed: boolean;
    channel_region: string;
    use_dynamic_taxes_fees: boolean;
    use_dynamic_cancellation_policies: boolean;
    use_dynamic_occupancy: boolean;
    geo_data: Geo.Data;
}
export interface TourLinks {
    tour_option: LinkWithTemplate;
    self: Link;
}
export interface Tour {
    _links: TourLinks;
    tour_options_count: number;
    tour_legs_count: number;
    reviews_count: number;
    name: string;
    reviews?: Review[];
    id: string;
    itinerary: string;
    id_salesforce_external: string;
    location_description: string;
    longitude: number;
    latitude: number;
    timezone: string;
    timezone_offset: number;
    geo_data: Geo.Data;
    created_at: string;
    updated_at: string;
}
export interface Review {
    id: string;
    content: string;
    source: string;
}
export interface RoomTypeLinks {
    self: Link;
    property: Link;
    availability: LinkWithTemplate;
    enquiry: LinkWithTemplate;
}
export interface RoomType {
    _links: RoomTypeLinks;
    name: string;
    id: string;
    property_id: string;
    availability_threshold: null | string;
    size_sqm: null | number;
    description: string;
    availability: Availability;
    capacities: Capacity[];
    included_guests: IncludedGuest[];
    amenities: Amenity[];
    images: Image[];
    is_limited: boolean;
}
export interface TourOptionLinks {
    self: Link;
    tour: Link;
    enquiry: LinkWithTemplate;
}
export interface TourOption {
    _links: TourOptionLinks;
    name: string;
    id: string;
    tour_id: string;
    availability: {
        total: number;
        left: number;
    };
    created_at: string;
    updated_at: string;
    is_limited: boolean;
}
export interface Availability {
    total: number;
    left: number;
}
export interface Capacity {
    id: string;
    adults: number;
    children: number;
    infants: number;
    legacy_id: null | string;
    created_at: string;
    updated_at: string;
    room_type_id: string;
}
export interface IncludedGuest {
    id: string;
    adults: number;
    children: number;
    infants: number;
    created_at: string;
    updated_at: string;
    room_type_id: string;
}
export interface Voucher {
    limit_reached: boolean;
}
export interface PackagePartnership {
    code: string;
    prefix: string;
    bonus_points: number;
    bonus_description: string;
    regions: string[];
    package_points: number;
}
export interface PackageMembership {
    code: string;
    fk_upgrade_offer_package_salesforce_id: string | null;
    fk_upgrade_offer_package_unique_key: string | null;
    benefit_label: BenefitLabel;
    is_exclusive: boolean;
}
export interface OfferPartnership {
    code: string;
    prefix: string;
    upsell_text: string;
    regions: string[];
}
export interface BenefitLabel {
    type: string;
    label: string;
}
export interface BenefitLabelWithMembershipCode extends BenefitLabel {
    membership_code: string;
}
export interface OfferMembership {
    code: string;
    benefit_label: BenefitLabel;
    is_exclusive: boolean;
}
export interface AddonLinks {
    self: Link;
    addons: Link;
}
export interface Addon {
    _links: AddonLinks;
    id_salesforce_external: string;
    fk_opportunity_salesforce_id: string;
    name: string;
    description: string;
    inactive: boolean;
    details: string;
    purchase_limit: number;
    status: string;
    image_cloudinary_external: string;
    addon_parent_package_salesforce_id: string;
    currency: string;
    cost_price: number;
    cost_price_gst: number;
    cost_price_currency_price: number;
    categories: string;
    highlighted_text: null | string;
    location_text: string;
    channel_instant_booking: boolean;
    channel_grouping_id: null | string;
    channel_fare_type: string;
    channel_fare_id: number | null;
    channel_offline_booking_instructions: null | string;
    channel_offline_booking: boolean;
    channel_max_days_to_book_before_checkin: string | null;
    channel_product_id: string | null;
    channel_provider: string | null;
    complimentary: boolean;
    price: number;
    value: number;
    travel_from_date: string;
    travel_to_date: string;
    book_by_date: string;
    vendor_id: string;
    vendor_booking_email: string;
    vendor_contact_phone: string;
    display_value: boolean;
    prices: Price[];
    order_index: number;
    regions: string;
    escalation_email: string;
    escalation_name: string;
    escalation_phone: string;
}
export interface Amenity {
    id: number;
    name: string;
    built_in: boolean;
    created_at: string;
    updated_at: string;
    room_types_amenities: RoomTypesAmenities;
}
export interface RoomTypesAmenities {
    created_at: string;
    updated_at: string;
    room_type_id: string;
    amenity_id: number;
}
export interface ErrorResult {
    message: string;
    status: number;
}
