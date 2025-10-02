"use client";
import { map } from "lodash";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from "recharts";

interface DashboardBarChartProps {
  data: any;
  target: number;
}

const DashboardBarChart = ({ data, target }: DashboardBarChartProps) => {
  const maxValue = Math.max(...map(data, (d) => d.value), target);
  return (
    <BarChart
      width={500}
      height={600}
      data={data}
      margin={{ top: 100, right: 30, left: 100, bottom: 5 }}
    >
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis domain={[0, maxValue * 1.1]} hide />
      <Tooltip />
      <Bar dataKey="value" fill="gray" radius={8} />
      <ReferenceLine
        y={target}
        stroke="green"
        label={{
          value: `$${target}`,
          position: "left",
          fill: "green",
          fontSize: 14,
        }}
      />
    </BarChart>
  );
};

export default DashboardBarChart;
