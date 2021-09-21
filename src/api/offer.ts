export interface Link {
  href: string;
}

export interface SelfWithParentLinks {
  self: Link;
  offer: Link;
}

export interface BrandSchedule {
  id: number;
  type: "list_visibility" | "availability" | "online_purchase";
  offer_id_salesforce_external: string;
  start: string;
  end: string;
  region: string;
}

export interface BaseOffer {
  brand_schedules: BrandSchedule[];
  id_salesforce_external: string;
  images: Image[];
  locations: string[];
  name: string;
  slug: string;
}

export type AccommodationOfferType =
  | "hotel"
  | "tactical_ao_hotel"
  | "last_minute_hotel";

export type TourOfferType = "tour";

export interface AccommodationOffer extends BaseOffer {
  type: AccommodationOfferType;
  packages: AccommodationPackage[];
}

export interface TourOffer extends BaseOffer {
  type: TourOfferType;
  packages: TourPackage[];
}

export type Offer = AccommodationOffer | TourOffer;

export interface Image {
  _links: SelfWithParentLinks;
  id_image: number;
  offer_id_salesforce_external: string;
  id_cloudinary_external: string;
  order: number;
  title: string | null;
}

export interface Addon {
  id_salesforce_external: string;
}

export interface BasePackage {
  addons: Addon[];
  id_salesforce_external: string;
  prices: Price[];
  regions: string[];
}

export interface AccommodationPackage extends BasePackage {
  fk_property_id: string;
  fk_room_rate_id: string;
  fk_room_type_id: string;
  flexible_nights: boolean;
  max_extra_nights: number;
  max_days_in_future_check_in_is_allowed: number | undefined;
  number_of_nights: number;
  package_options: PackageOption[];
}

export interface TourPackage extends BasePackage {
  number_of_days: number;
  fk_tour_id: string;
  fk_tour_option_id: string;
}

export type Package = AccommodationPackage | TourPackage;

export interface PackageOption {
  id: string;
  fk_room_rate_id: string;
  name: string;
}

export interface Badge {
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

export interface Price {
  currency_code: string;
  price: number;
  value: number;
  nightly_price: number;
  nightly_value: number;
}
