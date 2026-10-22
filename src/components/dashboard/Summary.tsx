import { formatCurrency } from "@/utils/format";
import { DashboardBlock, SummaryBlock } from "./styles";

interface SummaryProps {
  premiumPrediction: number | null;
  nextRenewalDate: string;
}

const Summary = ({ premiumPrediction, nextRenewalDate }: SummaryProps) => {
  return (
    <DashboardBlock className="flex gap-6">
      <SummaryBlock>
        <p>Insurance Premiums Prediction</p>
        <p>{formatCurrency(premiumPrediction)}</p>
      </SummaryBlock>
      <SummaryBlock>
        <p>Next Insurance Renewal</p>
        <p>{nextRenewalDate}</p>
      </SummaryBlock>
    </DashboardBlock>
  );
};

export default Summary;
