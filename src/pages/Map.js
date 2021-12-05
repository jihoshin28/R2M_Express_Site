import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {storeCoords} from '../actions'
import React, {useEffect, useState, useRef, useCallback} from 'react'
import {connect} from 'react-redux'


const MapContainer = (props) => {
    
    const [center, setCenter] = useState({ lat: 54.68916, lng: 25.2798 })
    const refMap = useRef(null);
    
    useEffect(() => {
        console.log(props)
    },[])
    

    const mapStyles = {
        width: '1425px',
        position: 'absolute', 
        height: '990px'
    };

    const dragMap = (mapProps, map) => {
        console.log(refMap.current)
        let lat = refMap.current.map.center.lat()
        let lng = refMap.current.map.center.lng()
        setCenter({lat,lng})
    }

    const resize = (e) => {
        console.log(e)
    }


    // address
    // 5600%Pacific%Grove%Way%Union
    
    return (
        <div class = "map-div">
        <Map
            ref = {refMap}
            google={props.google}
            zoom={13}
            style={mapStyles}
            initialCenter={
                { lat: 54.68916, lng: 25.2798 }
            }
            onDragend = {dragMap}
            onResize = {resize}
           
        > 
        
            {/* <Marker
                name={'Your position'}
                position={this.props.user_coords}
            /> */}

            <Marker
                name={`Current Location`}
                position={center}
            />
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

const mapStateToProps = (state) =>{
    return({
        
        // start_lat: state.stores.store_coords.lat + state.stores.user_coords.lat,
        // start_lng: state.stores.store_coords.lng + state.stores.user_coords.lng
        
    })
}

export default connect(mapStateToProps, {storeCoords})(GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg",
    LoadingContainer: LoadingContainer
})(MapContainer))