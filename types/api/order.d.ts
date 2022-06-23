export namespace Order {
  interface Link {
    href: string;
  }

  interface OrderLinks {
    self: Link;
    payments: Link;
    refunds: Link;
    status: Link;
  }

  interface OrderResult {
    message: null;
    status: number;
    result: Order;
    fk_customer_id: string;
  }

  interface Order {
    _links: OrderLinks;
    id: string;
    checksum: string;
    number: string;
    transaction_key: string;
    currency_code: string;
    region_code: string;
    status: string;
    display_status: string;
    created_at: string;
    updated_at: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_ad: string;
    utm_adgroup: string;
    utm_term: string;
    device_ip: string | null;
    device_id: string | null;
    platform: string | null;
    origin_url: string;
    le_label: string;
    le_attribution: string;
    brand: string;
    external_order_id: number;
    id_orders: string;
    fk_canceller: null;
    fk_purchaser_id: string;
    fk_customer_id: string;
    fk_changed_by_id: null;
    refund_reason: null;
    refund_comment: string;
    refund_ticket_id: string;
    legacy_id_orders: null;
    customer_email: string;
    customer_membership_code: string;
    customer_membership_number: number | null;
    customer_given_name: string;
    customer_surname: string;
    customer_full_name: string;
    customer_phone_prefix: string;
    customer_phone: string;
    customer_qff: null;
    customer_qff_last_name: null;
    qff_enabled: boolean;
    items: AccommodationItem[];
    accommodation_items: AccommodationItem[];
    addon_items: AddonItem[];
    experience_items: ExperienceItem[];
    flight_items: FlightItem[];
    gift_card_items: GiftCardItem[];
    membership_items: MembershipItem[];
    insurance_items: InsuranceItem[];
    bedbank_items: BedbankItem[];
    partnerships: Partnerships;
    has_addons: boolean;
    has_flight: boolean;
    has_gift_card: boolean;
    has_membership: boolean;
    has_insurance: boolean;
    total: number;
    user_agent: string | null;
    payments: any;
    is_deposit_order: boolean;
  }

  type AnyItem =
    | AddonItem
    | FlightItem
    | GiftCardItem
    | MembershipItem
    | InsuranceItem
    | AccommodationItem
    | ExperienceItem;

  interface ItemLinks {
    order: Link;
  }

  interface Item {
    _links: ItemLinks;
    id: string;
    status: string;
    type: string;
    total: string;
    price: number;
    value: number;
    fk_order_id: string;
  }

  interface AddonItemLinks extends ItemLinks {
    addon: Link;
  }

  interface AddonItem extends Item {
    _links: AddonItemLinks;
    salesforce_id: string;
    offer_salesforce_id: string;
    offer_package_salesforce_id: string;
    addon_parent_package_salesforce_id: string;
    fk_opportunity_salesforce_id: string;
    categories: string[];
    item?: AccommodationItem;
  }

  interface ExperienceItem {
    _links: ItemLinks;
    created_at: string; // @deprecated
    description: string; // @deprecated
    detailed_description: string; // @deprecated
    experience_image: string; // @deprecated
    external_experience_id: string; // @deprecated
    location_text: string; // @deprecated
    title: string; // @deprecated
    type: string; // @deprecated
    updated_at: string; // @deprecated
    vendor_id: string; // @deprecated

    id: string;
    booking_number: string;
    transaction_key: string;
    fk_order_id: string;
    provider_offer_id: string;
    provider_order_id?: string;
    provider_item_id?: string;
    provider: string;
    le_exclusive?: boolean;
    language?: string;
    redemption_location_name?: string;
    redemption_location_id?: string;
    pickup_point_name?: string;
    pickup_point_id?: string;
    meeting_point?: string;
    customer_info?: CustomerInfoData;
    cancellation_policies?: CancellationInfo;
    ticket?: Ticket;
    max_date_to_provider_confirm?: Date;
    max_modify_booking_date?: Date;
    cost_price?: number;
    currency: string;
    total: number;
    discount_amount?: number;
    discount_percent?: number;
    booking_start_date?: Date;
    expiration_date?: Date;
    status: string;
  }

  type Ticket = {
    date: Date;
    type: string;
    fareType: string;
    identifier: string;
    productId: string;
  };

  type CustomerInfoData = {
    [key: string]: unknown;
  };

  type CancellationInfo = {
    isFree: boolean;
    refundPolicies?: RefundPolicy[];
  };

  type RefundPolicy = {
    id: string;
    period: string;
    type: "PERCENTAGE" | "ABSOLUTE";
    value: number;
    currencyCode?: string;
    applicableUntil?: string;
  };

  interface FlightItemLinks extends ItemLinks {
    flight_details: Link;
    flight_reservation: Link;
  }

  interface FlightItem extends Item {
    _links: FlightItemLinks;
  }

  interface GiftCardItemLinks extends ItemLinks {
    gift_card: Link;
  }

  interface GiftCardItem extends Item {
    _links: GiftCardItemLinks;
  }

  interface MembershipItem extends Item {
    code: string;
    number: number;
  }

  interface InsuranceItemLinks extends ItemLinks {
    subscription: Link;
    pds: Link;
  }

  interface InsuranceItem extends Item {
    _links: InsuranceItemLinks;
    status_reason: string;
  }

  interface AccommodationItemLinks extends ItemLinks {
    self: Link;
    voucher: Link;
    reservation?: Link;
    downgraded_from?: Link;
    offer?: Link;
  }

  interface AccommodationItem extends Item {
    _links: AccommodationItemLinks;
    transaction_key: string;
    checksum: string;
    booking_number: string;
    fk_vendor_id: string;
    offer: Offer;
    offer_package: OfferPackage;
    reservation_type: string;
    reservation_made: boolean;
    created_at: string;
    updated_at: string;
    customer_can_change_dates: boolean;
    has_reservation_history: boolean;
    reservation: Reservation;
    number_of_nights: number;
    extra_nights: number;
    fk_offer: string;
    fk_package: string;
    id_items: string;
    name: string;
    id_salesforce_external: string;
    cvp_bonus_points: number;
    is_downgraded: boolean;
    fk_downgraded_from_id: null | string;
  }

  interface Offer {
    id_salesforce_external: string;
    slug: string;
    name: string;
    location: string;
    booking_type: string;
    book_by_date: string;
    type: string;
    image: Image;
    partnerships: OfferPartnership[];
    tour_flight_details_required: boolean;
    enable_customer_portal_date_change: boolean;
  }

  interface Image {
    id_cloudinary_external: string;
  }

  interface OfferPartnership {
    code: string;
    prefix: string;
    upsell_text: null;
  }

  interface OfferUpgradePackageMembership {
    id_salesforce_external: string;
    max_extra_nights: number;
    nightly_price: number;
    nightly_value: number;
    price: number;
    value: number;
  }

  interface OfferPackageMembership {
    code: string;
    upgrade_package?: OfferUpgradePackageMembership;
  }

  interface OfferPackagePartnership {
    cvp_bonus_points?: number;
    kfp_bonus_points?: number;
    qff_bonus_points?: number;
  }

  interface OfferHotelPackage extends OfferPackagePartnership {
    id_salesforce_external: string;
    fk_property_id: string;
    fk_room_type_id: string;
    fk_room_rate_id: string;
    name: string;
    description: string;
    price: number;
    value: number;
    number_of_nights: number;
    cost_price: number;
    cost_currency: string;
    memberships: Array<OfferPackageMembership>;
    nightly_price: number;
    nightly_value: number;
    nightly_cost_price: number;
  }

  interface OfferTourPackage extends OfferPackagePartnership {
    id_salesforce_external: string;
    name: string;
    description: string;
    price: number;
    value: number;
    number_of_days: number;
    cost_price: number;
    cost_currency: string;
    memberships: Array<OfferPackageMembership>;
  }

  type OfferPackage = OfferHotelPackage | OfferTourPackage;

  interface Reservation {
    id: string;
    state: string;
    check_in: string;
    check_out: string;
    last_name: string;
    surcharge: number;
    first_name: string;
    guest_last_name: string;
    transaction_key: string;
    guest_first_name: string;
    number_of_adults: number;
    number_of_infants: number;
    number_of_children: number;
    surcharge_cost_total: number;
    guest_special_requests: string;
    surcharge_paid_direct_to_vendor: boolean;
    traveller_details_required?: boolean;
    traveller_flight_details_required?: boolean;
    start_date?: string;
    end_date?: string;
  }

  interface Partnerships {
    qff?: Partnership;
    cvp?: Partnership;
    kfp?: Partnership;
  }

  interface Partnership {
    account_id: string;
    first_name: string;
    last_name: string;
  }

  interface Refund {
    item_id: string;
    amount: string;
    refund_method: string;
    created_at: string;
    refund_fee: string;
    accounting_amount: string;
  }

  interface RefundResult {
    message: string;
    status: number;
    result: Refund[];
  }

  interface BedbankItem {
    id: string;
    type: string;
    fk_order_id: string;
    fk_property_id: string;
    fk_room_type_id: string;
    fk_room_rate_id: string;
    id_reservation: string;
    transaction_key: string;
    booking_number: string;
    booking_email: string;
    booking_phone: string;
    check_in: string;
    check_out: string;
    nights: number;
    status: string;
    total: number;
    exclusive_price: number;
    taxes_and_fees: number;
    property_fees: number;
    offer: BedbankOffer;
    rooms: BedbankItemRoom[];
  }

  interface BedbankOffer {
    id: string;
    name: string;
    slug: string;
    type: string;
    description: string;
    attractions: string;
    phone: string;
    timezone: string;
    location: {
      longitude: number;
      latitude: number;
    };
    address: BedbankOfferAddress;
    image: Image;
    fine_print: BedbankPropertyFinePrint;
    facility_groups: Array<BedbankFacilityGroup>;
    room: BedbankOfferRoom;
  }

  interface BedbankOfferRoom {
    id: string;
    name: string;
    description: string;
    image: Image;
    facility_groups: Array<BedbankFacilityGroup>;
  }

  interface BedbankFacilityValue {
    name: string;
  }

  interface BedbankFacilityGroup {
    name: string;
    values: Array<BedbankFacilityValue>;
  }

  interface BedbankPropertyFinePrint {
    checkIn?: {
      beginTime?: string;
      endTime?: string;
      instructions?: string;
      specialInstructions?: string;
    };
    checkOut?: {
      time?: string;
    };
    fees?: {
      mandatory?: string;
      optional?: string;
    };
    policies?: {
      knowBeforeYouGo?: string;
    };
    pets?: Array<string>;
    general?: Array<string>;
    safety?: Array<string>;
  }

  interface BedbankOfferAddress {
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

  interface BedbankItemRoom {
    id: string;
    id_reservation_room: string;
    confirmation_id?: string;
    name: string;
    status: string;
    refundable: boolean;
    is_flight_bundle: boolean;
    room_index: number;
    number_of_adults: number;
    number_of_children: number;
    number_of_infants: number;
    children_ages: number[];
    guest_first_name: string;
    guest_last_name: string;
    guest_special_requests: string;
    price: number;
    exclusive_price: number;
    cost_price: number;
    taxes_and_fees: number;
    sales_tax: number;
    facilities: string[];
    promotions: string[];
    bed_group: RoomBedGroups;
    cancellation_policies: BedbankCancellationPolicy[];
  }

  interface BedbankCancellationPolicy {
    currency: string;
    start: string;
    end: string;
    percent?: number;
    amount?: number;
    nights?: number;
  }

  interface RoomBedGroups {
    id: string;
    description: string;
    configuration: Array<BedGroupsConfiguration>;
  }

  interface BedGroupsConfiguration {
    type: string;
    size: string;
    quantity: string;
  }

  interface DatesRequest {
    id_dates_request: string;
    fk_customer_id: string;
    status: string;
    fk_order_id: string;
    fk_item_id: string;
    vendor_salesforce_id: string;
    fk_package_id: string;
    room_name: string;
    request_date: string;
    created_at: string;
    updated_at: string;
    number_of_adults: number;
    number_of_infants: number;
    number_of_children: number;
  }
}
