export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  square_footage: number;
  year_built: number;
  property_type: string;
}

export interface PremiumLockInfo {
  property_id: string;
  origination_premium: number | null;
  year_1_premium: number | null;
  year_2_premium: number | null;
  year_3_premium: number | null;
  active_year: number;
  // ISO dates, e.g. "2026-01-12"
  renewal_1_date: string | null;
  renewal_2_date: string | null;
  renewal_3_date: string | null;
  reimbursement_to_date: number | null;
  max_reimbursement: number | null;
  premium_prediction: number | null;
}
