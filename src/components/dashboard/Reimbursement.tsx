import AnimatedCounter from "@/elements/Counter";
import ProgressBar from "@/elements/ProgressBar";
import { EMPTY_VALUE, formatCurrency } from "@/utils/format";
import { DashboardBlock } from "./styles";

interface ReimbursementProps {
  reimbursementToDate: number | null;
  maxReimbursement: number | null;
}

const Reimbursement = ({
  reimbursementToDate,
  maxReimbursement,
}: ReimbursementProps) => {
  return (
    <DashboardBlock className="flex flex-col gap-6">
      <p>Premium Lock Reimbursement</p>
      <div className="flex flex-row items-baseline justify-between w-full px-2">
        {reimbursementToDate != null ? (
          <AnimatedCounter value={reimbursementToDate} />
        ) : (
          EMPTY_VALUE
        )}
        <p>{formatCurrency(maxReimbursement)}</p>
      </div>
      <ProgressBar
        value={reimbursementToDate ?? 0}
        maxValue={maxReimbursement ?? 0}
      />
    </DashboardBlock>
  );
};

export default Reimbursement;
