import React, { Component } from 'react'
import { connect } from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class Long extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    render() {
        return (
            <div>
                <div class="header">
                    <div class = "header-margin">
                        <h1 class= "header-banner">Long Distance</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>
                <div class = "info-bg">
                    <div class = "info">
                        <div class = "info-text">
                            <div class = "info-text-right">
                                <h2>
                                    Long distance services include:
                                </h2>
                                <ul >
                                    <li>Disassembly/reassembly of furniture</li>
                                    <li>Packing your belongings, using quilted moving blankets, shrink wrap and wardrobe boxes.</li>
                                    <li>Upholstered furniture is fully wrapped in plastic material.</li> 
                                    <li>Any furniture with doors and/or drawers is carefully wrapped to prevent any incidents</li>
                                    <li>Loading your belongings into a truck</li>
                                    <li>Delivering/Transporting your items to the destination</li>
                                    <li>Unloading and unwrapping. Each item is placed in the location and room of your choice.</li>
                                </ul>
                            </div> 
                            <div class = "info-text-left">
                                <h1>
                                    Long Distance Moving
                                </h1>
                                <p>
                                We provide a professional long distance moving service, from initial contact through the end of your residential or commercial move in the state of California and across the country.
Every long distance move we make begins with a free-of-charge, accurate estimate. Our moving consultant will identify any special moving requirements and make recommendations to help make your move as simple, stress-free, and cost-effective as possible.
Charges for long distance moves are based on the size of truck required, size of the move and the distance from origin to destination.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div class = "info-pic">
                        <img style = {{width: '100%'}} src = {"https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/07/moving-labor.jpg"}></img>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Long)
