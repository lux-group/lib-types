export interface MeResult {
    result: User;
}
export interface MembershipsResult {
    result: Array<Membership>;
}
export interface Membership {
    code: string;
    number: number | null;
    expiration_date: string | null;
    brand?: string;
}
export interface Partnership {
    account_id: string;
    first_name: string;
    last_name: string;
}
export interface LastLogin {
    ip_address: string;
    login_date: string;
}
export interface User {
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
    partnerships: {
        [code: string]: Partnership;
    };
    membership: Membership;
    lastLogin: LastLogin;
    person_contact_id?: string;
    toggles: {
        [name: string]: boolean | null | string;
    };
}
export interface TokenResponse {
    access_token: string;
    refresh_token: string | null;
    expires_in: number;
    token_type: string;
}
