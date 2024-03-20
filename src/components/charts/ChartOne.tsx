import React from "react";
import { Box } from "@mui/material";
import ChartContainer from "../chartContainer/index.tsx";
import { ChartData } from "../../utils/types.ts";

const ChartOne: React.FC = () => {
  const chartData: ChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(68, 114, 196)",
        tension: 0.1,
        label: "Dataset 1"
      },
    ],
  };
  return (
    <Box>
      <ChartContainer 
        title="Count of Units > 90% Max Observed"
        data={chartData}
      />
    </Box>
  );
};
export default ChartOne;
