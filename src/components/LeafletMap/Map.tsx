import React from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  SVGOverlay,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.scss";
import { Icon, LatLngBoundsExpression, LatLngExpression, LeafletMouseEvent } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

interface MarkerType {
  geocode: LatLngExpression;
  popUp: string;
}

interface BoundType {
  bounds: LatLngBoundsExpression;
}

const DisplayMap: React.FC = () => {
  const markers: MarkerType[] = [
    {
      geocode: [51.505, -0.09],
      popUp: "Hello, I am PopUp 1",
    },
    {
      geocode: [51.505, -0.05],
      popUp: "Hello, I am PopUp 2",
    },
    {
      geocode: [51.505, -0.07],
      popUp: "Hello, I am PopUp 3",
    },
  ];

  const customIcon = new Icon({
    // iconUrl: '',
    iconUrl: require("../../assets/location-icon.png"),
    iconSize: [39, 39],
  });

  const bounds: BoundType = {
    bounds: [
      [51.49, -0.08],
      [51.5, -0.06],
    ],
  };

  return (
    <div className="main-div">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup chunkedLoading>
          {markers.map(({ geocode, popUp }, index) => (
            <Marker
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              position={geocode}
              icon={customIcon}
              eventHandlers={{
                mouseover: (event) => event.target.openPopup(),
                mouseout: (event) => event.target.closePopup()
              }}
            >
              <Popup>{`Marker ${index + 1}: ${popUp}`}</Popup>
              {/* <Tooltip>Tooltip for Marker</Tooltip> */}
            </Marker>
          ))}
        </MarkerClusterGroup>

        <SVGOverlay attributes={{ stroke: "black" }} bounds={bounds.bounds}>
          <rect x="0" y="0" width="100%" height="100%" fill="cyan" />
          <circle r="5" cx="10" cy="10" fill="red" />
          <text x="50%" y="50%" stroke="black">
            text
          </text>
        </SVGOverlay>

        <LayersControl position="topright">
          <LayersControl.Overlay name="Marker with popup1">
            <Marker position={[51.505, -0.03]} icon={customIcon}>
              <Popup>A pretty CSS3 popup.</Popup>
            </Marker>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Marker with popup2">
            <Marker position={[51.505, -0.06]} icon={customIcon}>
              <Popup>A pretty CSS3 popup.</Popup>
            </Marker>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};
export default DisplayMap;
