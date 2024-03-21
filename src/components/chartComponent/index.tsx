import { Box } from "@mui/material";
import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
import { ChartData } from "../../utils/types.ts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  data: ChartData; 
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const chartRef = useRef<ChartJS<"line", number[], string>>(null);

  return (
    <Box>
      <Line data={data} ref={chartRef} height={300} width={500} />
    </Box>
  );
};

export default ChartComponent;
