export namespace Flights {
  interface AirportsResult {
    result: AirportRegion;
  }

  interface StringMap<T> {
    [code: string]: T;
  }

  interface AirportRegion {
    airports: StringMap<Airport>;
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
}
