export namespace Auth {
  interface MeResult {
    result: User;
  }

  interface Membership {
    code: string;
    number: number | null;
    expiration_date: string | null;
  }

  interface Partnership {
    account_id: string;
    first_name: string;
    last_name: string;
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
    partnerships: { [code: string]: Partnership };
    membership: Membership;
    person_contact_id: string;
    toggles: { [name: string]: boolean | null | string };
  }
}
