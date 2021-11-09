export namespace Experience {
  interface Price {
    currency_code: string;
    value: number;
    price: number;
  }

  interface Category {
    name: string;
    value: string;
  }

  interface GetCategoriesResponse {
    categories: Category[];
  }

  interface CreateExperience {
    externalId: string;
    vendor: string;
    curated?: boolean;
    notes?: string;
  }

  interface ActivityFilter {
    text?: string; // Text search
    city_in?: string; // Cities, ids comma separated
    sort_by?: string;
    category_in?: string; // Filter by category | Category code need to be passed,
    country_in?: string; // Filter, include only results from given countries identified by a collection of 2 chars country code,
    default_price_range?: string; // Price range as comma separated values, accepts only floats positive or equals to 0, two points precision
    limit?: number;
    offset?: number;
    available_from?: string; // Specify the availability starting date range [YYYY-MM-DD]
    available_to?: string; // Specify the availability ending date range [YYYY-MM-DD]
    currency?: string;
    id?: string; // Filter by activity id
    coordinates?: string;
    distance?: string;
    rating?: string;
    status?: string;
  }

  interface ExperienceItem {
    prices: Price[];
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
    reviews_number: number;
    reviews_score: number;
    curated?: boolean;
    notes?: string;
  }

  interface GetExperiencesResponse {
    experiences: ExperienceItem[];
    total: number;
  }

  interface GetExperienceResponse {
    experience: ExperienceItem;
  }
}
