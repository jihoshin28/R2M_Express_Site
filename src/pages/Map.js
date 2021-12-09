import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {userLocation, editQuote} from '../actions'
import axios from 'axios'
import React, {useEffect, useState, useRef, useCallback} from 'react'
import {connect} from 'react-redux'



const MapContainer = (props) => {
    
    const refMap = useRef(null);
    const geocoder = new props.google.maps.Geocoder()
    const [pin, setPin] = useState({})
    const [zoom, setZoom] = useState(parseInt(props.match.params.zoom))
    const [address, setAddress] = useState("Loading...")
    const [addressForm, setAddressForm] = useState({})
    const [start, setStart] = useState(true)
    
    useEffect(() => {
        console.log({
            lat: props.match.params.lat, 
            lng: props.match.params.lng, 
            zoom:props.match.params.zoom
        })
        reverseGeocode({lat: parseFloat(props.match.params.lat), lng: parseFloat(props.match.params.lng)})
    },[])

    useEffect(() => {
        reverseGeocode(pin)
    }, [pin])

    const mapStyles = {
        width: '1425px',
        position: 'absolute', 
        height: '990px'
    };

    const handleChange = (e) =>{
        setAddress(e.target.value)
    }

    const searchAddress = () => {
        geocoder.geocode({address}).then((data) => {
            setPin({lat: data.results[0].geometry.location.lat(), lng: data.results[0].geometry.location.lng()})
            setZoom(15)
        })
    }

    const confirmAddress = () => {

        let address_array = address.split(',')
        let street = address_array[0]
        let city = address_array[1][0] === ' ' ? address_array[1].substring(1) : address_array[1]
        let address_array_2 = address_array[2].split(' ')
        let state = address_array_2[1]
        let zip = address_array_2[2]
        
        let address_form
        if(start === true){
            address_form = {
                start_street: `${street}`,
                start_city: `${city}`,
                start_state: `${state}`,
                start_zip: `${zip}`
            }
            setAddressForm(address_form)
            setStart(false)
        } else {
            address_form = {
                delivery_street: `${street}`,
                delivery_city: `${city}`,
                delivery_state: `${state}`,
                delivery_zip: `${zip}`
            }
            let newAddressForm = Object.assign(addressForm, address_form)
            setAddressForm(newAddressForm)
            confirmLocation()
        }
        if(start === true){
            setStart(false)
        } else if(start === false){
            confirmLocation()
        }
    }

    const confirmLocation = async() => {
        let quoteId = props.match.params.id
        let result = await props.editQuote(quoteId, addressForm)
        if(!!result.status){
            props.history.push(`/confirm_quote/${quoteId}`)
            props.history.go()
        }
    }

    const reverseGeocode = (pin) => {
        if(!!geocoder){
            geocoder.geocode({location: pin}).then((data) => {
                let formatted_address = data.results[0].formatted_address
                setAddress(formatted_address)
            })
        }
    }

    const dragMap = () => {
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
    console.log({pin})
    console.log({address})
    return (
        <div class = "map-div">
        <Map
            ref = {refMap}
            google={props.google}
            style={mapStyles}
            initialCenter={{lat: parseFloat(props.match.params.lat), lng: parseFloat(props.match.params.lng)}}
            zoom={zoom}
            onDragend = {dragMap}
            onZoomChanged = {zoomChanged}
            center = {pin}
        > 
        
            {/* <Marker
                name={'Your position'}
                position={this.props.user_coords}
            /> */}

        </Map>
            <div style={{fontSize: "5em"}} class = "map-icon">
                <i size = "5x" class="fas fa-map-pin"></i>
            </div>
            <div class = "map-confirm-div">
                <div class = "map-address">
                    <input onChange={handleChange} class = "map-input" type = "text" value = {address}/>
                </div>
                <div style={{fontSize: "5em"}} class = "map-search-button">    
                    <button onClick = {() => searchAddress()} class = "btn btn-success">
                        Search Address
                    </button>
                </div>
                <div style={{fontSize: "5em"}} class = "map-confirm-button">
                    {
                        start === true ?
                        <button onClick = {() => confirmAddress()} class = "btn btn-primary">
                            Select Start Address
                            <img class = 'map-confirm-button-img' src = {process.env.PUBLIC_URL + '/right-arrow.png'}></img>  
                        </button>
                        :
                        <button onClick = {() => confirmAddress()} class = "btn btn-primary">
                            Select Delivery Address
                            <img class = 'map-confirm-button-img' src = {process.env.PUBLIC_URL + '/right-arrow.png'}></img>  
                        </button>
                    }
                </div>
            </div>
        </div>
    );
    
}

const LoadingContainer = (props) => (
    <div>Loading...</div>
)

export default connect(null, {userLocation, editQuote})(GoogleApiWrapper({
    apiKey: "AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg",
    LoadingContainer: LoadingContainer
})(MapContainer))