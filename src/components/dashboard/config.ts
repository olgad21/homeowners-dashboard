import dayjs, { Dayjs } from "dayjs";
import { minBy } from "lodash";
import type { PremiumLockInfo } from "@/store/properties-info/types";
import { EMPTY_VALUE } from "@/utils/format";

export interface TrackerDatum {
  name: string;
  value: number;
}

export const getNextRenewalDate = (
  currentDate: Dayjs,
  renewalDates: (string | null | undefined)[]
): Dayjs | undefined =>
  minBy(
    renewalDates
      .filter((date): date is string => !!date)
      .map((date) => dayjs(date))
      .filter((date) => date.isValid() && date.isAfter(currentDate)),
    (date) => date.valueOf()
  );

export const getDashboardData = (info?: PremiumLockInfo) => {
  const nextRenewalDate = getNextRenewalDate(dayjs(), [
    info?.renewal_1_date,
    info?.renewal_2_date,
    info?.renewal_3_date,
  ]);

  const trackerData: TrackerDatum[] = [
    { name: "Origination", value: info?.origination_premium ?? 0 },
    { name: "Year 1", value: info?.year_1_premium ?? 0 },
    { name: "Year 2", value: info?.year_2_premium ?? 0 },
    { name: "Year 3", value: info?.year_3_premium ?? 0 },
  ];

  return {
    premiumPrediction: info?.premium_prediction ?? null,
    nextRenewalDate: nextRenewalDate?.format("MMM D, YYYY") ?? EMPTY_VALUE,
    reimbursementToDate: info?.reimbursement_to_date ?? null,
    maxReimbursement: info?.max_reimbursement ?? null,
    trackerData,
  };
};
