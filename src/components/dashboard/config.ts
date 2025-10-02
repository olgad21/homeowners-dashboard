import { minBy } from "lodash";

export const getNextRenewalDate = (
  currentDate: Date,
  renewalDates: Date[]
): Date | string => {
  return (
    minBy(
      renewalDates.filter((date) => date > currentDate),
      (date) => date.getTime()
    ) || "-"
  );
};
