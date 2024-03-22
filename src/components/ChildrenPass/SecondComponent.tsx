import React, { ReactNode } from "react";

interface SecondComponentProps {
  children: ReactNode;
}

const SecondComponent: React.FC<SecondComponentProps> = ({ children }) => (
  <div>{children}</div>
);
export default SecondComponent;
