import { DashboardBlock, SummaryBlock } from "./styles";

const Summary = () => {
  return (
    <DashboardBlock className="flex !p-4 gap-6">
      <SummaryBlock>
        <p>Insurance Premiums Prediction</p>
        <p>$2,189 in Jan 2028</p>
      </SummaryBlock>
      <SummaryBlock>
        <p>Next Insurance Renewal</p>
        <p>Jan 12, 2025</p>
      </SummaryBlock>
    </DashboardBlock>
  );
};

export default Summary;
