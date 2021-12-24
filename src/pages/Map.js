import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {userLocation, editQuote} from '../actions'
import React, {useEffect, useState, useRef, useCallback} from 'react'
import {connect} from 'react-redux'

const MapContainer = (props) => {
    
    const refMap = useRef(null);
    const geocoder = new props.google.maps.Geocoder()
    const distance = new props.google.maps.DistanceMatrixService();
    const [pin, setPin] = useState({})
    const [zoom, setZoom] = useState(parseInt(props.match.params.zoom))
    const [address, setAddress] = useState("Loading...")
    const [firstAddress, setFirstAddress] = useState("")
    const [addressForm, setAddressForm] = useState({})
    const [error, setError] = useState(false)
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
            setFirstAddress(address)
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
    }

    const confirmLocation = async() => {
        distance.getDistanceMatrix(
            {
                origins: [firstAddress],
                destinations: [address],
                travelMode: 'DRIVING',
                unitSystem: props.google.maps.UnitSystem.IMPERIAL,
            }, 
            async (response, status) => {
                let quoteId = props.match.params.id
                let form = Object.assign(addressForm, {distance: response.rows[0].elements[0].distance.text})
                console.log(response, status)
                console.log(form)
                let result = await props.editQuote(quoteId, addressForm)
                if(status === 'OK' && !!result.status){
                    props.history.push(`/confirm_quote/${quoteId}`)
                    props.history.go()
                } else {
                    setError(true)
                }
            }
        );
    }

    const reverseGeocode = (pin) => {
        if(!!geocoder){
            geocoder.geocode({location: pin}).then((data) => {
                let formatted_address = data.results[0].formatted_address
                setAddress(formatted_address)
            })
        }
    }

    let timer
    const dragMap = () => {
        window.clearTimeout(timer)
        setAddress("Loading...")
        let timerId = () => setTimeout(() => {
            let lat = refMap.current.map.center.lat()
            let lng = refMap.current.map.center.lng()
            setPin({lat,lng})

        }, 1000)
        timer = timerId()
    }

    let timer2
    const zoomChanged = () => {
        window.clearTimeout(timer2)
        setAddress("Loading...")
        let timerId = () => setTimeout(()=> {
            console.log(refMap.current)
            let lat = refMap.current.map.center.lat()
            let lng = refMap.current.map.center.lng()
            setPin({lat,lng})

        }, 1000)
        timer2 = timerId()
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
        
            {/* 
                For checking accuracy of pin
                <Marker
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
                        <button onClick = {() => confirmAddress()} class = "btn btn-warning">
                            Select Delivery Address
                            <img class = 'map-confirm-button-img' src = {process.env.PUBLIC_URL + '/right-arrow.png'}></img>  
                        </button>
                    }
                </div>
                {
                    !!error ?
                    <div class = "map-error-div">
                        <div style = {{marginRight: '5px'}}>
                            <img class = 'error-img' src = {process.env.PUBLIC_URL + '/exclamation-mark.png'}></img>  
                        </div>
                        <div>
                            <h3> Please fill in all necessary fields</h3>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
    
}

const LoadingContainer = (props) => (
    <div>Loading...</div>
)

export default connect(null, {userLocation, editQuote})(GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    LoadingContainer: LoadingContainer
})(MapContainer))