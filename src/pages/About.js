import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageCarousel from '../containers/ImageCarousel'
// import aboutPic from '../public/logo192.png'
export class About extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    render() {
        return (
            <div>
                <div class="header">
                    <div class = "header-margin">
                        <h1 class= "header-banner">About Us</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>
                <div class = "about-bg">
                    <div class = "about">
                        <div class = "about-text">
                            <h1>
                                Everything Packed with care.
                            </h1> 
                            <p>
                                When your Upack Haulers Relocation Specialist is planning a move for you, 
                                we take everything into account. We have been relocating individuals and 
                                families for over a decade. We understand the stress a move can put on you, 
                                your significant other/roommate, your kids, and even the family pet. U-pack 
                                haulers is a moving company out of Fremont in the Bay Area that serves Fremont 
                                and every city around Fremont that offers each and every customer individualized 
                                attention and offer our expertise and advice to make sure your move goes smoothly.
                            </p>
                        </div>

                        <div class = "carousel-section">
                            <ImageCarousel pics = {[5,6,7,8]} page = "about"/>
                            {/* <img style = {{width: '100%'}} src = {"https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/07/moving-labor.jpg"}></img> */}
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

export default connect(mapStateToProps)(About)
