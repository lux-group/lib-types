export namespace Experience {
  interface ExperienceItem {
    prices: string[];
    id_salesforce_external: string;
    fk_opportunity_salesforce_id: string;
    offer_salesforce_id: string;
    name: string;
    description: string;
    details: string;
    status: string;
    purchase_limit: number;
    addon_parent_package_salesforce_id: string;
    travel_from_date: string;
    travel_to_date: string;
    book_by_date: string;
    vendor_id: string;
    vendor_booking_email: string;
    vendor_contact_phone: string;
    image_cloudinary_external: string;
    display_value: boolean;
    highlighted_text: string;
    location_text: string;
    categories: string[];
    order_index: number;
    channel_offline_booking: boolean;
    channel_max_days_to_book_before_checkin: number;
    channel_instant_booking: boolean;
    channel_booking_made: boolean;
    complimentary: boolean;
    fare_type_display_value: string;
    cost_price_currency: string;
  }

  interface GetExperiencesResponse {
    experiences: ExperienceItem[];
    total: number;
  }

  interface GetExperienceResponse {
    experience: ExperienceItem;
  }
}
