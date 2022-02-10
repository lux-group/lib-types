export namespace Experiences {
  type BookingCustomerInfo = {
    name: string;
    type: string;
    label: string;
    required: boolean;
    options?: Array<{ value: string; label: string }>;
  };

  type FormData = {
    [provider: string]: FormDataContainer
  }

  type FormDataContainer = {
    items: string[];
    formData?: ProviderFormData;
  }

  type ProviderFormData = MusementFormData;

  type MusementParticipantItemSchema = Record<string, unknown>
  type MusementFormData = {
    customerInfoSchema: Record<string, unknown>;
    participantInfoSchemaMap?: Record<string, MusementParticipantItemSchema>;
  };

  type Offer = {
    baseRetailPrice?: Price;
    baseSalesPrice: Price;
    bookingFee: Price;
    categories: Array<Category>;
    languages: Array<Language>;
    curationStatus?: CurationStatus;
    description: string | null;
    id: string;
    images: Array<Image>;
    hasOfflineBooking: boolean;
    leExclusive?: boolean;
    location?: Location;
    maxCancellationDays?: number | null; //@deprecated won't use
    maxConfirmationHours: number | null;
    maxModifyBookingDays: number | null;
    meetingPoint?: string;
    needsProviderConfirmation: boolean;
    notes?: string | null;
    offlineBookingInstructions?: string;
    pickupPoints?: Array<PickupPoint>;
    safetyInformation?: SafetyInformation;
    inclusions?: Array<Taxonomy>;
    exclusions?: Array<Taxonomy>;
    highlights?: Array<Taxonomy>;
    providerRating?: ProviderRating;
    purchaseLimit?: Range<number>;
    duration?: Range<number>;
    voucherAccess: VoucherAccess | null;
    cancellationInfo: CancellationInfo;
    requiresBookDates: boolean;
    shortDescription: string | null;
    status: string;
    title: string;
    operationalDays: string | null;
    rememberNote: string | null;
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

  type SafetyMeasure = {
    name: string;
    isActive: boolean;
    copy?: { description?: string };
  };

  type SafetyInformation = {
    measures: Array<SafetyMeasure>;
  };

  type Taxonomy = {
    label: string;
    category: string;
  };

  type RefundPolicy = {
    id: string;
    period: number;
    type: "PERCENTAGE" | "ABSOLUTE";
    value: number;
    currencyCode?: string;
  };

  type Language = {
    code: string;
    name: string;
  };

  type VoucherAccess = {
    isRequired: boolean;
    byMobile: boolean;
    byPrinted: boolean;
    byMixed: boolean;
  };

  type CancellationInfo = {
    isFree: boolean;
    refundPolicies?: RefundPolicy[];
  };

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

  type Range<T> = {
    max?: T;
    min?: T;
  };

  type CurationStatus = "REJECTED" | "APPROVED" | "NOT_CURATED";

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
    leExclusive?: boolean;
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
    brand?: string;
    limit?: number;
    offset?: number;
    sortBy?: string;
    currency?: string;
    distance?: string;
    categoryIn?: string;
    coordinates?: string;
    ratingRange?: string;
    curationData?: boolean;
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
