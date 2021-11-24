import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactStars from 'react-rating-stars-component'
import { deleteReview } from '../actions'

export class AddReview extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    
    submitReview = () => {
        this.props.deleteReview(1)
    }

    ratingChanged = (newRating) => {
        this.setState({
            'rating': newRating
        })
        console.log(this.state)
    };

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <div class = "container">
                <div class = "addReview-header">
                    <h1>
                        Tell us how we did!
                    </h1>
                </div> 

                <div class = "addReview">
                    <div class = "addReview-form">
                        <section class="mb-4">
                            <div class="row">
                                <div class="col-md-12 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                        <div class = "row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-5">
                                                    <span class = "rating-stars">
                                                        <ReactStars
                                                            count={5}
                                                            onChange={this.ratingChanged}
                                                            size={21}
                                                            activeColor= "#ffd700"
                                                        />
                                                        <p>
                                                            Rating
                                                        </p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            
                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="name" name="name" class="form-control"/>
                                                    <label for="name" class="">Full Name</label>
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="city" name="city" class="form-control"/>
                                                    <label for="city" class="">City</label>
                                                </div>
                                            </div>
                                        
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <select onChange = {(e) => this.inputChange(e)} class="form-control" id="state" name="state">
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
                                                    <label for="state" class="">State</label>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-0">
                                                    <input onChange = {(e) => this.inputChange(e)} type="text" id="subject" name="subject" class="form-control"/>
                                                    <label for="subject" class="">Subject</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form">
                                                    <textarea onChange = {(e) => this.inputChange(e)} type="text" id="message" name="text" rows="7" class="form-control md-textarea"></textarea>
                                                    <label for="message">Your review</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class = "col-md-12">
                                                <a class="btn" onClick = {() => this.submitReview()} style = {{marginTop: '25px', padding: '15px', backgroundColor: "rgb(130, 212, 37)"}}><h3>Post Review</h3></a>
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
