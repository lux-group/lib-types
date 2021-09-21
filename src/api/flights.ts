export interface AirportsResult {
  result: AirportRegion;
}

export interface StringMap<T> {
  [code: string]: T;
}

export interface AirportRegion {
  airports: StringMap<Airport>;
  origins: string[];
  destinations: string[];
  main_port: string;
  closest_port: string;
}

export interface Airport {
  code: string;
  name: string;
  latitude: number;
  longitude: number;
}
