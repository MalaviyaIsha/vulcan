import React from "react";
import { DeckGL } from "deck.gl";
import { PolygonLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl/maplibre";
import JSON_DATA from "./data.json";

const mapStyle = "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

const initialViewState = {
  latitude: 40.7128,
  longitude: -74.006,
  zoom: 11,
  pitch: 30,
  bearing: 0,
};

const BuildingMap: React.FC = () => {
  const layers = [
    new PolygonLayer({
      id: "building-layer",
      data: JSON_DATA,
      getPolygon: (d) => [
        [d.longitude - 0.001, d.latitude - 0.001],
        [d.longitude + 0.001, d.latitude - 0.001],
        [d.longitude + 0.001, d.latitude + 0.001],
        [d.longitude - 0.001, d.latitude + 0.001],
      ],
      getFillColor: [0, 255, 0],
      extruded: true,
      getElevation: (d) => d.height,
      pickable: true,
      autoHighlight: true,
    }),
  ];

  return (
    <DeckGL initialViewState={initialViewState} controller layers={layers}>
      <Map mapStyle={mapStyle} />
    </DeckGL>
  );
};

export default BuildingMap;
