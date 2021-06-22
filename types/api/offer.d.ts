export namespace Offer {
  interface Link {
    href: string;
  }

  interface SelfWithParentLinks {
    self: Link;
    offer: Link;
  }

  interface Image {
    _links: SelfWithParentLinks;
    id_image: number;
    offer_id_salesforce_external: string;
    id_cloudinary_external: string;
    order: number;
    title: string | null;
  }

  interface Package {
    package_options: PackageOption[];
  }

  interface PackageOption {
    id: string;
    fk_room_rate_id: string;
    name: string;
  }
}
