import React, { useState } from "react";
import { DeckGL, PickingInfo } from "deck.gl";
import { ScatterplotLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl/maplibre";
import JSON_DATA from "./data.json";

const mapStyle = "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

const initialViewState = {
  latitude: 29.71752608333334,
  longitude: -102.64239633333331,
  zoom: 5,
  pitch: 30,
  bearing: 0,
};

const VulcanMapShow: React.FC = () => {
  // eslint-disable-next-line max-len
  const [hoverInfo, setHoverInfo] = useState<{ wellpad_id: string } | null>(null);
  // console.log("dataaaaaaaaa", JSON_DATA);
  const onClick = (info: PickingInfo) => {
    const { object } = info;
    if (object) {
        alert(`Wellpad_id: ${object.wellpad_id} - ${object.operator_name}`);
    }
  };

  const onHover = (info: PickingInfo) => {
    const { object } = info;
    if (object) {
      setHoverInfo(object);
    } else {
      setHoverInfo(null);
    }
  };

  const layers = [
    new ScatterplotLayer({
      id: "scatterplot-layer",
      data: JSON_DATA,
      getPosition: (d) => [d.long, d.lat],
      getFillColor: (d) => (d.ownership === 'PUBLIC' ? [0, 255, 0] : [255, 0, 0]),
      getRadius: 4000,
      pickable: true,
      autoHighlight: true,
      onClick,
      onHover,
    }),
  ];
  return (
    <DeckGL initialViewState={initialViewState} layers={layers} controller>
      <Map mapStyle={mapStyle} />
      {hoverInfo && (
        <div style={{ position: 'absolute', backgroundColor: 'white', padding: 10, border: '1px solid black' }}>
          Wellpad ID: 
          {hoverInfo.wellpad_id}
        </div>
      )}
    </DeckGL>
  );
};
export default VulcanMapShow;
