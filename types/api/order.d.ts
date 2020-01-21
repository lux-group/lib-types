export namespace Order {
  interface Link {
    href: string;
  }

  interface OrderLinks {
    self: Link;
    payments: Link;
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
    created_at: Date;
    updated_at: Date;
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
    flight_items: FlightItem[];
    gift_card_items: GiftCardItem[];
    membership_items: MembershipItem[];
    insurance_items: InsuranceItem[];
    partnerships: Partnerships;
    has_addons: boolean;
    has_flight: boolean;
    has_gift_card: boolean;
    has_membership: boolean;
    has_insurance: boolean;
    total: number;
  }

  // TODO: finish interface
  interface AddonItem {
    [property: string]: string | number | boolean | null;
  }

  // TODO: finish interface
  interface FlightItem {
    [property: string]: string | number | boolean | null;
  }

  // TODO: finish interface
  interface GiftCardItem {
    [property: string]: string | number | boolean | null;
  }

  // TODO: finish interface
  interface MembershipItem {
    [property: string]: string | number | boolean | null;
  }

  // TODO: finish interface
  interface InsuranceItem {
    [property: string]: string | number | boolean | null;
  }

  interface AccommodationItem {
    _links: AccommodationItemLinks;
    id: string;
    transaction_key: string;
    checksum: string;
    status: string;
    booking_number: string;
    fk_vendor_id: string;
    offer: Offer;
    offer_package: OfferPackage;
    reservation_type: string;
    reservation_made: boolean;
    created_at: Date;
    updated_at: Date;
    customer_can_change_dates: boolean;
    has_reservation_history: boolean;
    reservation: Reservation;
    number_of_nights: number;
    extra_nights: number;
    fk_offer: string;
    fk_order_id: string;
    fk_package: string;
    id_items: string;
    name: string;
    id_salesforce_external: string;
    total: string;
    price: number;
    value: number;
    cvp_bonus_points: number;
  }

  interface AccommodationItemLinks {
    voucher: Link;
    order: Link;
    reservation: Link;
    offer: Link;
  }

  interface Offer {
    id_salesforce_external: string;
    survey_link: string;
    slug: string;
    name: string;
    location: string;
    booking_type: string;
    book_by_date: Date;
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

  interface OfferPackage {
    id_salesforce_external: string;
    fk_property_id: string;
    fk_room_type_id: string;
    name: string;
    description: string;
    price: number;
    value: number;
    cvp_bonus_points: number;
    number_of_nights: number;
    cost_price: number;
    cost_currency: string;
  }

  interface Reservation {
    id: string;
    state: string;
    check_in: Date;
    check_out: Date;
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
  }

  interface Partnerships {
    cvp?: Partnership;
  }

  interface Partnership {
    account_id: string;
    first_name: string;
    last_name: string;
  }
}
