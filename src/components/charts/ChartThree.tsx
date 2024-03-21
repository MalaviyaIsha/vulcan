import React from "react";
import { Box } from "@mui/material";
import { ChartData } from "../../utils/types.ts";
import ChartContainer from "../chartContainer/index.tsx";

const ChartThree: React.FC = () => {
  const chartData: ChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: "dataset1",
        fill: false,
        backgroundColor: "rgb(255,191,0)",
        borderColor: "rgb(255,191,0)",
        tension: 0.1,
      },
    ],
  };
 
  return (
    <Box>
      <ChartContainer
        title="Coal Stocks Short Tons / Coal Pile Capability MW vs. Week Number"
        data={chartData}
      />
    </Box>
  );
};
export default ChartThree;
