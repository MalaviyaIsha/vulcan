import React, { useState } from "react";
import DeckGL, { PickingInfo } from "deck.gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl/maplibre";
import { GeoJsonObject, FeatureCollection } from "geojson";
import JSON_DATA from "./data.json";
import "./map.scss";

const mapStyle = "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json";

const initialViewState = {
  latitude: 39.8283,
  longitude: -98.5795,
  zoom: 3,
  pitch: 30,
  bearing: 0,
};

const MapWithJsonData: React.FC = () => {
  const onClick = (info: PickingInfo<{ properties: { Name: string } }>) => {
    if (info.object) {
      alert(info.object.properties.Name);
    }
  };

  const layers = [
    new GeoJsonLayer({
      id: "geoJSON-layer",
      data: JSON_DATA as FeatureCollection,
      filled: true,
      pointRadiusMinPixels: 5,
      pointRadiusScale: 2000,
      getPointRadius: (f) => 5,
      getFillColor(data) {
        return data.properties.Name.includes("National Park")
          ? [0, 0, 0, 250]
          : [86, 144, 58, 250];
      },
      pickable: true,
      autoHighlight: true,
      extruded: true,
      getElevation: 500,
      onClick,
    }),
  ];
  return (
    <div className="deck-div">
      <DeckGL
        initialViewState={initialViewState}
        layers={layers}
        controller
        style={{ width: "100%", height: "100vh" }}
      >
        <Map mapStyle={mapStyle} />
      </DeckGL>
    </div>
  );
};
export default MapWithJsonData;
