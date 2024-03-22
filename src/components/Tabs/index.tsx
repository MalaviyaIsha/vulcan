import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import './styles.scss';

interface CommonTabsProps {
  tabTitle: string[];
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  tabContent: React.ReactNode[]
}

interface TabPanelProps {
    children: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );

const CommonTabs: React.FC<CommonTabsProps> = ({ tabTitle, value, onChange, tabContent }) => (
  <Box>
    <Tabs
      className="coalTabs grid grid-cols-2"
      aria-label="wrapped label tabs example"
      value={value}
      onChange={onChange}
    >
      {tabTitle.map((item) => (
        <Tab className="flex !capitalize !font-bold" label={item} />
      ))}
    </Tabs>
    {tabContent.map((content, index) => (
      <TabPanel value={value} index={index}>
        {content}
      </TabPanel>
    ))}
  </Box>
);

export default CommonTabs;
