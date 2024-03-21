import React from "react";
import { Box } from "@mui/material";
import { ChartData } from "../../utils/types.ts";
import ChartContainer from "../chartContainer/index.tsx";

const ChartTwo: React.FC = () => {
  const chartData: ChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: "rgb(238, 125, 48)",
        borderColor: "rgb(238, 125, 48)",
        tension: 0.1,
        label: "Dataset 1",
      },
    ],
  };

  return (
    <Box>
      <ChartContainer
        title="Coal Stocks Short Tons vs Week Number"
        data={chartData}
      />
    </Box>
  );
};
export default ChartTwo;
