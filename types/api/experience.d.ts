export namespace Experience {
  type ActivityCategory = {
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
    currencyCode: string;
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

  type PickupPoint = Location;

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

  type CurationStatus = 'REJECTED' | 'APPROVED' |'NOT_CURATED';

  interface GetCategoriesResponse {
    categories: Array<Category>;
  }

  interface CreateExperience {
    id: string;
    notes?: string;
    curated?: boolean;
  }

  interface ActivityFilter {
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

  interface GetExperiencesResponse {
    experiences: Array<ExperienceItem>;
    total: number;
  }

  interface GetExperienceResponse {
    experience: ExperienceItem;
  }

  interface ExperienceOffer {
    base_retail_prices: Array<Price>;
    base_sales_prices?: Array<Price>;
    categories: Array<ActivityCategory>;
    comments?: Array<Comment>;
    curation_status: CurationStatus;
    description: string | null;
    id: string;
    images: Array<Image>;
    locations?: Array<Location>;
    max_cancellation_days: number | null;
    max_confirmation_hours: number | null;
    max_modify_booking_days: number | null;
    meeting_points?: Array<PickupPoint>;
    needs_provider_confirmation: boolean;
    notes?: string | null;
    offline_booking_instructions?: string;
    provider_rating?: ProviderRating;
    provider_status: string;
    purchase_limit?: Range;
    short_description: string | null;
    tickets: Array<Ticket>;
    title: string;
  }

  interface ExperienceItem {
    categories: Array<ActivityCategory>;
    curation_status: CurationStatus;
    description: string | null;
    experience_offer_id: string;
    expiration_date: Date | null;
    id: string;
    images: Array<Image>;
    full_day?: boolean;
    location: Location;
    meeting_point?: PickupPoint;
    provider_rating?: ProviderRating;
    requires_book_dates: boolean;
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
    id: string;
    has_offline_booking: boolean;
    max_cancellation_date: Date | null;
    max_date_to_provider_confirm?: Date | null;
    max_modify_booking_date: Date | null;
    meeting_point: PickupPoint;
    offline_booking_instructions?: string;
    requires_book_dates: boolean;
    status: string;
  }
}
