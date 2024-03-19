import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./index.scss";

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box className="bg-[#fafafa] min-h-screen min-w-full p-5 justify-between ">
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
        <Box className="bg-[#fafafa] flex h-[calc(100vh-130px)] w-full justify-center shadow-2xl my-4 rounded-xl">
          <Tabs
            className="tabs flex min-w-full justify-between rounded-xl"
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
      </Box>
    </Box>
  );
};
export default Dashboard;
