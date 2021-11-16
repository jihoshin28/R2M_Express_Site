import React, {Component} from 'react';
import {
  Route,
  Router
} from "react-router-dom"
import {connect} from 'react-redux'
import './App.css';
import NavBar from './containers/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import Photos from './pages/Photos'
import Reviews from './pages/Reviews'
import Modal from './components/Modal'

import {getStores, getCategories, signOut, startCart, getActiveOrders, getItems, selectStore, clearModal} from './actions'

class App extends Component  {
  
  componentDidMount(){
    this.props.getStores()
    this.props.getItems(1)
    this.props.clearModal()
    // this.props.getActiveOrders(this.props.shopperId)
    console.log(this.props.items)
  }
  
  render (){
    return (
      <div className="App">
        <div>
            <NavBar history = {this.props.history}/>
              <Modal history = {this.props.history} modal = {this.props.modal}/>
              <Route exact path={'/'} render={(props) => <Home {...props} />}></Route> 
              <Route exact path={'/about'} render={(props) => <About {...props} />} />
              <Route exact path={'/photos'} render={(props) => <Photos {...props} />} />
              <Route exact path={'/reviews'} render={(props) => <Reviews {...props} />} />
        </div>
        <div class = "content-wrap"></div>
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
    selectedStore: state.stores.selectedStore,
    modal: state.modals
  })
}

export default connect(mapStateToProps, {getStores, getCategories, signOut, startCart, getActiveOrders, getItems, selectStore, clearModal})(App)
