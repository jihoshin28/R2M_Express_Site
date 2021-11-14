import React, { Component } from 'react'
import { connect } from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class About extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    render() {
        return (
            <div class = "App-margin container">
                <h1>About</h1>
                <div className = "about-banner-div">
                    {/* <img width = '400px' src= {aboutPic} alt='Profile pic here!'></img> */}

                        <div class = "row aboutBox">
                            <div class = "col-4">
                                <h3>Get your grocery shopping done with BreadBasket!</h3>
                                <p>
                                    Browse from popular locations to shop for all your essential groceries and household items delievered straight to your door.
                                </p>
                            </div>
                            <div class = "col-8">
                                    <img src= "https://itk-assets.nyc3.digitaloceanspaces.com/2020/03/grocery-delivery-services-1024x690.jpg" style = {{width: "100%"}}></img>                            
                            </div>
                        </div>


                        <div class = "row aboutRow"> 
                            <div class="col-4" >
                                <div class = "aboutPicBox">
                                <img class="aboutPic" src="https://voxytalksy.com/wp-content/uploads/2018/08/google-voxytalksy.png"/>
                                </div>
                                <h4>Google Authentication </h4>
                                <p>Easily create an account with personal information by signing in with your personal Google account.</p>
                            </div> 
                            <div class="col-4">
                                <div class="aboutPicBox">
                                        <img class="aboutPic" src="https://localyse.eu/wp-content/uploads/2020/06/google_maps_featured_image-1024x597.jpg" />
                                    </div>
                                    <h4>Look for nearby stores</h4>
                                    <p>Google Maps is available on BreadBasket to search for nearby available store locations. </p>
                                </div> 
                            <div class="col-4">
                            <div class="aboutPicBox">
                                <img class="aboutPic" src="https://ecommercebooth.com/wp-content/uploads/2020/08/paypal-vs-strirpe-for-ecommere-business-.png" />
                                </div>
                                <h4>Easy Payment</h4>
                                <p>Pay for your order with either Stripe or Paypal for a convenient checkout experience</p>
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
