import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./index.scss";
import ChartOne from "../../components/charts/ChartOne.tsx";

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className="bg-blue-950 pl-16 pt-4 w-full min-h-screen">
      <Box className="bg-white min-w-full p-5 justify-between rounded-tl-2xl">
        <Box className="flex justify-between py-2">
          <Typography className="!text-[24px] !font-bold text-[#131e3a]">
            Vulcan: Dashboard
          </Typography>
          <Box className="flex gap-2">
            <Button className="button-style !text-[#131e3a]">
              Request API Access
            </Button>
            <Button className="button-style !text-[#131e3a]">
              Request Snowflake Access
            </Button>
          </Box>
        </Box>
        <Box className=" shadow-2xl flex flex-col h-[calc(100vh-145px)] my-4 rounded-xl">
          <Box className="bg-[#fafafa] w-full ">
            <Tabs
              className="tabs flex min-w-full justify-between"
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
              centered
              variant="fullWidth"
            >
              <Tab className="!bg-[#d0d3da]" label="Overview" />
              <Tab className="!bg-[#d0d3da]" label="Coal" />
              <Tab className="!bg-[#d0d3da]" label="Power" />
            </Tabs>
          </Box>
          <Box className="overflow-auto grid grid-cols-2 m-4 bg-[#fafafa]">
            <ChartOne />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
