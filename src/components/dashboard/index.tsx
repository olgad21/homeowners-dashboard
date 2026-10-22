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
import { getDashboardData } from "./config";

const Dashboard = () => {
  const [selectedProperty, setSelectedProperty] = useState("");
  const { data: properties } = useGetPropertiesQuery();
  const propertyOptions = useMemo(
    () =>
      (properties ?? []).map((property) => ({
        value: property.id,
        label: property.address,
      })),
    [properties]
  );

  const { data: premiumLockInfo } = useGetPremiumLockInfoQuery(
    selectedProperty,
    { skip: !selectedProperty }
  );

  const {
    premiumPrediction,
    nextRenewalDate,
    reimbursementToDate,
    maxReimbursement,
    trackerData,
  } = useMemo(() => getDashboardData(premiumLockInfo), [premiumLockInfo]);

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
