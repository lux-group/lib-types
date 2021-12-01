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
    fareType: string;
    retailPrice?: Array<Price>;
    salesPrice: Array<Price>;
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

  interface GetExperiencesResponse {
    experiences: ExperienceItem[];
    total: number;
  }

  interface GetExperienceResponse {
    experience: ExperienceItem;
  }

  interface ExperienceOffer {
    baseRetailPrice: Array<Price>;
    baseSalesPrice?: Array<Price>;
    categories: Array<ActivityCategory>;
    comments?: Array<Comment>;
    curationStatus?: string;
    description: string | null;
    id: string;
    images: Array<Image>;
    location?: Array<Location>;
    maxCancellationDays: number | null;
    maxConfirmationHours: number | null;
    maxModifyBookingDays: number | null;
    meetingPoints?: Array<PickupPoint>;
    needsProviderConfirmation: boolean;
    notes?: string | null;
    offlineBookingInstructions?: string;
    providerRating?: ProviderRating;
    providerStatus: string;
    purchaseLimit?: Range;
    shortDescription: string | null;
    tickets: Array<Ticket>;
    title: string;
  }

  interface ExperienceItem {
    categories: Array<ActivityCategory>;
    description: string | null;
    experienceOfferId: string;
    expirationDate: Date | null;
    id: string;
    images: Array<Image>;
    fullDay?: boolean;
    location: Location;
    meetingPoint?: PickupPoint;
    requiresBookDates: boolean;
    retailPrice?: Array<Price>;
    salesPrice: Array<Price>;
    shortDescription: string | null;
    status: string;
    ticket: Ticket;
    title: string;
  }

  interface BookingDetails {
    bookingEndDate?: Date | null;
    bookingStartDate?: Date | null;
    experienceItemId: string;
    experienceOfferId: string;
    expirationDate: Date | null;
    fullDay?: boolean;
    id: string;
    hasOfflineBooking: boolean;
    maxCancellationDate: Date | null;
    maxDateToProviderConfirm?: Date | null;
    maxModifyBookingDate: Date | null;
    meetingPoint: PickupPoint;
    offlineBookingInstructions?: string;
    requiresBookDates: boolean;
    status: string;
  }
}
