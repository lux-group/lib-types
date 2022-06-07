// Referral types (svc-promo)

export namespace Referral {
  /**
   * Aligns with the 'referral_log_status' db enum
   */
  type LogStatus =
    | "pending_cooldown"
    | "pending_selection"
    | "redeeming"
    | "redeemed";

  /**
   * Used to match Referral Log Types in the db to type of Earn Option
   */
  type EarnTypeCode = "credit" | "qff" | "unknown";

  interface EarnOption {
    earn_option_id: string;
    display_name: string;
    earn_type_code: EarnTypeCode;
    long_description?: string;
    summary?: string;
  }

  interface GetReferralEarnOptionsResponse {
    status: number;
    success: boolean;
    region: string;
    brand: string;
    referral_log_id: string;
    user_id: string;
    result: {
      earn_options: EarnOption[];
    };
  }

  interface GetReferralLogsResponse {
    status: number;
    success: boolean;
    message?: string;
    result: {
      referral_logs: ReferralLog[];
      totals: ReferralLogTotal;
    };
  }

  interface ReferralLogTotal {
    pending: number;
    available: number;
    redeemed: number;
    total_amount_redeemed: number;
  }

  interface ReferralLog {
    amount?: string;
    referral_log_id: string;
    earn_details: string;
    earn_type?: EarnTypeCode;
    log_status: LogStatus;
    earn_amount?: string;
    first_name?: string;
  }

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
