export namespace Offer {
  interface Link {
    href: string;
  }

  interface SelfWithParentLinks {
    self: Link;
    offer: Link;
  }

  interface HotelOffer {
    id_salesforce_external: string;
    name: string;
    packages: HotelPackage[];
  }

  interface Image {
    _links: SelfWithParentLinks;
    id_image: number;
    offer_id_salesforce_external: string;
    id_cloudinary_external: string;
    order: number;
    title: string | null;
  }

  interface HotelPackage {
    fk_property_id: string;
    fk_room_rate_id: string;
    fk_room_type_id: string;
    flexible_nights: boolean;
    id_salesforce_external: string;
    max_extra_nights: number;
    max_days_in_future_check_in_is_allowed: number | undefined;
    number_of_nights: number;
    package_options: PackageOption[];
    regions: string[];
  }

  interface PackageOption {
    id: string;
    fk_room_rate_id: string;
    name: string;
  }
}
