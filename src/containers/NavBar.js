import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {
        
        return ( 
            
            <nav class="navbar navbar-expand-lg navbar-expand-med navbar-expand-sm nav-bg">
            
                <div class="collapse navbar-collapse " id="navbarNav">
                    <Link class='nav-logo' to={'/'}>
                        <img class="nav-icon" src={process.env.PUBLIC_URL + '/upack_logo.png'}></img>
                    </Link>
               
                    <ul class="navbar-nav">
                        <li class="nav-item nav-list active">
                            <Link to = "/" class="nav-button">Home</Link>
                        </li>
                            
                        <li class="nav-item nav-list">
                            <Link to = "/about" class="nav-button">About Us</Link>
                        </li>
                                
                        <li class="nav-item nav-list">
                            <Link to = "/gallery" class="nav-button">Gallery</Link>
                        </li>
                        <li class="nav-item nav-list">
                            <Link to = '/reviews' class="nav-button">Reviews</Link>
                        </li>
                        <li class="nav-item nav-list">
                            <Link to = '/contact' class="nav-button">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                
                <ul class="navbar-nav nav-right-btn">
                    <li class="nav-item nav-right">    
                        <Link class= "nav-button" to='/book'>
                            Book Appointment
                        </Link>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Navbar
