import {userLocation, editQuote, updateStartLocation} from '../actions'
import React from 'react'
import {connect} from 'react-redux'


class ConfirmQuote extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            form: {}, 
            loading: false
        }
    }
    
    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    
    inputChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState((currentState) => ({
            
            form: {
                ...currentState.form,
                [name]: value
            }
        }))
        console.log(this.state.form)
    }

    goToMap = async() => {
        this.setState({loading: true})
        await navigator.geolocation.getCurrentPosition(async (data)=> {
            let lng, lat
            let id = this.props.match.params.id
            if(!!data.coords.longitude && !!data.coords.latitude){
                lng = data.coords.longitude
                lat = data.coords.latitude
                this.props.history.replace(`/map/${id}/15/${lat}/${lng}`)
                this.props.history.go()
            } else {
                lng = -95.7129
                lat = 37.0902
                this.props.history.replace(`/map/${id}/5/${lat}/${lng}/${id}`)
                this.props.history.go()
            }
        })
    }
    

    confirmLocation = async() => {
        let quoteId = this.props.match.params.id
        let result = await this.props.editQuote(quoteId, this.state.form)
        console.log(result)
    }

    render(){
        return (
            <div>
                {
                this.state.loading === true?
                <div class = "container loaderDiv" >
                    <div class = "loader">
                        
                    </div>
                    <h1>
                        Loading...
                    </h1>
                </div>
                :
            
            <div class = "container">
                <div class = "addReview-header">
                    <h1>
                        Confirm Quote
                    </h1>
                </div> 
    
                <div class = "addReview">
                    <div class = "addReview-form">
                        <section class="mb-4">
                            <div class="row">
                                <div class="col-md-12 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            
                                        <div class = "row" style = {{ marginBottom: '30px'}}>
                                            <div class = "col-md-3">
                                                <h2>Start Location</h2>
                                            </div>
                                        </div>
                                   
                                        <div class = "row">
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="delivery_street" name="delivery_street" class="form-control"/>
                                                    <label for="delivery_street" class="">Street </label>
                                                </div>
                                            </div>
    
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="delivery_city" name="delivery_city" class="form-control"/>
                                                    <label for="delivery_city" class="">City</label>
                                                </div>
                                            </div>
    
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <select onChange = {(e) => this.inputChange(e)} class="form-control" id="delivery_state" name="delivery_state">
                                                        <option value= " ">Select State</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VI">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </select>
                                                    <label for="delivery_state" class="">State</label>
                                                </div>
                                            </div>
                                            
    
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="delivery_zip" name="delivery_zip" class="form-control"/>
                                                    <label for="delivery_zip" class="">City</label>
                                                </div>
                                            </div>
                                        </div>
    
                                    
                                        <div class = "row" style = {{marginTop: '30px', marginBottom: '30px'}}>
                                            <div class = "col-md-3">
                                                <h2>Delivery Location</h2>
                                            </div>
                                        </div>
                                      
                                        <div class = "row">
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="start_street" name="start_street" class="form-control"/>
                                                    <label for="start_street" class="">Street </label>
                                                </div>
                                            </div>
    
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="start_city" name="start_city" class="form-control"/>
                                                    <label for="start_city" class="">City</label>
                                                </div>
                                            </div>
    
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <select onChange = {(e) => this.inputChange(e)} class="form-control" id="start_state" name="start_state">
                                                        <option value= " ">Select State</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VI">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </select>
                                                    <label for="start_state" class="">State</label>
                                                </div>
                                            </div>
                                            
    
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="start_zip" name="start_zip" class="form-control"/>
                                                    <label for="start_zip" class="">City</label>
                                                </div>
                                            </div>
                                        </div>
                        
    
                                        <br></br>
                        
                                        <div class="row">
                                            <div class = "col-md-12">
                                                <a class="btn" onClick = {() => this.confirmLocation()} style = {{marginTop: '25px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}><h3>Confirm Location</h3></a>
                                            </div>
                                            <div class="status"></div>
                                        </div>
    
                                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '50px', marginBottom: '30px'}}>
                                            <div class = "border" style = {{width: '45%'}}>
                                                
                                            </div>
                                            <div>
                                                <h3>or</h3>
                                            </div>
                                            <div class = "border" style = {{width: '45%'}}>
                                                
                                            </div>
                                        </div>
                                        <div class = "row">
                                            <div class = "col-md-12">
                                                <h3>Use Map to Enter Location</h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class = "col-md-12">
                                                <a class="btn" onClick = {() => this.goToMap()} style = {{marginTop: '25px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}><h3>Go to Map</h3></a>
                                            </div>
                                            <div class="status"></div>
                                        </div>
                                    </form>
                                </div>                            
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            }
            </div>
        )

    }

    
}

const LoadingContainer = (props) => (
    <div>Loading...</div>
)

const mapStateToProps = (state) =>{
    return({
        
        // start_lat: state.stores.store_coords.lat + state.stores.user_coords.lat,
        // start_lng: state.stores.store_coords.lng + state.stores.user_coords.lng
        
    })
}

export default connect(mapStateToProps, {userLocation, editQuote, updateStartLocation})(ConfirmQuote)