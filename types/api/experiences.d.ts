/**
 * @deprecated Use \@luxuryescapes/contract-svc-experience
 * */
export namespace Experiences {
  type FormItemSchema = {
    name: string;
    type: string;
    label: string;
    required: boolean;
    options?: Array<{ value: string; label: string }>;
  };

  type BookingCustomerInfo = FormItemSchema;

  type ParticipantInfo = {
    experienceOfferId: string;
    productId: string;
    quantity: number;
    requiredInfo: FormItemSchema[];
  };

  type TravellersForm = {
    customerInfo: BookingCustomerInfo[];
    participantsInfo: ParticipantInfo;
  };

  type Offer = {
    bookingType:
      | "CALENDAR-TIMESLOTS"
      | "CALENDAR-NO-TIMESLOTS"
      | "NO-CALENDAR-FIXED-END"
      | "NO-CALENDAR-FIXED-VALIDITY";
    baseRetailPrice?: Price;
    baseSalesPrice: Price;
    baseDiscount: Price;
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
    sellerGateway?: string | null;
    offlineBookingInstructions?: string;
    pickupPoints?: Array<PickupPoint>;
    safetyInformation?: SafetyInformation;
    inclusions?: Array<Taxonomy>;
    exclusions?: Array<Taxonomy>;
    highlights?: Array<Taxonomy>;
    providerRating?: ProviderRating;
    purchaseLimit?: Range<number>;
    duration?: Range<string>;
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
    categories: Array<Category>; //@deprecated won't use
    description: string | null; //@deprecated won't use
    experience_offer_id: string; //@deprecated won't use
    images: Array<Image>; //@deprecated won't use
    location: Location; //@deprecated won't use
    retail_prices?: ItemPrice; //@deprecated won't use
    sales_prices: ItemPrice; //@deprecated won't use
    short_description: string | null; //@deprecated won't use
    title: string; //@deprecated won't use

    id: string;
    booking_number: string;
    transaction_key: string;
    fk_order_id: string;
    provider_offer_id: string;
    provider_order_id?: string;
    provider_item_id?: string;
    le_exclusive?: boolean;
    language?: string;
    pickup_point_name?: string;
    pickup_point_id?: string;
    meeting_point?: string;
    customer_info?: CustomerInfoData;
    cancellation_policies?: CancellationInfo;
    // ticket: Ticket; //@deprecated won't use
    ticket?: { fareType: string; identifier: string };
    max_date_to_provider_confirm?: Date;
    max_modify_booking_date?: Date;
    cost_price?: number;
    sale_price: number;
    currency: string;
    total: number;
    discount_amount?: number;
    discount_percent?: number;
    booking_start_date?: Date;
    expiration_date?: Date;
    status: "pending" | "completed" | "cancelled" | "processing";
  };

  type Ticket = {
    fare_type: string;
    sales_prices: ItemPrice;
    retail_prices?: ItemPrice;
  };

  type ItemPrice = {
    amount: number;
    currency_code: string;
  };

  type BookingDetails = {
    bookingEndDate?: Date | null;
    bookingStartDate?: Date | null;
    customerInfo?: CustomerInfoData;
    experienceItemId: string;
    experienceOfferId: string;
    expirationDate: Date | null;
    fullDay?: boolean;
    hasOfflineBooking: boolean;
    language?: string;
    maxCancellationDate: Date | null;
    maxDateToProviderConfirm?: Date | null;
    maxModifyBookingDate: Date | null;
    meetingPoint?: string;
    offlineBookingInstructions?: string;
    pickupPoint?: PickupPoint;
    provider?: string;
    providerItemId?: string;
    providerOrderId?: string;
    providerBookingId?: string; // @deprecated
    requiresBookDates: boolean;
    status: "active" | "cancelled";
  };

  type CustomerInfoData = {
    [key: string]: unknown;
  };

  type Category = {
    label: string;
    value: string;
    level: number;
    parent?: string;
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
    period: string;
    type: "PERCENTAGE" | "ABSOLUTE";
    value: number;
    currencyCode?: string;
    applicableUntil?: string;
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
    identifier: string; //@deprecated won't use
    productId: string;
    date: string;
    type: string;
    pickupId?: string;
    availability: number;
    salesPrices: Array<Price>;
    discount: Price;
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

  type AvailabilityEnquiryQuery = {
    coordinates: string;
    distance: string;
    availableFrom: string;
    availableTo: string;
  };

  interface Response<T> {
    result: T;
    status: number;
    total?: number;
    message?: string;
    errors?: Array<string>;
  }
}
