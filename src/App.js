import React, {Component} from 'react';
import {
  Route,
  Link
} from "react-router-dom"
import {connect} from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar'
import Modal from './components/Modal'

import About from './pages/About'
import AddReview from './pages/AddReview'
import Book from './pages/Book'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Items from './pages/Items'
import Junk from './pages/Junk'
import Labor from './pages/Labor'
import Local from './pages/Local'
import Long from './pages/Long'
import Reviews from './pages/Reviews'


import { signOut, getItems, clearModal} from './actions'

class App extends Component  {
  
  componentDidMount(){

  }
  
  render (){
    return (
      <div className="App">
        <div>
            <NavBar history = {this.props.history}/>
              <Modal history = {this.props.history} modal = {this.props.modal}/>
              <Route exact path={'/'} render={(props) => <Home {...props} />}></Route> 
              <Route exact path={'/about'} render={(props) => <About {...props} />} />
              <Route exact path={'/add_review'} render={(props) => <AddReview {...props} />} />
              <Route exact path={'/book'} render={(props) => <Book {...props} />} />
              <Route exact path={'/contact'} render={(props) => <Contact {...props} />} />
              <Route exact path={'/gallery'} render={(props) => <Gallery {...props} />} />
              <Route exact path={'/items/:type/:id'} render={(props) => <Items {...props} />} />
              <Route exact path={'/junk'} render={(props) => <Junk {...props} />} />
              <Route exact path={'/labor'} render={(props) => <Labor {...props} />} />
              <Route exact path={'/local'} render={(props) => <Local {...props} />} />
              <Route exact path={'/long'} render={(props) => <Long {...props} />} />
              <Route exact path={'/reviews'} render={(props) => <Reviews {...props} />} />

        </div>
        <div class = "body-wrap"></div>
        <footer className="footer">
          <div class = 'footer-curve'>
          </div> 
          <div class = 'footer-div'>
            <div className = "row footer-row">
              <div className = "col-md-4 footer-section-left">
                <h1>Quick Links</h1>
                <Link className = "quick-link" to = '/'><h2>Home</h2></Link>
                <Link className = "quick-link" to = '/about'><h2>About Us</h2></Link>
                <Link className = "quick-link" to = '/'><h2>Gallery</h2></Link>
                <Link className = "quick-link" to = '/'><h2>Reviews</h2></Link>
                <Link className = "quick-link" to = '/'><h2>Contact Us</h2></Link>
              </div>
              <div className = "col-md-4 footer-section-center">
                
                <img class = "footer-icon" src=  {process.env.PUBLIC_URL + '/upack_logo.png'}></img> 
                <h1>Upack Haulers</h1>
                <h3>Copyright © 2021</h3>
                <h3>All rights reserved</h3>
              </div>
             
              <div className = "col-md-4 footer-section-right">
                <h1 style = {{marginBottom: '20px'}}>Contacts</h1>
                  <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p class= "contact-icon-text">Fremont, California, United States</p>
                    </li>

                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        <p class= "contact-icon-text">(510) 358-6351</p>
                    </li>

                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p class= "contact-icon-text">upackhaulers@gmail.com</p>
                    </li>
                </ul>
              </div>
            </div> 
          </div> 
          
        </footer>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return({
    shopperId: state.auth.currentShopper.id,
    modal: state.modals
  })
}

export default connect(mapStateToProps, { signOut,  getItems, clearModal})(App)
