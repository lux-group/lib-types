export namespace Auth {
  interface MeResult {
    result: User;
  }

  interface User {
    givenName: string;
    surname: string;
    email: string;
    fullName: string;
    memberId: string;
    status: string;
    roles: string[];
    country_code: string;
    postcode: string;
    phone_prefix: string;
    phone: string;
    signup_domain: string;
    updated_at: string;
    gdpr: string;
    person_contact_id: string;
    toggles: { [s: string]: boolean | null | string };
  }
}
