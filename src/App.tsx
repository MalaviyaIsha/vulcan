import React from "react";
import "./App.css";
import Dashboard from "./container/Dashboard/index.tsx";
import ButtonComponent from "./components/Button/index.tsx";
import ButtonStyle from "./components/Button/buttonstyle1.tsx";
import FirstComponent from "./components/ChildrenPass/FirstComponent.tsx";

const App: React.FC = () => (
  <div className="App">
    {/* <Dashboard /> */}
    {/* <ButtonStyle/> */}
    <FirstComponent/>
  </div>
);

export default App;
