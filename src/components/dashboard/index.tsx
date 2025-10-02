"use client";

import { useMemo } from "react";
import Header from "./Header";
import Reimbursement from "./Reimbursement";
import Summary from "./Summary";
import Tracker from "./Tracker";
import { useGetPropertiesQuery } from "@/store/properties-info/query";
import { map } from "lodash";

const Dashboard = () => {
  const { data: properties } = useGetPropertiesQuery();
  const propertyOptions = useMemo(
    () =>
      map(properties, (property) => ({
        value: property.id,
        label: property.address,
      })),
    [properties]
  );
  return (
    <div className="flex flex-col items-center justify-items-center p-16 gap-16">
      <Header propertyOptions={propertyOptions} />
      <div className="flex flex-col gap-6 w-full items-center justify-items-center">
        <Summary />
        <Reimbursement />
        <Tracker />
      </div>
    </div>
  );
};

export default Dashboard;
