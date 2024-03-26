import React from "react";
import { Box } from "@mui/material";
import ButtonComponent from "./index.tsx";
import './button.css';

const ButtonStyle: React.FC = () => (
    <Box className="flex justify-center !m-4">
       <ButtonComponent className="text"/> 
       <ButtonComponent className="contained"/>
       <ButtonComponent className="outlined"/>
    </Box>
);
export default ButtonStyle;
