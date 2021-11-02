import { Offer } from "./offer";

export namespace Promo {
  interface Promotion {
    id_promo_code: string;
    code_name: string;
    description: string;
    promo_value: number;
    created_at: string;
    updated_at: string;
    added_by: string;
    expires_at: string;
    code_limit: number;
    min_spend?: number;
    currency: string;
    promo_type: "percentage" | "fixed";
    brand: string;
    warning?: string;
    limit_per_user: number;
    modified_by: null;
    fk_referral_code_id: null;
    department_tag: string;
    offer_whitelist: Array<string>;
    offer_blacklist: Array<string>;
    device_types: Array<string>;
    allowed_offer_types: Array<
      Offer.AccommodationOfferType | Offer.TourOfferType
    >;
    max_discount?: number;
    email_domains?: Array<string>;
    has_bin_numbers: boolean;
    has_email_restriction: boolean;
    has_email_domains_restriction: boolean;
    has_new_user_discount: boolean;
  }
}
