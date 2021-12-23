import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageCarousel from '../containers/ImageCarousel'
// import aboutPic from '../public/logo192.png'
export class Junk extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    render() {
        return (
            <div>
                <div class="header">
                    <div class = "header-margin">
                        <h1 class= "header-banner">Junk Removal</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>
                <div class = "about-bg">
                    <div class = "about">
                        <div class = "about-text">
                            <h1>
                                Get rid of anything
                            </h1> 
                            <p>
                            Do you have unwanted furniture, appliances, electronics, or other junk piling up in your home or business? Clear the clutter with R2M Express - your trusted junk removal expert offering environmentally sustainable and reliable junk removal services.
The team arrives at your home, efficiently collects your unwanted items, and even works hard to donate your unwanted goods. Any items that cannot be donated are recycled or responsibly disposed of. Book a free on-site junk removal estimate 
                            </p>
                        </div>

                        <div class = "carousel-section">
                            <ImageCarousel pics = {[23,24,25,26]} page = "junk"/>
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

export default connect(mapStateToProps)(Junk)
