import React from "react";

interface ButtonProps {
    className: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ className }) => (
       <button type="button" className={className}>Hello</button> 
);
export default ButtonComponent;
