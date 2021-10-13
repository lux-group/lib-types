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

  interface SingleCheapestSearchResult {
    journey: [{ cost: number; fees: number }];
  }

  type AirportsResponse =
    | Common.OkResponse<AirportRegion>
    | Common.BadRequestResponse;

  type SingleCheapestSearchResponse =
    | Common.OkResponse<SingleCheapestSearchResult>
    | Common.NoContent
    | Common.BadRequestResponse;
}
