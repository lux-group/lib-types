export namespace Experiences {
  type BookingCustomerInfo = {
    name: string;
    type: string;
    label: string;
    required: boolean;
    options?: Array<{ value: string; label: string }>;
  };

  type Offer = {
    baseRetailPrice?: Price;
    baseSalesPrice: Price;
    categories: Array<Category>;
    curationStatus?: CurationStatus;
    description: string | null;
    id: string;
    images: Array<Image>;
    hasOfflineBooking: boolean;
    location?: Location;
    maxCancellationDays: number | null;
    maxConfirmationHours: number | null;
    maxModifyBookingDays: number | null;
    meetingPoint?: string;
    needsProviderConfirmation: boolean;
    notes?: string | null;
    offlineBookingInstructions?: string;
    pickupPoints?: Array<PickupPoint>;
    providerRating?: ProviderRating;
    purchaseLimit?: Range;
    requiresBookDates: boolean;
    shortDescription: string | null;
    status: string;
    tickets: Array<Ticket>;
    title: string;
  };

  type Item = {
    categories: Array<Category>;
    description: string | null;
    experienceOfferId: string;
    id: string;
    images: Array<Image>;
    location: Location;
    orderId: string;
    retailPrice?: Price;
    salesPrice: Price;
    shortDescription: string | null;
    status: string;
    ticket: Ticket;
    title: string;
  };

  type BookingDetails = {
    bookingEndDate?: Date | null;
    bookingStartDate?: Date | null;
    experienceItemId: string;
    experienceOfferId: string;
    expirationDate: Date | null;
    fullDay?: boolean;
    hasOfflineBooking: boolean;
    maxCancellationDate: Date | null;
    maxDateToProviderConfirm?: Date | null;
    maxModifyBookingDate: Date | null;
    meetingPoint?: string;
    offlineBookingInstructions?: string;
    pickupPoint?: PickupPoint;
    provider?: string;
    providerBookingId: string;
    requiresBookDates: boolean;
    status: string;
  };

  type Category = {
    label: string;
    value: string;
    level: number;
  };

  type Price = {
    amount: number;
    currencyCode: string;
  };

  type Image = {
    description: string;
    urls: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };

  type Ticket = {
    fareType: string;
    salesPrice: Price;
    retailPrice?: Price;
  };

  type Location = {
    latitude: number | null;
    longitude: number | null;
    description: string | null;
  };

  type PickupPoint = {
    id: string;
  } & Location;

  type ProviderRating = {
    number: number;
    average: number;
    stars: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
    };
  };

  type Range = {
    max?: number;
    min?: number;
  };

  enum CurationStatus {
    Rejected = "REJECTED",
    Approved = "APPROVED",
    NotCurated = "NOT_CURATED",
  }

  type TimeTicket = {
    maxBuy: number;
    minBuy: number;
    fareType: string;
    identifier: string;
    availability: number;
    salesPrices: Array<Price>;
  };

  type TimeSlots = {
    time: string;
    tickets: Array<TimeTicket>;
  };

  type TimeGroups = {
    name: string;
    type: string;
    featureCode: string;
    slots: Array<TimeSlots>;
  };

  type DateAvailability = {
    day: string;
    soldOut: boolean;
  };

  type Curation = {
    notes?: string;
    experienceOfferId: string;
    curationStatus?: CurationStatus;
  };

  type DateAvailabilityQuery = {
    dateTo?: Date;
    dateFrom?: Date;
    pickupId?: string;
  };

  type TimeAvailabilityQuery = {
    quantity?: number;
    pickupId?: string;
  };

  type FilterQuery = {
    distance?: string;
    categoryIn?: string;
    coordinates?: string;
    ratingRange?: string;
    curationStatus?: string;
    basePriceRange?: string;
  };

  interface Response<T> {
    result: T;
    status: number;
    total?: number;
    message?: string;
    errors?: Array<string>;
  }
}