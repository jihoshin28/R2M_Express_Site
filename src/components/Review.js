import React, {useState, useEffect}from 'react'
// import ReactStars from "react-rating-stars-component";
import Stars from '../components/Stars'
import { connect } from 'react-redux'

const Review = ({name, date, city, state, subject, text, rating}) => {

    return (
        <div>
            <div class="review">
                <div class = "review-header">
                    <div>
                        <h2>{name}</h2>
                    </div>
                    <div>
                        <h4>{city}, {state}</h4>
                    </div>
                </div>
                <div class = "review-rating">
                    <div class = "review-stars">
                        <Stars rating = {rating}/>
                    </div>
                    <div>
                        <h4>{date}</h4>
                    </div>
                </div>
                <div class = "review-content">
                    <div>
                        <h2>
                            {subject}                          
                        </h2>
                    </div>
                    <div>
                        <p>
                            {text}    
                        </p>
                    </div>
                </div> 

                {/* <a href="#" class=dfdfdfdfdfdfd"header-link">Link</a> */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {})(Review)
