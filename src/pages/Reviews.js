import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'
import { getReviews } from '../actions'

export class Reviews extends Component {

    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    async componentDidMount() {
        let reviews = await this.props.getReviews()
        this.setState({
            reviews
        })
        const unlisten = this.props.history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }

    goToAddReview = () => {
        this.props.history.push('/add_review')
        this.props.history.go()
    }

    renderReviews = () => {
        return this.state.reviews.map(review => {
            let date = review.createdAt.split('T')[0]
            return <Review name = {review.name} city = {review.city} state = {review.state} date = {date} subject = {review.subject} text = {review.text} rating = {review.rating} />
        })
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
                {
                    this.state.reviews.length === 0 
                    ? 
                    <div style = {{display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', height: '700px'}}>
                        <div class = "loader">
                        </div>
                        <div>
                            <h1 style = {{paddingTop: '30px'}}>
                                Loading...
                            </h1>
                        </div>
                    </div>
                    :
                    <div>
                        <div class = "reviews">
                            <h1 style = {{marginBottom: '5%'}}>Check out what our customers are saying about us!</h1>
                        {this.renderReviews()}
                        </div>
                        <div>
                            <h2>Let us know what you think!</h2>
                            <button onClick = {() => this.goToAddReview()} style = {{backgroundColor: 'rgb(130, 212, 37)', padding: '15px', marginTop: '25px'}} className = "btn"><h3>Submit a Review</h3></button> 
                        </div>
                    </div>

                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {getReviews})(Reviews)
