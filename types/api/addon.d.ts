export namespace Addon {
  interface AddonLinks {
    self: Link;
    addons: Link;
  }

  interface Price {
    currency_code: string;
    price: number;
    value: number;
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
}
