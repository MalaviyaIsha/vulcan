import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import "./styles.scss";

const CoalTabs: React.FC = () => {
    const tabTitle = ["Supply", "Demand", "Stocks", "Price"];
    const [value, setValue] = React.useState(0);
    const handleChange = (event:React.SyntheticEvent, newValue:number) => {
      setValue(newValue); 
    };
    return (
        <Box>
        <Tabs className="coalTabs" aria-label="basic tabs example" onChange={handleChange} value={value}>
        {
            tabTitle.map((item) => (
                <Tab className="flex !capitalize !font-bold" label={item} />
            ))
        }
        </Tabs>
        </Box>
    );
};

export default CoalTabs;
