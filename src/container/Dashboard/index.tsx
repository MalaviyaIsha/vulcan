import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import "./index.scss";
import DashBoardTabs from "../../components/dashBoardTabs/index.tsx";
import ButtonStyle from "../../components/Button/buttonstyle1.tsx";

const Dashboard: React.FC = () => {
  const tabTitle = ["Overview", "Coal", "Power"];
  const [value, setValue] = React.useState(0);
  const handleChange = (event:React.SyntheticEvent, newValue:number) => {
    setValue(newValue); 
  };
  return (
    <Box className="bg-[#131f3a] pl-16 pt-4 w-full min-h-screen">
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
        <Box className=" shadow-2xl flex flex-col h-[calc(100vh-145px)] my-4 rounded-xl overflow-auto">
          <DashBoardTabs />
           {/* tabTitle={tabTitle}
             value={value}
             handleChange={handleChange} */}
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
