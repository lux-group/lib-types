export namespace Reporting {
  interface OrderStatsResponse {
    message: string;
    status: number;
    result: OrderResult;
  }

  interface OrderResult {
    [region: string]: OrderStats;
  }

  interface OrderStats {
    period: {
      from: string,
      to: string;
    },
    min: number;
    count: number;
    is_popular: boolean;
  }

  interface OfferStatsResponse {
    message: string;
    status: number;
    result: OfferResult;
  }

  type OfferResult = Array<OfferStats>

  interface OfferStats {
    total_purchase: string;
    offer_id: string;
    page_views: string | null;
    region: string;
  }

}
