import { Box } from "@mui/material";
import React from "react";
import CommonTabs from "../Tabs/index.tsx";
import ChartOne from "../charts/ChartOne.tsx";
import ChartTwo from "../charts/ChartTwo.tsx";
import ChartThree from "../charts/ChartThree.tsx";
import ChartFour from "../charts/ChartFour.tsx";

const CoalTabs: React.FC = () => {
  const tabTitle = ["Supply", "Demand", "Stocks", "Price"];
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabContent = [
    [
      <Box>
        <ChartOne />
        <ChartTwo />
      </Box>,
    ],
    [
      <>
        <ChartThree />
        <ChartFour />
      </>,
    ],
    [
      <Box className="grid grid-cols-2">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <ChartFour />
      </Box>,
    ],
    [
      <Box className="grid grid-cols-2">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <ChartFour />
      </Box>,
    ],
  ];
  return (
    <Box>
      <Box>
        <CommonTabs
          tabTitle={tabTitle}
          value={value}
          onChange={handleChange}
          tabContent={tabContent}
        />
      </Box>
    </Box>
  );
};

export default CoalTabs;
