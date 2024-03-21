import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChartComponent from "../chartComponent/index.tsx";
import { ChartData } from "../../utils/types.ts";

interface ChartContainerProps {
  title: string;
  data: ChartData;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, data }) => (
  <Box
    className="bg-[#fafafa] p-2 rounded-lg flex flex-col justify-center"
    style={{ minHeight: "350px" }}
  >
    <Typography className="!text-[14px] !font-bold pl-4 text-gray-400">
      {title}
    </Typography>
    <Box>
      <ChartComponent data={data} />
    </Box>
  </Box>
);
export default ChartContainer;
