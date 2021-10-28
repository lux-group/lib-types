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

  interface JourneySearchResult {
    status: 200;
    message: null;
    result: Journey;
  }

  interface Journey {
    id: string;
    margin: number;
    provider: string;
    cost: number;
    tax: number;
    fees: number;
    validating_carrier: string;
    validating_carrier_name: string;
    price_breakdown: { adults: Price; children: Price; infants: Price };
    departing: Itinerary;
    returning: Itinerary;
    segments: any[];
    seat_selection_policy: string;
    is_itx_fare: boolean;
    validating_carrier_logo: string;
    apis_required: boolean;
    au_contact_tracing_required: boolean;
    is_alliance_carrier: boolean;
  }

  interface Itinerary {
    journey_key: string;
    flight_time: { hours: number; minutes: number };
    flights: Flight[];
    extras: { baggage: Baggage[] };
    departing_date: string;
    arrival_date: string;
  }

  interface Baggage {
    id: string;
    description: string;
    per_adult: { cost: number; max: number };
    per_child: { cost: number; max: number };
  }

  interface Flight {
    is_through_flight: boolean;
    departing_airport: string;
    departing_airport_name: string;
    departing_display_names: { primary: string; secondary: string | null };
    departing_country: string;
    departing_date: string;
    departing_time: string;
    arrival_airport: string;
    arrival_airport_name: string;
    arrival_display_names: { primary: string; secondary: string | null };
    arrival_country: string;
    arrival_date: string;
    arrival_time: string;
    operating_carrier: string;
    carrier: string;
    flight_number: string;
    free_carry_on_baggage_description: string;
    free_checked_in_baggage_description: string;
    free_checked_in_baggage_included: boolean;
    aircraft_type: string;
    booking_class: string;
    fare_class: string;
    fare_basis: string;
    fare_type: string;
    breakpoint: boolean;
    carrier_name: string;
    operating_carrier_name: string;
    operated_by_text: string | null;
    layover_time: { hours: number; minutes: number };
    _links: { fare_rules: { href: string } };
  }

  interface Price {
    cost: number;
    tax: number;
    totalCost: number | null;
    totalTax: number;
    margin: number;
  }
}
