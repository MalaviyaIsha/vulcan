import React from "react";
import "./App.css";
import Dashboard from "./container/Dashboard/index.tsx";
import ButtonComponent from "./components/Button/index.tsx";
import ButtonStyle from "./components/Button/buttonstyle1.tsx";
import FirstComponent from "./components/ChildrenPass/FirstComponent.tsx";
import DisplayMap from "./components/LeafletMap/Map.tsx";
import DeckMapDemo from "./components/deckglMap/MapDemo.tsx";
import MapWithJsonData from "./components/deckglMap/MapJSONDemo.tsx";

const App: React.FC = () => (
  <div className="App">
    {/* <Dashboard /> */}
    {/* <ButtonStyle/> */}
    {/* <FirstComponent/> */}
    {/* <DisplayMap/> */}
    {/* <DeckMapDemo/>  */}
    <MapWithJsonData />
  </div>
);

export default App;
