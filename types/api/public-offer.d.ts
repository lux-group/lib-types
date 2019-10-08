export namespace PublicOffer {
  interface Link {
    href: string;
  }

  interface LinkWithTemplate extends Link {
    templated: boolean;
  }

  interface OffersLinks {
    self: Link;
    next?: Link;
    prev?: Link;
  }

  interface OfferLinks {
    self: Link;
    voucher_status: Link;
  }

  interface OfferResult {
    message: null | string;
    status: number;
    result: Offer;
  }

  interface OffersResult {
    _links: OffersLinks;
    message: null | string;
    status: number;
    result: Offer[];
    count: number;
    total: number;
  }

  interface Offer {
    _links: OfferLinks;
    id_salesforce_external: string;
    le_offer_id: string;
    survey_link: null | string;
    satisfaction_survey_link: null | string;
    type: string;
    booking_type: string;
    name: string;
    description: string;
    location: string;
    highlights: string;
    what_we_like: string;
    facilities: string;
    run_date: Date;
    end_date: Date;
    travel_to_date: Date;
    book_by_date: Date;
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
    tour_flight_details_required: boolean;
    staff_discount_enabled: boolean;
    no_index: boolean;
    enable_customer_portal_date_change: boolean;
    packages_count: number;
    packages: Package[];
    images_count: number;
    images: Image[];
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
    sale_unit: string;
    display_value: boolean;
    subject_line: string;
    preheader: string;
    objectID: string;
    id: string;
    has_errors: boolean;
    errors: Errors;
    availability_schedule: Schedule;
    online_purchase_schedule: Schedule;
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
    urgency_label_text: string;
    flight_origin_list: string[];
    flight_cache_active: boolean;
  }

  interface Schedule {
    _links: SelfWithParentLinks;
    id: number;
    offer_id_salesforce_external: string;
    start: Date;
    end: Date;
    type: string;
    region: string;
    brand: string;
  }

  interface SelfWithParentLinks {
    self: Link;
    offer: Link;
  }

  interface Errors {
    [key: string]: string;
  }

  interface Image {
    _links: SelfWithParentLinks;
    id_image: number;
    offer_id_salesforce_external: string;
    id_cloudinary_external: string;
    order: number;
  }

  interface ListVisibilitySchedules {
    [regionCode: string]: Schedule;
  }

  interface Package {
    _links: PackageLinks;
    fk_room_type_id: string;
    fk_property_id: string;
    number_of_nights: number;
    number_of_days: number;
    status: string;
    id_salesforce_external: string;
    offer_id_salesforce_external: string;
    name: string;
    description: string;
    inclusion_highlights: string;
    prices_count: number;
    qff_bonus_points: null | string;
    qff_bonus_description: null | string;
    regions: string[];
    prices: Price[];
    room_occupancy: null | string;
    addons: Addon[];
    partnerships: PackagePartnership[];
    check_in_closes: Date;
    price: number;
    value: number;
    currency_code: string;
    duration_label: string;
    tracking_price: number;
    sale_unit_with_flights: string;
    has_errors: boolean;
    errors: Errors;
    property?: Property;
    room_type?: RoomType;
    tour?: Tour;
    tour_option?: TourOption;
  }

  interface PackageLinks {
    self: Link;
    offer: Link;
    addons: Link;
    room_type: Link;
    property: Link;
  }

  interface Price {
    currency_code: string;
    price: number;
    value: number;
  }

  interface PropertyLinks {
    room_type: LinkWithTemplate;
    self: Link;
  }

  interface Property {
    _links: PropertyLinks;
    room_types_count: number;
    reviews_count: number;
    name: string;
    room_types: RoomType[];
    id: string;
    address: string;
    longitude: number;
    latitude: number;
    id_salesforce_external: string;
    logo_id_cloudinary_external: string;
    location_heading: string;
    location_subheading: string;
    children_policy: string;
    hotel_code: null | string;
    channel_managed: boolean;
    channel_region: string;
    geo_data: GeoData;
  }

  interface TourLinks {
    tour_option: LinkWithTemplate;
    self: Link;
  }

  interface Tour {
    _links: TourLinks;
    tour_options_count: number;
    tour_legs_count: number;
    reviews_count: number;
    name: string;
    reviews: Review[];
    id: string;
    itinerary: string;
    id_salesforce_external: string;
    location_description: string;
    longitude: number;
    latitude: number;
    geo_data: GeoData;
    created_at: string;
    updated_at: string;
  }

  interface Review {
    id: string;
    content: string;
    source: string;
  }

  interface GeoData {
    continent_code: string;
    country: string;
    country_code: string;
    administrative_area_level_1: string;
    administrative_area_level_2: string;
    administrative_area_level_3: string;
    administrative_area_level_4: string;
    administrative_area_level_5: string;
    locality: string;
    route: string;
    street_number: string;
    place_id: string;
  }

  interface RoomTypeLinks {
    self: Link;
    property: Link;
    availability: LinkWithTemplate;
    enquiry: LinkWithTemplate;
  }

  interface RoomType {
    _links: RoomTypeLinks;
    name: string;
    id: string;
    property_id: string;
    availability_threshold: null | string;
    size_sqm: null | string;
    description: string;
    availability: Availability;
    capacities: Capacity[];
    amenities: Amenity[];
    images: Image[];
    is_limited: boolean;
  }

  interface TourOptionLinks {
    self: Link;
    tour: Link;
    enquiry: LinkWithTemplate;
  }

  interface TourOption {
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

  interface Availability {
    total: number;
    left: number;
  }

  interface Capacity {
    id: string;
    adults: number;
    children: number;
    infants: number;
    legacy_id: null | string;
    created_at: Date;
    updated_at: Date;
    room_type_id: string;
  }

  interface Voucher {
    limit_reached: boolean;
  }

  interface PackagePartnership {
    code: string;
    prefix: string;
    bonus_points: number;
    bonus_description: string;
    regions: string[];
    package_points: number;
  }

  interface OfferPartnership {
    code: string;
    prefix: string;
    upsell_text: string;
    regions: string[];
  }

  interface AddonLinks {
    self: Link;
    addons: Link;
  }

  interface Addon {
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
    travel_from_date: Date;
    travel_to_date: Date;
    book_by_date: Date;
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

  interface Amenity {
    id: number;
    name: string;
    built_in: boolean;
    created_at: Date;
    updated_at: Date;
    room_types_amenities: RoomTypesAmenities;
  }

  interface RoomTypesAmenities {
    created_at: Date;
    updated_at: Date;
    room_type_id: string;
    amenity_id: number;
  }

  interface ErrorResult {
    message: string;
    status: number;
  }
}