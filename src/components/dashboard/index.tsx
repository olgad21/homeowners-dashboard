"use client";

import Header from "./Header";
import Reimbursement from "./Reimbursement";
import Summary from "./Summary";
import Tracker from "./Tracker";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-items-center p-16 gap-16">
      <Header />
      <div className="flex flex-col gap-6 w-full items-center justify-items-center">
        <Summary />
        <Reimbursement />
        <Tracker />
      </div>
    </div>
  );
};

export default Dashboard;
