export interface PartnershipResult {
  status: number;
  result: Partnership;
}

export interface PartnershipsResult {
  status: number;
  result: Partnership[];
  count: number;
  total: number;
}

export interface PartnershipAccountFieldsLabels {
  [key: string]: string;
}

export interface Partnership {
  accountFields: string[];
  accountFieldsLabels: PartnershipAccountFieldsLabels;
  bonusPointCost: number;
  bonusUnit: string;
  brandName: string;
  code: string;
  color: string;
  confirmationText: string;
  currencyCodes: string[];
  earnOrBurnLabel: string;
  earnOrBurnLabelExtended: string;
  burnOnlyLabel: string;
  burnOnlyLabelExtended: string;
  hasBurn: boolean;
  hasEarn: boolean;
  icon: string;
  iconReversed: string;
  joinUrl: string;
  landingPage: string;
  landingPageLogo: string;
  numberMaxLength: number;
  prefix: string;
  programLogo: string;
  programName: string;
  regionCodes: string[];
  reverseLogo: string;
  rewardConversion: number;
  rewardCurrency: string;
  rewardEarn: number;
  rewardName: string;
  rewardPer: string;
  rewardProgramName: string;
}

export interface MembershipResult {
  status: number;
  result: Membership;
}

export interface MembershipsResult {
  status: number;
  result: Membership[];
  count: number;
  total: number;
}

export interface MembershipsLimitsResponse {
  status: number;
  message: string;
  result: MembershipsLimitsResult;
}

export interface MembershipsLimitsResult {
  freeUpgrades: MembershipsLimits;
  freeLoungePasses: MembershipsLimits;
}

export interface MembershipPrice {
  price: number;
  regionCode: string;
  currencyCode: string;
}

export interface MembershipLogo {
  id: string;
  color: string;
}

export interface MembershipLink {
  url: string;
  path: string;
  title: string;
}

export interface MembershipHeadlineBenefit {
  title: string;
  color: string;
  backgroundColor: string;
}

export interface Membership {
  code: string;
  shortName: string;
  freeUpgrades: number;
  freeLoungePasses: number;
  addons: Array<MembershipAddons>;
  name: string;
  link: MembershipLink;
  logos: Array<MembershipLogo>;
  defaultLogo: MembershipLogo;
  headlineBenefit: MembershipHeadlineBenefit;
  prices: Array<MembershipPrice>;
}

export interface MembershipAddons {
  code: string;
  idSalesforceExternal: string;
}

export interface MembershipsLimits {
  limit: number;
  total: number;
  left: number;
}
