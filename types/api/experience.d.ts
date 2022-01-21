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

  interface ActivityCategory {
    id: number;
    name: string;
    url?: string;
    code?: string;
    level?: string;
    cover_image_url?: string;
    event_image_url?: string;
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
    latitude?: number;
    longitude?: number;
    categories: ActivityCategory[];
  }

  interface GetExperiencesResponse {
    experiences: ExperienceItem[];
    total: number;
  }

  interface GetExperienceResponse {
    experience: ExperienceItem;
  }
}

// Experiences types V2
export namespace Experiences {
  type ExperienceCategory = {
    id: number;
    name: string;
    url?: string;
    code?: string;
    level?: string;
    cover_image_url?: string;
    event_image_url?: string;
  };

  type Category = {
    name: string;
    value: string;
  };

  type Price = {
    amount: number;
    currency_code: string;
  };

  type Image = {
    description: string;
    urls: Array<{
      height: number;
      url: string;
      width: number;
    }>;
  };

  type Ticket = {
    fare_type: string;
    retail_price?: Array<Price>;
    sales_price: Array<Price>;
  };

  type Location = {
    description: string | null;
    latitude: number | null;
    longitude: number | null;
  };

  type PickupPoint = {
    description: string | null;
    id: string;
  } & Location;

  type ProviderRating = {
    average: number;
    number: number;
    stars: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
    };
  };

  type Comment = {
    author?: string;
    id: string;
    message: string;
    title?: string;
  };

  type Range = {
    max?: number;
    min?: number;
  };

  type CurationStatus = "REJECTED" | "APPROVED" | "NOT_CURATED";

  type TimeTicket = {
    availability: number;
    identifier: string;
    fare_type: string;
    max_buy: number;
    min_buy: number;
    sales_prices: Array<Price>;
  };

  type TimeSlots = {
    time: string;
    tickets: Array<TimeTicket>;
  };

  type TimeGroups = {
    feature_code: string;
    name: string;
    type: string;
    slots: Array<TimeSlots>;
  };

  type DateAvailability = {
    day: string;
    sold_out: boolean;
  };

  type DateAvailabilityQuery = {
    pickup_id?: string;
    date_from?: Date;
    date_to?: Date;
  };

  type TimeAvailabilityQuery = {
    pickup_id?: string;
    quantity?: number;
  };

  interface CreateExperience {
    id: string;
    notes?: string;
    curated?: boolean;
  }

  interface ExperienceFilter {
    id?: string; // Filter by activity id
    text?: string; // Text search
    limit?: number;
    offset?: number;
    rating?: string;
    status?: string;
    city_in?: string; // Cities, ids comma separated
    sort_by?: string;
    currency?: string;
    distance?: string;
    country_in?: string; // Filter, include only results from given countries identified by a collection of 2 chars country code,
    category_in?: string; // Filter by category | Category code need to be passed,
    coordinates?: string;
    available_to?: string; // Specify the availability ending date range [YYYY-MM-DD]
    available_from?: string; // Specify the availability starting date range [YYYY-MM-DD]
    default_price_range?: string; // Price range as comma separated values, accepts only floats positive or equals to 0, two points precision
  }

  interface GetCategoriesResponse {
    categories: Array<Category>;
  }

  interface GetExperiencesOfferResponse {
    experiences: Array<ExperienceOffer>;
    total: number;
  }

  interface GetExperienceOfferResponse {
    experience: ExperienceOffer;
  }

  interface ExperienceOffer {
    base_retail_prices: Array<Price>;
    base_sales_prices?: Array<Price>;
    categories: Array<ExperienceCategory>;
    comments?: Array<Comment>;
    curation_status?: CurationStatus;
    description: string | null;
    id: string;
    images: Array<Image>;
    has_offline_booking: boolean;
    location?: Location;
    max_cancellation_days: number | null;
    max_confirmation_hours: number | null;
    max_modify_booking_days: number | null;
    meeting_point?: string;
    needs_provider_confirmation: boolean;
    notes?: string | null;
    offline_booking_instructions?: string;
    pickup_points?: Array<PickupPoint>;
    provider_rating?: ProviderRating;
    provider_status: string;
    purchase_limit?: Range;
    requires_book_dates: boolean;
    short_description: string | null;
    tickets: Array<Ticket>;
    title: string;
  }

  interface ExperienceItem {
    categories: Array<ExperienceCategory>;
    description: string | null;
    experience_offer_id: string;
    id: string;
    images: Array<Image>;
    location: Location;
    order_id: string;
    retail_prices?: Array<Price>;
    sales_prices: Array<Price>;
    short_description: string | null;
    status: string;
    ticket: Ticket;
    title: string;
  }

  interface BookingDetails {
    booking_end_date?: Date | null;
    booking_start_date?: Date | null;
    experience_item_id: string;
    experience_offer_id: string;
    expiration_date: Date | null;
    full_day?: boolean;
    has_offline_booking: boolean;
    max_cancellation_date: Date | null;
    max_date_to_provider_confirm?: Date | null;
    max_modify_booking_date: Date | null;
    meeting_point?: string;
    offline_booking_instructions?: string;
    pickup_point?: PickupPoint;
    provider: string;
    provider_booking_id: string;
    requires_book_dates: boolean;
    status: string;
  }

  interface BookingTimeAvailability {
    availability: { groups: Array<TimeGroups> };
  }

  interface BookingDateAvailability {
    availability: Array<DateAvailability>;
  }

  interface BookingUserInfo {
    name: string;
    type: string;
    label: string;
    required: boolean;
    options?: Array<{ value: string; label: string }>;
  }
}
