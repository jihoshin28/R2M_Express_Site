import React, {Component} from 'react';
import {
  Route
} from "react-router-dom"
import {connect} from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar'
import Modal from './components/Modal'

import About from './pages/About'
import AddReview from './pages/AddReview'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Items from './pages/Items'
import Reviews from './pages/Reviews'


import {getStores, signOut, getItems, selectStore, clearModal} from './actions'

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
              <Route exact path={'/contact'} render={(props) => <Contact {...props} />} />
              <Route exact path={'/gallery'} render={(props) => <Gallery {...props} />} />
              <Route exact path={'/items/:type'} render={(props) => <Items {...props} />} />
              <Route exact path={'/reviews'} render={(props) => <Reviews {...props} />} />

        </div>
        <div class = "body-wrap"></div>
        <footer className="footer">
          <div class = 'footer-curve'>
          </div> 
          <div class = 'footer-div'>
            <div className = "row footer-row">
              <div className = "col-6">
                <div className = "footer-logo">
                  <img class = "footer-icon" src=  {process.env.PUBLIC_URL + '/upack_logo.png'}></img> 
                  <h3>Upack Haulers</h3>
                </div>
              </div>
              <div className = "col-6">
                <h5>Copyright © 2021</h5>
                <h5>All rights reserved</h5>
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

export default connect(mapStateToProps, {getStores, signOut,  getItems, selectStore, clearModal})(App)
