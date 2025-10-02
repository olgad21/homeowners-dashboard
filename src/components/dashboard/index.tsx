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

  const {
    premiumPrediction,
    nextRenewalDate,
    reimbursementToDate,
    maxReimbursement,
    trackerData,
  } = useMemo(() => {
    const currentDate = new Date();
    const renewal_3_date = premiumLockInfo?.renewal_3_date;
    const renewal_1_date = premiumLockInfo?.renewal_1_date;
    const renewal_2_date = premiumLockInfo?.renewal_2_date;
    const trackerData = [
      { name: "Origination", value: premiumLockInfo?.origination_premium },
      { name: "Year 1", value: premiumLockInfo?.year_1_premium ?? 0 },
      { name: "Year 2", value: premiumLockInfo?.year_2_premium ?? 0 },
      { name: "Year 3", value: premiumLockInfo?.year_3_premium ?? 0 },
    ];
    return {
      premiumPrediction: premiumLockInfo?.premium_prediction,
      nextRenewalDate: getNextRenewalDate(currentDate, [
        renewal_1_date,
        renewal_2_date,
        renewal_3_date,
      ]),
      reimbursementToDate: premiumLockInfo?.reimbursement_to_date,
      maxReimbursement: premiumLockInfo?.max_reimbursement,
      trackerData: trackerData,
    };
  }, [premiumLockInfo]);

  console.log(premiumPrediction, "premiumPrediction main");
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
          <Reimbursement
            reimbursementToDate={reimbursementToDate}
            maxReimbursement={maxReimbursement}
          />
          <Tracker data={trackerData} target={premiumPrediction} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
