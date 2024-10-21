export interface Policy {
    countries: string[];
    companyName: string;
    companyAddress: string;
    companyCountry: string;
    companyRegion: string;
    termsOfUse: string;
    privacyPolicy: string;
}

export interface PolicyPageFields {
    policies?: Policy[];
}
