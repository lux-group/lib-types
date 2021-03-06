export namespace Loyalty {
  interface PartnershipResult {
    status: number;
    result: Partnership;
  }

  interface PartnershipsResult {
    status: number;
    result: Partnership[];
    count: number;
    total: number;
  }

  interface PartnershipAccountFieldsLabels {
    [key: string]: string;
  }

  interface Partnership {
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

  interface MembershipResult {
    status: number;
    result: Membership;
  }

  interface MembershipsResult {
    status: number;
    result: Membership[];
    count: number;
    total: number;
  }

  interface MembershipsLimitsResponse {
    status: number;
    message: string;
    result: MembershipsLimitsResult;
  }

  interface MembershipsLimitsResult {
    freeUpgrades: MembershipsLimits;
    freeLoungePasses: MembershipsLimits;
  }

  interface MembershipPrice {
    price: number;
    regionCode: string;
    currencyCode: string;
  }

  interface MembershipLogo {
    id: string;
    color: string;
  }

  interface MembershipLink {
    url: string;
    path: string;
    title: string;
  }

  interface MembershipHeadlineBenefit {
    title: string;
    color: string;
    backgroundColor: string;
  }

  interface Membership {
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

  interface MembershipAddons {
    code: string;
    idSalesforceExternal: string;
  }

  interface MembershipsLimits {
    limit: number;
    total: number;
    left: number;
  }
}
