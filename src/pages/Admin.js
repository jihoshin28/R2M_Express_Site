import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyToken, getReviews, getQuotes, deleteQuote, deleteReview, signOut } from '../actions'
// import aboutPic from '../public/logo192.png'
export class Admin extends Component {

    constructor(){
        super()
        this.state = {  
            loginInfo: {},
            loginState: false,
            loading: true,
            auth: false,
            type: 'quote',
            quotes: [],
            reviews: []
        }
    }

    async componentDidMount() {
        let token = localStorage.getItem('admin-token')
        let result = await this.props.verifyToken(token)
        
        if(result.status === "Authorized"){
            let quotes = await this.props.getQuotes()
            let reviews = await this.props.getReviews()
            this.setState({
                quotes,
                reviews
            })
        } else {
            this.props.history.replace('/admin_login')
            this.props.history.go()
        }

        this.setState({
            loading: false
        })
    }

    changeType = (type) => {
        this.setState({
            type
        })
    }

    deleteQuote = async(quote_id) => {
        let result = await this.props.deleteQuote(quote_id)
        if(!!result.status){
            let quotes = this.state.quotes.filter(quote => quote.id !== quote_id)
            this.setState({
                quotes
            })
        }
    }

    deleteReview = async(review_id) => {
        let result = await this.props.deleteReview(review_id)
        if(!!result.status){
            let reviews = this.state.reviews.filter(review => review.id !== review_id)
            this.setState({
                reviews
            })
        }
    }

    signOut = async() => {
        await this.props.signOut()
        this.props.history.replace('/admin_login')
        this.props.history.go()
    }

    renderContent = () => {
        if(this.state.type === 'quote'){
            console.log(this.state.quotes)
            return this.state.quotes.map((quote) => {
                return (
                    <div class = "admin-section">
                        <div class = "admin-info">
                            <h3>Id: {quote.id}</h3>
                            <h3>Name: {quote.name}</h3>
                            <h3>Email: {quote.email}</h3>
                            <h3>Phone: {quote.phone}</h3>
                            <h3>Move Size: {quote.move_size}</h3>
                            <h3>Floor: {quote.floor}</h3>
                            <h3>Vehicle Size: {quote.vehicle_size}</h3>
                            <h3>Start Address: {quote.start_street} {quote.start_city}, {quote.start_state} {quote.start_zip}</h3>
                            <h3>Delivery Address: {quote.delivery_street} {quote.delivery_city}, {quote.delivery_state} {quote.delivery_zip}</h3>
                            <h3>Distance: {quote.distance}</h3>
                        </div>
                        <div class = "admin-buttons">
                            <button style = {{marginBottom: '20px'}} class = "btn btn-danger" onClick ={() => this.deleteQuote(quote.id)}>Delete Quote</button>
                            <button class = "btn btn-warning" onClick ={() => this.goTo()}>See items</button>
                        </div>
                    </div>
                )
            })
        } else if(this.state.type === 'review'){
            console.log(this.state.reviews)
            return this.state.reviews.map((review) => {
                return (
                    <div class = "admin-section">
                        <div class = "admin-info" style = {{width: '50%'}}>
                            <h3>Id: {review.id}</h3>
                            <h3>Name: {review.name}</h3>
                            <h3>City: {review.city}, {review.state}</h3>
                            <h3>Rating: {review.rating}</h3>
                            <h3>Subject: {review.subject}</h3>
                            <h3>Text: {review.text}</h3>
                        </div>
                        <div class = "admin-buttons">
                            <button style = {{marginBottom: '20px'}} class = "btn btn-danger" onClick ={() => this.deleteReview(review.id)}>Delete Review</button>
                        </div>
                    </div>
                )
            })
        }
    }

    renderHeader = () => {
        let type = this.state.type
        if(type === 'quote'){
            return <h1 class = "admin-header">Current Quotes</h1>
        } else if(type === 'review'){
            return <h1 class = "admin-header">Current Reviews</h1>
        }
    }

    renderAdminPanel = (type) => {
        if(this.state.loading === true){
            return (
                <div class = "loaderDiv">
                    <div class = "loader"></div>
                </div>  
            )
        } else {
            {
                return (
                    <div class = "admin">
                        <div class = "admin-options">
                            <div>
                                <button onClick = {() => this.changeType('quote')} style = {{padding: '15px'}} class = "btn btn-light">
                                    Quotes
                                </button>
                                <button onClick = {() => this.changeType('review')} style = {{padding: '15px'}} class = "btn btn-light">
                                    Reviews
                                </button>
                            </div>
                            <div>
                                <button onClick = {() => this.signOut()} style = {{padding: '15px'}} class = "btn btn-primary">
                                    Sign Out
                                </button>
                            </div>
                        </div>
                        <div>
                            {
                                this.renderHeader()
                            }
                        </div>
                        <div>
                            {
                                this.renderContent(type)
                            }
                        </div>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <div>
                {this.renderAdminPanel(this.state.type)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {verifyToken, getQuotes, getReviews, deleteQuote, deleteReview, signOut})(Admin)
