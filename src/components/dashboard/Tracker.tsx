import DashboardBarChart from "@/elements/BarChart";
import { DashboardBlock } from "./styles";

const Tracker = ({ data, target }: any) => {
  return (
    <DashboardBlock className="!p-4 gap-6">
      <p>Insurance Tracker</p>
      <DashboardBarChart data={data} target={target} />
    </DashboardBlock>
  );
};

export default Tracker;
