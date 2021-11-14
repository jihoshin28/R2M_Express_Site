import axios from 'axios';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {storeCoords} from '../actions'
import React from 'react'
import {connect} from 'react-redux'


class MapContainer extends React.Component {
    componentDidMount(){
        console.log(this.props.store_coords, "COORDINATES")
        // Map.setCenter(this.props.store_coords)
    }

    mapStyles = {
        width: '100%',
        position: 'absolute', 
        height: '75%'
    };

    onHover = () => {

    }

    // address
    // 5600%Pacific%Grove%Way%Union
    render(){
        return (
            <div class = "mapDiv">
            <Map
                google={this.props.google}
                zoom={13}
                style={this.mapStyles}
                initialCenter={
                    this.props.store_coords
                }
                > 
                <Marker
                    name={'Your position'}
                    position={this.props.user_coords}
                />

                <Marker
                    name={`${this.props.store_name}`}
                    position={this.props.store_coords}
                />
            </Map>
            </div>
        );
    }
}

const LoadingContainer = (props) => (
    <div>Loading</div>
)

const mapStateToProps = (state) =>{
    return({
        store_coords: state.stores.store_coords,
        user_coords: state.stores.user_coords,
        store_name: state.stores.selectedStore.attributes.name
        // start_lat: state.stores.store_coords.lat + state.stores.user_coords.lat,
        // start_lng: state.stores.store_coords.lng + state.stores.user_coords.lng
        
    })
}

export default connect(mapStateToProps, {storeCoords})(GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg",
    LoadingContainer: LoadingContainer
})(MapContainer))