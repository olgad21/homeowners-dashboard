import { styled } from "styled-components";

export const DashboardBlock = styled.div.attrs<{ className?: string }>({
  className: "rounded-lg border border-slate-200 w-[1010px] p-8",
})``;

export const SummaryBlock = styled.div.attrs<{ className?: string }>({
  className: "flex flex-col gap-4 py-3 px-4",
})``;
