import React from "react";
import { Box } from "@mui/material";
import { ChartData } from "../../utils/types.ts";
import ChartContainer from "../chartContainer/index.tsx";

const ChartFour: React.FC = () => {
    const chartData: ChartData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                backgroundColor: "rgb()",
                borderColor: "rgb()",
                tension: 0.1,
                label: "Dataset 1",
            },
            {
              data: [55, 50, 60, 15, 50, 35],
              fill: false,
              borderColor: "rgb()",
              tension: 0.1,
              label: "Dataset 1",
          }
        ]
    };
    return (
    <Box>
      <ChartContainer
        title="Gas as % of (Coal + Gas) Generation"
        data={chartData}
      />
    </Box>
    );
};
export default ChartFour;
