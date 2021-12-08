import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {
        
        return ( 
            
            <nav style = {{height: '85px'}}class="navbar navbar-expand-lg navbar-expand-med navbar-expand-sm nav-bg">
            
                <div class="collapse navbar-collapse " id="navbarNav">
                    <Link class='nav-logo' to={'/'}>
                        <img class="nav-icon" src={process.env.PUBLIC_URL + '/upack_logo.png'}></img>
                    </Link>
               
                    <ul class="navbar-nav menu">
                    
                        <li class="nav-item nav-list">
                            <Link to = '/about' class="nav-button">About Us</Link>
                        </li>
                        <li class="nav-item nav-list dropdown dropdown-6">
                            <Link class="nav-button">
                                Services
                                <ul class = "dropdown_menu dropdown_menu--animated dropdown_menu-6">
                                   
                                        <Link to = "/labor" class="dropdown-button">
                                            <li class= "dropdown_item"> 
                                                Labor Only
                                            </li>    
                                        </Link>
                                        <Link to = "/local" class="dropdown-button">
                                            <li class="dropdown_item">
                                                Local Move
                                            </li>
                                        </Link>
                                        <Link to = "/long" class="dropdown-button">
                                            <li class="dropdown_item">
                                                Long Distance
                                            </li>
                                        </Link>
                                        <Link to = "/junk" class="dropdown-button">
                                            <li class="dropdown_item">
                                                Junk Removal
                                            </li>   
                                        </Link>
                                </ul>
                            </Link>
                        </li>
                                
                        <li class="nav-item nav-list">
                            <Link to = "/gallery" class="nav-button">Gallery</Link>
                        </li>
                        <li class="nav-item nav-list">
                            <Link to = '/reviews' class="nav-button">Reviews</Link>
                        </li>
                        <li class="nav-item nav-list">
                            <Link to = '/enter_location' class="nav-button">Enter Location</Link>
                        </li>
                    </ul>
                </div>
                
                <ul class="navbar-nav nav-right-btn">
                    <li class="nav-item nav-right">    
                        <Link class= "nav-button" to='/contact'>
                            Contact Us
                        </Link>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Navbar
