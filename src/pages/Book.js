import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../actions'

export class AddReview extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    
    bookAppointment = () => {

    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
// name, phone, email, move_size
// start: street, city, state, zip, date, time
// end: start, city, state, zip, date, time
    render() {
        return (
            <div class = "container">
                <div class = "addReview-header">
                    <h1>
                        Book your appointment!
                    </h1>
                </div> 

                <div class = "addReview">
                    <div class = "addReview-form">
                        <section class="mb-4">
                            <div class="row">
                                <div class="col-md-12 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            
                                        <div class="row">
                                            
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="name" name="name" class="form-control"/>
                                                    <label for="name" class="">Full Name</label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="email" name="email" class="form-control"/>
                                                    <label for="email" class="">Full Name</label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="phone" name="phone" class="form-control"/>
                                                    <label for="phone" class="">Phone</label>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <select onChange = {(e) => this.inputChange(e)} type="text" id="move_size" name="move_size" class="form-control">
                                                        <option>Select size</option>
                                                        <option>Studio</option>
                                                        <option>1 bedroom</option>
                                                        <option>2 bedrooms</option>
                                                        <option>3 bedrooms</option>
                                                        <option>4 bedrooms</option>
                                                        <option>5 bedrooms</option>
                                                        <option>6 bedrooms</option>
                                                    </select>
                                                <label for="move_size">Select Move Size</label>
                                                </div>
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

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form">
                                                    <textarea onChange = {(e) => this.inputChange(e)} type="text" id="comment" name="comment" rows="3" class="form-control md-textarea"></textarea>
                                                    <label for="message">Comments</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class = "col-md-12">
                                                <a class="btn" onClick = {() => this.bookAppointment()} style = {{marginTop: '25px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}><h3>Book Appointment</h3></a>
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
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {deleteReview})(AddReview)
