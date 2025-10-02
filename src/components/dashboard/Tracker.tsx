import DashboardBarChart from "@/elements/BarChart";
import { DashboardBlock } from "./styles";

const Tracker = () => {
  return (
    <DashboardBlock className="!p-4 gap-6">
      <p>Insurance Tracker</p>
      <DashboardBarChart />
    </DashboardBlock>
  );
};

export default Tracker;
