import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ChartComponent from "../chartComponent/index.tsx";
import { ChartData } from "../../utils/types.ts";

interface ChartContainerProps {
  title: string;
  data: ChartData;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, data }) => {
  const reset = "Reset Scale";
  return (
  <Box
    className="bg-[#fafafa] p-2 rounded-lg flex flex-col justify-center"
    style={{ minHeight: "350px" }}
  >
    <Box className="flex items-center justify-between ">
      <Typography className="!text-[14px] !font-bold pl-4 text-[#999da7]">
        {title}
      </Typography>
    <Box className="flex gap-2 mr-2">
    <Button
      variant="outlined"
      sx={{ borderColor: "#999da7" }} 
      className="!capitalize !text-[12px] !text-[#999da7] "
    > 
    <CloudDownloadOutlinedIcon/>
    </Button>
    <Button
      variant="outlined"
      endIcon={<RestartAltIcon/>}
      sx={{ borderColor: "#999da7" }} 
      className="!capitalize !text-[12px] !text-[#999da7] "
    >
        {reset} 
    </Button>
    <Button
      variant="outlined"
      sx={{ borderColor: "#999da7" }} 
      className="!capitalize !text-[12px] !text-[#999da7] "
    > 
    <CropFreeRoundedIcon/>
    </Button>
    </Box>
    </Box>
    <Box>
      <ChartComponent data={data} />
    </Box>
  </Box>
);
};
export default ChartContainer;
