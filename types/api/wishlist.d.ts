export interface Offer {
    offer_id: string;
}
export interface Wishlists {
    count: number;
    offer_list: Offer[];
}
export interface Result {
    status: number;
    message: string;
    result: Wishlists;
}
