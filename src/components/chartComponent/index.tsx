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
  Legend,
} from "chart.js";
// import { ChartOptions } from "chart.js/auto";
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

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
  };

  return (
    <Box className="flex justify-center m-2 border border-gray-300 rounded-xl p-2">
      <Line
        data={data}
        options={options}
        ref={chartRef}
        height={250}
        width="100%"
      />
    </Box>
  );
};

export default ChartComponent;
