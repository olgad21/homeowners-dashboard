"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from "recharts";

const mockdata = [
  { name: "Origination", value: 300 },
  { name: "2019", value: 450 },
  { name: "2020", value: 200 },
  { name: "2021", value: 500 },
];

const mocktarget = 250;

interface DashboardBarChartProps {
  data?: any;
  target?: number;
}

const DashboardBarChart = ({
  data = mockdata,
  target = mocktarget,
}: DashboardBarChartProps) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
    >
      <XAxis dataKey="name" hide />
      <YAxis hide />
      <Tooltip />
      <Bar dataKey="value" fill="gray" />
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
