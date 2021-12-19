import React, { Component } from 'react'
import { connect } from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class Labor extends Component {
    componentDidMount() {
        // this.props.testRoute(this.props.history)
    }
    render() {
        return (
            <div>
                <div class="header">
                    <div class = "header-margin">
                        <h1 class= "header-banner">Labor Only</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>
                <div class = "about-bg">
                    <div class = "about">
                        <div class = "about-pic">
                            <img style = {{width: '100%'}} src = {"https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/07/moving-labor.jpg"}></img>
                        </div>
                        <div class = "about-text-right">
                            <h1>
                                Labor Only
                            </h1> 
                            <p>
                            Did you know that even if you already own a truck, you can still get the help from professionals on the day of your relocation? Yes, you have read it right. To us, it is not important whether you will get a full-service package or opt for our labor movers in Bay Area. Whatever option you choose, our goal will be the same – we will do everything we can in order to help you move all of your possessions in the simplest possible manner. The only thing you will have to do is to contact Got2Move and schedule your move on the date that suits you the most. Our professionals will take care of the rest.
                            </p>
                        </div>

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

export default connect(mapStateToProps)(Labor)
