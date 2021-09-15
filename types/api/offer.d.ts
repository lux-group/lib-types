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
  }

  interface BaseOffer {
    brand_schedules: BrandSchedule[];
    id_salesforce_external: string;
    name: string;
    slug: string;
  }

  type AccommodationOfferType =
    | "hotel"
    | "tactical_ao_hotel"
    | "last_minute_hotel";

  type TourOfferType = "tour";

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

  interface BasePackage {
    addons: Addon[];
    id_salesforce_external: string;
    regions: string[];
  }

  interface AccommodationPackage extends BasePackage {
    fk_property_id: string;
    fk_room_rate_id: string;
    fk_room_type_id: string;
    flexible_nights: boolean;
    max_extra_nights: number;
    max_days_in_future_check_in_is_allowed: number | undefined;
    number_of_nights: number;
    package_options: PackageOption[];
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
}
