import React from 'react'
import {connect} from 'react-redux'
import MapContainer from '../components/MapContainer'
import {Link} from 'react-router-dom'
import {storeCoords} from '../actions'
import axios from 'axios'

class MapPage extends React.Component {
    

    // getAddress = async () => {
    //     let location = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.store_params}&key=AIzaSyD-d4NIENxdIYOCE7gIRwvzTIZGRLobMdg`)
    //     this.props.storeCoords(location.data.results[0].geometry.location)
    // }

    toOrderPage = () => {
        this.props.history.push('/orderpage')
    }

    render(){
        return(
            
            <React.Fragment>
                <div className="row">
                    <div className = "col-2 mapBackButton">
                        <button class="btn btn-success" type="button">
                            <Link class="text-reset" to='/orderpage'>
                                <svg class="svg-icon " width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                                </svg>
                                Back to Order
                            </Link>
                        </button>
                    </div>
                </div>
                
                <MapContainer></MapContainer>
               
            </React.Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return({
//         store_params: [
//             state.stores.selectedStore.attributes.address.split(' ').join('+'),
//             state.stores.selectedStore.attributes.city.split(' ').join('+'),
//             state.stores.selectedStore.attributes.state
//         ].join('+')
//     })
// }

export default MapPage