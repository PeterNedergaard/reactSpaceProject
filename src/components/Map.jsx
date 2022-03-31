import React,{useState , useEffect} from 'react';
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';



const containerStyle = {
    width: '150%',
    height: '700px'
};

const center = {
    lat: "51.690",
    lng: "53.230"
};



function Map({props}) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC10T1s8GHXHarxgKOCYIYMOSggezwbv0c"
    })

    const [map, setMap] = React.useState(null)



    const [coordinates , setCoordinates] = useState(props.center);

    useEffect(() => {
        setCoordinates(props.center);


    }, [props])



    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div style={mapStyle}>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordinates}
                zoom={3}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {
                    /*{ markers }*/
                    <Marker position={coordinates}/>
                }

                <></>
            </GoogleMap>

        </div>

    ) : <></>
}

export default React.memo(Map)


const mapStyle = {
    marginTop: 40,
}