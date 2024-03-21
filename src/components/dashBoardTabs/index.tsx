import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import ChartOne from "../charts/ChartOne.tsx";
import ChartTwo from "../charts/ChartTwo.tsx";
import ChartThree from "../charts/ChartThree.tsx";
import ChartFour from "../charts/ChartFour.tsx";
import CoalTabs from "../coalTabs/index.tsx";

interface TabsComponentProps {
  tabTitle: string[];
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const DashBoardTabs: React.FC<TabsComponentProps> = ({ tabTitle, handleChange, value }) => { 
  const belowTitle = "Please click on a legend to hide the data from that year's line on the Chart.";
  return (
  <Box>
  <Box className="bg-[#fafafa] w-full">
    <Tabs
      className="tabs flex min-w-full justify-between"
      value={value}
      onChange={(event, newValue) => handleChange(event, newValue)}
      aria-label="wrapped label tabs example"
      centered
      variant="fullWidth"
    >
      {tabTitle.map((item) => (
        <Tab className="!bg-[#d0d3da] !capitalize !font-bold !text-[15px]" label={item} />
      ))}
    </Tabs>
  </Box>
  <Box className="bg-[#fafafa] m-4 overflow-auto rounded-tl-2xl">
  {value === 0 && (
    <>
      <Box className=" grid lg:grid-cols-2 sm:grid-cols-1">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <ChartFour />
      </Box>
      <Box className="flex justify-end mx-6">
        <Typography className="text-gray-400 italic !text-[14px]">
          {belowTitle}
        </Typography>
      </Box>
    </>
  )}
  {value === 1 && (
    <>
      <Box className="bg-white">
      <CoalTabs />
      </Box>
      <Box className="grid grid-cols-2">
        <ChartOne />
        <ChartTwo />
      </Box>
      <Box className="flex justify-end bg-[#fafafa] mx-6">
        <Typography className="text-gray-400 italic !text-[15px]">
          {belowTitle}
        </Typography>
      </Box>
    </>
  )}
  </Box>
  </Box>
);
 };

export default DashBoardTabs;
