"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from "recharts";
import { formatCurrency } from "@/utils/format";

interface DashboardBarChartProps {
  data: { name: string; value: number }[];
  target: number | null;
}

const DashboardBarChart = ({ data, target }: DashboardBarChartProps) => {
  const maxValue = Math.max(...data.map((d) => d.value), target ?? 0);
  return (
    <BarChart
      width={500}
      height={600}
      data={data}
      margin={{ top: 100, right: 30, left: 100, bottom: 5 }}
    >
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis domain={[0, maxValue * 1.1]} hide />
      <Tooltip formatter={(value) => formatCurrency(Number(value))} />
      <Bar dataKey="value" fill="gray" radius={8} />
      {target != null && (
        <ReferenceLine
          y={target}
          stroke="green"
          label={{
            value: formatCurrency(target),
            position: "left",
            fill: "green",
            fontSize: 14,
          }}
        />
      )}
    </BarChart>
  );
};

export default DashboardBarChart;
