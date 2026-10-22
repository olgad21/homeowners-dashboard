import DashboardBarChart from "@/elements/BarChart";
import type { TrackerDatum } from "./config";
import { DashboardBlock } from "./styles";

interface TrackerProps {
  data: TrackerDatum[];
  target: number | null;
}

const Tracker = ({ data, target }: TrackerProps) => {
  return (
    <DashboardBlock className="gap-6">
      <p>Insurance Tracker</p>
      <DashboardBarChart data={data} target={target} />
    </DashboardBlock>
  );
};

export default Tracker;
