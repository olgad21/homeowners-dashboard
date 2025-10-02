import AnimatedCounter from "@/elements/Counter";
import { DashboardBlock } from "./styles";
import ProgressBar from "@/elements/ProgressBar";

const Reimbursement = ({ reimbursementToDate, maxReimbursement }: any) => {
  const value = 1047.23;
  const maxValue = 2189;
  return (
    <DashboardBlock className="flex flex-col !p-4 gap-6">
      <p>Premium Lock Reimbursement</p>
      <div className="flex flex-row items-baseline justify-between w-full px-2">
        {reimbursementToDate ? (
          <AnimatedCounter value={reimbursementToDate} />
        ) : (
          "-"
        )}
        <p>{maxReimbursement || "-"}</p>
      </div>
      <ProgressBar
        value={reimbursementToDate ?? 0}
        maxValue={maxReimbursement || 0}
      />
    </DashboardBlock>
  );
};

export default Reimbursement;
