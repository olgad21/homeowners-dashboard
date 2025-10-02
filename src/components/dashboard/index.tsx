"use client";

import { useMemo, useState } from "react";
import Header from "./Header";
import Reimbursement from "./Reimbursement";
import Summary from "./Summary";
import Tracker from "./Tracker";
import {
  useGetPremiumLockInfoQuery,
  useGetPropertiesQuery,
} from "@/store/properties-info/query";
import { map } from "lodash";
import { getNextRenewalDate } from "./config";

const Dashboard = () => {
  const [selectedProperty, setSelectedProperty] = useState<string>("");
  const { data: properties } = useGetPropertiesQuery();
  const propertyOptions = useMemo(
    () =>
      map(properties, (property) => ({
        value: property.id,
        label: property.address,
      })),
    [properties]
  );

  const { data: premiumLockInfo } = useGetPremiumLockInfoQuery(
    selectedProperty,
    {
      skip: !selectedProperty,
    }
  );

  const { premiumPrediction, nextRenewalDate } = useMemo(() => {
    const currentDate = new Date();
    const renewal_3_date = premiumLockInfo?.renewal_3_date;
    const renewal_1_date = premiumLockInfo?.renewal_1_date;
    const renewal_2_date = premiumLockInfo?.renewal_2_date;
    return {
      premiumPrediction: premiumLockInfo?.premium_prediction,
      nextRenewalDate: getNextRenewalDate(currentDate, [
        renewal_1_date,
        renewal_2_date,
        renewal_3_date,
      ]),
    };
  }, [premiumLockInfo]);

  return (
    <div className="flex flex-col items-center justify-items-center p-16 gap-16">
      <Header
        propertyOptions={propertyOptions}
        handlePropertySelect={setSelectedProperty}
      />
      {selectedProperty && (
        <div className="flex flex-col gap-6 w-full items-center justify-items-center">
          <Summary
            premiumPrediction={premiumPrediction}
            nextRenewalDate={nextRenewalDate}
          />
          <Reimbursement />
          <Tracker />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
