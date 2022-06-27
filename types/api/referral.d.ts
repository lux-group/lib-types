export interface ApiResponse<T = unknown> {
  message: string;
  result: T;
  [key: string]: unknown;
}

// Referral types (svc-promo)

export namespace Referral {
  /**
   * Used to match Referral Log Types in the db to type of Earn Option
   */
  type EarnTypeCode = "credit" | "qff" | "unknown";

  // Referral Earn Options

  interface EarnOption {
    earn_option_id: string;
    display_name: string;
    earn_type_code: EarnTypeCode;
    long_description?: string;
    summary?: string;
  }



  interface GetReferralEarnOptionsResponse {
    status: number;
    region: string;
    brand: string;
    referral_log_id: string;
    user_id: string;
    result: {
      earn_options: EarnOption[];
    };
  }

  type ReferralUTMParams = {
    utm_campaign?: string;
    utm_content?: string;
  };

  interface GetCodeByUserIdApiResponse
    extends ApiResponse<GetCodeByUserIdResult> {
    _link: string;
  }

  interface GetCodeByUserIdResult {
    referral_code_id: string;
    id_user: string;
    referral_code: string;
    created_at: string;
    referral_utm_params?: ReferralUTMParams;
  }

  // Refereee Value

  type ReferreeValueType = "fixed_amount" | "percentage";

  type ProductType =
    | "hotel"
    | "last_minute_hotel"
    | "tactical_ao_hotel"
    | "tour";

  type ProductTypeReferreeValue = {
    value: number;
    value_new_user: number;
  };

  type ProductTypeDiscount = Record<ProductType, ProductTypeReferreeValue>;

  type GetRefereeValueResult = {
    type: ReferreeValueType;
    min_spend: number;
    product_type_discount: ProductTypeDiscount[];
  };

  // Referral Log

  /**
   * The status of the referral log
   *
   * 'pending_cooldown' - Waiting for earn cooldown to complete
   *
   * 'pending_selection' - Waiting for earn selection to be made
   *
   * 'redeeming' - Earn redemption in progress (deprecated)
   *
   * 'redeemed' - Earn redemption successful
   *
   */
  type LogStatus =
    | "pending_cooldown"
    | "pending_selection"
    | "redeeming"
    | "redeemed";

  interface ReferralLogTotal {
    /** Total # of referral events awaiting cooldown  */
    pending: number;
    /** Total # of referral events for earn selection */
    available_referrals: number;
    /** Total # of successful completed referral events */
    total_amount_redeemed: number;
    /** Total credits earn via the referral system */
    creditsRedeemed: number;
  }

  interface ReferralLog {
    amount?: string;
    referral_log_id: string;
    earn_details: string;
    earn_type?: EarnTypeCode;
    log_status: LogStatus;
    earn_amount?: string;
    first_name?: string;
    available_by?: string;
  }

  // Redeem Referral (WIP)

  interface RedeemReferralRewardBody {
    earn_option_id: string;
    brand: string;
    region: string;
    payload?: QFFReferralRewardPayLoad; //add: "| OtherTypeOfPayload"
  }

  interface QFFReferralRewardPayLoad {
    membership_number: string;
    membership_last_name: string;
  }

  interface RedeemReferralRewardResult {
    status: number;
    success: boolean;
    message: string;
    result: {
      earn_option_id: string;
      referral_log_id: string;
    };
  }
}
