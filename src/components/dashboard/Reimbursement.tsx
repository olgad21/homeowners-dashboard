import AnimatedCounter from "@/elements/Counter";
import { DashboardBlock } from "./styles";
import ProgressBar from "@/elements/ProgressBar";

const Reimbursement = () => {
  const value = 1047.23;
  const maxValue = 2189;
  return (
    <DashboardBlock className="flex flex-col !p-4 gap-6">
      <p>Premium Lock Reimbursement</p>
      <div className="flex flex-row items-baseline justify-between w-full px-2">
        <AnimatedCounter value={value} />
        <p>{maxValue}</p>
      </div>
      <ProgressBar value={value} maxValue={maxValue} />
    </DashboardBlock>
  );
};

export default Reimbursement;
