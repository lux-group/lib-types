export namespace Auth {
  interface MeResult {
    result: User;
  }

  interface MembershipsResult {
    result: Membership | Array<Membership>;
  }

  interface Membership {
    code: string;
    number: number | null;
    expiration_date: string | null;
    brand?: string;
  }

  interface Partnership {
    account_id: string;
    first_name: string;
    last_name: string;
  }

  interface LastLogin {
    ip_address: string;
    login_date: Date;
  }

  interface User {
    givenName: string;
    surname: string;
    email: string;
    fullName: string;
    memberId: string;
    status: string;
    dob: string;
    roles: string[];
    vendors: string[];
    country_code: string;
    postcode: string;
    phone_prefix: string;
    phone: string;
    signup_domain?: string;
    updated_at: string;
    gdpr: string;
    number_of_purchases?: number;
    legacy_id?: number;
    legacy_platform?: string;
    partnerships: { [code: string]: Partnership };
    membership: Membership;
    lastLogin: LastLogin;
    person_contact_id?: string;
    toggles: { [name: string]: boolean | null | string };
  }
}
