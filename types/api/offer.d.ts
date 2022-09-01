import { Common } from "./common";

export namespace Offer {
  interface Link {
    href: string;
  }

  interface SelfWithParentLinks {
    self: Link;
    offer: Link;
  }

  interface BrandSchedule {
    id: number;
    type: "list_visibility" | "availability" | "online_purchase";
    offer_id_salesforce_external: string;
    start: string;
    end: string;
    region: string;
    brand: string;
  }

  interface OfferInclusions {
    offer_tile_inclusion_heading: string;
    offer_tile_inclusions: string;
    offer_inclusions_heading: string;
    offer_inclusions_long: string;
    offer_inclusions_short: string;
  }

  type OfferStatusType = "content-approved" | "draft";

  interface BaseOffer extends OfferInclusions {
    brand_schedules: BrandSchedule[];
    id_salesforce_external: string;
    flight_destination_port: string | null;
    flight_regions: string[];
    flights_cache_disabled: boolean;
    flights_enabled: boolean;
    holiday_types: string[];
    images: Image[];
    locations: string[];
    name: string;
    slug: string;
    status: OfferStatusType;
    is_partner_property: boolean;
  }

  type AccommodationOfferType =
    | "hotel"
    | "tactical_ao_hotel"
    | "last_minute_hotel";

  type TourOfferType = "tour";

  type AllTypes = AccommodationOfferType | TourOfferType;

  interface AccommodationOffer extends BaseOffer {
    type: AccommodationOfferType;
    packages: AccommodationPackage[];
  }

  interface TourOffer extends BaseOffer {
    type: TourOfferType;
    packages: TourPackage[];
  }

  type Offer = AccommodationOffer | TourOffer;

  interface Image {
    _links: SelfWithParentLinks;
    id_image: number;
    offer_id_salesforce_external: string;
    id_cloudinary_external: string;
    order: number;
    title: string | null;
  }

  interface Addon {
    id_salesforce_external: string;
  }

  interface Price {
    currency_code: string;
    price: number;
    value: number;
    nightly_price: number;
    nightly_value: number;
  }

  interface BasePackage {
    addons: Addon[];
    id_salesforce_external: string;
    prices: Price[];
    regions: string[];
  }

  type AccommodationPackageStatusType = "content-approved" | "draft";

  interface AccommodationPackage extends BasePackage {
    fk_property_id: string;
    fk_room_rate_id: string;
    fk_room_type_id: string;
    flexible_nights: boolean;
    max_extra_nights: number;
    max_days_in_future_check_in_is_allowed: number | undefined;
    number_of_nights: number;
    package_options: PackageOption[];
    status?: AccommodationPackageStatusType;
  }

  interface TourPackage extends BasePackage {
    number_of_days: number;
    fk_tour_id: string;
    fk_tour_option_id: string;
  }

  type Package = AccommodationPackage | TourPackage;

  interface PackageOption {
    id: string;
    fk_room_rate_id: string;
    name: string;
  }

  interface Badge {
    id: number;
    image: string;
    name: string;
    regions: string[];
    tag_icon: string;
    tag_text: string;
    tag_tooltip: string;
    updated_at: string;
    url?: string;
  }

  interface OfferContent {
    id_salesforce_external: string;
    list_order: number;
    list_visibility_regions: string[];
    location: string;
    locations: string[];
    name: string;
    slug: string;
    subject_line: string;
    type: AllTypes;
  }

  type GetOfferResponse<OfferTypes = Offer> = Common.OkResponse<OfferTypes>;

  type GetOffersResponse<OfferTypes = Offer> = Common.OkResponse<
    OfferTypes[]
  > & {
    total: number;
    count: number;
  };
}
