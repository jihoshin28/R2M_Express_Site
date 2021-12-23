import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageCarousel from '../containers/ImageCarousel'
// import aboutPic from '../public/logo192.png'
export class Local extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    render() {
        return (
            <div>
                <div class="header">
                    <div class = "header-margin">
                        <h1 class= "header-banner">Local Moves</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>
                <div class = "info-bg">
                    <div class = "info">
                        <div class = "info-text">
                            <div class = "info-text-left">
                                <h1>
                                    Quick and reliable local moving 
                                </h1>
                                <p>
                                If you are moving your entire home, apartment, business or just a few items, you can put your trust in Ready2Move. Our company offers full-service, efficient, stress-free and cost-effective relocation.
                                Choosing our company you will have an entire team supporting you throughout your moving experience.
                                Local moving is charged based on an hourly rate. The hourly rate depend on the number of crew needed to service your move.
                                </p>
                            </div>
                            <div class = "info-text-right">
                                <h2>
                                    Local moving services include:
                                </h2>
                                <ul >
                                    <li>Disassembling your furniture and reassembling it when it arrives at your new destination</li>
                                    <li>Packing your belongings, using quilted moving blankets, shrink wrap and wardrobe boxes.</li>
                                    <li>Upholstered furniture is fully wrapped in plastic material.</li> 
                                    <li>Any furniture with doors and/or drawers is carefully wrapped to prevent any incidents</li>
                                    <li>Loading your belongings into a truck</li>
                                    <li>Transporting your items to the destination</li>
                                    <li>Delivering, unloading and unwrapping. Each item is carefully placed in the room you designate.</li>
                                </ul>
                            </div> 
                        </div>

                    </div>
                    <div class = "info-pic">
                        <div class = "carousel-info-section">
                            <ImageCarousel pics = {[13,14,15,16,17]} page = "local"/>
                        </div>
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

export default connect(mapStateToProps)(Local)
