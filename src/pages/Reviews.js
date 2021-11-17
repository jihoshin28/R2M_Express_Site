import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'

export class About extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    render() {
        return (
            <div>
                <div class="header">
                    <div class = "header-margin">
                        <h1 class= "header-banner">Reviews</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>

                <div class = "reviews">
                    <h1 style = {{marginBottom: '5%'}}>Check out what our customers are saying about us!</h1>
                    <Review name = {"Allen Shin"} city = {'Union City'} state = {'CA'} date = {"11/17/2021"} subject = {"Was great working with Luis."} text = {"The move was really fast and working with Luis, the operator of Upack Haulers was a painless process. Highly recommend!"} rating = {3} />
                    <Review name = {"Wycliffe"} city = {'Fremont'} state = {'CA'} date = {"11/18/2021"} subject = {"Highly recommend Upack Haulers!"} text = {"Upack Haulers is quick and easy. Moving was a snap with them. Great Service!"} rating = {4} />
                </div>
                <div>
                    <h2>Let us know what you think!</h2>
                    <button style = {{backgroundColor: 'rgb(130, 212, 37)', padding: '15px', marginTop: '25px'}} className = "btn">Submit a Review</button> 
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
