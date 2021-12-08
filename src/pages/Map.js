import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {userLocation} from '../actions'
import axios from 'axios'
import React, {useEffect, useState, useRef, useCallback} from 'react'
import {connect} from 'react-redux'


const MapContainer = (props) => {
    
    const [center, setCenter] = useState({lat: parseFloat(props.match.params.lat), lng: parseFloat(props.match.params.lng)})
    const [pin, setPin] = useState({})
    const [zoom, setZoom] = useState(parseInt(props.match.params.zoom))
    const refMap = useRef(null);
    
    useEffect(() => {
        console.log({
            lat: props.match.params.lat, 
            lng: props.match.params.lng, 
            zoom:props.match.params.zoom
        })
    },[])
    

    const mapStyles = {
        width: '1425px',
        position: 'absolute', 
        height: '990px'
    };

    const dragMap = () => {
        console.log(refMap.current)
        let lat = refMap.current.map.center.lat()
        let lng = refMap.current.map.center.lng()
        setPin({lat,lng})
    }

    let timer

    const zoomChanged = () => {
        window.clearTimeout(timer)
        let timerId = () => setTimeout(()=> {
            console.log(refMap.current)
            let lat = refMap.current.map.center.lat()
            let lng = refMap.current.map.center.lng()
            setPin({lat,lng})

        }, 1500)
        timer = timerId()
    }


    // address
    // 5600%Pacific%Grove%Way%Union
    console.log(pin)
    return (
        <div class = "map-div">
        <Map
            ref = {refMap}
            google={props.google}
            zoom={zoom}
            style={mapStyles}
            initialCenter={center}
            onDragend = {dragMap}
            onZoomChanged = {zoomChanged}
           
        > 
        
            {/* <Marker
                name={'Your position'}
                position={this.props.user_coords}
            /> */}

        </Map>
        <div style={{fontSize: "5em"}} class = "map-icon">
            <i size = "5x" class="fas fa-map-pin"></i>
        </div>
        </div>
    );
    
}

const LoadingContainer = (props) => (
    <div>Loading...</div>
)



export default connect(null, {userLocation})(GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg",
    LoadingContainer: LoadingContainer
})(MapContainer))