import { Box } from "@mui/material";
import React from "react";
import CommonTabs from "../Tabs/index.tsx";
import ChartOne from "../charts/ChartOne.tsx";
import ChartTwo from "../charts/ChartTwo.tsx";
import ChartThree from "../charts/ChartThree.tsx";
import ChartFour from "../charts/ChartFour.tsx";

const PowerTabs: React.FC = () => {
  const tabTitle = ["Supply", "Demand", "Price"];
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
  ];
  return (
    <CommonTabs
      tabContent={tabContent}
      tabTitle={tabTitle}
      value={value}
      onChange={handleChange}
    />
  );
};
export default PowerTabs;
