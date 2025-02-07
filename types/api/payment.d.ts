export namespace Payment {
  interface PaymentsResult {
    data: Payment[];
    message: string;
    status: number;
    result: Payment[];
    count: number;
  }

  interface Payment {
    success: boolean;
    type: string;
    response_json: ResponseJson;
    created_at: string;
    updated_at: string;
    id_payment: string;
    fk_orders: string;
    currency: string;
    legacy_id_payment: null;
    amount: string;
    status: string;
    intent: string;
    fk_customer: string;
    brand: string;
    transaction_key: string;
    ext_transaction_id: string;
    stripe_account_id: string;
  }

  interface ResponseJson {
    // This is a dynamic response from payment providers like Stripe, PayPal etc
    // The shape varies completely between providers and can be deeply nested
    [key: string]: unknown;
  }
}
