export namespace Wishlist {
  interface Offer {
    offer_id: string;
  }

  interface Wishlists {
    count: number;
    offer_list: Offer[];
  }

  interface Result {
    status: number;
    message: string;
    result: Wishlists;
  }
}
