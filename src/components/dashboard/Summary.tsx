import { DashboardBlock, SummaryBlock } from "./styles";

const Summary = ({ premiumPrediction, nextRenewalDate }: any) => {
  return (
    <DashboardBlock className="flex !p-4 gap-6">
      <SummaryBlock>
        <p>Insurance Premiums Prediction</p>
        <p>{`$${premiumPrediction}`}</p>
      </SummaryBlock>
      <SummaryBlock>
        <p>Next Insurance Renewal</p>
        <p>{`${nextRenewalDate}`}</p>
      </SummaryBlock>
    </DashboardBlock>
  );
};

export default Summary;
