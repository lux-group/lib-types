import { Common } from "./common";

export namespace Flights {
  interface AirportsResult {
    status: 200;
    message: null;
    result: AirportRegion;
  }

  interface AirportRegion {
    airports: Record<string, Airport>;
    origins: string[];
    destinations: string[];
    main_port: string;
    closest_port: string;
  }

  interface Airport {
    code: string;
    name: string;
    latitude: number;
    longitude: number;
  }

  interface Route {
    cost_per_adult: number;
    departure_date: string;
    arrival_date: string;
    depature_time: string;
    arrival_time: string;
    total_time_difference: number;
    is_sold_out: boolean;
  }

  interface SingleCheapestSearchResult {
    journey: {
      cost: number;
      fees: number;
      price_breakdown?: unknown;
      outbound_route: Route;
      returning_route: Route;
    };
  }

  type AirportsResponse =
    | Common.OkResponse<AirportRegion>
    | Common.BadRequestResponse;

  type SingleCheapestSearchResponse =
    | Common.OkResponse<SingleCheapestSearchResult>
    | Common.NoContent
    | Common.BadRequestResponse;
}
