import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactStars from 'react-rating-stars-component'

export class AddReview extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }

    ratingChanged = (newRating) => {
        console.log(newRating);
    };

    submitReview = () => {

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
                                                    <input type="text" id="name" name="name" class="form-control"/>
                                                    <label for="name" class="">Full Name</label>
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="city" name="city" class="form-control"/>
                                                    <label for="city" class="">City</label>
                                                </div>
                                            </div>
                                        
                                            <div class="col-md-3">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="state" name="state" class="form-control"/>
                                                    <label for="state" class="">State</label>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                                    <label for="subject" class="">Subject</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form">
                                                    <textarea type="text" id="message" name="message" rows="7" class="form-control md-textarea"></textarea>
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

export default connect(mapStateToProps)(AddReview)
