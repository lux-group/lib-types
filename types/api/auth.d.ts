export namespace Auth {
  interface MeResult {
    result: User;
  }

  interface Partnership {
    account_id: string;
    first_name: string;
    last_name: string;
  }

  interface LastLogin {
    ip_address: string;
    login_date: string;
  }

  interface User {
    givenName: string | null;
    surname: string | null;
    email: string;
    fullName: string | null;
    id_member: string;
    memberId: string;
    status: string;
    dob: string | null;
    roles: string[];
    vendors: string[];
    country_code: string;
    postcode: string;
    phone_prefix: string;
    phone: string;
    signup_domain: string | null;
    updated_at: string;
    gdpr: string;
    number_of_purchases: number | null;
    legacy_id?: number;
    legacy_platform: string | null;
    partnerships: { [code: string]: Partnership };
    lastLogin: LastLogin;
    person_contact_id?: string;
    toggles: { [name: string]: boolean | null | string };
  }

  interface TokenResponse {
    access_token: string;
    refresh_token: string | null;
    expires_in: number;
    token_type: string;
  }
}
