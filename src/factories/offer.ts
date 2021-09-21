import { Factory } from "fishery";
import { API } from "..";

export const Price = Factory.define<API.Offer.Price>(() => ({
  price: 100,
  value: 100,
  nightly_price: 0,
  nightly_value: 0,
  currency_code: "AUD",
}));
