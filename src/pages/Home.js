import React, { Component } from 'react'
import {connect} from 'react-redux'
import HomeSection from '../components/HomeSection'

export class Home extends Component {
    componentDidMount(){
        console.log(this.props.signedIn)
        console.log("test")
    }
    
    render() {
        return (
            <div>
                {/* <h1 class = "home_header">Upack Haulers gets the Job Done</h1> */}

                {/* */}
                <div class="home-header">
                    <div class = "header-margin">
                        <h1 style= {{fontFamily: 'Roboto, sans-serif'}} class= "header-banner">Welcome to Upack Haulers</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>
                    <div class = "home-title">
                        <div>
                        <h3>Your reliable East Bay moving service</h3>
                        </div>
                        <div>
                            <h1>
                                Let us do the heavy lifting
                            </h1>
                        </div>
                    </div>
                    <HomeSection>
                        
                        <div className = "col-4">
                            <h4> Header 1</h4>
                            <p> Text 1</p> 
                        </div> 
                        <div className = "col-8">
                            <img className = "home-section-pic" src= "https://img1.mashed.com/img/gallery/grocery-delivery-services-ranked-from-worst-to-first/intro-1585162312.jpg"/> 
                        </div>  
                    </HomeSection>
            
                    <HomeSection>
                        <div className = "home-services-section">
                            <h1 style = {{fontSize: "3em"}}>Our Services</h1>
                            <div className = "home-services">
                                <div className = "col-md-3 home-services-col">
                                    <a role= "button">
                                        <span style={{fontSize: "5em", color: "rgb(50, 50, 50)"}}>
                                            <i class="fas fa-truck-moving"></i>
                                        </span>
                                    </a>
                                    <a role= "button">
                                        <h3>
                                            Full Service Parking
                                        </h3>
                                    </a>
                                    <h5>Quick, organized packing</h5>
                                </div> 
                                <div className = "col-md-3 home-services-col">
                                    <a role= "button">
                                        <span style={{fontSize: "5em", color: "rgb(50, 50, 50)"}}>
                                            <i class="fas fa-map-signs"></i>
                                        </span>
                                    </a>
                                    <a role= "button">
                                        <h3>
                                            Long Distance Moving
                                        </h3>
                                    </a>
                                    <h5>Interstate and out of state moves.</h5>
                                </div>
                                <div className = "col-md-3 home-services-col">
                                    <a role= "button">
                                        <span style={{fontSize: "5em", color: "rgb(50, 50, 50)"}}>
                                            <i class="fas fa-people-carry"></i>
                                        </span>
                                    </a>
                                    <a role= "button">
                                        <h3>
                                            Convenient Relocation
                                        </h3>
                                    </a>
                                    <h5>No hassle, productive relocation.</h5>
                                </div>
                                <div className = "col-md-3 home-services-col">
                                    <a role= "button">
                                        <span style={{fontSize: "5em", color: "rgb(50, 50, 50)"}}>
                                            <i class="fas fa-truck-loading"></i>
                                        </span>
                                    </a>
                                    <a role= "button">
                                        <h3>
                                            Storage Options
                                        </h3>
                                    </a>
                                    <h5>We keep your belongings safe.</h5>
                                </div>
                            </div>
                        </div>
                    </HomeSection>
                    <HomeSection>
                        <div className = "col-8"> 
                            <img className="home-section-pic" src= "https://images.squarespace-cdn.com/content/v1/5bbd07174d546e20297c2ac0/1585075655832-JX0T0UXFFHOM1RWZUCZ8/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/photo-1542838132-92c53300491e.jpg?format=1500w"/>
                        </div>
                        <div className = "col-4">
                            <h4> Header 2</h4>
                            <p> Text 2</p> 
                        </div> 
                    </HomeSection>
                    <HomeSection>
                        <div class = "col-5">
                            <h1>Need expert moving services?</h1>
                            <h3>Get a free, detailed quote from us today.</h3> 
                        </div>
                        <div class = "quote-form col-5">
                            <form>
                                <div class="form-group">
                                    <label for="quote-form-name"><h3>Full Name</h3></label>
                                    <input type="text" class="form-control" id="quote-form-name" placeholder="Your Full Name"/>
                                </div>
                                <div class="form-group">
                                    <label for="quote-form-number"><h3>Email Address</h3></label>
                                    <input type="text" class="form-control" id="quote-form-number" placeholder="Your Email Address"/>
                                </div>
                                <div class="form-group">
                                    <label for="quote-form-phoneNumber"><h3>Phone Number</h3></label>
                                    <input type="phone" class="form-control" id="quote-form-phoneNumber" placeholder="Your Phone Number"/>
                                </div>
                                <div class="form-group">
                                    <label for="quote-form-moveOption"><h3>Select Move Option</h3></label>
                                    <select class="form-control" id="quote-form-moveOption">
                                        <option>Select move size</option>
                                        <option>Studio</option>
                                        <option>1 bedroom</option>
                                        <option>2 bedrooms</option>
                                        <option>3 bedrooms</option>
                                        <option>4 bedrooms</option>
                                        <option>5 bedrooms</option>
                                        <option>6 bedrooms</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="quote-form-comments"><h3>Comments</h3></label>
                                    <textarea class="form-control" id="quote-form-comments" rows="5"></textarea>
                                </div>
                            </form>
                            <button style = {{backgroundColor: 'rgb(130, 212, 37)', padding: '15px', marginTop: '25px'}} className = "btn"><h3>Get a quote</h3></button> 
                        </div>
                    </HomeSection>
                </div>
            )
    }
}

let mapStateToProps= state => {
    return ({
        signedIn: state.auth.signedIn
    })
}

export default connect(mapStateToProps)(Home)
