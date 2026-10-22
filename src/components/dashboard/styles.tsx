import type { HTMLAttributes } from "react";

type DivProps = HTMLAttributes<HTMLDivElement>;

export const DashboardBlock = ({ className = "", ...props }: DivProps) => (
  <div
    className={`rounded-lg border border-slate-200 w-[1010px] p-4 ${className}`}
    {...props}
  />
);

export const SummaryBlock = ({ className = "", ...props }: DivProps) => (
  <div className={`flex flex-col gap-4 py-3 px-4 ${className}`} {...props} />
);
