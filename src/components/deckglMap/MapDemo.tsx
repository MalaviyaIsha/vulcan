import React from "react";
import DeckGL from "deck.gl";
import { ScatterplotLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl/maplibre";

const mapStyle = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

const initialViewState = {
    longitude: -122.45,
    latitude: 37.75,
    zoom: 12,
    pitch: 30,
    bearing: 0,
};

const data = [
    { position: [-122.45, 37.75], color: [255, 0, 0], size: 200 },
    { position: [-122.43, 37.76], color: [0, 255, 0], size: 300 },
    { position: [-122.43, 37.73], color: [0, 0, 255], size: 400 },
]; 

const DeckMapDemo: React.FC = () => {
    const layers = [
        new ScatterplotLayer({  
            id: "scatterplot-layer",
            data,
            filled: true, 
            getPosition: (d) => d.position,
            getFillColor: (d) => d.color,
            getRadius: (d) => d.size,
            pickable: true,
            autoHighlight: true
        }),
    ];
    return (
        <DeckGL initialViewState={initialViewState} layers={layers} controller style={{ width: "100%", height: "100vh" }}>
            <Map reuseMaps mapStyle={mapStyle} />
        </DeckGL> 
    );
};
export default DeckMapDemo;  
