import React, { Component } from 'react'
import {connect} from 'react-redux'
import HomeSection from '../components/HomeSection'
import HomeQuote from '../components/HomeQuote'
import { createQuote } from '../actions'


export class Home extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        console.log(this.props.signedIn)
        console.log("test")
    }

    goToGetQuote = async() => {
        let result = await this.props.createQuote(this.state)
        if(!!result.id){
            this.props.history.push({pathname: `/items/quote/${result.id}`})
            this.props.history.go()
        } else {
            console.log(result)
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <div class="home-header">
                    <div class = "header-margin">
                        <div class = "home-icon-div">
                            <img class="home-icon" src={process.env.PUBLIC_URL + '/upack_logo.png'}></img>
                        </div>
                        <div class = "home-header-div">
                            <div>
                                <h1 style= {{fontFamily: 'Roboto, sans-serif'}} class= "header-banner">Welcome to Upack Haulers</h1>
                            </div>
                            <div>
                                <h3>Your reliable East Bay moving service</h3> 
                            </div>
                        </div>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>
                <div class = "home-about-section">
                    <div class = "home-title">
                        <div>
                            <h3>
                                We provide professional, reliable moving & packing services
                            </h3>
                        </div>
                        <div>
                            <h1>
                                Let us do the heavy lifting
                            </h1>
                        </div>
                    </div>
                    <HomeSection>
                        <div class = "home-about">
                            <div className = "col-8">
                                <img className = "home-section-pic" src= "https://www.roadtovr.com/wp-content/uploads/2015/03/youtube-logo2.jpg"/> 
                            </div>  
                            <div class = "home-about-text">
                                <div>
                                    <h2>Got stuff you need moved?</h2>
                                </div>
                                <div > 
                                    <p>
                                        Are you looking for a professional moving service in the Bay Area? Whether you’re moving you’re home or office, 
                                        you can trust that Upack Haulers will get the job done quickly and at your convenience. 
                                        We are a professional moving company based in Fremont, California. 
                                        We offer a full range of moving and packing services, making sure that customer service is our top priority. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </HomeSection>
                </div>
            
                        <div className = "home-services-section">
                            <HomeSection>
                                    <h1 style = {{fontSize: "3.5em", color: "white"}}>Our Services</h1>
                                    <div className = "home-services">
                                        <div className = "col-md-3 home-services-col">
                                            <a role= "button">
                                                <span style={{fontSize: "5em", color: "white"}}>
                                                    <i class="fas fa-people-carry"></i>
                                                </span>
                                            </a>
                                            <a role= "button">
                                                <h3>
                                                    Labor Only
                                                </h3>
                                            </a>
                                            <h5>Reliable and dependable labor services</h5>
                                        </div> 
                                        
                                        <div className = "col-md-3 home-services-col">
                                            <a role= "button">
                                                <span style={{fontSize: "5em", color: "white"}}>
                                                    <i class="fas fa-truck-moving"></i>
                                                </span>
                                            </a>
                                            <a role= "button">
                                                <h3>
                                                    Local Moves
                                                </h3>
                                            </a>
                                            <h5>Quick and easy local moves</h5>
                                        </div>
                                        <div className = "col-md-3 home-services-col">
                                            <a role= "button">
                                                <span style={{fontSize: "5em", color: "white"}}>
                                                    <i class="fas fa-map-signs"></i>
                                                </span>
                                            </a>
                                            <a role= "button">
                                                <h3>
                                                    Long Distance 
                                                </h3>
                                            </a>
                                            <h5>Interstate and out of state moves</h5>
                                        </div>
                                        <div className = "col-md-3 home-services-col">
                                            <a role= "button">
                                                <span style={{fontSize: "5em", color: "white"}}>
                                                    <i class="fas fa-truck-loading"></i>
                                                </span>
                                            </a>
                                            <a role= "button">
                                                <h3>
                                                    Junk Removal
                                                </h3>
                                            </a>
                                            <h5>Get rid of anything you don't need</h5>
                                        </div>
                                    </div>
                            </HomeSection>
                        </div>
                        <div class = "home-quotes-section">
                            <HomeSection>
                                <div class = "home-quotes">
                                    <HomeQuote 
                                        text = "I’ve used these guys for three moves in the Bay Area. Great experience each time."
                                        author = "R. M."
                                        city = "San Francisco, CA"
                                    />
                                    <HomeQuote
                                        text = "I have worked with Pedro’s twice now and will not hesitate to again. Ask for Jimmy and Enrique they rock."
                                        author = "Gina M."
                                        city = "Charlotte, NC"
                                    />
                                    <HomeQuote
                                        text = "Pedro’s is the best! My fiance and I have used Pedro’s four times over the years – they are professional, organized, and generally very good. We will continue to use them."
                                        author = "Sean B."
                                        city = "San Francisco, CA"
                                    />
                                </div>
                            </HomeSection>
                        </div>
                    <HomeSection>
                        <div class = "home-quote-section">
                            <div class = "col-5">
                                <h1>Need expert moving services?</h1>
                                <h3>Get a free, detailed quote from us today.</h3> 
                            </div>
                            <div class = "quote-form col-5">
                                <form>
                                    <div class="form-group">
                                        <label class = "quote-form-label" for="quote-form-name"><h3>Full Name</h3></label>
                                        <input onChange = {(e) => this.inputChange(e)} name = "name" type="text" class="form-control" id="quote-form-name" placeholder="Your Full Name"/>
                                    </div>
                                    <div class="form-group">
                                        <label class = "quote-form-label" for="quote-form-number"><h3>Email Address</h3></label>
                                        <input onChange = {(e) => this.inputChange(e)} type="text" class="form-control" name = "email" id="quote-form-number" placeholder="Your Email Address"/>
                                    </div>
                                    <div class="form-group">
                                        <label class = "quote-form-label" for="quote-form-phoneNumber"><h3>Phone Number</h3></label>
                                        <input onChange = {(e) => this.inputChange(e)} type="phone" class="form-control" name = "phone" id="quote-form-phoneNumber" placeholder="Your Phone Number"/>
                                    </div>
                                    <div class="form-group">
                                        <label class = "quote-form-label" for="quote-form-moveOption"><h3>Select Move Size</h3></label>
                                        <select onChange = {(e) => this.inputChange(e)} name = "move_size" class="form-control" id="quote-form-moveOption">
                                            <option>Select size</option>
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
                                        <label class = "quote-form-label" for="quote-form-comments"><h3>Comments</h3></label>
                                        <textarea onChange = {(e) => this.inputChange(e)} name = "comments" class="form-control" id="quote-form-comments" rows="5"></textarea>
                                    </div>
                                </form>
                                <button onClick = {() => this.goToGetQuote()} style = {{backgroundColor: 'rgb(130, 212, 37)', padding: '15px', marginTop: '25px'}} className = "btn"><h3>Get a quote</h3></button> 
                            </div>
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

export default connect(mapStateToProps, {createQuote})(Home)
