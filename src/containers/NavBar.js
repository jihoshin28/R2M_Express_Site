import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../components/GoogleAuth'
import { connect } from 'react-redux'

export class Navbar extends Component {
    componentDidUpdate(prevState){
        // if(prevState.activeOrders.length != this.props.activeOrders.length){
        //     this.props.getActiveOrders(this.props.shopperId)
        // }
    }

    // renderUser = () => {
    //     if(!!this.props.signedIn){   
    //         return (
    //             <div>
    //                 <a class="nav-link">
    //                     <Link to='/profile'>
    //                         <img class="google-pic" alt="alt img" src={this.props.userAuthPic} />
    //                     </Link>
    //                 </a>
    //             </div>
    //         )
    //     }
    // }

    render() {
        
        return ( 
            
            <nav class="navbar navbar-expand-lg navbar-expand-med navbar-expand-sm nav-bg">
            
                <div class="collapse navbar-collapse " id="navbarNav">
                    <Link class='nav-logo' to={'/'}>
                        <img class="nav-icon" src={process.env.PUBLIC_URL + '/upack_logo.png'}></img>
                    </Link>
               
                    <ul class="navbar-nav">
                        <li class="nav-item nav-list active">
                            <Link to = "/" class="menu-button">Home</Link>
                        </li>
                            
                        <li class="nav-item nav-list">
                            <Link to = "/about" class="menu-button">About Us</Link>
                        </li>
                                
                        <li class="nav-item nav-list">
                            <Link to = "/pictures" class="menu-button">Pictures</Link>
                        </li>
                        <li class="nav-item nav-list">
                            <Link to = '/reviews' class="menu-button">Reviews</Link>
                        </li>
                    </ul>
                    
                    
                    
                </div>
                
                <ul class="navbar-nav nav-right-btn">
                    <li class="nav-item nav-list">    
                        <Link class= "menu-button" to='/book'>
                            Book an appointment
                        </Link>
                    </li>
                </ul>
                
                
                {/* <GoogleAuth history = {this.props.history} /> */}
                {/* <ul class="navbar-nav nav-right-btn">
                    <li class="nav-item">
                        {this.renderUser()}
                    </li>
                </ul> */}

            </nav>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        activeOrders: state.order.active_orders,
        shopperId: state.auth.currentShopper.id,
        signedIn: state.auth.signedIn,
        userAuthPic: state.auth.currentShopper.image,
        cartItems: state.cart.cart_items
    })
}

export default Navbar
