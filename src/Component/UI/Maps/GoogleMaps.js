import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const Map = (props) => {

      
    const initialMarkers = [
        {
            position: {
                lat: 28.6231,
                lng: 77.0277
            },
            label: { color: "white", text: "p1" },
            draggable: true
        },
        {
            position: {
                lat: 28.6196,
                lng: 77.0550
            },
            label: { color: "white", text: "p2" },
            draggable: false
        },
        {
            position: {
                lat:28.6219,
                lng:77.0878
            },
            label: { color: "white", text: "P3" },
            draggable: true
        },
    ];
    
    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    const [markers, setMarkers] = useState(initialMarkers);

    const containerStyle = {
        width: "100%",
        height: "100%",
    }

    const center = {
         lat:props.data1[0]?.position.lat,
                lng:props.data1[0]?.position.lng
    }

    const mapClicked = (event) => { 
        console.log(event.latLng.lat(), event.latLng.lng()) 
    }

    const markerClicked = (marker, index) => {  
        setActiveInfoWindow(index)
       
    }

    const markerDragEnd = (event, index) => { 
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyCouhljFPvjmZsZZYixYD4h5ISFZ05ch1g'>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={12}
                onClick={mapClicked}
            >
                {props.data1?.map((marker, index) => (
                    <Marker 
                        key={index} 
                        position={marker.position}
                        label={marker.label}
                        draggable={marker.draggable}
                        onDragEnd={event => markerDragEnd(event, index)}
                        onClick={event => markerClicked(marker, index)} 
                    >
                        {
                            (activeInfoWindow === index)
                            &&
                            <InfoWindow position={marker.position}>
                                <b>{marker.position.lat}, {marker.position.lng}</b>
                            </InfoWindow>
                        }  
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;