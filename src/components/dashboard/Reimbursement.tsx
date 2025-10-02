import AnimatedCounter from "@/elements/Counter";
import { DashboardBlock } from "./styles";

const Reimbursement = () => {
  return (
    <DashboardBlock className="!p-4 gap-6">
      <p>Premium Lock Reimbursement</p>
      <AnimatedCounter value={1047.23} />
      <p>ProgressLine</p>
    </DashboardBlock>
  );
};

export default Reimbursement;
