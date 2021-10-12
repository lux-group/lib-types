import { Common } from "./common";

export namespace Flights {
  interface AirportsResult {
    status: 200;
    message: null;
    result: AirportRegion;
  }

  interface AirportsErrorResponse {
    status: 400;
    message: string;
    errors: Common.ValidationError[];
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

  type AirportsResponse = AirportsResult | AirportsErrorResponse;
}
