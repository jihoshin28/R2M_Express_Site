import React, { Component } from 'react'
import { connect } from 'react-redux'
// import aboutPic from '../public/logo192.png'
export class Contact extends Component {
    componentDidMount() {
        console.log(this.props.history)
    }
    render() {
        return (
            <div>
                <div class="header">
                    <div class = "header-margin">
                        <h1 class= "header-banner">Contact Us</h1>
                    </div>
                    {/* <a href="#" class="header-link">Link</a> */}
                </div>

                <div class = "contact">
                    <div class = "contact-info">
                        <h2 style = {{marginBottom: '7%'}}>Get in Touch</h2>
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                <p class= "contact-icon-text">Fremont, California, United States</p>
                            </li>

                            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                <p class= "contact-icon-text">(510) 731-6322</p>
                            </li>

                            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p class= "contact-icon-text">upackhaulers@gmail.com</p>
                            </li>
                        </ul>

                            <div class= "contact-social">
                                <a class="btn facebook " role="button"><i style = {{color: 'white', fontSize: '1.8em'}} class="fab fa-facebook-f"></i></a>
                                <a class="btn twitter" role="button"><i style = {{color: 'white', fontSize: '1.8em'}} class="fab fa-twitter"></i></a>
                                <a class="btn instagram" role="button"><i style = {{color: 'white', fontSize: '2em'}} class="fab fa-instagram"></i></a>
                            </div>
                    </div>

                    <div class = "contact-form">
                    <section class="mb-4">
                        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to reach out to us. Our team will get back to you ASAP.</p>
                        <div class="row">
                            <div class="col-md-12 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="name" name="name" class="form-control"/>
                                                <label for="name" class="">Full Name</label>
                                            </div>
                                        </div>
                                    
                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="email" name="email" class="form-control"/>
                                                <label for="email" class="">Email</label>
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
                                                <textarea type="text" id="message" name="message" rows="4" class="form-control md-textarea"></textarea>
                                                <label for="message">Your message</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class = "col-md-12">
                                            <a class="btn" style = {{backgroundColor: "rgb(130, 212, 37)"}}onclick="document.getElementById('contact-form').submit();">Send</a>
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

export default connect(mapStateToProps)(Contact)
