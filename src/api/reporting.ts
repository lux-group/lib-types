export interface OrderStatsResponse {
  message: string;
  status: number;
  result: OrderResult;
}

export interface OrderResult {
  [region: string]: OrderStats;
}

export interface OrderStats {
  period: {
    from: string;
    to: string;
  };
  min: number;
  count: number;
  is_popular: boolean;
}

export interface OfferStatsResponse {
  message: string;
  status: number;
  result: OfferResult;
}

type OfferResult = Array<OfferStats>;

export interface OfferStats {
  total_purchase: string;
  offer_id: string;
  page_views: string | null;
  region: string;
}
